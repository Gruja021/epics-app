export const getCountryData = (payload: {
  country: string;
  confirmed: number;
  deaths: number;
}) => ({
  type: "COUNTRY",
  payload,
});

export const getError = (payload: string) => ({
  type: "ERROR",
  payload,
});

export const getWeather = (payload: number) => ({
  type: "GET_WEATHER",
  payload,
});
