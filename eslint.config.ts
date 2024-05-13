import js from '@eslint/js'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import importPlugin from 'eslint-plugin-import'
import json from 'eslint-plugin-json'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import security from 'eslint-plugin-security'
import globals from 'globals'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import tsEslint from 'typescript-eslint'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default tsEslint.config(
	{
		files: ['src/**/*.{ts,tsx,json}', 'vite.config.ts', 'eslint.config.ts'],
		ignores: ['**/*.config.js'],
		languageOptions: {
			parser: tsEslint.parser as FlatConfig.Parser,
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
			'@typescript-eslint': tsEslint.plugin,
		},
		rules: {
			...tsEslint.configs['eslintRecommended'].rules,
			...tsEslint.configs['recommended']
				.map(config => config.rules)
				.reduce((acc, val) => ({ ...acc, ...val }), {}),
			...js.configs['recommended'].rules,
			...react.configs['recommended'].rules,
			...importPlugin.configs['recommended'].rules,
			...importPlugin.configs['typescript'].rules,
			...reactHooks.configs['recommended'].rules,
			...json.configs['recommended'].rules,
			...security.configs['recommended'].rules,
			...prettier.configs['recommended'].rules,
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
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
			'import/no-unresolved': [
				'error',
				{
					ignore: ['^virtual:'],
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
		rules: {
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
				},
			],
		},
	},
)
