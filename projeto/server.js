var express = require('express');
var bodyParser = require('body-parser');
var auth = require('./controller/auth')();
var index = require('./controller/index');
var api = require('./controller/api');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(auth.initialize());//protected

app.use(morgan('dev'));

app.use("/",index);
app.use("/api/",auth.authenticate(),api);

app.listen(3000,()=>{
    console.log('App started port 3000.');
});