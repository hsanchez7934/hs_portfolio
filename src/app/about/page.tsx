'use client'

import {FaHandPointDown} from 'react-icons/fa6'
import {textSizesPrimary, btnColors, btnFlexStyles, textSizesSecondary} from '../lib/utils'
import {technicalSkills, workHistory} from '../lib/data'

const handleScrollTo = () => {
	const nextSection = document.getElementById('section-under-hero-technical-skills')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const renderedSkillsMobile = technicalSkills.map(
	({label, value}: {label: string; value: string}, index: number) => {
		return (
			<li
				key={index}
				className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-black dark:text-white mb-3 sm:text-center"
				aria-label="Technical skill"
			>
				<span
					className="font-semibold dark:text-gray-500 sm:block"
					aria-label="Technical skill label"
				>
					{label}:{' '}
				</span>
				{value}
			</li>
		)
	}
)

const renderedWorkHistory = workHistory.map((item: string, index: number) => {
	return (
		<li
			key={index}
			className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-black dark:text-white mb-3"
		>
			{item}
		</li>
	)
})

export default function About() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			<section
				id="about-me-hero-section"
				aria-label="Hero Section of the about me page"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh flex flex-col items-center justify-center bg-[url(/about-hero.jpg)] bg-center bg-cover bg-no-repeat`}
			>
				<h1
					id="about-me-hero-title"
					aria-label="About me title of the website"
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-gray-200 font-bold mb-4 text-center text-white`}
				>
					Professional Summary
				</h1>
				<p
					id="about-me-hero-subtitle"
					aria-label="About me subtitle of the website"
					className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin dark:text-white text-center' w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white"
				>
					Senior Front End Engineer with 7 years of experience
					delivering high-performant, scalable, and user focused web applications.
				</p>
				<button
					id="aboutme-scroll-down-button"
					type="button"
					aria-label="Scroll down to next section of about me page"
					aria-pressed={undefined}
					onClick={handleScrollTo}
					className={`${btnColors} h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles}`}
				>
					<FaHandPointDown />
				</button>
			</section>

			<section
				id="section-under-hero-technical-skills"
				className="py-20 px-6 bg-white dark:bg-gray-900"
				aria-label="Section under hero, technical skills"
			>
				<p
					id="about-me-hero-subtitle"
					aria-label="About me subtitle of the website"
					className="max-w-screen-xl ml-auto mr-auto mb-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin text-black dark:text-white text-center p-6"
				>
					Specialized in JavaScript, TypeScript, React.js, Next.js, for modern UI development.
					Proven ability to own front end architecture, lead cross functional collaborations, and
					implement design systems. Passionate about clean code, accessibility, and building
					intuitive user experiences that solve real business problems.
				</p>
				<div className="max-w-4xl mx-auto mb-12">
					<h2
						className={`${textSizesPrimary}`}
						id="technical-skills-title"
						aria-label="Technical skills title"
					>
						Technical Skills
					</h2>
					<div>
						<ul>{renderedSkillsMobile}</ul>
					</div>
				</div>
			</section>

			<section
				className="py-20 px-6 bg-gray-100 dark:bg-gray-950"
				id="about-me-professional-experience"
				aria-label="Professional experience section"
			>
				<h2 id="work-history-title" className={textSizesPrimary}>
					Professional Experience
				</h2>
				<p
					id="opentext-work-history-title"
					className="text-center text-base sm:text-lg xl:text-1xl 2xl:text-2xl font-semibold dark:text-gray-500"
				>
					Software Engineer
				</p>
				<p
					id="opentext-work-history-title"
					className="text-center text-base sm:text-lg xl:text-1xl 2xl:text-2xl mb-5 font-semibold dark:text-gray-500"
				>
					OpenText Core Insight - 2018 - 2025
				</p>
				<ul className="max-w-screen-xl ml-auto mr-auto list-disc w-60 sm:w-4/5">{renderedWorkHistory}</ul>
			</section>

			<section
				className="py-20 px-6 bg-white dark:bg-gray-800"
				id="about-me-professional-experience"
				aria-label="Professional experience section"
			>
				<h2 id="work-history-title" className={textSizesPrimary}>
					Education
				</h2>
				<p
					id="opentext-work-history-title"
					className="text-center text-base sm:text-lg xl:text-1xl 2xl:text-2xl font-semibold dark:text-gray-500"
				>
					Turing School of Software & Design
				</p>
				<p
					id="opentext-work-history-title"
					className="text-center text-base sm:text-lg xl:text-1xl 2xl:text-2xl mb-5 font-semibold dark:text-gray-500"
				>
					Front End Engineering Certificate - 2017 - 2018
				</p>
				<p className={textSizesSecondary}>
					Immersive training in JavaScript, responsive web design, client side architecture, and
					modern front end development techniques.
				</p>
			</section>
		</main>
	)
}
