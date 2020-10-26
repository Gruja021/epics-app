interface Data {
  confirmed: number | null;
  deaths: number | null;
  error: string | null;
  temp: number | undefined;
  totalData: Object;
  byCountry: Object;
}

export interface State {
  mainReducer: Data;
}

const initialState: Data = {
  confirmed: null,
  deaths: null,
  error: null,
  temp: undefined,
  totalData: {},
  byCountry: {}
};

const mainReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "COUNTRY":
      return {
        ...state,
        confirmed: action.payload.confirmed,
        deaths: action.payload.deaths,
      };
    case "ERROR":
      return { ...state, error: action.payload };
    case "GET_WEATHER":
      return { ...state, temp: action.payload };
  
    case "GET_TOTAL":
        return {
            ...state,
            totalData: action.payload
        }
        case "TOTAL_BY_COUNTRY":
        return {
            ...state,
            byCountry: action.payload
        }
    default:
        return state
  }
};

export default mainReducer;
