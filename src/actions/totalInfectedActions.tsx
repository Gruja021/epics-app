const totalInfectedAction = (total: any) => {
  return{
    type: "GET_TOTAL",
    payload: total
  }
}
export default totalInfectedAction;