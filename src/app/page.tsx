'use client'

import {FaHandPointDown, FaFaceSmile} from 'react-icons/fa6'
import React from 'react'
import Link from 'next/link'

const handleScrollTo = () => {
	const nextSection = document.getElementById('section-under-hero')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const textSizesPrimary = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold mb-4 dark:text-gray-200 text-center'
const textSizesSecondary =
	'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin text-gray-700 dark:text-white text-center'
const btnSizes = 'rounded-full h-auto w-36 sm:w-40 md:w-46 lg:w-52 xl:w-60 2xl:w-72 p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6'
const btnColors = 'bg-slate-600 hover:bg-gray-800 text-white flex items-center justify-center'
const btnTextSizes = 'text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl'
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
					className={`${textSizesPrimary} font-bold mb-4 text-center text-white`}
				>
					Hello, I am Hector Sanchez
				</h1>
				<p
					id="hero-subtitle"
					aria-label="Subtitle of the website"
					className={`${textSizesSecondary} w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white`}
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
					className={`${btnColors} h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles}`}
				>
					<FaHandPointDown />
				</button>
			</section>

			<section
				id="section-under-hero"
				className="py-20 px-6 bg-white dark:bg-gray-950"
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

			{/* Projects Preview */}
			<section className="py-20 px-6 bg-gray-100" id='projects-section'>
				<div className="max-w-4xl mx-auto">
					<h2 className={textSizesPrimary}>Projects</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{/* Project cards would go here */}
						<div className="p-4 bg-white rounded-xl shadow">
							<h3 className="font-bold text-lg mb-2">Project Name</h3>
							<p className="text-sm text-gray-600">
								Brief description of the project and technologies used.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="py-20 px-6 bg-white text-center">
				<h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
				<p className="mb-6 text-gray-600">
					I am currently open to new opportunities and freelance projects.
				</p>
				<Link
					href="/contact"
					className="inline-block px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
				>
					Contact Me
				</Link>
			</section>
		</main>
	)
}
