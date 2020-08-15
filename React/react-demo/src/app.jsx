import React from 'react'
// import Home from './Home'
// import Nav from './MyNav'
// import State from './StateComponent'
// import ComponentLife from './ComponentLife'
// import SetStateDemo from './SetStateDemo'
// import FormDemo from './FormDemo'
import Parent from './components/parent'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nav1: ['首页', '精品', '收藏', '我的'],
      nav2: ['WEB', 'JAVA', 'BIGDATA', 'PYTHON'],
      title: '父组件的标题',
    }
  }

  // 修改标题
  changeTitle = (data) => {
    this.setState({
      title: data,
    })
  }

  // 渲染函数
  render() {
    const { nav1, nav2, title } = this.state
    return (
      <div>
        <h1>Hello React Component</h1>
        {/* <Home /> */}
        {/* <Nav nav={nav1} /> */}
        {/* <Nav nav={nav2} /> */}
        {/* <State /> */}
        {/* <ComponentLife title={title} changeTitleHandler={this.changeTitle} /> */}
        {/* <SetStateDemo /> */}
        {/* <FormDemo /> */}
        <Parent />
      </div>
    )
  }
}

export default App
