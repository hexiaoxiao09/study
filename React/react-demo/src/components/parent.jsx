import React from 'react'
import Child1 from './child1'
import Child2 from './child2'



export default class Parent extends React.Component{
  constructor() {
    super();
    this.state = {
      my_name: 'zhangsan',
      num: 30,
      after_num: ''
    }
  }


  changeNum = () => {
    let a = this.state.num * 3 / 2
    this.setState({
      after_num: a
    },() => {

      console.log(this.state.after_num)
    })
  }




  render() {
    return(
      <div>
        <h1>这是父组件</h1>
        <div>
          1号子组件： <Child1 num={this.state.num}/>
        </div>
        <button onClick={this.changeNum}>换算</button>
        <div>
          2号子组件： <Child2 num={this.state.after_num}/>
        </div>
      </div>
    )
  }


}