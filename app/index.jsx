import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// 通用样式
import './static/css/common.less'

import Demo from './containers/Demo'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <Demo/>
    </Provider>,
    document.getElementById('root')
)
