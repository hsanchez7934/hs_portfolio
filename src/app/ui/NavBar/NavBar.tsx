'use client'

import clsx from 'clsx'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {usePathname} from 'next/navigation'

import Box from '@mui/material/Box'
import {FaBars} from 'react-icons/fa6'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import {Typography} from '@mui/material'

const links: {text: string; href: string}[] = [
	{text: 'Home', href: '/'},
	{text: 'About', href: '/about'},
	{text: 'Projects', href: '/projects'},
	{text: 'Contact', href: '/contact'}
]

export default function NavBar() {
	const pathName = usePathname()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const renderedLinksLargeView = () => {
		const navLinksClassName =
			'rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white'
		return links.map((link) => {
			return (
				<Link
					href={link.href}
					key={link.text}
					className={clsx(pathName === link.href ? {} : navLinksClassName, {
						'rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300':
							pathName === link.href
					})}
				>
					{link.text}
				</Link>
			)
		})
	}

	const renderedMobileLinks = () => {
		const navLinksClassName = 'text-slate-950'
		return links.map((link) => {
			return (
				<Link
					href={link.href}
					key={link.text}
					className={clsx(navLinksClassName, {
						'underline text-cyan-400 dark:text-cyan-400': pathName === link.href
					})}
				>
					<MenuItem onClick={handleClose}>
						<Typography textAlign="center">{link.text}</Typography>
					</MenuItem>
				</Link>
			)
		})
	}

	return (
		<motion.header
			className="fixed z-[1000] flex min-h-20 w-full items-center border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
			initial={{y: -24, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{duration: 0.45, ease: 'easeOut'}}
		>
			<div className="flex w-4/5 items-center pl-6 sm:w-1/2 sm:pl-12">
				<Link href={'/'}>
					<Image
						src="/IMG_0566.jpeg"
						alt="Headshot of Hector Sanchez"
						width={45}
						height={45}
						className="rounded-full mr-4"
					/>
				</Link>
				<Link href={'/'}>
					<p style={{fontFamily: 'My Font'}} className="text-2xl text-slate-950 antialiased dark:text-white">
						Hector Sanchez
					</p>
				</Link>
			</div>

			<div className="hidden items-center justify-end pr-12 sm:flex sm:w-1/2">
				<nav className="flex items-center gap-2">{renderedLinksLargeView()}</nav>
			</div>

			<div className="flex w-1/5 items-center justify-end pr-6 sm:hidden">
				<Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
					<Tooltip title="Open navigation">
						<IconButton onClick={handleClick} sx={{p: 0}}>
							<FaBars className="dark:text-white text-black" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{mt: '45px'}}
						id="userSettingMenu"
						anchorEl={anchorEl}
						anchorOrigin={{vertical: 'top', horizontal: 'right'}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						{renderedMobileLinks()}
					</Menu>
				</Box>
			</div>
		</motion.header>
	)
}
