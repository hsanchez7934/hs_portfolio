'use client'

import {FaHandPointDown, FaFaceSmile, FaHammer, FaHandshake} from 'react-icons/fa6'
import {
	cardStyles,
	sectionInnerStyles,
	sectionStyles,
	textSizesPrimary,
	textSizesSecondary
} from './lib/utils'
import React from 'react'
import Image from 'next/image'
import IconButton from './ui/Button/IconButton'
import PageHero from './ui/Hero/PageHero'
import Reveal from './ui/motion/Reveal'

const handleScrollTo = () => {
	const nextSection = document.getElementById('home-page-section-under-hero')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const firstFrontEndJobStartDate = new Date(2018, 8, 10)

const getYearsOfExperience = (startDate: Date) => {
	const today = new Date()
	let yearsOfExperience = today.getFullYear() - startDate.getFullYear()
	const hasNotReachedAnniversary =
		today.getMonth() < startDate.getMonth() ||
		(today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())

	if (hasNotReachedAnniversary) {
		yearsOfExperience -= 1
	}

	return yearsOfExperience
}

export default function Home() {
	const yearsOfExperience = getYearsOfExperience(firstFrontEndJobStartDate)

	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20 dark:bg-slate-950">
			<PageHero
				id="home-page-hero-section"
				backgroundClassName="bg-[url(/hero.jpg)]"
				title="Hello, I am Hector Sanchez"
				titleId="home-page-hero-title"
				subtitle="Front End Software Developer"
				subtitleId="home-page-hero-subtitle"
			>
				<IconButton
					id="home-page-scroll-down-button"
					aria-label="Click this button to scroll down to next section of this website."
					onClick={handleScrollTo}
					icon={<FaHandPointDown />}
					iconOnly
					className="animate-bounce"
				/>
			</PageHero>

			<section id="home-page-section-under-hero" className={`${sectionStyles} bg-white dark:bg-slate-950`}>
				<Reveal className={`${sectionInnerStyles} ${cardStyles} text-center`}>
					<h2 className={`${textSizesPrimary}`} id="user-summary-title">
						Welcome
					</h2>
					<p className={`${textSizesSecondary} mx-auto max-w-4xl`} id="user-summary">
						I am a Front-End Engineer with {yearsOfExperience}+ years of experience building
						products that people enjoy using. I care deeply about creating fast, accessible, and
						intuitive experiences through clean code and thoughtful design. My focus is building
						technology that not only works well, but solves real problems and delivers value.
					</p>
					<div className="mt-10 flex items-center justify-center">
						<IconButton
						href={'/about'}
							icon={<FaFaceSmile />}
					>
						About Me
						</IconButton>
					</div>
				</Reveal>
			</section>

			<section className={`${sectionStyles} bg-slate-50 dark:bg-slate-900`} id="projects-section">
				<Reveal className={sectionInnerStyles}>
					<h2 className={`${textSizesPrimary} mb-10`}>Featured Project</h2>
					<div className={`${cardStyles} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
						<div>
							<p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300 lg:text-left">
								Project Spotlight
							</p>
							<p className={`${textSizesSecondary} mb-5 lg:text-left`}>
							<a
								href="https://hs-ck-2fb0336fc8da.herokuapp.com/"
								className="font-semibold text-cyan-600 hover:underline dark:text-cyan-300"
								aria-label="Click the link to visit the Cocktail Explorer project"
							>
								The Cocktail Explorer
							</a>
						</p>
							<p className={`${textSizesSecondary} mb-8 lg:text-left`}>
							Access a vast and curated collection of cocktail recipes, ranging from timeless
							classics to contemporary creations. Cocktail Explorer boasts a comprehensive database,
							ensuring users have an extensive array of choices to suit every palate and occasion.
						</p>
						<div className="mt-10 flex items-center justify-center">
							<IconButton href={'/projects'} icon={<FaHammer />}>
								Projects
							</IconButton>
						</div>
						</div>
						<div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950">
							<Image
								src={'/ck_img_1.png'}
								alt="Cocktail Explorer project screenshot"
								width={500}
								height={500}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</Reveal>
			</section>

			<section className={`${sectionStyles} bg-white text-center dark:bg-slate-950`}>
				<Reveal className={`${sectionInnerStyles} ${cardStyles}`}>
					<h2 className={textSizesPrimary}>Let&apos;s Work Together</h2>
					<p className={`${textSizesSecondary} mx-auto mt-4 max-w-2xl`}>
						I am currently open to new opportunities and freelance projects.
					</p>
					<div className="mt-10 flex items-center justify-center">
						<IconButton href={'/contact'} icon={<FaHandshake />}>
							Contact
						</IconButton>
					</div>
				</Reveal>
			</section>
		</main>
	)
}
