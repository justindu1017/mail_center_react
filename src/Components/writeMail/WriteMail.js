import React, { Component } from "react";
import mail from "../../script/mailBox/mail.js";

/**
 * WriteMail.js
 * where you can send mail
 */

export class WriteMail extends Component {
  sendMail = (e) => {
    e.preventDefault();
    // TODO: change sender
    const sender = "614a2ac98ac0063b0750ca6e";
    const receivers = document
      .getElementById("receiver")
      .value.replace(" ", "");
    const subject = document.getElementById("subject").value;
    const content = document.getElementById("content").value;

    // cant send if any required is missing
    if (receivers === "" || subject === "" || content === "") {
      alert("請確認所有欄位都已填寫");
      return;
    }

    // split users into array
    // TODO: need api
    const receiver = receivers.split(",");

    // call create mail api to send mail
    mail.createMail(sender, receiver, subject, content).then((res) => {
      alert("寄件成功!");
      window.location.href = "/";
    });
  };

  // check if start with space
  validCheck = (el) => {
    if (/^\s/.test(el.value)) {
      el.value = "";
    }
  };

  render() {
    return (
      <div>
        <main className="pt-3">
          <div className="px-3">
            <div className="d-flex flex-column m-5">
              <div>
                <div>
                  <div className="mb-3">
                    <label className="form-label">Receiver</label>
                    <input
                      id="receiver"
                      className="form-control"
                      onInput={(e) => {
                        this.validCheck(e.target);
                      }}
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      id="subject"
                      className="form-control"
                      onInput={(e) => {
                        this.validCheck(e.target);
                      }}
                      aria-required="true"
                      required
                    />
                  </div>

                  <div className="mb-3 d-flex">
                    <div className="w-75 pe-3">
                      <label className="form-label">Attachments</label>
                      <input
                        className="form-control"
                        type="file"
                        id="Attachments"
                        multiple
                      />
                    </div>

                    <div className="w-25">
                      <label className="form-label">member</label>
                      <select
                        className="form-select form-control"
                        name="member"
                        id="member"
                      >
                        <option value="doctor">doctor</option>
                        <option value="coach">coach</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Content</label>
                    <div>
                      <textarea
                        id="content"
                        className="w-100 form-control"
                        rows="12"
                      ></textarea>
                    </div>
                  </div>
                  <button className="btn btn-primary" onClick={this.sendMail}>
                    send
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

export default WriteMail;
