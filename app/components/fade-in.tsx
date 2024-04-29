import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function FadeIn({
	children,
	margin = '0px 0px -30% 0px',
}: {
	children: ReactNode
	margin?: string
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 75 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: margin }}
		>
			{children}
		</motion.div>
	)
}
