import React from 'react'

class Nav extends React.Component {
  // 渲染函数
  render() {
    return (
      <div>
        <ul>
          {
            this.props.nav.map((item, index) => {
              return <li key={ index }> { item } </li>
            })
          }
          {/* <li>首页</li>
          <li>精品</li>
          <li>收藏</li>
          <li>我的</li> */}
        </ul>
      </div>
    )
  }
}

export default Nav




