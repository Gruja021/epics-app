import React from "react";
import "./totalInfected.scss";

function TotalInfected(props: {
  total: number;
  country: string;
  cases: number;
  temp: number;
}) {
  return (
    <div className="totalInfected">
      <span>Total infected in the world: {props.total}</span>
      {props.country ? (
        <>
          <span>Country: {props.country}</span>
          <span>Total cases: {props.cases}</span>
          <span>
            Temperature: {Math.round(props.temp)}
            <sup>&#x2103;</sup>
          </span>
        </>
      ) : null}
    </div>
  );
}
export default TotalInfected;
