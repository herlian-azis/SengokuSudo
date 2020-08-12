let myUrl = `https://sugoku.pinokio.xyz`
const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
const encodeParams = (params) =>
    Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');



//set
export const setSudoku = (val) => {
    return async dispatch => {
        let resp = await fetch(`${myUrl}/board?difficulty=${val}`)
        let data = await resp.json()
        return await dispatch({ type: "SET_SUDOKU", payload: data })
    }
}

//solved
export const setSudokuSolve = (sudoku) => {
    return async dispatch => {
        let resp = await fetch(`${myUrl}/solve`, {
            method: 'POST',
            body: encodeParams(sudoku),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        let data = await resp.json()
        return await dispatch({ type: "SET_SUDOKU_SOLVE", payload: {board:data.solution} })
    }
}

//Validate
export const setSudokuValidate = (sudoku) => {
    return async dispatch => {
        let resp = await fetch(`${myUrl}/validate`, {
            method: 'POST',
            body: encodeParams(sudoku),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        let data = await resp.json()
        return await dispatch({ type: "SET_SUDOKU_VALIDATE", payload: data.status })
    }
}

//grade

export const setSudokuGrade = (sudoku) => {
    return async dispatch => {
        let resp = await fetch(`${myUrl}/grade`, {
            method: "POST",
            body: encodeParams({ board: sudoku }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        let data = await resp.json()
        return await dispatch({ type: "SET_SUDOKU_GRADE", payload: data })
    }
}