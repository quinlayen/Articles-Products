const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const DS_Products = require('../models/DS_Products');

router.get('/products', (req, res) => {
  res.render('./templates/index.hbs', {
    pageTitle: 'Main Page'
  });
});
router.get('/products/new', (req, res) => {
  res.render('./templates/new.hbs', {
    pageTitle: 'New'
  });
});

router.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.render('./templates/products.hbs', {
    pageTitle: 'Products'
  });
});

router.get('/products/:id/edit', (req, res) => {
  const idEdit = req.params.id;
  res.render('./templates/edit.hbs', {
    pageTitle: 'Edit'
  });
});

router.post('/products', (req, res) => {
  res.send('post products');
});

router.put('/products/:id', (req, res) => {
  res.send('put products id');
});

router.delete('/products/:id', (req, res) => {
  res.send('delete products id');
});

module.exports = router;
