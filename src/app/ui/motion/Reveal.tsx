'use client'

import {motion} from 'framer-motion'
import type {ElementType, ReactNode} from 'react'
import {useMemo} from 'react'

type Props = {
	as?: ElementType
	children: ReactNode
	className?: string
	delay?: number
	id?: string
}

export default function Reveal({as = 'div', children, className, delay = 0, id}: Props) {
	const MotionTag = useMemo(() => motion.create(as), [as])

	return (
		<MotionTag
			id={id}
			className={className}
			initial={{opacity: 0, y: 28}}
			whileInView={{opacity: 1, y: 0}}
			viewport={{once: true, amount: 0.2}}
			transition={{duration: 0.55, ease: 'easeOut', delay}}
		>
			{children}
		</MotionTag>
	)
}
