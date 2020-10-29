import {
  LOAD_ERROR,
  LOAD_TOTAL_DATA,
  LOAD_WEATHER,
  LOAD_TOTAL_BY_COUNTRY,
} from "../actions";

const initialState = {
  error: null,
  temp: undefined,
  totalData: {
    Global: {},
    Countries: [],
  },
  byCountry: [],
};

const mainReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case LOAD_TOTAL_DATA:
      return {
        ...state,
        totalData: action.payload,
        error: null,
      };
    case LOAD_TOTAL_BY_COUNTRY:
      return {
        ...state,
        byCountry: action.payload,
        error: null,
      };
    case LOAD_ERROR:
      return { ...state, error: action.payload };
    case LOAD_WEATHER:
      return { ...state, temp: action.payload, error: null };
    default:
      return state;
  }
};

export default mainReducer;
