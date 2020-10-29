import { Epic, ofType } from "redux-observable";
import { mergeMap, switchMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  setData,
  LOAD_TOTAL_DATA,
  TOTAL_EPIC,
  COUNTRY_EPIC,
  LOAD_ERROR,
} from "../actions";
import { of } from "rxjs";

const totalEpic: Epic = (action$) => {
  return action$.pipe(
    ofType(TOTAL_EPIC),
    switchMap((action) =>
      ajax.getJSON("https://api.covid19api.com/summary").pipe(
        mergeMap((res: any) =>
          of(setData(LOAD_TOTAL_DATA, res), {
            type: COUNTRY_EPIC,
            payload: "afghanistan",
          })
        ),
        catchError(() => of(setData(LOAD_ERROR, "Data not found!")))
      )
    )
  );
};

export default totalEpic;
