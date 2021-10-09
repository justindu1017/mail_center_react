const axios = require("axios");

module.exports = {
  listMail: axios.get(process.env.REACT_APP_MailboxUrl),

  deleteMail: function (id) {
    return axios.delete(process.env.REACT_APP_MailboxUrl + "/" + id);
  },

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
  showMail: function (id) {
    return axios
      .get(process.env.REACT_APP_MailboxUrl + "/" + id)
      .then((res) => {
        return res;
      });
  },

  updateMail: function () {
    return axios.put(process.env.REACT_APP_MailboxUrl);
  },
};
