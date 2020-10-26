import { ERROR, GET_TOTAL, GET_WEATHER, TOTAL_BY_COUNTRY } from "../actions";

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
    case GET_TOTAL:
      return {
        ...state,
        totalData: action.payload,
      };
    case TOTAL_BY_COUNTRY:
      return {
        ...state,
        byCountry: action.payload,
      };
    case ERROR:
      return { ...state, error: action.payload };
    case GET_WEATHER:
      return { ...state, temp: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
