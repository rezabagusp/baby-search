var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var pyshell = require('python-shell');
var fetch = require('node-fetch');
//routes
var auth = require('./routes/auth');
var predict = require('./routes/predict');
var matkul = require('./routes/matakuliah');
var retrieve = require('./routes/retrieve');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.send('Hello World');
});

//using router
app.use('/auth', auth);
app.use('/predict', predict);
app.use('/matkul', matkul);
app.use('/retrieve', retrieve);
app.use('*', function(req, res, next){
  res.json({status:false, message:'non API implemented'})
})

module.exports = app;