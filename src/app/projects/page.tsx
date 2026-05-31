'use client'

import {FaExternalLinkAlt, FaHandPointDown} from 'react-icons/fa'
import {badgeStyles, cardStyles, sectionInnerStyles, sectionStyles, textSizesPrimary} from '../lib/utils'
import {projects} from '../lib/data'
import Image from 'next/image'
import ImageCarousal from '../ui/ImageCarousal/ImageCarousal'
import IconButton from '../ui/Button/IconButton'
import PageHero from '../ui/Hero/PageHero'
import Reveal from '../ui/motion/Reveal'

import {SiTypescript} from 'react-icons/si'
import {RiJavascriptFill} from 'react-icons/ri'
import {FaReact} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {SiReactrouter} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCsswizardry} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import {RiTailwindCssFill} from 'react-icons/ri'
import {PiDotFill} from 'react-icons/pi'

const getIcon = (key: string) => {
	const styles = {}
	const classes = 'text-cyan-600 dark:text-cyan-300 text-xl mr-2'

	switch (key) {
		case 'TypeScript':
			return <SiTypescript style={styles} className={`${classes}`} />
		case 'JavaScript':
			return <RiJavascriptFill style={styles} className={`${classes}`} />
		case 'React.js':
			return <FaReact style={styles} className={`${classes}`} />
		case 'Redux Toolkit':
			return <SiRedux style={styles} className={`${classes}`} />
		case 'React Router':
			return <SiReactrouter style={styles} className={`${classes}`} />
		case 'HTML5':
			return <SiHtml5 style={styles} className={`${classes}`} />
		case 'CSS3':
			return <SiCsswizardry style={styles} className={`${classes}`} />
		case 'Node.js/Express.js':
			return <FaNode style={styles} className={`${classes}`} />
		case 'Tailwind CSS':
			return <RiTailwindCssFill style={styles} className={`${classes}`} />
		default:
			return <PiDotFill style={styles} className={`${classes}`} />
	}
}

const handleScrollTo = () => {
	const nextSection = document.querySelector('.projectSection_0')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

export default function Projects() {
	const renderedProjectCards = () => {
		return projects.map((project, index) => {
			const {title, description, images, links, techStack, projectUrl, mainProjectImg} = project

			return (
				<section
					key={title}
					id={`project-section-${title}-${index}`}
					className={`px-6 py-8 projectSection_${index}`}
				>
					<Reveal className={`${sectionInnerStyles} ${cardStyles}`}>
						<div key={title} id={title} className="w-full">
							<h2
								className={`${textSizesPrimary} mb-5`}
								id={`project-title-${index}`}
							>
								{title}
							</h2>

							<div className="mb-8 flex justify-center">
								<IconButton
									href={`${projectUrl}`}
									aria-label={`Click link to visit the project, ${title}`}
									icon={<FaExternalLinkAlt />}
								>
									Visit project here
								</IconButton>
							</div>

							<div className="mb-10 hidden h-auto w-full text-center lg:block">
								<h3
									className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400"
								>
									Built using the following technologies:
								</h3>
								<div className="flex flex-wrap justify-center gap-3">
									{techStack.map((tech, index) => {
										return (
											<div
												className={badgeStyles}
												key={index}
											>
												<div className="flex h-full w-full items-center justify-center">
													{getIcon(tech)}
													<p>{tech}</p>
												</div>
											</div>
										)
									})}
								</div>
							</div>

							<div className="grid gap-10 lg:mt-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
								<div className="h-auto w-full">
									{<ImageCarousal images={images} />}
									<div className="hidden h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950 lg:block">
										<Image
											src={mainProjectImg}
											key={index}
											width={500}
											height={500}
											alt="Image of project user interface"
											className="h-full w-full object-cover"
										/>
									</div>
								</div>
								<ul className="space-y-5">
									{description.map(({text, label}, index) => {
										return (
											<li
												key={index}
												className="text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg"
											>
												<span
													className="mb-1 block font-semibold text-slate-950 dark:text-white"
												>
													{label}
												</span>
												{text}
											</li>
										)
									})}
								</ul>
							</div>

							<div className="mt-10 block lg:hidden">
								<h2
									className="mb-4 text-center text-xl font-semibold text-slate-950 dark:text-white"
									id={`project-tech-stack-${index}`}
								>
									Tech Stack
								</h2>
								<ul className="flex flex-wrap justify-center gap-3 pb-5">
									{techStack.map((stack: string, index) => {
										return (
											<li
												key={index}
												className={badgeStyles}
											>
												{getIcon(stack)}
												<span>{stack}</span>
											</li>
										)
									})}
								</ul>
								<div className="flex flex-wrap justify-center gap-3">
									{links.map(({text, url}: {text: string; url: string}, index: number) => {
										return (
											<a
												className="rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-cyan-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-white/10 dark:text-cyan-300 dark:hover:bg-white/10"
												href={url}
												key={index}
												aria-label={`Click link to navigate away from website, ${text}`}
											>
												{text}
											</a>
										)
									})}
								</div>
							</div>
						</div>
					</Reveal>
				</section>
			)
		})
	}

	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20 dark:bg-slate-950">
			<PageHero
				id="projects-page-hero-section"
				backgroundClassName="bg-[url(/projects_hero.jpg)]"
				title="Projects"
				titleId="projects-page-hero-title"
				subtitle="A collection of projects that I have built leveraging my skills as a front end developer"
				subtitleId="projects-page-hero-subtitle"
			>
				<IconButton
					id="projects-page-scroll-down-button"
					aria-label="Scroll down to next section"
					onClick={handleScrollTo}
					icon={<FaHandPointDown />}
					iconOnly
					className="animate-bounce"
				/>
			</PageHero>
			<section
				id="projects-page-projects-list-section"
				className={`${sectionStyles} h-auto bg-slate-50 dark:bg-slate-900`}
				aria-label="Projects list section"
			>
				{renderedProjectCards()}
			</section>
		</main>
	)
}
