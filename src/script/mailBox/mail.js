const axios = require("axios");

module.exports = {
  // list all the mail
  listMail: axios.get(process.env.REACT_APP_MailboxUrl),

  // delete mail by id
  deleteMail: function (id) {
    return axios.delete(process.env.REACT_APP_MailboxUrl + "/" + id);
  },

  // create new mail
  createMail: function (sender, receiver, subject, content) {
    return axios.post(process.env.REACT_APP_MailboxUrl, {
      sender: sender,
      receiver: receiver,
      subject: subject,
      content: content,
      snd_deleted: false,
      rcv_deleted: false,
      dead_deleted: false,
    });
  },

  // showing mail content
  showMail: function (id) {
    return axios.get(process.env.REACT_APP_MailboxUrl + "/" + id);
  },

  // ??????
  updateMail: function () {
    return axios.put(process.env.REACT_APP_MailboxUrl);
  },
};
