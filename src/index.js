import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'

let store = configureStore({
    isLoading: false,
    hasError: false,
    images: []
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
