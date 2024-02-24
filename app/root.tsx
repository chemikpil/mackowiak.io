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
import './tailwind.css'
import { cn } from '~/utils/cn-merge'

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
