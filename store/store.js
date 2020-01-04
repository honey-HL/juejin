import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import goldReducer from './gold';

const reducer = combineReducers({
    gold: goldReducer
}) 

export default function initializeStore(state) {
  const store = createStore(
    reducer,
    // Object.assign({}, defaultState, state),
    applyMiddleware(ReduxThunk)
  )
  return store
}