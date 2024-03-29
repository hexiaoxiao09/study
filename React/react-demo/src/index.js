import React from 'react'
import ReactDOM from 'react-dom'

// 
import App from './app'

import { createStore } from 'redux'
import first from './reducers/first'

// 创建store仓库
const store = createStore(first)
store.subscribe(() => {
  console.log(store.getState())
})

const render = () => {
  ReactDOM.render(
    <App 
      value={store.getState()}
      onIncrement={() => {store.dispatch({type: 'INCREMENT'})}} 
      onDecrement={() => {store.dispatch({type: 'DECREMENT'})}} 
    />,
    document.getElementById('root')
  )
}
render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
