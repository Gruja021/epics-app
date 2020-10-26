interface Data {
  error: string | null;
  temp: number | undefined;
  totalData: Total;
  byCountry: [];
}

interface Total {
  Global: {};
  Countries: [];
}

export interface State {
  mainReducer: Data;
}

const initialState: Data = {
  error: null,
  temp: undefined,
  totalData: {
    Global: {
      TotalConfirmed: 0,
    },
    Countries: [],
  },
  byCountry: [],
};

const mainReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  console.log(action);

  switch (action.type) {
    case "GET_TOTAL":
      return {
        ...state,
        totalData: action.payload,
      };
    case "TOTAL_BY_COUNTRY":
      return {
        ...state,
        byCountry: action.payload,
      };
    case "ERROR":
      return { ...state, error: action.payload };
    case "GET_WEATHER":
      return { ...state, temp: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
