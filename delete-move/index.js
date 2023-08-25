const fs = require("fs");
const path = require("path");

fs.rename(
  path.join(__dirname, "data"),
  path.join(__dirname, "data-temp"),
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Zmieniono lub przeniesiono");
    }
  }
);
