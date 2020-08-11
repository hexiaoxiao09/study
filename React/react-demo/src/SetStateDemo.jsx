import React from 'react'


export default class SetStateDemo extends React.Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }


  add = () => {
    /* 
     * this.setState(object, callback)
    */
    this.setState({
      count: this.state.count += 1
    },() => {
      console.log(this.state.count)
    })
  }

  render() {
    return (
      <div>
        <h2>setstate 的同步还是异步问题</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}