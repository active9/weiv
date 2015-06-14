# WEIV
![WEIV](https://raw.githubusercontent.com/active9/weiv/master/weiv.png)

WEIV is a function-ware designed to act as a function based middle-ware for view engines. The ideology behind it is based on the concept of a view backwards (IE: weiv).

# INSTALLING
Git a copy from the repo and run npm install or use
```bash
npm install weiv --save
```

# USING

Basic usage using express.js and vinegar.js:

Your main express.js script:
```javascript
var weiv = require('weiv');
var config_weiv = require('./configs/vinegar.js'),
    weiv_config = weiv.configure(config_weiv,appdir);

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
```

configs/weiv.js:
```javascript
var Vinegar = require('vinegar');

module.exports = {
	engine: "Vinegar",
        script: "/path/to/assets/js/vinegar/Vinegar.js",
	init: {
		loads_templates: true
	},
	view: function (template, res, data) { return Vinegar.node(template, res, data) } // Raw Method

}
```
See the examples folder for the completed example.

#CONTRIBUTING

We encourage forking. Feel free to fork & pull your new additions, or bug fixes.

#LICENSE
MIT



