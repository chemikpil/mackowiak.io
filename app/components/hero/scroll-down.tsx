import { type MotionValue, useTransform, motion } from 'framer-motion'

type Props = {
	scrollYProgress: MotionValue
}

export function ScrollDown({ scrollYProgress }: Props) {
	const y = useTransform(scrollYProgress, [0.4, 0.42], [0, 50])
	const opacity = useTransform(scrollYProgress, [0.4, 0.42], [1, 0])

	return (
		<motion.div
			className="before:bg-border fixed inset-x-0 bottom-0 flex h-32 flex-col place-items-center justify-start before:absolute before:bottom-0 before:left-1/2 before:-ml-[0.5px] before:block before:h-24 before:w-px"
			style={{ opacity }}
		>
			<div className="overflow-hidden">
				<motion.p className="text-accent mx-auto uppercase" style={{ y }}>
					Scroll down
				</motion.p>
			</div>
		</motion.div>
	)
}
