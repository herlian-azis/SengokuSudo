export const setLeader = (val) => {
    console.log(val)
    return async dispatch => {
        return await dispatch({ type: "SET_LEADER", payload: val })
    }
}