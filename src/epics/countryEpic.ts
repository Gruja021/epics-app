import { Epic, ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import {
  setData,
  LOAD_TOTAL_BY_COUNTRY,
  WEATHER_EPIC,
  LOAD_ERROR,
  COUNTRY_EPIC,
} from "../actions";

const countryEpic: Epic = (action$) =>
  action$.pipe(
    ofType(COUNTRY_EPIC),
    mergeMap((action) =>
      ajax
        .getJSON(`https://api.covid19api.com/dayone/country/${action.payload}`)
        .pipe(
          mergeMap((res: any) =>
            of(setData(LOAD_TOTAL_BY_COUNTRY, res), {
              type: WEATHER_EPIC,
              payload: {
                lat: res[res.length - 1].Lat,
                lon: res[res.length - 1].Lon,
              },
            })
          ),
          catchError(() =>
            of(setData(LOAD_ERROR, "Data for this country not found!"))
          )
        )
    )
  );

export default countryEpic;
