'use client'

import {motion} from 'framer-motion'
import type {ReactNode} from 'react'

import {
	heroContentStyles,
	heroOverlayStyles,
	heroSectionStyles,
	heroSubtitleStyles,
	heroTitleStyles
} from '@/app/lib/utils'

type Props = {
	backgroundClassName: string
	children?: ReactNode
	id: string
	subtitle: string
	subtitleId: string
	title: string
	titleId: string
}

export default function PageHero({
	backgroundClassName,
	children,
	id,
	subtitle,
	subtitleId,
	title,
	titleId
}: Props) {
	return (
		<section id={id} className={`${heroSectionStyles} ${backgroundClassName}`}>
			<div className={heroOverlayStyles} />
			<div className={heroContentStyles}>
				<motion.h1
					id={titleId}
					className={heroTitleStyles}
					initial={{opacity: 0, y: 24}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.7, ease: 'easeOut'}}
				>
					{title}
				</motion.h1>
				<motion.p
					id={subtitleId}
					className={heroSubtitleStyles}
					initial={{opacity: 0, y: 24}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.7, ease: 'easeOut', delay: 0.12}}
				>
					{subtitle}
				</motion.p>
				<motion.div
					className="mt-10"
					initial={{opacity: 0, y: 18}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, ease: 'easeOut', delay: 0.26}}
				>
					{children}
				</motion.div>
			</div>
		</section>
	)
}
