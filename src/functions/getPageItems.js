const cheerio = require("cheerio");

const games = [];

const getPageItems = (html) => {
  // carrega o html da página
  const $ = cheerio.load(html);
  const PromiseCallback = (resolve, reject) => {
    const selector =
      "#content > div.post_content.row > div > div:nth-child(1) > div.body > table > tbody > tr";

    // seleciona todos os elementos que possuem a classe "rtitle" dentro de um td
    $(selector).each((i, element) => {
      const a = $("td.rtitle > a", element);
      const title = a.text();
      const href = a.attr("href");
      const id = href.split("/").pop();

      // inserir dentro de array de games com um objeto com id, name, e href]
      games.push({
        id,
        name: title,
        path: `https://gamefaqs.gamespot.com/n64${href}`,
      });
    });
    const title = $(selector).text();
    resolve();
  };

  return new Promise(PromiseCallback);
};

module.exports = {
    games,
    getPageItems,
}