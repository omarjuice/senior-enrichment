import { MODAL } from '../actions/types';

const initialState = {
    active: false,
    message: '',
    confimationCallback: null
}

export default (state = initialState, { type, ...action }) => {
    switch (type) {
        case MODAL:
            return { ...state, ...action }
        default:
            return state
    }
}