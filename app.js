const express = require('express');
const app = express();
const bp = require('body-parser');
const hbs = require('express-handlebars')
const logger = require('morgan');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

app.engine('hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: __dirname +'/views/layouts/',
    extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'))
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(expressValidator());
app.use(require('./controllers'))
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}))



app.listen(8080, ()=>{
    console.log('listening on port 8080')
})