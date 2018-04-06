const express = require('express');
const router = express.Router();
const DS_Articles = require('../models/DS_Articles')

//gets a list of all articles
router.get('/articles', (req,res)=>{
    const articleList = DS_Articles.getAllArticles()
    res.render('./templates/articles/index.hbs',{
        pageTitle: 'List of all Articles',
        articleList
    })
})
//gets an article based on a title search
router.get('/articles/:title', (req,res)=>{
    const title = req.params.title;
    const specificArticle = DS_Articles.getArticleByTitle(title)
    res.render('/templates/articles/articles.hbs',{
        pageTitle: `Page for ${title}`,
        ...specificArticle
    })
    
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