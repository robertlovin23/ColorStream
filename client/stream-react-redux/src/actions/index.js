import { SIGN_IN, SIGN_OUT,CREATE_STREAM,LIST_STREAMS, SHOW_STREAM, EDIT_STREAM, DELETE_STREAM } from './types'
import server from '../apis/server'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await server.post('/streams', {...formValues, userId})
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const listStreams = () => async (dispatch) => {
    const response = await server.get('/streams')
    dispatch({
        type: LIST_STREAMS,
        payload: response.data
    })
}

export const showStream = (id) => async (dispatch) => {
    const response = await server.get(`/streams/${id}`)
    dispatch({
        type: SHOW_STREAM,
        payload: response.data
    })
}

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await server.patch(`/streams/${id}`, formValues)
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
    await server.delete(`/streams/${id}`)
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push('/')
}