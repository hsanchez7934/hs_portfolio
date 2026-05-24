'use client'

import {motion} from 'framer-motion'
import {FaLinkedin, FaSquareGithub} from 'react-icons/fa6'

const getYear = () => {
	return new Date().getFullYear()
}

export default function Footer() {
	return (
		<footer className="flex min-h-56 w-full flex-col items-center justify-center bg-slate-100 p-10 dark:bg-slate-950">
			<div
				id="footer-social-section"
				aria-label="Footer social media links section"
				className="flex w-4/5 items-center justify-center gap-6 p-8"
			>
				<motion.a
					href="https://www.linkedin.com/in/hector-a-sanchez/"
					aria-label="Click this link to navigate to linkedin profile"
					className="rounded-full p-3 text-3xl text-slate-700 transition hover:bg-white hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
					whileHover={{scale: 1.12, y: -2}}
					whileTap={{scale: 0.96}}
				>
					<FaLinkedin />
				</motion.a>

				<motion.a
					href="https://github.com/hsanchez7934"
					aria-label="Click this link to navigate to github profile"
					className="rounded-full p-3 text-3xl text-slate-700 transition hover:bg-white hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
					whileHover={{scale: 1.12, y: -2}}
					whileTap={{scale: 0.96}}
				>
					<FaSquareGithub />
				</motion.a>
			</div>

			<div
				className="w-4/5 border-t border-slate-300 p-8 text-slate-600 dark:border-white/10 dark:text-slate-300"
				id="footer-copyright-section"
			>
				<p className="text-center text-xs">Created by Hector Sanchez</p>
				<p className="text-center text-xs">{`© Copyright ${getYear()}`}</p>
			</div>
		</footer>
	)
}
