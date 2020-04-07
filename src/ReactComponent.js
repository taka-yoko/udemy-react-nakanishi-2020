import React from "react";

export default class ReactComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}, {this.props.music}
      </div>
    );
  }
}
