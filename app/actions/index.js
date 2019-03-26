import {
    CAMPUSES,
    STUDENTS,
    ERROR,
    LOADING
} from './types'

const actions = {
    campuses: ({ offset, data }) => ({
        type: CAMPUSES,
        offset,
        data
    }),
    students: ({ offset, data }) => ({
        type: STUDENTS,
        offset,
        data
    }),
    error: (exists, message = 'There was an error') => ({
        type: ERROR,
        exists,
        message
    }),
    loading: (isLoading = false) => ({
        type: LOADING,
        isLoading
    })
}
export const getCampuses = (offset = 0, limit = 5, callback) => (dispatch, _, { axios }) => {
    dispatch(actions.loading(true))
    axios.get(`/api/campuses?offset=${offset}&limit=${limit}`)
        .then(({ data }) => {
            dispatch(actions.campuses(data))
            dispatch(actions.loading(false))
            if (callback) callback()
        })
        .catch(() => {
            dispatch(actions.error(true, 'Could not get the campuses'))
            dispatch(actions.loading(false))
        })
}
export const getStudents = (offset = 0, limit = 5, callback) => (dispatch, _, { axios }) => {
    dispatch(actions.loading(true))
    axios.get(`/api/students?offset=${offset}&limit=${limit}`)
        .then(({ data }) => {
            dispatch(actions.students(data))
            dispatch(actions.loading(false))
            if (callback) callback()
        }).catch(() => {
            dispatch(actions.error(true, 'Could not get the students'))
            dispatch(actions.loading(false))
        })
}
export const setError = (exists, message) => actions.error(exists, message)