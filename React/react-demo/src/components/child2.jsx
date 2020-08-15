import React from 'react'



export default class Child2 extends React.Component{
  constructor(porps) {
    super(porps);
    this.child2_ref = React.createRef()
    this.state = {
      num: 10
    }
  }






  render() {
    return(
      <div>
        2号子组件的输入框  
        <input type="text" value={this.porps.after_num}/>
      </div>
      
    )
  }


}