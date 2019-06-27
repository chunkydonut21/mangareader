import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initializeStore = (initialState = []) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))
}
