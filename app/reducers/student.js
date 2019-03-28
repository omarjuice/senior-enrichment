import { STUDENTS, SINGLE_STUDENT, DELETE_STUDENT, ADD_STUDENT, UPDATE_STUDENT, RECENT_STUDENTS } from '../actions/types';
const initialState = {
    offset: 0,
    data: ([]
    ),
    selectedStudent: {},
    recent: []
}



export default (state = initialState, action) => {
    switch (action.type) {
        case STUDENTS:
            return { ...state, offset: action.offset, data: [...state.data, ...action.data] }
        case SINGLE_STUDENT:
            const includesStudent = state.data.filter(student => student.id === action.student.id).length > 0
            const data = includesStudent ?
                state.data.map(student => {
                    if (student.id === action.student.id) {
                        student = action.student
                    }
                    return student
                }) : [...state.data, action.student].sort((a, b) => a.id > b.id)
            return { ...state, data, selectedStudent: action.student }
        case DELETE_STUDENT:
            return {
                ...state,
                data: state.data.filter(({ id }) => id !== action.id),
                recent: state.recent.filter(({ id }) => id !== action.id)
            };
        case ADD_STUDENT:
            return { ...state, selectedStudent: action.student };
        case UPDATE_STUDENT:
            const students = state.data.map(student => {
                if (student.id === action.student.id) {
                    student = { ...student, ...action.student }
                }
                return student
            })
            return { ...state, data: students, selectedStudent: { ...state.selectedStudent, ...action.student } };
        case RECENT_STUDENTS:
            return { ...state, recent: action.students }
        default:
            return state
    }
}