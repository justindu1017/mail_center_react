import React, { Component, components } from "react";
import { Link } from "react-router-dom";

import {
  Justify,
  Pen,
  Inbox,
  BoxArrowUpRight,
  Trash,
  Sun,
  Moon,
} from "react-bootstrap-icons";

export class NavSvg extends Component {
  render() {
    const { icon, width, height } = this.props;

    switch (icon) {
      case "justify":
        return (
          // <div className="d-flex align-items-center">
          <Justify width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );
      case "pen":
        return (
          // <Link>

          //   <Trash width={width ? width : 16} height={height ? height : 16} />
          // </Link>
          // <div className="d-flex align-items-center">
          <Pen width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );

      case "inbox":
        return (
          // <div className="d-flex align-items-center">
          <Inbox width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );

      case "box-arrow-up-right":
        return (
          // <div className="d-flex align-items-center">
          <BoxArrowUpRight
            width={width ? width : 16}
            height={height ? height : 16}
          />
          // </div>
        );

      case "trash":
        return (
          // <Link className="d-flex align-items-center">
          //   <Trash width={width ? width : 16} height={height ? height : 16} />
          // </Link>

          // <div className="d-flex align-items-center">
          <Trash width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );
      case "sun":
        return (
          // <div className="d-flex align-items-center">
          <Sun width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );

      case "moon":
        return (
          // <div className="d-flex align-items-center">
          <Moon width={width ? width : 16} height={height ? height : 16} />
          // </div>
        );

      default:
        return;
    }
  }
}

export default NavSvg;
