import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

import { Logo } from '~/components/logo'
import { Title } from '~/components/title'
import { Who } from '~/components/who'
import { Social } from '~/components/social'

export function Hero() {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: scrollContainerRef,
		offset: ['start start', 'end end'],
	})
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2])

	return (
		<div className="min-h-[200vh]" ref={scrollContainerRef}>
			<div className="sticky top-0 -mt-[--header-height] flex h-screen flex-col place-items-center justify-center gap-4 md:gap-12">
				<p className="text-1xl md:text-4xl lg:text-6xl">Hi 👋, I'm</p>
				<motion.div style={{ opacity, scale }}>
					<Title />
				</motion.div>
				<Who />
				<Social
					className="gap-4 md:gap-6"
					iconClassName="w-4 h-4 md:w-6 md:h-6"
				/>
			</div>
		</div>
	)
}
