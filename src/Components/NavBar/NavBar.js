import React, { Component } from "react";
import NavSvg from "./NavSvg";

export class NavBar extends Component {
  render() {
    const optionList = [
      {
        id: "0",
        name: "write",
        urlLink: "writeMail",
        icon: "pen",
        width: 40,
        height: 40,
      },
      {
        id: "1",
        name: "inbox",
        urlLink: "inbox",
        icon: "inbox",
        width: 40,
        height: 40,
      },
      {
        id: "2",
        name: "sent",
        urlLink: "sent",
        icon: "box-arrow-up-right",
        width: 40,
        height: 40,
      },
      {
        id: "3",
        name: "trash",
        urlLink: "trash",
        icon: "trash",
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

                {optionList.map(element => {
                  console.log(element);
                  return <li key = {element.id} className="d-flex option mb-3">
                    <NavSvg
                      icon={element.icon}
                      width={element.width}
                      height={element.height}
                      href={element.urlLink}
                    />
                     <span className="ms-2 fs-4"> {element.name} </span>
                  </li>
                })}

                </ul>
              </div>
            </li>
            <li className="d-flex w-100">
              <NavSvg
                icon={"sun"}
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
