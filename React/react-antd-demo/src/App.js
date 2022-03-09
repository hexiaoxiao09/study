import React from 'react'
import { DatePicker } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
// import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Mine from './pages/Mine'
import UCenter from './pages/Ucenter'
import NotFound from './pages/NotFound'


/* 
 * HashRouter: 瞄点链接
 * BrowserRouter: 利用h5新特性 -- history.push  如果上线之后需要后台做重定向处理，不然会在进入某一页面是出现404错误
 * 
*/



function App() {
  return (
    <div className="App">
      <br />
      <Router>
        <Switch>
          <Redirect exact from='/' to='/home'></Redirect>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          {/* 
            exact={true}   匹配规则  精准匹配 
            strict={true}  更加精准的匹配 (多加个 / 都不行)  要与exact一起使用
          */}
          <Route exact path="/mine" component={Mine} />
          {/* 加个？表示这个参数可有可无，如果不加？则一定有参数，不然会报404 */}
          <Route path="/mine/ucenter/:id?/:name?" component={UCenter} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    </div>
  )
}

export default App
