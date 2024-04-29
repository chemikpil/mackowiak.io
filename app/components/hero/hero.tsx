import { motion, type MotionValue, useTransform } from 'framer-motion'
import { Title } from '~/components/hero/title'
import { Who } from '~/components/hero/who'
import { Social } from '~/components/social'

type Props = {
	scrollYProgress: MotionValue
}

export function Hero({ scrollYProgress }: Props) {
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2])

	return (
		<div className="sticky top-0 -mt-[--header-height] mb-[500px] flex h-screen flex-col place-items-center justify-center gap-4 overflow-hidden md:gap-12">
			<motion.div style={{ opacity }}>
				<p className="text-1xl md:text-4xl lg:text-6xl">Hi 👋, I'm</p>
			</motion.div>
			<motion.div style={{ opacity, scale }}>
				<Title />
			</motion.div>
			<motion.div style={{ opacity }} className="h-11 w-full md:h-12">
				<Who />
			</motion.div>
			<motion.div style={{ opacity }}>
				<Social
					className="gap-4 md:gap-6"
					iconClassName="w-4 h-4 md:w-6 md:h-6"
				/>
			</motion.div>
		</div>
	)
}
