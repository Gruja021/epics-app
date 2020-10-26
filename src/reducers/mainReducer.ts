const initialState = {
  totalData: {},
  byCountry: {}
};

const mainReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
    switch(action.type){
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
