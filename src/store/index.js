import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import sudokuReducer from './reducer/sudokuReducer'
import leaderBoardReducer from './reducer/leaderBoardReducer'

const reducer = combineReducers({
    sudokuReducer,
    leaderBoardReducer
})

const store = createStore(sudokuReducer, applyMiddleware(thunk))

export default store