import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import indexReducer from './index';

const reducer = combineReducers({
    index: indexReducer
}) 

export default function initializeStore(state) {
  const store = createStore(
    reducer,
    // Object.assign({}, initialState, state),
    applyMiddleware(ReduxThunk)
  )
  return store
}