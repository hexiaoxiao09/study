import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Home</h1>
        <Button type="primary">
          <Link to="/mine">前往Mine</Link>
        </Button>
        <Button>
          <Link to="/about">前往About</Link>
        </Button>
      </div>
    )
  }


}