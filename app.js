const express = require('express');
const app = express();
const bp = require('body-parser');
const hbs = require('hbs')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))
app.use(bp.urlencoded({extended: true}));
app.use(require('./controllers'))



app.listen(8080, ()=>{
    console.log('listening on port 8080')
})