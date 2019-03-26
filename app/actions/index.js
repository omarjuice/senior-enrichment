import axios from 'axios'
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
export const getCampuses = () => dispatch => {
    dispatch(actions.loading(true))
    axios.get('/api/campuses')
        .then(({ data }) => {
            dispatch(actions.campuses(data))
            dispatch(actions.loading(false))
        })
        .catch(() => {
            dispatch(actions.error(true, 'Could not get the campuses'))
            dispatch(actions.loading(false))
        })
}
export const getStudents = () => dispatch => {
    dispatch(actions.loading(true))
    axios.get('/api/students')
        .then(({ data }) => {
            dispatch(actions.students(data))
            dispatch(actions.loading(false))
        }).catch(() => {
            console.log('ERROR');
            dispatch(actions.error(true, 'Could not get the students'))
            dispatch(actions.loading(false))
        })
}