const express = require('express');
const router = express.Router();
const DS_Products = require('../models/DS_Products');


//renders a page showing all current items
router.get('/products', (req, res) => {
  
  DS_Products.getAllProducts()
  .then( (data)=>{
    //console.log('test',data[3]);
    res.render('./templates/products/index.hbs', {
      pageTitle: 'List of all Products',
      data
    });
  })
});


router.get('/products/new', (req, res) => {
  res.render('./templates/products/new.hbs', {
    pageTitle: 'Add a new product'
  });
});

//renders a page given a specific item id
router.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  DS_Products.getProductById(id)
  .then( (data)=>{
    let selectedProduct = data[0];
    console.log('test', selectedProduct.product_name)
    res.render('./templates/products/products.hbs',{
    pageTitle:`Page for product ${id}`,
    ...selectedProduct
    })

  })
});

//renders a page to allow for an existing item to be changed
router.get('/products/:id/edit', (req, res) => {
  const idEdit = Number(req.params.id);
  const getProductById = DS_Products.getProductById(idEdit)
  res.render('./templates/products/edit.hbs', {
    pageTitle: 'Edit existing product',
    getProductById
  });
});

//creates a new item and then render the index list page
router.post('/products', (req, res) => {
  const newItem = req.body
  DS_Products.createNewItem(newItem);
  res.redirect(`/products`);

});

router.put('/products/:id', (req, res) => {
  console.log(req)
  const editItem = req.body;
  const itemName = req.body.name;
  const idEdit = Number(req.params.id);
  DS_Products.changeItemDetails(idEdit);
  res.render('./templates/products/index.hbs', {
    pageTitle: 'List of all Products',
    completionMessage: `${itemName} has been updated successfully`,
    changeItemDetails
  })
  
});
//create a route for products/submit.  Should be a 
router.post('/submit', (req,res)=>{
const newItem = req.body;
const newPostID = DS_Products.createNewItem(newItem)
res.redirect(`products/${newPostID}`)
})


router.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  DS_Products.deleteItem(id);
  res.redirect('/products')
});

module.exports = router;
