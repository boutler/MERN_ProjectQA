// Dependencies
import React from "react";

class Container extends React.Component {
  render() {
    const { body } = this.props;
    return <main className="mainWrapper">{body}</main>;
  }
}

export default Container;
