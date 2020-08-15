import React from 'react'



export default class Child1 extends React.Component{
  constructor(porps) {
    super(porps);
    this.child1_ref = React.createRef()
    let state = {}
  }


  getValue1 = () => {
    console.log(this.child1_ref.current.value)
  } 




  render() {
    return(
      <div>
        1号子组件的输入框
        <input type="text" ref={this.child1_ref} onChange={this.getValue1}/>
      </div>
    )
  }


}