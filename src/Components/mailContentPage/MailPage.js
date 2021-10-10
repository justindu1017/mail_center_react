import React, { Component } from "react";
import mail from "../../script/mailBox/mail.js";

/**
 * MailPage.js
 *
 */

export class MailPage extends Component {
  delMail = (id) => {
    mail.deleteMail(id).then((res) => {
      if (res) {
        alert("信件刪除成功!");
        window.location.href = "/";
      }
    });
  };

  render() {
    const { _id, subject, content, sender, senderName } =
      this.props.location.passProps;
    return (
      <div className="ms-5">
        <main className="pt-3">
          <div className="px-3">
            <div className="d-flex flex-column m-5">
              <div className="Title mb-2">
                <h2>{subject}</h2>
              </div>
              <div className="d-flex mb-2">
                <div className="d-flex w-50">
                  <span>from: </span>
                  <div>{senderName}</div>
                </div>
                {/* <div className="w-50">{date}</div> */}
              </div>
              <div className="content mb-2">
                <div>{content}</div>
              </div>
              <div className="d-flex justify-content-evenly mt-5">
                <div>
                  <button className="btn btn-primary">reply</button>
                </div>
                <div>
                  <button className="btn btn-success">forward</button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      this.delMail(_id);
                    }}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MailPage;
