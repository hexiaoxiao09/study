import React from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

export default class Mine extends React.Component{

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Mine</h1>
        <Button type="primary">
          <NavLink to="/about">前往About</NavLink>
        </Button>
        <Button>
          <NavLink to="/home">前往Home</NavLink>
        </Button>
      </div>
    )
  }


}