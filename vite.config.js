import { defineConfig, loadEnv } from 'vite'

import eslintPlugin from 'vite-plugin-eslint'

import { resolve } from 'path'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const envPrefix = ['APP_']

	const { PORT, OPEN_BROWSER } = { ...loadEnv(mode, process.cwd(), '') }

	const appEnv = loadEnv(mode, process.cwd(), envPrefix)

	return defineConfig({
		plugins: [react(), eslintPlugin()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
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
			process: {
				env: { ...process.env, appEnv },
			},
		},
	})
}
