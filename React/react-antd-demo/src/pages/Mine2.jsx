import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

class Mine2 extends React.Component{
  constructor() {
    super()
    this.state = {
      
    }
  }
  clickHandle = () => {
    // 如果不用withRouter 则打印出来的props是个空对象，原因就是因为该组件没有没路由管理，而加上withRouter则打印出来有内容
    console.log(this.props)
  }

  render() {
    return(
      <div>
        这是一个没有被路由管理的组件，需要用到withRouter高阶组件
        <Button onClick={this.clickHandle}>没有被路由管理的组件</Button>
      </div>
    )
  }
}

export default withRouter(Mine2)
// export default Mine2

