type FlagConfigPlugin =
	import('@typescript-eslint/utils/ts-eslint').FlatConfig.Plugin

type FlatConfigConfig =
	import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config

type FlagConfigPluginWithoutConfigs = Omit<FlagConfigPlugin, 'configs'>

type IConfig = FlatConfigConfig

type IConfigs<T extends string, V = IConfig> = { configs: { [I in T]: V } }

declare module '@eslint/js' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<'recommended' | 'all'>

	export default plugin
}

declare module 'eslint-plugin-import' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<
			| 'recommended'
			| 'errors'
			| 'warnings'
			| 'stage-0'
			| 'react'
			| 'react-native'
			| 'electron'
			| 'typescript'
		>

	export default plugin
}

declare module 'eslint-plugin-json' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<'recommended' | 'recommended-with-comments'>

	export default plugin
}

declare module 'eslint-plugin-jsx-a11y' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<'recommended' | 'strict'>

	export default plugin
}

declare module 'eslint-plugin-security' {
	const plugin: FlagConfigPluginWithoutConfigs & IConfigs<'recommended'>

	export default plugin
}

declare module 'eslint-plugin-prettier' {
	const plugin: FlagConfigPluginWithoutConfigs & IConfigs<'recommended'>

	export default plugin
}

declare module 'eslint-plugin-react' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<'recommended' | 'all' | 'jsx-runtime'>

	export default plugin
}

declare module 'eslint-plugin-react-hooks' {
	const plugin: FlagConfigPluginWithoutConfigs & IConfigs<'recommended'>

	export default plugin
}
