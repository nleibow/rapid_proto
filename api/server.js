var db = require('./models');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost:27017/weeds');

var routes = require('./config/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

  app.get('/api', function getAll(req, res){
  	db.Rev.find({}, function(err, weeds){
  	res.json(weeds);
  })});

    app.post('/api', function newRev(req, res){
    	console.log(req.body)
  db.Rev.create(req.body, function(err, weeds) {
  	console.log(weeds)
  	res.json(weeds);
})});


//yooooooooooo
app.use(routes);

app.listen(3000);
