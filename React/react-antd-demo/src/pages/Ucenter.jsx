import React from 'react'

class Ucenter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.match.params.id)
    return (
    <div> This is UCenter：{this.props.match.params.id}</div>
    )
  }
}


export default Ucenter