const axios = require("axios");
const browserHeaders = require("../utils/browserHeaders");

const BASE_URL = "https://gamefaqs.gamespot.com";

const getPage = (filename) => {
  const url = `${BASE_URL}${filename}`;
  const options = {
    headers: browserHeaders,
  };
  return axios.get(url, options).then((response) => response.data);
};

module.exports = getPage;