/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly APP_ENV: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const env: ImportMetaEnv
