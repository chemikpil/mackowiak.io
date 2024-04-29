import { useRef } from 'react'

import { CareerTitle } from '~/components/career/career-title'
import { Companies } from '~/components/career/companies'
import { Tools } from '~/components/career/tools'
import { FadeIn } from '~/components/fade-in'

export function Career() {
	const containerRef = useRef(null)

	return (
		<div className="mx-auto" ref={containerRef}>
			<div className="space-y-16">
				<FadeIn>
					<CareerTitle />
				</FadeIn>

				<FadeIn>
					<Companies />
				</FadeIn>

				<FadeIn>
					<Tools />
				</FadeIn>
			</div>
		</div>
	)
}
