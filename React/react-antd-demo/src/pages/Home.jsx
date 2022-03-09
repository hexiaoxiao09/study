import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import Mine2 from "./Mine2";
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
//  connect 作用就是将该组件与redux连接起来
import { connect } from "react-redux";
import * as counterAction from '../store/actions/counter'
import { bindActionCreators } from 'redux'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  clickHandle = () => {
    console.log(this.props);

    // history.push()     ： 叠加， 上次的页面依旧存在
    // history.replace()  ： 替换， 上次的页面不存在

    // this.props.history.push('/about')
    this.props.history.replace("/mine2");
  };

  render() {
    // console.log(this.props.counterAction.increment)
    // const { increment, decrement} = this.props
    return (
      <div>
        <h1>Home</h1>
        <h2>{ this.props.counter }</h2>
        <Button onClick={ () => this.props.counterAction.increment(10)}> + </Button>
        <Button onClick={ () => this.props.counterAction.decrement(5)}> - </Button>

        <br/>
        <Button type="primary">
          <NavLink to="/mine">前往Mine</NavLink>
        </Button>
        <Button>
          <NavLink to="/about">前往About</NavLink>
        </Button>
        <Button onClick={this.clickHandle}>点击事件跳转</Button>

        <Mine2 />

        <br />
        <Child1 Child2Num={this.state.num} />
        <Child2 />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => { dispatch(increment())},
//     decrement: () => { dispatch(decrement())},
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    counterAction: bindActionCreators(counterAction, dispatch)
  }
}




// 高阶组件的写法   将该组件与redux建立连接  先后顺序不能乱
// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home)
