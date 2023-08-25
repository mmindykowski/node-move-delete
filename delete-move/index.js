const fs = require("fs");
const path = require("path");

function createDir(path) {
  fs.mkdir(path, function (err) {
    if (err) {
      if (err.code === "EEXIST") {
        console.log("Folder już istnieje");
        return;
      }
      console.log(err);
    } else {
      console.log("Stworzono folder");
    }
  });
}

createDir(path.join(__dirname, "data-temp"));

fs.rename(
  path.join(__dirname, "data", "students-first-year.txt"),
  path.join(__dirname, "data-temp", "temp-students-first-year.txt"),
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Zmieniono lub przeniesiono");
    }
  }
);
