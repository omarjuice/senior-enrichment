import {
    CAMPUSES,
    STUDENTS,
    ERROR,
    LOADING,
    SINGLE_CAMPUS,
    SINGLE_STUDENT,
    MODAL
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
    }),
    singleStudent: (student) => ({
        type: SINGLE_STUDENT,
        student
    }),
    singleCampus: (campus) => ({
        type: SINGLE_CAMPUS,
        campus,
    }),
    modal: (active, message, confimationCallback) => ({
        type: MODAL,
        active, message, confimationCallback
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
export const getSingleCampus = id => (dispatch, _, { axios }) => {
    dispatch(actions.loading(true))
    axios.get(`/api/campuses/` + id)
        .then(({ data }) => {
            dispatch(actions.singleCampus(data))
            dispatch(actions.loading(false))
        }).catch(() => {
            dispatch(actions.error(true, 'Could not find that campus'))
            dispatch(actions.loading(false))
        })
}
export const getSingleStudent = id => (dispatch, _, { axios }) => {
    dispatch(actions.loading(true))
    axios.get(`/api/students/` + id)
        .then(({ data }) => {
            dispatch(actions.singleStudent(data))
            dispatch(actions.loading(false))
        }).catch((e) => {
            console.log(e)
            dispatch(actions.error(true, 'Could not find that student'))
            dispatch(actions.loading(false))
        })
}
export const setModal = (active, message, confimationCallback) => actions.modal(active, message, confimationCallback)
export const setError = (exists, message) => actions.error(exists, message)