import { Epic, ofType } from "redux-observable";
import { catchError, mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { getData, WEATHER_EPIC, GET_WEATHER, ERROR } from "../actions";

const weatherEpic: Epic = (action$) =>
  action$.pipe(
    ofType(WEATHER_EPIC),
    mergeMap(({ payload }) =>
      ajax
        .getJSON(
          `https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric`
        )
        .pipe(
          map((res: any) => getData(GET_WEATHER, res.main.temp)),
          catchError(() => of(getData(ERROR, "Temperature not available!")))
        )
    )
  );

export default weatherEpic;
