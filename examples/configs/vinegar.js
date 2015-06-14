// Install via: npm install vinegar --save
var Vinegar = require('vinegar');

module.exports = {
	engine: "Vinegar",
        script: "../../node_modules/vinegar/Vinegar.js",
	init: {
		loads_templates: true
	},
	view: function (template, res, data) { return Vinegar.node(template, res, data) } // Raw Method

}