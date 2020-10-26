export const GET_TOTAL = "GET_TOTAL";
export const TOTAL_BY_COUNTRY = "TOTAL_BY_COUNTRY";
export const GET_WEATHER = "GET_WEATHER";
export const ERROR = "ERROR";

export const TOTAL_EPIC = "TOTAL_EPIC";
export const COUNTRY_EPIC = "COUNTRY_EPIC";
export const WEATHER_EPIC = "WEATHER_EPIC";

export const getData = (type: string, payload: any) => ({ type, payload });
