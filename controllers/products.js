const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const DS_Products = require('../models/DS_Products');

router.get('/products', (req, res) => {
    const productList = DS_Products.getAllProducts();
  res.render('./templates/products/index.hbs', {
    pageTitle: 'List of all Products',
    productList
  });
});
router.get('/products/new', (req, res) => {
  res.render('./templates/products/new.hbs', {
    pageTitle: 'New'
  });
});

router.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  res.render('./templates/products/products.hbs', 
    DS_Products.getProductById(id))
});

router.get('/products/:id/edit', (req, res) => {
  const idEdit = Number(req.params.id);
  const getProductById = DS_Products.getProductById(idEdit)
  res.render('./templates/products/edit.hbs', {
    pageTitle: 'Edit',
    getProductById
  });
});

router.post('/products', (req, res) => {
  const newItem = req.body
  
  postNewItem = DS_Products.postNewItem(newItem);
  res.render('./templates/products/index.hbs', {
    pageTitle: 'List of all Products',
    postNewItem,
    
  });
});

router.put('/products/:id', (req, res) => {
  const editItem = req.body;
  const idEdit = Number(req.params.id);
  console.log('idEdit', idEdit);
  console.log('editItem', editItem);
  DS_Products.changeItemDetails(idEdit)
  
});

router.delete('/products/:id', (req, res) => {
  res.send('delete products id');
});

module.exports = router;
