import faker from 'faker'
const initialState = {
    offset: 3,
    data: [
        {
            name: 'INITIAL Baruch',
            imageUrl: faker.image.city(),
            address: '46576857968op90[9',
            description: 'LONG TEXT',
        },
        {
            name: 'INITIAL Harvard',
            imageUrl: faker.image.city(),
            address: 'orhwp;fe[9',
            description: 'LONG TEXT',
        },
        {
            name: 'INITIAL NYU',
            imageUrl: faker.image.city(),
            address: '4657685o280p9ufwkne;c7968op90[9',
            description: 'LONG TEXT',
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