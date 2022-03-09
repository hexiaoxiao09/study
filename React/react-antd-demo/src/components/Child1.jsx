import React from 'react'
import { Button } from 'antd'


export default class Child1 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  clickChild2 = () => {

  }

  render() {
    console.log(this.props)
    return(
      <div>
        Child1: {this.state.num}
        <Button onClick={this.clickChild2}>操作Child2的值</Button>
      </div>
    )
  }
}