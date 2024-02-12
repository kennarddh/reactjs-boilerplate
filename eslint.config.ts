import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { Linter } from 'eslint'
import importPlugin, {
	configs as importPluginConfigs,
} from 'eslint-plugin-import'
import json from 'eslint-plugin-json'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import security from 'eslint-plugin-security'
import globals from 'globals'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config: Linter.FlatConfig[] = [
	{
		files: ['src/**/*.{ts,tsx,json}', 'vite.config.ts', 'eslint.config.ts'],
		ignores: ['**/*.config.js'],
		languageOptions: {
			parser: typescriptParser,
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
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			security,
			prettier,
			json,
			import: importPlugin,
			'jsx-a11y': jsxA11y,
			'@typescript-eslint': ts,
		},
		rules: {
			...ts.configs['eslint-recommended'].rules,
			...ts.configs.recommended.rules,
			...js.configs.recommended.rules,
			...react.configs['recommended'].rules,
			...importPluginConfigs['recommended'].rules,
			...importPluginConfigs['typescript'].rules,
			...reactHooks.configs['recommended'].rules,
			...json.configs['recommended'].rules,
			...security.configs['recommended'].rules,
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
			'react/jsx-filename-extension': [
				1,
				{ extensions: ['.ts', '.tsx'] },
			],
			'react/react-in-jsx-scope': 'off',
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
	},
	{
		files: ['vite.config.ts'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: false,
				},
				project: 'tsconfig.node.json',
			},
			globals: {
				process: 'readonly',
			},
		},
	},
	{
		files: ['eslint.config.ts'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: false,
				},
				project: 'tsconfig.eslint.json',
			},
		},
	},
]

export default config
