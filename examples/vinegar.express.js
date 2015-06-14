var express = require('express');
var app = express();
var weiv = require('weiv');
var config_weiv = require('./configs/weiv.js');
var appdir = __dirname;
var weiv_config = weiv.configure(config_weiv,appdir);

app.use(function( req, res, next) {
	res.weiv = weiv;
	next();
});

// now use vinegar.express
app.get('/', function(req, res) {
	var template = "./views/index.html";
	vinegar.express(template,res,[{
	  res.weiv.view(template, res, [{VARIABLE: "Hello World"}]);
	});
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});