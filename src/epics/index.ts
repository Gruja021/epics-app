import { combineEpics } from "redux-observable";
import { countryEpic, weatherEpic } from "./allEpics";
import totalEpic from "./totalEpics";

export const rootEpic = combineEpics(totalEpic, countryEpic, weatherEpic);
