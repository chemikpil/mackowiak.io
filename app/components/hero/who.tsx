import { useEffect, useRef, useState } from 'react'
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion'

import { breakpoints, useMediaQuery } from '~/hooks/useMediaQuery'

const items = [
	'👨🏻‍💻 Frontend Engineer',
	'📸 Amateur Photographer',
	'🏝️ Traveler',
	'🎮 Gamer',
	'⚽️ Football Fan',
]

function Item({ mv, index }: { mv: MotionValue; index: number }) {
	const [height, setHeight] = useState(48)
	const md = useMediaQuery(breakpoints.md)

	useEffect(() => {
		setHeight((md ? 32 : 28) + 16)
	}, [md])

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
		<motion.p style={{ y }} className="absolute p-2 text-xl md:text-3xl">
			{items[index]}
		</motion.p>
	)
}

export function Who() {
	const [current, setCurrent] = useState(0)
	const time = useRef<number | null>(null)

	const animatedValue = useSpring(current, { bounce: 0 })

	useEffect(() => {
		animatedValue.set(current)
	}, [current])

	useEffect(() => {
		const playAnimation = (timestamp: number) => {
			if (!time.current || timestamp - time.current > 3000) {
				time.current = timestamp
				setCurrent(current => current + 1)
			}

			requestAnimationFrame(playAnimation)
		}

		requestAnimationFrame(playAnimation)
	}, [])

	return (
		<div className="w-full overflow-hidden">
			<div className="relative flex h-11 w-full justify-center md:h-12">
				{items.map((_, index) => (
					<Item mv={animatedValue} index={index} key={index} />
				))}
			</div>
		</div>
	)
}
