export const LOAD_TOTAL_DATA = "LOAD_TOTAL_DATA";
export const LOAD_TOTAL_BY_COUNTRY = "LOAD_TOTAL_BY_COUNTRY";
export const LOAD_WEATHER = "LOAD_WEATHER";
export const LOAD_ERROR = "LOAD_ERROR";

export const TOTAL_EPIC = "TOTAL_EPIC";
export const COUNTRY_EPIC = "COUNTRY_EPIC";
export const WEATHER_EPIC = "WEATHER_EPIC";
// export const GET_WEATHER = "GET_WEATHER";
// export const FETCH_WEATHER = "FETCH_WEATHER";

export const setData = (type: string, payload: any) => ({ type, payload });
