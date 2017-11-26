import {
    FETCH_IMAGE_LOADING,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR
} from '../actions'

export default (state, action) => {
    switch (action.type) {
        case FETCH_IMAGE_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case FETCH_IMAGE_SUCCESS:
            return Object.assign({}, state, {
                images: action.images
            })
        case FETCH_IMAGE_ERROR:
            return Object.assign({}, state, {
                hasError: true
            })
        default:
            return state
    }
}