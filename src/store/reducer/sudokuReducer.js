const initState = {
    defaultBoard: [],
    board: [],
    solution:[],
    status:null,
    grade:null
}

const sudoku = (state = initState, action) => {
    switch (action.type) {
        case "SET_SUDOKU":
            return {
                ...state,
                 defaultBoard: action.payload
            }
        case "SET_SUDOKU_SOLVE":
            return {
                ...state,
                solution: action.payload
            }
        case "SET_SUDOKU_VALIDATE":
            return {
                ...state,
                status: action.payload
            }
        case "SET_SUDOKU_GRADE":
            return {
                ...state,
                grade: action.payload
            }

        default:
        return state
    }
}
export default sudoku