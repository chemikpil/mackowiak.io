import type { MetaFunction } from '@remix-run/node'
import { Hero } from '~/components/hero'
import { Header } from '~/components/header'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Michal Maćkowiak' },
		{
			name: 'description',
			content:
				'Michał Maćkowiak - Frontend Engineer / Hobbyist Photographer / Traveler / Gamer',
		},
	]
}

export default function Index() {
	return (
		<div className="flex min-h-full flex-col">
			<Header />
			<Hero />
			<main className="h-screen w-full"></main>
		</div>
	)
}
