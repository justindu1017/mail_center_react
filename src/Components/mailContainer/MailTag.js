import React, { Component } from "react";

export class MailTag extends Component {
  render() {
    const { title, content, sender } = this.props;

    return (
      <div>
        <a
          href="
        // todo: href
        "
        >
          <div
            className="
                d-flex
                flex-column
                rounded-3
                bg-haveRead
                shadow-sm
                mb-3
                mx-2
                p-3
                px-4
              "
          >
            <div className="d-flex align-items-center">
              <h3 className="expandNoWrapLine w-75">{title}</h3>

              <div className="d-flex w-25 ms-3 ps-3">
                <span>from: </span>
                <div>{sender}</div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="expandNoWrapLine w-75">{content}</div>
              {/* <div className="w-25 ms-3 ps-3">{date}</div> */}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default MailTag;
