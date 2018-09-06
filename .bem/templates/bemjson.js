'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
	return [
		"module.exports = {",
		"	block: 'page',",
		"	title: '" + entity.block + "',",
		"	favicon: '/favicon.ico',",
		"	head: [",
		"		{ elem: 'meta', attrs: { name: 'description', content: '' } },",
		"		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },",
		"		{ elem : 'css', url : '../../node_modules/bootstrap/dist/css/bootstrap.min.css' },",
		"		{ elem: 'css', url: '" + entity.block + ".min.css' }",
		"	],",
		"	scripts: [",
		"		{ elem : 'js', url : '../../node_modules/jquery/dist/jquery.min.js'},",
		"		{ elem : 'js', url : '../../node_modules/bootstrap/dist/js/bootstrap.min.js' },",
		"		{ elem: 'js', url: '" + entity.block + ".min.js' }",
		"	],",
		"	mods: { theme: 'islands' },",
		"	content: []",
		"};",
		""
	].join(EOL);
};
