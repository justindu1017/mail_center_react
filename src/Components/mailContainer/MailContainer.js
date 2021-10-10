import React, { Component } from "react";

import MailTag from "./MailTag";
import mail from "../../script/mailBox/mail.js";

/**
 * MailContainer.js
 * the main container for mail tags
 * after fetching from server
 * map each mail info to a mail tag
 */

export class MailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailList: [],
    };
  }

  componentDidMount() {
    mail.listMail.then((res) => {
      this.setState({ mailList: res.data });
    });
  }

  render() {
    console.log(process.env);
    return (
      <div className="ms-5">
        <main className="pt-3">
          <div className="px-3 pb-2">
            <h2 className="mx-2">Inbox</h2>
          </div>
          <div className="px-3">
            {this.state.mailList.map((el) => {
              return (
                <MailTag
                  key={el._id}
                  _id={el._id}
                  subject={el.subject}
                  content={el.content}
                  sender={el.sender}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default MailContainer;
