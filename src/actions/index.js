export const FETCH_COLORS = 'FETCH_COLORS'
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS'
export const FETCH_COLORS_FAILED = 'FETCH_COLORS_FAILED'

export const fetchingColors = page => ({
    type: FETCH_COLORS,
    page
})

export const receiveColors = (colors, page, totalPages) => ({
    type      : FETCH_COLORS_SUCCESS,
    colors    : colors,
    receivedAt: Date.now(),
    page,
    totalPages
})

export const receiveColorsFailed = (page, error) => ({
    type: FETCH_COLORS_FAILED,
    error,
    page
})

const wait = (value, timeout) => new Promise(resolve => setTimeout(() => resolve(value), timeout))

export const fetchColors = page => dispatch => new Promise(resolve => {
    dispatch(fetchingColors(page))
    wait(`https://reqres.in/api/colors/?page=${page}&per_page=25`, 3000)
        .then(fetch)
        .then(response => response.ok ? response.json() : Promise.reject(response.text()))
        .then(({ page, data, total_pages }) => dispatch(receiveColors(data, page, total_pages)))
        .catch(error => dispatch(receiveColorsFailed(page, error)))
        .then(resolve)
})