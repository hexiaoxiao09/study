import React from 'react'

export default class FormDemo extends React.Component {
  constructor() {
    super()
    // ref  获取DOM对象
    this.myref = React.createRef()
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    console.log(this.myref.current)
  }

  HandlerChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  getValue = () => {
    console.log(this.myref.current.value)
  }


  render() {
    let { value } = this.state
    return (
      <div>
        {/* 受控组件 */}
        <input type="text" value={ value } onChange={this.HandlerChange}/> <br />
        {/* ref  非受控组件 */}
        <input type="text"  ref={this.myref} /> <br />
        <button onClick={this.getValue}>获取非受控组件的值 </button>
      </div>
    )
  }
}
