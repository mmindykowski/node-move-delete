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

fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach(function (file) {
    fs.renameSync(
      path.join(__dirname, "data", file),
      path.join(__dirname, "data-temp", "temp-" + file),
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Zmieniono lub przeniesiono");
        }
      }
    );
  });
  fs.rmdir(path.join(__dirname, "data"), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Usunięto folder");
    }
  });
});

fs.rm(path.join(__dirname, "log.txt"), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Usunięto fodler");
  }
});
