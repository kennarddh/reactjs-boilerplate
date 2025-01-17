/* eslint-disable @typescript-eslint/no-non-null-assertion */
import js from '@eslint/js'
import eslintPluginImportX from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import * as tsEslint from 'typescript-eslint'

export default tsEslint.config(
	jsxA11y.flatConfigs.recommended,
	prettierRecommended,
	tsEslint.configs.strictTypeChecked,
	tsEslint.configs.stylisticTypeChecked,
	js.configs.recommended,
	reactPlugin.configs.flat.recommended!,
	reactPlugin.configs.flat['jsx-runtime']!,
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
	reactHooks.configs['recommended-latest'],
	{ ignores: ['build/**/*'] },
	{
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
				tsconfigRootDir: import.meta.dirname,
				projectService: true,
			},
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		plugins: {
			react: reactPlugin,
			prettier,
			'@typescript-eslint': tsEslint.plugin,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'prettier/prettier': [
				'warn',
				{
					endOfLine: 'lf',
				},
			],
			'import-x/prefer-default-export': 'off',
			'linebreak-style': ['error', 'unix'],
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'react/prop-types': 'off',
			'no-case-declarations': 'off',
			'react/jsx-curly-brace-presence': 'warn',
			'react/jsx-no-useless-fragment': 'warn',
			'import-x/no-unresolved': [
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
			'import-x/extensions': ['warn', { ts: 'never', json: 'never' }],
			'import-x/no-named-as-default-member': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
)
