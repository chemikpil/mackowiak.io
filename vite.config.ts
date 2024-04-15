import { vitePlugin as remix } from '@remix-run/dev'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as crypto from 'crypto'

export default defineConfig({
	plugins: [remix(), tsconfigPaths(), tailwindcss()],
	define: {
		__NONCE__: JSON.stringify(crypto.randomBytes(16).toString('hex')),
	},
})
