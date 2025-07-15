'use client'

import {FaHandPointDown} from 'react-icons/fa6'
import {btnColors, btnFlexStyles} from '../lib/utils'
// import {textSizesPrimary, textSizesSecondary} from '../lib/utils'
import {projects} from '../lib/data'
import Image from 'next/image'
import ImageCarousal from '../ui/ImageCarousal/ImageCarousal'

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
	const classes = 'text-white mr-3 text-xl'

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
			// const sectionColor =
			// 	index % 0 === 2 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
			const {title, description, images, links, techStack, projectUrl, mainProjectImg} = project

			return (
				<section
					key={title}
					id={`project-section-${title}-${index}`}
					className={`px-6 py-8 projectSection_${index}`}
				>
					<div className="max-w-7xl mx-auto bg-black rounded-xl">
						<div key={title} id={title} className="w-full p-8">
							<h2
								className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-300 text-center"
								id="technical-skills-title"
							>
								{title}
							</h2>

							<div className="text-center">
								<a
									href={`${projectUrl}`}
									className="hover:underline text-cyan-400"
									aria-label={`Click link to visit the project, ${title}`}
								>
									Visit project here
								</a>
							</div>

							<div className="hidden lg:block lg:mb-8">
								{links.map(({text, url}: {text: string; url: string}, index: number) => {
									return (
										<div key={index} className="text-center">
											<a
												className="hover:underline text-cyan-400"
												href={url}
												aria-label={`Click link to navigate away from website, ${text}`}
											>
												{text}
											</a>
										</div>
									)
								})}
							</div>

							<div className="hidden lg:block h-auto w-full">
								<h3
									className="text-white text-center"
								>
									Built using the following technologies:
								</h3>
								<div>
									{techStack.map((tech, index) => {
										return (
											<div
												style={{
													display: 'inline-block',
													backgroundColor: 'gray',
													margin: '10px',
													padding: '8px 12px',
													borderRadius: 12,
													color: '#f5f5f5'
												}}
												key={index}
											>
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														height: '100%',
														width: '100%'
													}}
												>
													{getIcon(tech)}
													<p>{tech}</p>
												</div>
											</div>
										)
									})}
								</div>
							</div>

							<div className="lg:flex lg:mt-6">
								<div className="h-auto w-full lg:w-1/2 p-6">
									{<ImageCarousal images={images} />}
									<div className="hidden lg:block h-full w-full bg-black">
										<Image
											src={mainProjectImg}
											key={index}
											width={500}
											height={500}
											alt="Image of project user interface"
											className="mb-4 h-full w-full object-cover"
										/>
									</div>
								</div>
								<ul className="mb-12 lg:w-1/2">
									{description.map(({text, label}, index) => {
										return (
											<li
												key={index}
												className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-white mb-3 sm:text-center lg:text-left"
											>
												<span
													className="font-semibold text-gray-500 sm:block"
												>
													{label}:{' '}
												</span>
												{text}
											</li>
										)
									})}
								</ul>
							</div>

							<div className="block lg:hidden">
								<h2
									className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-300 text-center"
									id="technical-skills-title"
								>
									Tech Stack
								</h2>
								<div className="pb-5">
									{techStack.map((stack: string, index) => {
										return (
											<li
												key={index}
												className="p-2 text-lg h-auto w-auto text-white flex items-center justify-center"
											>
												{getIcon(stack)}
												<span>{stack}</span>
											</li>
										)
									})}
								</div>
								<div>
									{links.map(({text, url}: {text: string; url: string}, index: number) => {
										return (
											<a
												className="block text-center hover:underline mb-2 text-cyan-400"
												href={url}
												key={index}
												araia-label={`Click link to navigate away from website, ${text}`}
											>
												{text}
											</a>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</section>
			)
		})
	}

	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			<section
				id="projects-page-hero-section"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh flex flex-col items-center justify-center bg-[url(/projects_hero.jpg)] bg-center bg-cover bg-no-repeat`}
			>
				<h1
					id="projects-page-hero-title"
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-gray-200 font-bold mb-4 text-center text-white`}
				>
					Projects
				</h1>
				<p
					id="projects-page-hero-subtitle"
					className={`'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin dark:text-white text-center' w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white`}
				>
					A collection of projects that I have built leveraging my skills as a front end developer
				</p>
				<button
					id="projects-page-scroll-down-button"
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
				id="projects-page-projects-list-section"
				className="h-auto py-11 bg-gray-100 dark:bg-gray-800"
				aria-label="Projects list section"
			>
				{renderedProjectCards()}
			</section>
		</main>
	)
}
