import { CAMPUSES, SINGLE_CAMPUS, DELETE_CAMPUS, ADD_CAMPUS, UPDATE_CAMPUS, RECENT_CAMPUSES } from '../actions/types';

const initialState = {
    offset: 0,
    data: [],
    selectedCampus: {},
    recent: []
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
            return {
                ...state,
                data: state.data.filter(({ id }) => id !== action.id),
                recent: state.recent.filter(({ id }) => id !== action.id)
            };
        case ADD_CAMPUS:
            return { ...state, selectedCampus: action.campus };
        case UPDATE_CAMPUS:
            const campuses = state.data.map(campus => {
                if (campus.id === action.campus.id) {
                    campus = { ...campus, ...action.campus }
                }
                return campus
            })
            return { ...state, data: campuses, selectedCampus: { ...state.selectedCampus, ...action.campus } };
        case RECENT_CAMPUSES:
            return { ...state, recent: action.campuses }
        default:
            return state
    }
}