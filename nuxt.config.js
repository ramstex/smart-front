export default {
	buildModules: [
		'@nuxtjs/style-resources',
	],

	css: [
		'~assets/scss/main.scss',
	],

	modules: [
		'@nuxtjs/svg-sprite',
	],

	svgSprite: {
		input: '~/assets/icons',
	}
};
