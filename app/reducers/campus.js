import faker from 'faker'
import { CAMPUSES } from '../actions/types';

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
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CAMPUSES:
            return { ...state, offset: action.offset, data: action.data };
        default:
            return state
    }
}