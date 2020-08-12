import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import sudokuReducer from './reducer/sudokuReducer'

// const reducer = combineReducers({
//     sudokuReducer
// })

const store = createStore(sudokuReducer, applyMiddleware(thunk))

export default store