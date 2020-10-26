import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import TotalInfected from "./components/TotalInfected";
import Table from "./components/Table";
import totalInfectedAction from "./actions/totalInfectedActions"

let totalCopy: any;

function App() {
  const total = useSelector((state: any) => state);
  const dispatch = useDispatch();

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
    <TotalInfected
      total={total.mainReducer.totalData.Global ? total.mainReducer.totalData.Global.TotalConfirmed : null} 
      country={total.mainReducer.byCountry[0] ? total.mainReducer.byCountry[0].Country : null}
      cases={total.mainReducer.byCountry[0] ? total.mainReducer.byCountry[0].Cases : null}
    />
    <Table totalDataCountries={total.mainReducer.totalData.Countries ? total.mainReducer.totalData.Countries : []} onChange={handleChange}/>
  </div>;
}

export default App;
