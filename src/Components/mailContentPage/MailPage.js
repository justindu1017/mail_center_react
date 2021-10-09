import React, { Component } from "react";

export class MailPage extends Component {
  render() {
    // post api get content???
    const { title, content, sender, date } = this.props;

    return (
      <div class="ms-5">
        <main class="pt-3">
          <div class="px-3">
            <div class="d-flex flex-column m-5">
              <div class="Title mb-2">
                <h2>{title}</h2>
              </div>
              <div class="d-flex mb-2">
                <div class="d-flex w-50">
                  <span>from: </span>
                  <div>{sender}</div>
                </div>
                <div class="w-50">{date}</div>
              </div>
              <div class="content mb-2">
                <div>{content}</div>
              </div>
              <div class="d-flex justify-content-evenly mt-5">
                <div>
                  <button class="btn btn-primary">reply</button>
                </div>
                <div>
                  <button class="btn btn-success">forward</button>
                </div>
                <div>
                  <button class="btn btn-danger">delete</button>
                </div>
                <div>
                  <button class="btn btn-warning">archive</button>
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
