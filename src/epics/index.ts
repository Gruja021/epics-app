import { combineEpics } from "redux-observable";
import { countryEpic, weatherEpic } from "./allEpics";

export const rootEpic = combineEpics(countryEpic, weatherEpic);
