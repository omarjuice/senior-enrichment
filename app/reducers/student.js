import faker from 'faker'
import { STUDENTS, SINGLE_STUDENT, DELETE_STUDENT, ADD_STUDENT } from '../actions/types';
const initialState = {
    offset: 9,
    data: ([]
        //     Array(9).fill('x').map((_, i) => {
        //     return {
        //         id: i + 1,
        //         firstName: faker.name.firstName(),
        //         lastName: 'INITIAL',
        //         email: faker.internet.email(),
        //         imageUrl: faker.image.avatar(),
        //         gpa: Number(String(Math.random() * 4).slice(0, 3)),
        //         campusId: i % 3 + 1
        //     }
        // })
    ),
    selectedStudent: {}
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
            return { ...state, data: state.data.filter(({ id }) => id !== action.id) };
        case ADD_STUDENT:
            return { ...state, selectedStudent: action.student }
        default:
            return state
    }
}