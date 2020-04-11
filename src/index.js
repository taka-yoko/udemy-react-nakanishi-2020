import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);

    this.state = { age: 20 };
  }

  static get LOWEST() {
    return 0;
  }

  static get HIGHEST() {
    return 120;
  }

  static get KID() {
    return 12;
  }

  static get YOUNG() {
    return 29;
  }

  static get MIDDLE() {
    return 59;
  }

  static get OLD() {
    return 120;
  }

  render() {
    return (
      <div>
        <h3>{this.state.age}</h3>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onMinusClick}>-</button>
      </div>
    );
  }

  onPlusClick = () => {
    if (this.state.age < Human.HIGHEST) {
      this.setState({ age: this.state.age + 10 });
    }
  };

  onMinusClick = () => {
    if (this.state.age > Human.LOWEST) {
      this.setState({ age: this.state.age - 10 });
    }
  };
}

render(<Human />, document.getElementById("root"));
