import {CREATE_STREAM, LIST_STREAMS, SHOW_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case SHOW_STREAM: 
            return {...state, [action.payload.id]: action.payload}
        case LIST_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case DELETE_STREAM:
            return _.omit(state, [action.payload])
        default: 
            return state 
    }
}