const axios = require("axios");
require("dotenv").config();
module.exports = {
  getUserById: function (id) {
    return axios.get(process.env.REACT_APP_UserUrl + "/" + id);
  },
};
