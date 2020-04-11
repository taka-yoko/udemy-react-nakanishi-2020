import React from "react";
import { render } from "react-dom";

class H20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0 };
  }

  static get LOWEST() {
    return 0;
  }

  static get HIGHEST() {
    return 100;
  }

  render() {
    return (
      <div>
        <h3>{this.state.temp}</h3>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onMinusClick}>-</button>
      </div>
    );
  }

  onPlusClick = () => {
    if (this.state.temp < H20.HIGHEST) {
      this.setState({ temp: this.state.temp + 10 });
    }
  };

  onMinusClick = () => {
    if (this.state.temp > H20.LOWEST) {
      this.setState({ temp: this.state.temp - 10 });
    }
  };
}

render(<H20 />, document.getElementById("root"));
