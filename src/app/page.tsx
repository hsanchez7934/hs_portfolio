'use client'

import {FaHandPointDown, FaFaceSmile, FaHammer, FaHandshake} from 'react-icons/fa6'
import {textSizesPrimary, textSizesSecondary, btnFlexStyles, btnColors} from './lib/utils'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const handleScrollTo = () => {
	const nextSection = document.getElementById('home-page-section-under-hero')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const btnSizes =
	'rounded-full h-auto w-36 sm:w-38 md:w-40 lg:w-42 xl:w-48 2xl:w-52 p-2 lg:p-3 xl:p-4 2xl:p-5'
const btnTextSizes = 'text-base sm:text-lg xl:text-1xl 2xl:text-2xl'

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			{/* Hero Section */}
			<section
				id="home-page-hero-section"
				aria-label="Hero Section of the website"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh flex flex-col items-center justify-center bg-[url(/hero.jpg)] bg-center bg-cover bg-no-repeat`}
			>
				<h1
					id="home-page-hero-title"
					aria-label="Title of the website"
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-gray-200 font-bold mb-4 text-center text-white`}
				>
					Hello, I am Hector Sanchez
				</h1>
				<p
					id="home-page-hero-subtitle"
					aria-label="Subtitle of the website"
					className={`'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin dark:text-white text-center' w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white`}
				>
					Senior Front End Engineer specializing in designing, building, and deploying modern
					websites & web applications.
				</p>
				<button
					id="home-page-scroll-down-button"
					type="button"
					aria-label="Click to scroll down to next section"
					aria-pressed={undefined}
					onClick={handleScrollTo}
					className={`${btnColors} h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles}`}
				>
					<FaHandPointDown />
				</button>
			</section>

			<section
				id="home-page-section-under-hero"
				className="py-20 px-6 bg-white dark:bg-gray-900"
				aria-label="Summary section of the website"
			>
				<div className="max-w-4xl mx-auto mb-12">
					<h2
						className={`${textSizesPrimary}`}
						id="user-summary-title"
						aria-label="User summary title"
					>
						Welcome
					</h2>
					<p className={`${textSizesSecondary}`} id="user-summary" aria-label="User summary">
						With 7 years of experience in web application development, I craft beautiful,
						accessible, and scalable solutions that deliver high-performant & user-friendly
						experiences. Passionate about clean code & building intuitive user controls that solve
						real business problems.
					</p>
				</div>
				<div className="max-w-4xl mx-auto flex items-center justify-center">
					<Link
						href={'/about'}
						className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}
					>
						About Me
						<FaFaceSmile style={{marginLeft: '10px'}} />
					</Link>
				</div>
			</section>

			{/* Projects */}
			<section className="py-20 px-6 bg-gray-100 dark:bg-gray-950" id="projects-section">
				<div className="max-w-4xl mx-auto mb-12">
					<h2 className={`mb-10 ${textSizesPrimary}`}>Featured Project</h2>
					<div>
						<p className={`mb-5 ${textSizesSecondary}`} id="user-summary" aria-label="User summary">
							<a
								href='https://hs-ck-2fb0336fc8da.herokuapp.com/'
								className="hover:underline text-cyan-400"
								aria-label="Click the link to visit the Cocktail Explorer project"
							>
								The Cocktail Explorer
							</a>
						</p>
						<p className={`mb-10 ${textSizesSecondary}`} id="user-summary" aria-label="User summary">
							Access a vast and curated collection of cocktail recipes, ranging from timeless classics to contemporary creations.
							Cocktail Explorer boasts a comprehensive database, ensuring users have an extensive array of choices to suit every
							palate and occasion.
						</p>
						<div className="min-h-16 min-w-16">
							<Image
								src={'/ck_img_1.png'}
								alt="Cocktail Explorer project screenshot"
								width={500}
								height={500}
								className="mb-4 h-full w-full object-cover rounded-xl"
							/>
						</div>
					</div>
				</div>
				<div className="max-w-4xl mx-auto mb-12">
					<p className={`mb-5 ${textSizesSecondary}`} id="user-summary" aria-label="User summary">
						Click the button below to navigate to the projects section.
					</p>
				</div>
				<div className="max-w-4xl mx-auto flex items-center justify-center">
					<Link
						href={'/projects'}
						className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}
					>
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
					<Link
						href={'/contact'}
						className={`${btnColors} ${btnSizes} ${btnFlexStyles} ${btnTextSizes}`}
					>
						Contact
						<FaHandshake style={{marginLeft: '10px'}} />
					</Link>
				</div>
			</section>
		</main>
	)
}
