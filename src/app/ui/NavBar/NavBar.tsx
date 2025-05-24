'use client'

import {useState} from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {FaBars} from 'react-icons/fa6'
import {Typography} from '@mui/material'

const links: {text: string; href: string}[] = [
	{text: 'Home', href: '/'},
	{text: 'About', href: '/about'},
	{text: 'Projects', href: '/projects'},
	{text: 'Contact', href: '/contact'}
]

const renderedLinksLargeView = () => {
	return links.map((link) => {
		return (
			<Link href={link.href} key={link.text} style={{color: '#000', marginLeft: '45px'}}>
				{link.text}
			</Link>
		)
	})
}

const renderedMobileLinks = () => {
	return links.map((link) => {
		return (
			<Link href={link.href} key={link.text}>
				<MenuItem>
					<Typography textAlign="center">{link.text}</Typography>
				</MenuItem>
			</Link>
		)
	})
}

export default function NavBar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<header className="min-h-20 flex bg-white w-full fixed items-center">
			<div className="w-full sm:w-1/2 flex items-center pl-6 sm:pl-12">
				<Image
					src="/head_shot.jpg"
					alt="Headshot of Hector Sanchez"
					width={45}
					height={45}
					className="rounded-full mr-4"
				/>
				<p style={{fontFamily: 'My Font', color: '#000'}} className="text-2xl antialiased">
					Hector Sanchez
				</p>
			</div>

			<div className="hidden sm:w-1/2 sm:flex items-center justify-end pr-12">
				<nav>{renderedLinksLargeView()}</nav>
			</div>

			<Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}} className="sm:hidden">
				<Tooltip title="Open settings">
					<IconButton onClick={handleClick} sx={{p: 0}}>
						<FaBars />
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
		</header>
	)
}
