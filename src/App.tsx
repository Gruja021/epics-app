import React, { useEffect } from "react";
import "./App.scss";
import { State } from "./reducers/mainReducer";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const error = useSelector((state: State) => state.mainReducer.error);
  const confirmed = useSelector((state: State) => state.mainReducer.confirmed);
  const deaths = useSelector((state: State) => state.mainReducer.deaths);
  const temp = useSelector((state: State) => state.mainReducer.temp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [dispatch]);

  return (
    <>
      {/* { This is just to see if everything's ok. Will be changed! } */}
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
    </>
  );
}

export default App;
