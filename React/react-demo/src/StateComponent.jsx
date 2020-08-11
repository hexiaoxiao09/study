import React from 'react'

export default class StateComponent extends React.Component{

  /* 
   * 组件中的状态： state
   * 以前操作页面元素变换都是通过修改DOM操作DOM
   * 但是在React中  不在推荐操作DOM，页面元素的改变用State来处理
  */

  constructor(props) {  
    super(props)
    // 定义State状态
    this.state = {
      count: 0
    } 
  
  }
  add = () => {
    // 修改state状态
    let count = this.state.count
    this.setState({
      // count: this.state.count += 1   // 这样写会有警告
      count: count += 1
    })
  }

  del = () => {
    // 修改state状态
    let count = this.state.count
    this.setState({
      // count: this.state.count -= 1   // 这样写会有警告
      count: count -= 1
    })
  }

  render() {
    return (
      <div>
        <h1>组件的State</h1>
        <p>{ this.state.count }</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.del}>-</button>
      </div>
    )
  }
}