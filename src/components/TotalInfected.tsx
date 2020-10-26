import React from "react";
import "./totalInfected.scss"

function TotalInfected(props: any) {
  return(
    <div className="totalInfected">
      <span>Total infected in the world: {props.total}</span>
      {props.country ? <><span>Country: {props.country}</span>
        <span>Total cases: {props.cases}</span></> : null}
    </div>
  );
}
export default TotalInfected;