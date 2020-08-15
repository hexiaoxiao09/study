import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

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
          <Link to="/about">前往About</Link>
        </Button>
        <Button>
          <Link to="/home">前往Home</Link>
        </Button>
      </div>
    )
  }


}