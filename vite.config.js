import { defineConfig, loadEnv } from 'vite'

import eslintPlugin from 'vite-plugin-eslint'

import { resolve } from 'path'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const { PORT } = { ...loadEnv(mode, process.cwd(), '') }

	return defineConfig({
		plugins: [react(), eslintPlugin()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			port: PORT || 3000,
			open: true,
		},
		envPrefix: ['APP_'],
		build: {
			outDir: 'build',
		},
	})
}
