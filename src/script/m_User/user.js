const axios = require("axios");
require("dotenv").config();

/**
 * APIs involving users
 */

module.exports = {
  // get the user info by id
  getUserById: function (id) {
    return axios.get(process.env.REACT_APP_UserUrl + "/" + id);
  },
};
