import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'

import { ScrollDown } from '~/components/hero/scroll-down'
import { Hero } from '~/components/hero/hero'
import { Career } from '~/pages/career'

export function Introduction() {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress, scrollY } = useScroll({
		target: scrollContainerRef,
		offset: ['start start', 'end end'],
	})

	return (
		<div className="min-h-[200vh]" ref={scrollContainerRef}>
			<Hero scrollYProgress={scrollYProgress} />
			<ScrollDown scrollYProgress={scrollYProgress} />
			<Career />
		</div>
	)
}
