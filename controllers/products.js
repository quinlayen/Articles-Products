const express = require('express');
const router = express.Router();

router.get('/products', (req,res)=>{
    res.render('./templates/index.hbs', {
        pageTitle: 'Main Page'
    })
})

router.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    res.render('./templates/products.hbs',{
        pageTitle: 'Products'
    })
})

router.get('/products/:id/edit', (req,res)=>{
    res.send('get products id edit')
})

router.get('/products/new', (req,res)=>{
    res.send('get products new')
})

router.post('/products', (req,res)=>{
    res.send('post products')
})

router.put('/products/:id', (req,res)=>{
    res.send('put products id')
})

router.delete('/products/:id', (req,res)=>{
    res.send('delete products id')
})


module.exports = router;