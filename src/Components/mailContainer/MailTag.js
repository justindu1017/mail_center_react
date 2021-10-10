import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../script/m_User/user.js";

/**
 * MailTag.js
 * after getting mail info, pass props(_id, subject, content, sender)
 * compose a mail tag
 * also a link to MailPage
 */

export class MailTag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      senderName: "",
    };
  }

  componentDidMount() {
    user.getUserById(this.props.sender).then((res) => {
      console.log(res.data);
      this.setState({ senderName: res.data.name });
    });
  }

  render() {
    const { _id, subject, content, sender } = this.props;

    return (
      <div>
        <Link
          to={{
            pathname: "/" + _id,
            passProps: {
              _id: _id,
              subject: subject,
              content: content,
              sender: sender,
              senderName: this.state.senderName,
            },
          }}
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
              <h3 className="expandNoWrapLine w-75">{subject}</h3>

              <div className="d-flex w-25 ms-3 ps-3">
                <span>from: </span>
                <div>{this.state.senderName}</div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="expandNoWrapLine w-75">{content}</div>
              {/* <div className="w-25 ms-3 ps-3">{date}</div> */}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MailTag;
