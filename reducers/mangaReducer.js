import { POPULAR_MANGA, ALL_MANGA, LATEST_MANGA, MANGA_BY_CATEGORY, SINGLE_MANGA } from '../actions/index'

export const INITIAL_STATE = {
    popular: null,
    all: null,
    latest: null,
    mangaByCategory: null,
    singleManga: null
}
// REDUCERS
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POPULAR_MANGA:
            return { ...state, popular: action.payload }
        case LATEST_MANGA:
            return { ...state, latest: action.payload }
        case MANGA_BY_CATEGORY:
            return { ...state, mangaByCategory: action.payload }
        case SINGLE_MANGA:
            return { ...state, singleManga: action.payload }
        case ALL_MANGA:
            return { ...state, all: action.payload }
        default:
            return state
    }
}

console.log(INITIAL_STATE)
