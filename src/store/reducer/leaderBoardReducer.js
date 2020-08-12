const initState = {
    leaders: [],
}

const Leaders = (state = initState, action) => {
    switch (action.type) {
        case "SET_SUDOKU":
            return {
                ...state,
                 leaders: state.leaders.concat(action.payload)
            }

        default:
        return state
    }
}
export default Leaders