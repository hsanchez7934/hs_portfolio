'use client'

import {FaHandPointDown} from 'react-icons/fa6'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {
	badgeStyles,
	cardStyles,
	sectionInnerStyles,
	sectionStyles,
	textSizesPrimary,
	textSizesSecondary
} from '../lib/utils'
import {contactData, technicalSkills, WorkHistory, workHistory} from '../lib/data'
import IconButton from '../ui/Button/IconButton'
import PageHero from '../ui/Hero/PageHero'
import Reveal from '../ui/motion/Reveal'

const handleScrollTo = () => {
	const nextSection = document.getElementById('section-under-hero-technical-skills')
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

const getContactIcon = (key: string) => {
	switch (key) {
		case 'Gmail':
			return <SiGmail className="text-cyan-600 dark:text-cyan-300" />
		case 'LinkedIn':
			return <FaLinkedin className="text-cyan-600 dark:text-cyan-300" />
		case 'Telephone':
			return <BsFillTelephoneFill className="text-cyan-600 dark:text-cyan-300" />
		default:
			return null
	}
}

const getContactHref = (label: string, text: string) => {
	switch (label) {
		case 'Gmail':
			return `mailto:${text}`
		case 'Telephone':
			return `tel:${text.replace(/[^\d+]/g, '')}`
		default:
			return text
	}
}

const renderedSkillsMobile = technicalSkills.map(
	({label, value}: {label: string; value: string}, index: number) => {
		return (
			<li
				key={index}
				className={`${badgeStyles} flex-col items-start text-left sm:items-center sm:text-center`}
			>
				<span className="font-semibold text-slate-950 dark:text-white">{label}</span>
				{value}
			</li>
		)
	}
)

const renderedWorkHistory = workHistory.map((item: WorkHistory) => {
	const renderedResponsibilities = item.responsibilities.map(
		(responsibility: string, index: number) => {
			return (
				<li
					key={index}
					className="text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg"
				>
					{responsibility}
				</li>
			)
		}
	)
	return (
		<Reveal key={item.title + item.company + item.date} className={`${cardStyles} mb-8`}>
			<p
				id={item.title + item.company + item.date + '-work-history-title'}
				className="text-center text-xl font-semibold text-slate-950 dark:text-white"
			>
				{item.title}
			</p>
			<p
				id={item.title + item.company + item.date + '-work-history-date'}
				className="mb-6 text-center text-base font-semibold text-cyan-700 dark:text-cyan-300"
			>
				{item.company} - {item.date}
			</p>
			<ul className="mx-auto max-w-4xl list-disc space-y-3 pl-6">
				{renderedResponsibilities}
			</ul>
		</Reveal>
	)
})

export default function About() {
	const yearsOfExperience = getYearsOfExperience(firstFrontEndJobStartDate)
	const summary = `Hello, I am Hector Sanchez — a Senior Front-End Engineer who enjoys building products that people genuinely enjoy using.
	With ${yearsOfExperience}+ years of experience, I focus on creating intuitive, accessible, and scalable experiences while writing clean,
	maintainable code. I am passionate about turning complex ideas into thoughtful solutions that solve real-world problems.`
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20 dark:bg-slate-950">
			<PageHero
				id="about-me-hero-section"
				backgroundClassName="bg-[url(/about-hero.jpg)]"
				title="Professional Summary"
				titleId="about-me-hero-title"
				subtitle={summary}
				subtitleId="about-me-hero-subtitle"
			>
				<IconButton
					id="aboutme-scroll-down-button"
					aria-label="Scroll down to next section of about me page"
					onClick={handleScrollTo}
					icon={<FaHandPointDown />}
					iconOnly
					className="animate-bounce"
				/>
			</PageHero>

			<section
				id="section-under-hero-technical-skills"
				className={`${sectionStyles} bg-white dark:bg-slate-950`}
			>
				<Reveal className={sectionInnerStyles}>
					<p
						id="about-me-summary-copy"
						className={`${textSizesSecondary} mx-auto mb-12 max-w-4xl`}
					>
						Specialized in JavaScript, TypeScript, React.js, Next.js, for modern UI web development and
						React Native and Expo in cross platform mobile application development.
						Passionate about clean code, accessibility, and building intuitive user experiences that
						solve real business problems.
					</p>
					<h2 className={`${textSizesPrimary}`} id="technical-skills-title">
						Technical Skills
					</h2>
					<ul className="mt-10 grid gap-4 md:grid-cols-2">{renderedSkillsMobile}</ul>
				</Reveal>
			</section>

			<section
				className={`${sectionStyles} bg-slate-50 dark:bg-slate-900`}
				id="about-me-professional-experience"
			>
				<h2 id="work-history-title" className={`${textSizesPrimary} mb-10`}>
					Professional Experience
				</h2>
				<div className={sectionInnerStyles}>{renderedWorkHistory}</div>
			</section>

			<section
				className={`${sectionStyles} bg-white dark:bg-slate-950`}
				id="about-me-education"
			>
				<Reveal className={`${sectionInnerStyles} ${cardStyles}`}>
					<h2 id="education-title" className={textSizesPrimary}>
						Education
					</h2>
					<p
						id="turing-school-title"
						className="mt-8 text-center text-xl font-semibold text-slate-950 dark:text-white"
					>
						Turing School of Software & Design
					</p>
					<p
						id="turing-certificate-date"
						className="mb-5 text-center text-base font-semibold text-cyan-700 dark:text-cyan-300"
					>
						Front End Engineering Certificate - 2017 - 2018
					</p>
					<p className={`${textSizesSecondary} mx-auto max-w-4xl`}>
						Immersive training in JavaScript, responsive web design, client side architecture, and
						modern front end development techniques.
					</p>
				</Reveal>
			</section>

			<section
				className={`${sectionStyles} bg-slate-50 dark:bg-slate-900`}
				id="about-me-contact-details"
			>
				<Reveal className={sectionInnerStyles}>
					<h2 id="contact-details-title" className={`${textSizesPrimary} mb-10`}>
						Contact Details
					</h2>
					<ul className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-950 lg:grid-cols-3">
						{contactData.map(({label, text}, index) => {
							return (
								<li
									key={index}
									className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-base sm:text-lg dark:border-white/10 dark:bg-white/5"
								>
									<span className="mb-3 flex items-center justify-center gap-2">
										{getContactIcon(label)}
										<span className="font-semibold text-slate-800 dark:text-white">{label}</span>
									</span>
									<a
										href={getContactHref(label, text)}
										className="block break-words text-center text-slate-700 transition hover:text-cyan-700 hover:underline dark:text-slate-200 dark:hover:text-cyan-300"
										aria-label={`Contact me through ${label}`}
									>
										{text}
									</a>
								</li>
							)
						})}
					</ul>
				</Reveal>
			</section>
		</main>
	)
}
