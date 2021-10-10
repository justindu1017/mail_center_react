import React, { Component } from "react";
import mail from "../../script/mailBox/mail.js";

/**
 * MailPage.js
 * by clicking on mail tag, pass props (_id, subject, content, sender, senderName)
 * the main page to display mail content
 */

export class MailPage extends Component {
  /**
   * delete mail function
   * call deleMail api
   */
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
                  {/* TODO go to write mail page but need api to reply!!! */}
                  <button className="btn btn-primary">reply</button>
                </div>
                <div>
                  {/* TODO forward the mail, open model, enter receiver, call createMail api*/}
                  <button className="btn btn-success">forward</button>
                </div>
                <div>
                  {/* delete mail */}
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
