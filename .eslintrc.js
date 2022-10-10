// eslint-disable-next-line no-undef
module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	/*
	Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
	The file does not match your project config: <fileName>.
	The file must be included in at least one of the projects provided.
	*/
	ignorePatterns: [
		'vite.config.ts',
		'babel.config.js',
		'.eslintrc.js',
		'jest.config.ts',
		'jest.setup.ts',
	],
	globals: {
		process: 'readonly',
		env: 'readonly',
		__dirname: 'readonly',
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended',
		'plugin:jest/all',
		'plugin:json/recommended',
		'plugin:security/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['react', 'prettier', 'jsx-a11y', 'jest', '@typescript-eslint'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
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
		jest: {
			// eslint-disable-next-line no-undef
			version: require('jest/package.json').version,
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
