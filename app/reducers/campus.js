import faker from 'faker'
import { CAMPUSES, SINGLE_CAMPUS, DELETE_CAMPUS, ADD_CAMPUS } from '../actions/types';

const initialState = {
    offset: 0,
    data: [
        // {
        //     name: 'INITIAL Baruch',
        //     imageUrl: faker.image.image(),
        //     address: '46576857968op90[9',
        //     description: faker.lorem.paragraph(),
        // },
        // {
        //     name: 'INITIAL Harvard',
        //     imageUrl: faker.image.image(),
        //     address: 'orhwp;fe[9',
        //     description: faker.lorem.paragraph(),
        // },
        // {
        //     name: 'INITIAL NYU',
        //     imageUrl: faker.image.image(),
        //     address: '4657685o280p9ufwkne;c7968op90[9',
        //     description: faker.lorem.paragraph(),
        // },
    ],
    selectedCampus: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CAMPUSES:
            return { ...state, offset: action.offset, data: [...state.data, ...action.data] };
        case SINGLE_CAMPUS:
            const includesCampus = state.data.filter(campus => campus.id === action.campus.id).length > 0
            const data = includesCampus ?
                state.data.map(campus => {
                    if (campus.id === action.campus.id) {
                        campus = action.campus
                    }
                    return campus
                }) : [...state.data, action.campus].sort((a, b) => a.id > b.id)
            return { ...state, data, selectedCampus: action.campus }
        case DELETE_CAMPUS:
            return { ...state, data: state.data.filter(({ id }) => id !== action.id) };
        case ADD_CAMPUS:
            return { ...state, selectedCampus: action.campus }
        default:
            return state
    }
}