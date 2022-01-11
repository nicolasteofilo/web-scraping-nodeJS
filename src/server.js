// libraries
const path = require('./utils/path')
const express = require("express");
const morgan = require("morgan");

// functions
const getCachedPage = require("./functions/getCachedPage");
const { games, getPageItems } = require('./functions/getPageItems')

// init o express
const app = express();

// middlewares
app.use(express.json()); // allowing data in JSON
app.use(morgan('tiny'))  // log of request HTTP

// consts
const PORT = 3000; // PORT of server

// routes
app.get('/', async (req, res) => {
  await getCachedPage(path).then(getPageItems);
  res.json({
    games,
  });
})

// runing server
app.listen(PORT, () => {
  console.log(`🚀 API started in port ${PORT}`);
});