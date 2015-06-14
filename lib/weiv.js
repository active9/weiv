var fs = require('fs'),
    weiv = {
	view_ext: "",
	view_engine: "",
	view_script: "",
	view_init: "",
	view_view: ""
}
module.exports = {
	configure: function(options,basedir) {
		weiv.view_ext = options.register;
		weiv.view_engine = options.engine;
		weiv.view_init = options.init;
		weiv.view_view = options.view;
		weiv.view_script = options.script;
	},

	view: function(template,res,data) {
		var view = "";
		if (!weiv.view_init.loads_templates) {
			weiv.view_view(template,res,data);
		} else {
			weiv.view_view(template,res,data);
		}
	}

}