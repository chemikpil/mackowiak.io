import { motion } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

import { CareerTitle } from '~/components/career/career-title'
import { Companies } from '~/components/career/companies'
import { Tools } from '~/components/career/tools'

function FadeIn({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 75 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: '0px 0px -30% 0px' }}
		>
			{children}
		</motion.div>
	)
}

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
