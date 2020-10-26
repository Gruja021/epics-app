import { combineEpics } from "redux-observable";
import { countryEpic, weatherEpic } from "./allEpics";
import totalEpic from "./totalEpics";
import totalByCountry from "./totalByCountry";

export const rootEpic = combineEpics(totalEpic, totalByCountry, countryEpic, weatherEpic);
