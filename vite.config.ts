import { defineConfig, loadEnv } from 'vite'

// Plugin
import eslintPlugin from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const envPrefix = ['APP_']

	const { PORT = 3000, OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	const appEnv = loadEnv(mode, process.cwd(), envPrefix)

	return defineConfig({
		plugins: [react(), eslintPlugin(), svgr()],
		resolve: {
			alias: {
				Components: resolve(__dirname, './src/Components'),
				Contexts: resolve(__dirname, './src/Contexts'),
				Utils: resolve(__dirname, './src/Utils'),
				Hooks: resolve(__dirname, './src/Hooks'),
				Constants: resolve(__dirname, './src/Constants'),
				Api: resolve(__dirname, './src/Api'),
			},
		},
		server: {
			port: PORT || 3000,
			open: OPEN_BROWSER === 'true' ? true : false,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
		define: {
			env: { ...appEnv },
		},
	})
}
