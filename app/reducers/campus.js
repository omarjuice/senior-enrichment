import faker from 'faker'
const initialState = {
    offset: 3,
    data: [
        {
            name: 'INITIAL Baruch',
            imageUrl: faker.image.image(),
            address: '46576857968op90[9',
            description: faker.lorem.paragraph(),
        },
        {
            name: 'INITIAL Harvard',
            imageUrl: faker.image.image(),
            address: 'orhwp;fe[9',
            description: faker.lorem.paragraph(),
        },
        {
            name: 'INITIAL NYU',
            imageUrl: faker.image.image(),
            address: '4657685o280p9ufwkne;c7968op90[9',
            description: faker.lorem.paragraph(),
        },
    ]
}
const CAMPUS = 'CAMPUS'

export default (state = initialState, action) => {
    switch (action.type) {
        case CAMPUS:
            return { ...state, offset: action.offset, campuses: action.campuses };
        default:
            return state
    }
}