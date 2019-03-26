import faker from 'faker'
import { STUDENTS } from '../actions/types';
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
    )
}



export default (state = initialState, action) => {
    switch (action.type) {
        case STUDENTS:
            return { ...state, offset: action.offset, data: [...state.data, ...action.data] }
        default:
            return state
    }
}