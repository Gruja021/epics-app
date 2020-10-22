import { ofType } from "redux-observable";
import { catchError, switchMap, mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { getError, getCountryData, getWeather } from "../actions";
import { of } from "rxjs";

export const countryEpic = (action$: any) =>
  action$.pipe(
    ofType("TOTAL_COUNTRY"),
    switchMap((action: any) =>
      ajax
        .getJSON(`https://api.covid19api.com/dayone/country/${action.payload}`)
        .pipe(
          mergeMap((res: any) =>
            of(
              getCountryData({
                country: res[res.length - 1].Country,
                confirmed: res[res.length - 1].Confirmed,
                deaths: res[res.length - 1].Deaths,
              }),
              {
                type: "WEATHER",
                payload: {
                  lat: res[res.length - 1].Lat,
                  lon: res[res.length - 1].Lon,
                },
              }
            )
          ),
          catchError(() => of(getError("Country not found!")))
        )
    )
  );

export const weatherEpic = (action$: any) =>
  action$.pipe(
    ofType("WEATHER"),
    switchMap(({ payload }) =>
      ajax
        .getJSON(
          `https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric`
        )
        .pipe(
          map((res: any) => getWeather(res.main.temp)),
          catchError(() => of(getError("Temperature not available!")))
        )
    )
  );
