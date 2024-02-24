import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as crypto from 'crypto'

export default defineConfig({
	plugins: [remix(), tsconfigPaths()],
	define: {
		__NONCE__: JSON.stringify(crypto.randomBytes(16).toString('hex')),
	},
})
