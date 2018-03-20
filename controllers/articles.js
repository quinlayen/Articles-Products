const express = require('express');
const router = express.Router();

router.get('/articles', (req,res)=>{
    res.send('get articles')
})

router.get('/articles/:title', (req,res)=>{
    res.send('get articles title')
})

router.get('/articles/:title/edit', (req,res)=>{
    res.send('get articles title edit')
})

router.get('articles/new', (req,res)=>{
    res.send('get articles new')
})


router.post('articles', (req,res)=>{
    res.send('post articles')
})

router.put('articles/:id', (req,res)=>{
    res.send('put articles id')
})

router.delete('articles/:id', (req,res)=>{
    res.send('delete articles id')
})

module.exports = router;