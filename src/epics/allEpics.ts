import { Epic, ofType } from "redux-observable";
import { catchError, mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { getData } from "../actions";

export const countryEpic: Epic = (action$) =>
  action$.pipe(
    ofType("TOTAL_COUNTRY"),
    mergeMap((action) =>
      ajax
        .getJSON(`https://api.covid19api.com/dayone/country/${action.payload}`)
        .pipe(
          mergeMap((res: any) =>
            of(getData("TOTAL_BY_COUNTRY", res), {
              type: "WEATHER",
              payload: {
                lat: res[res.length - 1].Lat,
                lon: res[res.length - 1].Lon,
              },
            })
          ),
          catchError(() => of(getData("ERROR", "Country not found!")))
        )
    )
  );

export const weatherEpic: Epic = (action$) =>
  action$.pipe(
    ofType("WEATHER"),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(
          `https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric`
        )
        .pipe(
          map((res: any) => getData("GET_WEATHER", res.main.temp)),
          catchError(() => of(getData("ERROR", "Temperature not available!")))
        )
    )
  );
