import { Epic, ofType } from "redux-observable";
import { mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { getData, GET_TOTAL, TOTAL_EPIC, COUNTRY_EPIC } from "../actions";
import { of } from "rxjs";

const totalEpic: Epic = (action$) => {
  return action$.pipe(
    ofType(TOTAL_EPIC),
    switchMap((action) =>
      ajax.getJSON("https://api.covid19api.com/summary").pipe(
        mergeMap((res: any) =>
          of(getData(GET_TOTAL, res), {
            type: COUNTRY_EPIC,
            payload: "afghanistan",
          })
        )
      )
    )
  );
};

export default totalEpic;
