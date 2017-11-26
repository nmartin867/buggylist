import axios from 'axios'

const apiUrl = 'api.giphy.com/v1/gifs/search?q=boobs&api_key=uFvC2O5HaQfaX5kSGjqWF4GU0Joa7g9H&rating=nsfw'

export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING'
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS'
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR'

export const fetchImagesLoading = () => {
    return {
        type: FETCH_IMAGE_LOADING,
        isLoading: true
    }
}

export const fetchImagesSuccess = images => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        isLoading: false,
        images
    }
}

export const fetchImagesError = error => {
    return {
        type: FETCH_IMAGE_ERROR,
        isLoading: false,
        error
    }
}

export const fetchImages = () => {
    return dispatch => {
        dispatch(fetchImagesLoading())
        return axios.get(apiUrl)
            .then(res => {
                const {data} = res
                dispatch(fetchImagesSuccess(data.data))
            })
            .catch(err => {
                dispatch(fetchImagesError(err))
                throw(err)
            })

    }
}