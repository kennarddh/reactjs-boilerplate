type FlagConfigPlugin =
	import('@typescript-eslint/utils/ts-eslint').FlatConfig.Plugin

type FlatConfigConfig =
	import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config

type FlagConfigPluginWithoutConfigs = Omit<FlagConfigPlugin, 'configs'>

type IConfig = FlatConfigConfig

interface IConfigs<T extends string, V = IConfig> {
	configs: Record<T, V>
}

declare module 'eslint-plugin-react-hooks' {
	const plugin: FlagConfigPluginWithoutConfigs &
		IConfigs<'recommended-latest'>

	export default plugin
}
