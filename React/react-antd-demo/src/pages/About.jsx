import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class About extends React.Component{

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>About</h1>
        <Button type="primary">
          <Link to="/mine">前往Mine</Link>
        </Button>
        <Button>
          <Link to="/home">前往Home</Link>
        </Button>
      </div>
    )
  }


}