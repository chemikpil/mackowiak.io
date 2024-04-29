import type { MetaFunction } from '@remix-run/node'
import { Hero } from '~/components/hero/hero'
import { Header } from '~/components/header'
import { Introduction } from '~/pages/introduction'
import { Career } from '~/pages/career'

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
			<main className="w-full">
				<Introduction />
				<div className="h-[500px]"></div>
			</main>
		</div>
	)
}
