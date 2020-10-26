import React from "react";
import { useDispatch } from "react-redux";
import "./table.scss";
import { COUNTRY_EPIC } from "../actions";

function Table(props: any) {
  const dispatch = useDispatch();
  const listOfCountries = props.totalDataCountries.map((country: any) => {
    return (
      <tr
        key={country.CountryCode}
        onClick={() => dispatch({ type: COUNTRY_EPIC, payload: country.Slug })}
      >
        <td>{country.Country}</td>
        <td>{country.CountryCode}</td>
        <td>{country.NewConfirmed}</td>
        <td>{country.TotalConfirmed}</td>
        <td>{country.TotalDeaths}</td>
        <td>{country.TotalRecovered}</td>
      </tr>
    );
  });

  function handleChange(event: any) {
    props.onChange(event.target.value);
  }
  return (
    <div className="table-wrapper">
      <input type="text" placeholder="Search Country" onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Country Code</th>
            <th>New Confirmed</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>{listOfCountries}</tbody>
      </table>
    </div>
  );
}
export default Table;
