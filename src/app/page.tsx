'use client'

import {FaHandPointDown, FaFaceSmile, FaHammer, FaHandshake} from 'react-icons/fa6'
import React from 'react'
import Link from 'next/link'

const handleScrollTo = () => {
	const nextSection = document.getElementById('section-under-hero')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const textSizesPrimary = 'text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 dark:text-gray-200 text-center'
const textSizesSecondary =
	'text-base sm:text-lg xl:text-1xl 2xl:text-2xl font-thin text-gray-700 dark:text-white text-center'
const btnSizes = 'rounded-full h-auto w-36 sm:w-38 md:w-40 lg:w-42 xl:w-48 2xl:w-52 p-2 lg:p-3 xl:p-4 2xl:p-5'
const btnColors = 'bg-slate-600 hover:bg-gray-700 text-white flex items-center justify-center'
const btnTextSizes = 'text-base sm:text-lg xl:text-1xl 2xl:text-2xl'
const btnFlexStyles = 'flex items-center justify-center'

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			{/* Hero Section */}
			<section
				id="hero-section"
				aria-label="Hero Section of the website"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh flex flex-col items-center justify-center bg-[url(/hero.jpg)] bg-center bg-cover bg-no-repeat`}
			>
				<h1
					id="hero-title"
					aria-label="Title of the website"
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-gray-200 font-bold mb-4 text-center text-white`}
				>
					Hello, I am Hector Sanchez
				</h1>
				<p
					id="hero-subtitle"
					aria-label="Subtitle of the website"
					className={`'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin dark:text-white text-center' w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white`}
				>
					Full stack web developer specializing in designing, building, and deploying modern
					websites & web applications.
				</p>
				<button
					id="scroll-down-button"
					type="button"
					aria-label="Scroll down to next section"
					aria-pressed={undefined}
					onClick={handleScrollTo}
					className={`${btnColors} h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles}`}
				>
					<FaHandPointDown />
				</button>
			</section>

			<section
				id="section-under-hero"
				className="py-20 px-6 bg-white dark:bg-gray-900"
				aria-label="Section under hero"
			>
				<div className="max-w-4xl mx-auto mb-12">
					<h2
						className={`${textSizesPrimary}`}
						id="user-summary-title"
						aria-label="User summary title"
					>
						Welcome
					</h2>
					<p
						className={`${textSizesSecondary}`}
						id="user-summary"
						aria-label="User summary"
					>
						With 7+ years of experience in web application development, I craft beautiful,
						accessible, and scalable solutions that deliver high-performant & user-friendly
						experiences. Passionate about clean code & building intuitive user controls that solve
						real business problems.
					</p>
				</div>
				<div className="max-w-4xl mx-auto flex items-center justify-center">
					<Link href={'/about'} className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}>
						About Me
						<FaFaceSmile style={{marginLeft: '10px'}} />
					</Link>
				</div>
			</section>

			{/* Projects */}
			<section className="py-20 px-6 bg-gray-100 dark:bg-gray-950" id='projects-section'>
				<div className="max-w-4xl mx-auto mb-12">
					<h2 className={textSizesPrimary}>Projects</h2>
					<p
						className={`${textSizesSecondary}`}
						id="user-summary"
						aria-label="User summary"
					>
						In web development, the possibilities for creativity are endless. Click the button below to view my portfolio.
					</p>
				</div>
				<div className="max-w-4xl mx-auto flex items-center justify-center">
					<Link href={'/projects'} className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}>
						Projects
						<FaHammer style={{marginLeft: '10px'}} />
					</Link>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="py-20 px-6 bg-white text-center dark:bg-gray-900">
				<div className="max-w-4xl mx-auto mb-12">
					<h2 className={textSizesPrimary}>Let’s Work Together</h2>
					<p className={textSizesSecondary}>
						I am currently open to new opportunities and freelance projects.
					</p>
				</div>
				<div className="max-w-4xl mx-auto flex items-center justify-center">
					<Link href={'/contact'} className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}>
						Contact
						<FaHandshake style={{marginLeft: '10px'}} />
					</Link>
				</div>
			</section>
		</main>
	)
}
