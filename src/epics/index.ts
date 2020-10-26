import { combineEpics } from "redux-observable";

import totalEpic from "./totalEpics";
import totalByCountry from "./totalByCountry";

export const rootEpic = combineEpics(totalEpic, totalByCountry);
