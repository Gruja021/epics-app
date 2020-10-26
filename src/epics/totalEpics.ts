import { Epic, ofType } from "redux-observable";
import { mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { getData } from "../actions";
import { of } from "rxjs";

const totalEpic: Epic = (action$) => {
  return action$.pipe(
    ofType("GET_TOTAL2"),
    switchMap((action) =>
      ajax.getJSON("https://api.covid19api.com/summary").pipe(
        mergeMap((res: any) =>
          of(getData("GET_TOTAL", res), {
            type: "TOTAL_COUNTRY",
            payload: "afghanistan",
          })
        )
      )
    )
  );
};

export default totalEpic;
