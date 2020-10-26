import { combineEpics } from "redux-observable";
import countryEpic from "./countryEpic";
import weatherEpic from "./weatherEpic";
import totalEpic from "./totalEpics";

export const rootEpic = combineEpics(totalEpic, countryEpic, weatherEpic);
