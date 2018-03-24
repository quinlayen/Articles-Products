const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const DS_Products = require('../models/DS_Products');

router.get('/products', (req, res) => {
    const productList = DS_Products.getAllProducts();
  res.render('./templates/index.hbs', {
    pageTitle: 'List of all Products',
    productList
  });
});
router.get('/products/new', (req, res) => {
  res.render('./templates/new.hbs', {
    pageTitle: 'New'
  });
});

router.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const productDetails = DS_Products.getProductById();
  res.render('./templates/products.hbs', {
    pageTitle: 'Products by ID',
    productDetails
  });
});

router.get('/products/:id/edit', (req, res) => {
  const idEdit = Number(req.params.id);
  res.render('./templates/edit.hbs', {
    pageTitle: 'Edit'
  });
});

router.post('/products', (req, res) => {
  const newItem = req.body
  postNewItem = DS_Products.postNewItem(newItem);
  //console.log('req.body', req.body);
  res.render('./templates/index.hbs', {
    pageTitle: 'List of all Products',
    postNewItem
  });
});

router.put('/products/:id', (req, res) => {
  res.send('put products id');
});

router.delete('/products/:id', (req, res) => {
  res.send('delete products id');
});

module.exports = router;
