import React from 'react'

export default class ComponentLife extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  componentWillMount() {
    // 渲染之前执行
    console.log('渲染之前执行')
  }

  componentDidMount() {
    // 渲染完成之后执行
    console.log('渲染完成之后执行')
  }

  shouldComponentUpdate() {
    // 是否允许修改状态 返回Boolean  true: 允许   flase: 不允许
    console.log('是否允许修改状态')
    return true
  }

  componentWillUpdate() {
    // 修改数据之前执行
    console.log('修改数据之前执行')
  }

  componentDidUpdate() {
    // 数据修改之后执行
    console.log('数据修改之后执行')
  }

  componentWillReceiveProps() {
    // props 发生变化
    console.log('props 发生变化')
  }

  componentWillUnmount() {
    // 页面卸载执行
    console.log('页面卸载执行')
  }

  add = () => {
    let { count } = this.state
    this.setState({
      count: count += 1
    })
  }

  del = () => {
    let { count } = this.state
    this.setState({
      count: count -= 1
    })
  }

  changeTitle = () => {
    this.props.changeTitleHandler('子组件传过来的标题')
  }

  render() {
    const { count } = this.state
    return(
      <div>
        <h1>{ this.props.title }</h1>
        <h3>{ count }</h3>
        <h4>
          <button onClick={this.add}>+</button>
          <button onClick={this.del}>-</button>
          <button onClick={this.changeTitle}>修改标题</button>
        </h4>
      </div>
    )
  }

}


