import { Social } from '~/components/social'

export function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="hidden place-items-center justify-between px-10 py-8 text-muted md:flex">
			<p className="text-sm font-light">
				© {year} Michał Maćkowiak. All Rights Reserved.
			</p>
			<Social />
		</footer>
	)
}
