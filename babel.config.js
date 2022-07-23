// eslint-disable-next-line no-undef
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@': './src',
				},
			},
		],
		'styled-components',
	],
}
