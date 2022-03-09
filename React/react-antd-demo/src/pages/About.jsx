import React from 'react'
import querystring from 'querystring'
import { Button, Input } from 'antd'
import { NavLink, Prompt } from 'react-router-dom'

export default class About extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    console.log(this.props)
    const params = querystring.parse(this.props.location.search)
    console.log(params) // 读取到的对象还是带着 ？ 的，需求处理掉
    return(
      <div>
        <h1>About</h1>
        <Button type="primary">
          <NavLink to="/mine">前往Mine</NavLink>
        </Button>
        <Button>
          <NavLink to="/home">前往Home</NavLink>
        </Button>
        <br />
        <Prompt 
          when={ !!this.state.name }
          message={'你确定要离开吗'}
        />
        <Input value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }></Input>
      </div>
    )
  }
}