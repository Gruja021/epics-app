const infectedByCountry = (total: any) => {
  return{
    type: "TOTAL_BY_COUNTRY",
    payload: total
  }
}
export default infectedByCountry;