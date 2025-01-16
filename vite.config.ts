import { defineConfig, loadEnv } from 'vite'

import react from '@vitejs/plugin-react'

import { checker } from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const relativeAlias: Record<string, string> = {
	Components: './src/Components',
	Contexts: './src/Contexts',
	Utils: './src/Utils',
	Hooks: './src/Hooks',
	Constants: './src/Constants',
	Api: './src/Api',
	Pages: './src/Pages',
}

export const resolveAlias = Object.entries(relativeAlias).reduce(
	(prev: Record<string, string>, [key, path]) => {
		prev[key] = resolve(__dirname, path)

		return prev
	},
	{},
)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const envPrefix: string[] = ['APP_']

	const { PORT = '3000', OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	return {
		plugins: [
			react(),
			svgr(),
			mode === 'development'
				? checker({
						typescript: true,
						eslint: {
							useFlatConfig: true,
							lintCommand: 'lint:check',
						},
					})
				: null,
		],
		resolve: {
			alias: resolveAlias,
		},
		server: {
			port: parseInt(PORT) || 3000,
			open: OPEN_BROWSER === 'true' ? true : false,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
	}
})
