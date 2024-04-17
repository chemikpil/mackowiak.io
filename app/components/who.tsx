import { useEffect, useState } from 'react'
import {
	AnimatePresence,
	motion,
	MotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'

import { useMediaQuery, breakpoints } from '~/hooks/useMediaQuery'

const items = [
	'👨🏻‍💻 Frontend Engineer',
	'📸 Amateur Photographer',
	'🏝️ Traveler',
	'🎮 Gamer',
	'⚽️ Football Fan',
]

function Item({
	mv,
	index,
	height,
}: {
	mv: MotionValue
	index: number
	height: number
}) {
	let y = useTransform(mv, latest => {
		const length = items.length
		const placedValue = latest % length
		const offset = (length + index - placedValue) % length
		let memo = height * offset

		if (offset > 2) {
			memo -= 5 * height
		}

		return memo
	})

	return (
		<motion.p
			style={{ y }}
			className="absolute p-2 text-xl md:text-2xl lg:text-4xl"
		>
			{items[index]}
		</motion.p>
	)
}

export function Who() {
	const [current, setCurrent] = useState(0)
	const [height, setHeight] = useState(0)
	const animatedValue = useSpring(current, { bounce: 0 })
	const lg = useMediaQuery(breakpoints.lg)
	const md = useMediaQuery(breakpoints.md)

	useEffect(() => {
		setHeight((lg ? 40 : md ? 32 : 28) + 16)
	}, [])

	useEffect(() => {
		animatedValue.set(current)
	}, [current])

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(current => current + 1)
		}, 2000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="w-full overflow-hidden">
			<div style={{ height }} className="relative flex w-full justify-center">
				{items.map((_, index) => (
					<Item mv={animatedValue} index={index} key={index} height={height} />
				))}
			</div>
		</div>
	)
}
