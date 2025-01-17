/* eslint-disable @typescript-eslint/no-non-null-assertion */
import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import * as tsEslint from 'typescript-eslint'

export default tsEslint.config(
	js.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	tsEslint.configs.strictTypeChecked,
	tsEslint.configs.stylisticTypeChecked,
	prettierRecommended,
	{ name: 'Ignores', ignores: ['build/**/*'] },
	{
		name: 'Main',
		files: ['**/*.{ts,tsx}', 'eslint.config.ts'],
		...react.configs.flat.recommended!,
		...react.configs.flat['jsx-runtime']!,
		...reactHooks.configs['recommended-latest'],
		...jsxA11y.flatConfigs.recommended,
		languageOptions: {
			...react.configs.flat.recommended!.languageOptions,
			...react.configs.flat['jsx-runtime']!.languageOptions,
			...jsxA11y.flatConfigs.recommended.languageOptions,
			parser: tsEslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				jsxPragma: null,
				ecmaVersion: 2025,
				tsconfigRootDir: import.meta.dirname,
				projectService: true,
			},
			globals: {
				...globals.browser,
				...globals.es2025,
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			prettier,
			'@typescript-eslint': tsEslint.plugin,
		},
		rules: {
			...react.configs.flat.recommended!.rules,
			...react.configs.flat['jsx-runtime']!.rules,
			...reactHooks.configs['recommended-latest'].rules,
			...jsxA11y.flatConfigs.recommended.rules,
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-empty-function': [
				'error',
				{ allow: ['private-constructors', 'protected-constructors'] },
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false,
				},
			],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'import-x/extensions': ['warn', { ts: 'never', json: 'never' }],
			'import-x/no-named-as-default-member': 'off',
			'react/jsx-curly-brace-presence': 'warn',
			'react/jsx-no-useless-fragment': 'warn',
			'import-x/no-unresolved': [
				'error',
				{
					ignore: ['^virtual:'],
				},
			],
			'react/jsx-filename-extension': [
				'warn',
				{ extensions: ['.ts', '.tsx'] },
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		name: 'Prettier Warn',
		plugins: {
			prettier,
		},
		rules: {
			'prettier/prettier': 'warn',
		},
	},
)
