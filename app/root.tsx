import {
	json,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react'

import type { LoaderFunctionArgs } from '@remix-run/node'

import { ClientHintCheck, getHints } from '~/utils/client-hints'
import { cn } from '~/utils/cn-merge'

import './tailwind.css'
import { Hero } from '~/components/hero'

export function links() {
	const preloadedFonts = [
		'lexend-deca.woff2',
		'lexend-deca-latin-ext.woff2',
		'lexend-deca-latin.woff2',
	]
	return [
		{ rel: 'icon', href: '/favicon-32.png', sizes: '32x32' },
		{ rel: 'icon', href: '/favicon-128.png', sizes: '128x128' },
		{ rel: 'icon', href: '/favicon-180.png', sizes: '180x180' },
		{ rel: 'icon', href: '/favicon-192.png', sizes: '192x192' },
		...preloadedFonts.map(font => ({
			rel: 'preload',
			as: 'font',
			href: `/fonts/${font}`,
			crossOrigin: 'anonymous',
		})),
	]
}

export function loader({ request }: LoaderFunctionArgs) {
	return json({
		requestInfo: {
			hints: getHints(request),
			path: new URL(request.url).pathname,
		},
	})
}

export default function App() {
	const { requestInfo } = useLoaderData<typeof loader>()

	return (
		<html
			lang="en"
			className={cn(requestInfo.hints.theme, 'h-full overflow-x-hidden')}
		>
			<head>
				<ClientHintCheck nonce={__NONCE__} />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
