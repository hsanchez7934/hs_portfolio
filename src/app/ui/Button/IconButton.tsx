'use client'

import {motion} from 'framer-motion'
import type {Transition} from 'framer-motion'
import Link from 'next/link'
import type {ButtonHTMLAttributes, ReactNode} from 'react'
import type {UrlObject} from 'url'
import clsx from 'clsx'

import {btnColors, btnFlexStyles, btnSizes, iconBtnSizes} from '@/app/lib/utils'

type CommonProps = {
	ariaLabel?: string
	children?: ReactNode
	className?: string
	href?: string | UrlObject
	icon?: ReactNode
	iconOnly?: boolean
	id?: string
}

type NativeButtonProps = CommonProps &
	Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'name' | 'onClick' | 'type' | 'value'>

const transition: Transition = {type: 'spring', stiffness: 420, damping: 28}

const motionProps = {
	whileHover: {scale: 1.03, y: -2},
	whileTap: {scale: 0.98},
	transition
}

export default function IconButton(props: NativeButtonProps) {
	const {ariaLabel, children, className, disabled, href, icon, iconOnly = false, id, name, onClick, type = 'button', value} = props
	const classes = clsx(btnColors, btnFlexStyles, iconOnly ? iconBtnSizes : btnSizes, className)
	const content = (
		<>
			{icon}
			{!iconOnly && children}
		</>
	)

	if (href) {
		return (
			<motion.div {...motionProps}>
				<Link href={href} id={id} className={classes} aria-label={ariaLabel}>
					{content}
				</Link>
			</motion.div>
		)
	}

	return (
		<motion.button
			{...motionProps}
			type={type}
			id={id}
			onClick={onClick}
			disabled={disabled}
			name={name}
			value={value}
			className={classes}
			aria-label={ariaLabel}
		>
			{content}
		</motion.button>
	)
}
