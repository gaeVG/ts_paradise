const { HTMLTheme } = require('fliegdoc');

module.exports = {
	baseUrl: '/',
	outDir: './docs',
	readme: './README.md',
	modules: [
		{
			package: './package.json',
			tsconfig: './src/server/tsconfig.json',
			mainFile: './src/server/index.ts'
		}
	],
	title: 'Documentation',
	externalLinks: {}, // e.g.: { "GitHub": "https://github.com/fliegwerk/fliegdoc" }
	hidePrivateMembers: true,
	theme: HTMLTheme
};