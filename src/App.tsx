import React, { useEffect } from "react";
import "./App.scss";
import TotalInfected from "./components/TotalInfected";
import Table from "./components/Table";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./actions";
import { LOAD_TOTAL_DATA, TOTAL_EPIC } from "./actions";

let totalCopy: any;

function App() {
  const dispatch = useDispatch();
  const total = useSelector((state: any) => state.mainReducer);

  useEffect(() => {
    dispatch({ type: TOTAL_EPIC });
  }, [dispatch]);

  function handleChange(event: string) {
    if (total.totalData.Global && !totalCopy) {
      totalCopy = JSON.parse(JSON.stringify(total));
    }
    total.totalData.Countries = totalCopy.totalData.Countries.filter(
      (country: any) => country.Country.toLowerCase().includes(event)
    );
    dispatch(setData(LOAD_TOTAL_DATA, total.totalData));
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
      {total.error && <div className="error">{total.error}</div>}
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
