import { LOADING } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return action.isLoading;
        default:
            return state
    }
}