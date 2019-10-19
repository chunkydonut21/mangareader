import { combineReducers } from 'redux'
import mangaReducer from './mangaReducer'

export default combineReducers({
    manga: mangaReducer
})
