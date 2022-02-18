const express = require('express');

const app = express();

const { pagination } = require('./pagination');

app.use(express.json());

app.get('/paginacao', async (req, res) => {
  const { pagina, quantidade } = req.query;
  const page = Number(pagina);
  const quantity = Number(quantidade);
  try {
    const response = pagination(page, quantity);
    return res.status(200).json(response); 
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = app;
