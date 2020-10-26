import React, { useEffect } from "react";
import "./App.scss";
import { State } from "./reducers/mainReducer";

import TotalInfected from "./components/TotalInfected";
import Table from "./components/Table";
import totalInfectedAction from "./actions/totalInfectedActions"
import { useSelector, useDispatch } from "react-redux";


let totalCopy: any;

function App() {
  const error = useSelector((state: State) => state.mainReducer.error);
  const confirmed = useSelector((state: State) => state.mainReducer.confirmed);
  const deaths = useSelector((state: State) => state.mainReducer.deaths);
  const temp = useSelector((state: State) => state.mainReducer.temp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [dispatch]);
  
  const total = useSelector((state: any) => state);
  useEffect(() => {
    dispatch({type: 'GET_TOTAL2'})
  }, [])

  function handleChange(event: string) {
    if (total.mainReducer.totalData.Global && !totalCopy) {
      totalCopy = JSON.parse(JSON.stringify(total));
    }
    total.mainReducer.totalData.Countries = totalCopy.mainReducer.totalData.Countries.filter((country: any) => country.Country.toLowerCase().includes(event));
    dispatch(totalInfectedAction(total.mainReducer.totalData));
  }

  return <div className="App">
    <div>{error && error}</div>
      <div>{confirmed && confirmed}</div>
      <div>{deaths && deaths}</div>
      <div>temp: {temp}</div>
      <button
        onClick={() => dispatch({ type: "TOTAL_COUNTRY", payload: "Serbia" })}
      >
        Serbia
      </button>
      <button
        onClick={() => dispatch({ type: "TOTAL_COUNTRY", payload: "Denmark" })}
      >
        Denmark
      </button>
      <button
        onClick={() => dispatch({ type: "TOTAL_COUNTRY", payload: "France" })}
      >
        France
      </button>
    <TotalInfected
      total={total.mainReducer.totalData.Global ? total.mainReducer.totalData.Global.TotalConfirmed : null} 
      country={total.mainReducer.byCountry[0] ? total.mainReducer.byCountry[0].Country : null}
      cases={total.mainReducer.byCountry[0] ? total.mainReducer.byCountry[0].Cases : null}
    />
    <Table totalDataCountries={total.mainReducer.totalData.Countries ? total.mainReducer.totalData.Countries : []} onChange={handleChange}/>
  </div>;
}

export default App;
