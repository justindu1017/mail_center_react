import React, { Component } from "react";

export class Grayout extends Component {
  render() {
    const { isHover } = this.props;
    const style =
      "position-absolute position-fixed w-100 h-100 pe-none opacity-0 ";
    return (
      <div
        id="coverer"
        className={isHover ? style + "grayOut pe-none" : style}
      ></div>
    );
  }
}

export default Grayout;
