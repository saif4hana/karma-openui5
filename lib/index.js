var initOpenUI5 = function (files, ui5Config) {
	files.unshift({pattern: ui5Config.path, included: true, watched: false, served: false});
	files.unshift({pattern: __dirname + '/adapter.js', included: true, served: true, watched: false});
};

initOpenUI5.$inject = ['config.files', 'config.ui5'];

module.exports = {
	'framework:openui5': ['factory', initOpenUI5]
};