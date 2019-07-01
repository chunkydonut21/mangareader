import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/index'

export const initializeStore = (initialState = {}) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))
}
