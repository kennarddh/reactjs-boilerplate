// eslint-disable-next-line no-undef
module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
	},
	overrides: [
		{
			files: ['vite.config.ts', '.eslintrc.js'],
			parserOptions: {
				ecmaFeatures: {
					jsx: false,
				},
				project: 'tsconfig.node.json',
			},
		},
	],
	globals: {
		process: 'readonly',
		__dirname: 'readonly',
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended',
		'plugin:json/recommended',
		'plugin:security/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['react', 'prettier', 'jsx-a11y', '@typescript-eslint'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.json'],
	},
	settings: {
		'import/extensions': ['ts', 'tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['ts', 'tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
			alias: {
				map: [['.', './src']],
				extensions: ['ts', 'tsx'],
			},
			typescript: {},
		},
		react: {
			version: 'detect',
		},
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'lf',
			},
		],
		'import/prefer-default-export': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/prop-types': 'off',
		'no-case-declarations': 'off',
		'react/jsx-curly-brace-presence': 'warn',
		'react/jsx-no-useless-fragment': 'warn',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'react/react-in-jsx-scope': 'off',
	},
}
