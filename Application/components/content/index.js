// Dependencies
import React from "react";

class Content extends React.Component {
  render() {
    const { body } = this.props;
    return <div className="contentWrapper"> {body} </div>;
  }
}

export default Content;
