import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import goldReducer from './gold';
import githubReducer from './github'
import defaultState from './github'

const reducer = combineReducers({
    gold: goldReducer,
    github: githubReducer
}) 


// export default store = createStore(
//   reducer,
//   // Object.assign({}, defaultState, state),
//   applyMiddleware(ReduxThunk)
// )

export default function initializeStore(state) {
  const store = createStore(
    reducer,
    Object.assign({}, defaultState, state),
    applyMiddleware(ReduxThunk)
  )
  return store
}