import { combineReducers } from 'redux'
import { FETCH_COLORS, FETCH_COLORS_FAILED, FETCH_COLORS_SUCCESS } from '../actions'

const init = { 
    page      : 1, 
    colors    : [], 
    error     : '', 
    isFetching: false
}

const when = (pattern) => (state = init, {type, ...payload}) => 
    pattern[type] ? pattern[type](state, payload) : state

const colors = when({ 
    [FETCH_COLORS]        : (state, {page}) => ({...state, page, error: '', isFetching: true}),
    [FETCH_COLORS_SUCCESS]: (state, {colors, page}) => ({...state, page, colors, isFetching: false}),
    [FETCH_COLORS_FAILED] : (state, { page, error }) => ({...state, page, error})
})

export default combineReducers({ colors })