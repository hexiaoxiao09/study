import React from 'react'
import { DatePicker } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Mine from './pages/Mine'


/* 
 * HashRouter: 瞄点链接
 * BrowserRouter: 利用h5新特性 -- history.push 
 * 
*/



function App() {
  return (
    <div className="App">
      <br />
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mine" component={Mine} /> 
      </Router>
    </div>
  )
}

export default App
