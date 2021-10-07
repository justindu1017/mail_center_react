import React, { Component, components } from "react";
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
    const { icon, width, height, href } = this.props;

    switch (icon) {
      case "justify":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Justify width={width ? width : 16} height={height ? height : 16} />
          </a>
        );
      case "pen":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Pen width={width ? width : 16} height={height ? height : 16} />
          </a>
        );

      case "inbox":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Inbox width={width ? width : 16} height={height ? height : 16} />
          </a>
        );

      case "box-arrow-up-right":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <BoxArrowUpRight
              width={width ? width : 16}
              height={height ? height : 16}
            />
          </a>
        );

      case "trash":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Trash width={width ? width : 16} height={height ? height : 16} />
          </a>
        );
      case "sun":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Sun width={width ? width : 16} height={height ? height : 16} />
          </a>
        );

      case "moon":
        return (
          <a className="d-flex align-items-center" href={href ? href : ""}>
            <Moon width={width ? width : 16} height={height ? height : 16} />
          </a>
        );

      default:
        return;
    }
  }
}

export default NavSvg;
