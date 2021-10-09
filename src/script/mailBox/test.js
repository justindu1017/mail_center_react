const mail = require("./mail.js");
mail.listMail.then((res) => {
  console.log(res.data);
  res.data.map((el) => {
    console.log(el);
  });
});
