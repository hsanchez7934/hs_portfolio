'use client'

import clsx from 'clsx'
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
		const navLinksClassName = 'dark:text-white'
		return links.map((link) => {
			return (
				<Link
					href={link.href}
					key={link.text}
					style={{marginLeft: '45px'}}
					className={clsx(pathName === link.href ? {} : navLinksClassName, {
						'underline text-cyan-400 dark:text-cyan-400': pathName === link.href
					})}
				>
					{link.text}
				</Link>
			)
		})
	}

	const renderedMobileLinks = () => {
		const navLinksClassName = 'text-black'
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
		<header className="min-h-20 flex bg-white w-full fixed items-center dark:bg-black" style={{zIndex: 1000}}>
			<div className="w-4/5 sm:w-1/2 flex items-center pl-6 sm:pl-12">
				<Link href={'/'}>
					<Image
						src="/head_shot.jpg"
						alt="Headshot of Hector Sanchez"
						width={45}
						height={45}
						className="rounded-full mr-4"
					/>
				</Link>
				<Link href={'/'}>
					<p style={{fontFamily: 'My Font'}} className="text-2xl antialiased">
						Hector Sanchez
					</p>
				</Link>
			</div>

			<div className="hidden sm:w-1/2 sm:flex items-center justify-end pr-12">
				<nav>{renderedLinksLargeView()}</nav>
			</div>

			<div className="flex w-1/5 sm:hidden items-center justify-end pr-6">
				<Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
					<Tooltip title="Open settings">
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
		</header>
	)
}
