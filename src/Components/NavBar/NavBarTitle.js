import React, { Component } from "react";
import NavSvg from "./NavSvg";

class NavBarTitle extends React.Component {
  render() {
    return (
      <div>
        <NavSvg icon={"justify"} width={40} height={40} />
      </div>
    );
  }
}

export default NavBarTitle;
