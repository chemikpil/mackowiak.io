import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
	'👨🏻‍💻 Frontend Engineer',
	'📸 Amateur Photographer',
	'🏝️ Traveler',
	'🎮 Gamer',
	'⚽️ Football Fan',
]

const animationConfig = {
	initial: { opacity: 0, y: 50 },
	enter: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export function Who() {
	const [current, setCurrent] = useState(0)
	const { initial, enter, exit } = animationConfig

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(current => (current + 1) % items.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex w-full justify-center">
			<AnimatePresence initial={false} mode="popLayout">
				<motion.p
					initial={initial}
					animate={enter}
					exit={exit}
					className="whitespace-nowrap text-xl md:text-2xl lg:text-4xl"
					key={current}
				>
					{items[current]}
				</motion.p>
			</AnimatePresence>
		</div>
	)
}
