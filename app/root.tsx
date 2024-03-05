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
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

import './tailwind.css'
import { Menu } from '~/components/menu'

export function links() {
	const preloadedFonts = [
		'lexend-deca.woff2',
		'lexend-deca-latin-ext.woff2',
		'lexend-deca-latin.woff2',
	]
	return [
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
				<div className="flex h-full flex-col">
					<Header />
					<main className="flex flex-1 place-items-center">
						<Menu />
						<Outlet />
					</main>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
