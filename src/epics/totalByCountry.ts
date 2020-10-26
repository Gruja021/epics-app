import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import infectedByCountry from "../actions/infectedByCountry";

function totalByCountry(action$: any) {
  return action$.pipe(
    ofType('TOTAL_BY_COUNTRY2'),
    mergeMap((action: any) => ajax
      .getJSON(`https://api.covid19api.com/country/${action.payload}/status/confirmed/live?from=2020-10-22T00:00:00Z&to=2020-10-23T00:00:00Z`)
      .pipe(map((res: any) => {
        console.log(res)
        return infectedByCountry(res)
      }
      ))
    )
  );
}

export default totalByCountry;