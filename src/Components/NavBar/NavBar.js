import React, { Component } from "react";
import NavSvg from "./NavSvg";

export class NavBar extends Component {
  render() {
    const optionList = [
      {
        id: "0",
        name: "writeMail",
        urlLink: "writeMail",
        icon: "pen",
        width: 40,
        height: 40,
      },
      {
        id: "1",
        name: "writeMail",
        urlLink: "writeMail",
        icon: "pen",
        width: 40,
        height: 40,
      },
      {
        id: "2",
        name: "writeMail",
        urlLink: "writeMail",
        icon: "pen",
        width: 40,
        height: 40,
      },
      {
        id: "3",
        name: "writeMail",
        urlLink: "writeMail",
        icon: "pen",
        width: 40,
        height: 40,
      },
    ];

    return (
      <div>
        <nav
          className="
          mainNavBar
          shadow
          h-100
          bg-navBar
          position-fixed
          ps-1
          user-select-none
        "
          onmouseenter="grayOutToggle()"
          onmouseleave="grayOutToggle()"
        >
          <ul
            className="
            h-100
            d-flex
            justify-content-around
            flex-column flex-wrap
            align-items-center
            list-unstyled
          "
          >
            <li className="d-flex w-100 logo">
              <NavSvg icon={"justify"} width={40} height={40} href={"#"} />
            </li>
            <li className="d-flex w-100">
              <div className="d-flex flex-wrap align-items-center">
                <ul className="list-unstyled">
                  <li className="d-flex option mb-3">
                    <NavSvg
                      icon={"pen"}
                      width={40}
                      height={40}
                      href={"./writeMail.html"}
                    />
                  </li>
                  <li className="d-flex option mb-3">
                    <NavSvg
                      icon={"inbox"}
                      width={40}
                      height={40}
                      href={"./writeMail.html"}
                    />
                  </li>
                  <li className="d-flex option mb-3">
                    <NavSvg
                      icon={"box-arrow-up-right"}
                      width={40}
                      height={40}
                      href={"./writeMail.html"}
                    />
                  </li>
                  <li className="d-flex option mb-3">
                    <NavSvg
                      icon={"trash"}
                      width={40}
                      height={40}
                      href={"./deleted.html"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li className="d-flex w-100">
              <NavSvg
                icon={"moon"}
                width={40}
                height={40}
                href={"./deleted.html"}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
