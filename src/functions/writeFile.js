const fs = require("fs");

const writeToFile = (data, filename) => {
  const promiseCallback = (resolve, reject) => {
    fs.writeFile(filename, data, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(true);
    });
  };
  return new Promise(promiseCallback);
};

module.exports = writeToFile;