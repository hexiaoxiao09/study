import React from 'react'


export default class Child2 extends React.Component{
  constructor() {
    super()
    this.state = {
      num: 2
    }

  }

  render() {
    return(
      <div>
        Child2: {this.state.num}
      </div>
    )
  }
}