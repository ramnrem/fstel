module.exports = {
	block: 'page',
	title: 'home',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : '../../node_modules/bootstrap/dist/css/bootstrap.min.css' },
		{ elem: 'css', url: 'home.min.css' }
	],
	scripts: [
		{ elem : 'js', url : '../../node_modules/jquery/dist/jquery.min.js'},
		{ elem : 'js', url : '../../node_modules/bootstrap/dist/js/bootstrap.min.js' },
		{ elem: 'js', url: 'home.min.js' }
	],
	mods: { theme: 'islands' },
	content: [
		{
			block:'header',
			tag: 'header',
			content: [
				{
					block: 'container',
					content: "f"
				}
			]
		}
	]
};
