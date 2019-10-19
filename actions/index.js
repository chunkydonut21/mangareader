import axios from 'axios'

export const POPULAR_MANGA = 'POPULAR_MANGA'
export const ALL_MANGA = 'ALL_MANGA'
export const LATEST_MANGA = 'LATEST_MANGA'
export const BY_STATUS = 'BY_STATUS'
export const BY_CATEGORY = 'BY_CATEGORY'
export const SINGLE_MANGA = 'SINGLE_MANGA'
export const CHAPTER_LIST = 'CHAPTER_LIST'
export const MANGA_BY_CATEGORY = 'MANGA_BY_CATEGORY'

export const fetchPopularManga = (req, page) => async dispatch => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

    const res = await axios.get(`${baseUrl}/api/manga/popular/${page}`)
    dispatch({ type: POPULAR_MANGA, payload: res.data })
}

export const fetchLatestManga = (req, page) => async dispatch => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

    const res = await axios.get(`${baseUrl}/api/manga/latest/${page}`)
    dispatch({ type: LATEST_MANGA, payload: res.data })
}

export const fetchMangaByCategory = (req, category, page) => async dispatch => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

    const res = await axios.get(`${baseUrl}/api/manga/category/${category}/${page}`)
    dispatch({ type: MANGA_BY_CATEGORY, payload: res.data })
}

export const getSingleManga = (req, manga) => async dispatch => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await axios.get(`${baseUrl}/api/manga/single/${manga}/`)
    dispatch({ type: SINGLE_MANGA, payload: res.data })
}
