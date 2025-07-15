'use client'

import {FaLinkedin, FaSquareGithub} from 'react-icons/fa6'

const getYear = () => {
	return new Date().getFullYear()
}

export default function Footer() {
	return (
		<footer className="p-10 min-h-36 md:h-96 bg-gray-200 w-full flex flex-col items-center justify-center dark:bg-black">
			<div
				id="footer-social-section"
				aria-label="Footer social media links section"
				className="w-4/5 p-8 flex justify-center items-center"
			>
				<a href="https://www.linkedin.com/in/hector-a-sanchez/" aria-label='Click this link to navigate to linkedin profile'>
					<FaLinkedin className='text-2xl mr-6' />
				</a>

				<a href="https://github.com/hsanchez7934" aria-label='Click this link to navigate to github profile'>
					<FaSquareGithub className='text-2xl ml-6' />
				</a>
			</div>

			<div
				className="w-4/5 p-8"
				style={{borderTop: '1px solid darkgray'}}
				id="footer-copyright-section"
			>
				<p className="text-center text-xs">Created by Hector Sanchez</p>
				<p className="text-center text-xs">{`© Copyright ${getYear()}`}</p>
			</div>
		</footer>
	)
}
