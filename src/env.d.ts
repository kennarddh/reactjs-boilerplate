/// <reference types="vite/client" />

// Declare env types here
interface ImportMetaEnv {
	readonly APP_ENV: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const env: ImportMetaEnv
