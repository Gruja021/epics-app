import React, { useEffect } from "react";
import "./App.scss";
import { State } from "./reducers/mainReducer";

import TotalInfected from "./components/TotalInfected";
import Table from "./components/Table";
// import totalInfectedAction from "./actions/totalInfectedActions";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./actions";

let totalCopy: any;

function App() {
  const dispatch = useDispatch();
  const total = useSelector((state: any) => state.mainReducer);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL2" });
  }, [dispatch]);

  function handleChange(event: string) {
    if (total.totalData.Global && !totalCopy) {
      totalCopy = JSON.parse(JSON.stringify(total));
    }
    total.totalData.Countries = totalCopy.totalData.Countries.filter(
      (country: any) => country.Country.toLowerCase().includes(event)
    );
    // dispatch(totalInfectedAction(total.totalData));
    dispatch(getData("GET_TOTAL", total.totalData));
  }

  return (
    <div className="App">
      <TotalInfected
        total={
          total.totalData.Global ? total.totalData.Global.TotalConfirmed : null
        }
        country={total.byCountry[0] ? total.byCountry[0].Country : null}
        cases={
          total.byCountry[0]
            ? total.byCountry[total.byCountry.length - 1].Confirmed
            : null
        }
        temp={total.temp}
      />
      <Table
        totalDataCountries={
          total.totalData.Countries ? total.totalData.Countries : []
        }
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
