const getPage = require("./getPage");
const slug = require("./stringToSlug");
const readFromFile = require("./readFile");
const writeToFile = require("./writeFile");

const getCachedPage = (path) => {
  const filename = `cache/${slug(path)}.html`;
  const promiseCallback = async (resolve, reject) => {
    const cachedHTML = await readFromFile(filename);
    if (!cachedHTML) {
      const html = await getPage(path);
      await writeToFile(html, filename);
      resolve(html);
      return;
    }
    resolve(cachedHTML);
  };

  return new Promise(promiseCallback);
};

module.exports = getCachedPage;