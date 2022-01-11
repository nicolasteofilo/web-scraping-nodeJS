const fs = require("fs");

const readFromFile = (filename) => {
  const promiseCallback = (resolve) => {
    fs.readFile(filename, "utf8", (error, contents) => {
      if (error) {
        resolve(null);
      }
      resolve(contents);
    });
  };
  return new Promise(promiseCallback);
};

module.exports = readFromFile;