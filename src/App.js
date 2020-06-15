import React, { Component } from "react";
import Life from "./Life";
import Counter from "./Counter";
import NewCounter from "./NewCounter";
import "./sass/materialize.scss";
import InputWithStyle from "./InputWithstyles";

class App extends Component {
  // <---- 이거는 라이프사이클 ---->
  // constructor(props) {
  //   super(props);
  //   this.state = { hasDestroyed: false };
  // }

  // componentDidMount() {
  //   this.setState({ hasDestroyed: true });
  // }

  // render() {
  //   return (
  //     <div>
  //       <div>{this.state.hasDestroyed ? null : <Life />}</div>
  //     </div>
  //   );
  // }
  // <--------->
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 10 };
  //   this.resetCount = this.resetCount.bind(this);
  // }
  // resetCount() {
  //   this.setState(({ count }) => ({ count: count + 10 }));
  // }

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <Counter count={this.state.count} />
  //       </div>
  //       <div>
  //         <NewCounter count={this.state.count} />
  //       </div>
  //       <button onClick={this.resetCount}>
  //         {this.state.count + 10}으로 초기화
  //       </button>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <InputWithStyle />
      </div>
    );
  }
}

export default App;
