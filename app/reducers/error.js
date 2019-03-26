import { ERROR } from '../actions/types';

const initialState = {
    exists: false,
    message: ''
}

export default (state = initialState, { type, ...action }) => {
    switch (type) {
        case ERROR:
            return { ...state, ...action };
        default:
            return state
    }
}