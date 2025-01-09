/// <reference types="vite/client" />

// Declare env types here
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {}

interface ImportMeta {
	readonly env: Readonly<ImportMetaEnv>
}
