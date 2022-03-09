import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import reducer from './store/reducers/counter'
import { Provider } from 'react-redux'

// 创建store仓库
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
