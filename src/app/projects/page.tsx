'use client'

import {textSizesPrimary, textSizesSecondary} from '../lib/utils'
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

const getIcon = (key: string) => {
	const styles = {}
	const classes = 'text-white mr-3 text-xl'

	switch (key) {
		case 'TypeScript':
			return <SiTypescript style={styles} className={`${classes}`} />
			break
		case 'JavaScript':
			return <RiJavascriptFill style={styles} className={`${classes}`} />
			break
		case 'React.js':
			return <FaReact style={styles} className={`${classes}`} />
			break
		case 'Redux Toolkit':
			return <SiRedux style={styles} className={`${classes}`} />
			break
		case 'React Router':
			return <SiReactrouter style={styles} className={`${classes}`} />
			break
		case 'HTML5':
			return <SiHtml5 style={styles} className={`${classes}`} />
			break
		case 'CSS3':
			return <SiCsswizardry style={styles} className={`${classes}`} />
			break
		case 'Node.js/Express.js':
			return <FaNode style={styles} className={`${classes}`} />
			break
		default:
			break
	}
}

export default function Projects() {
	const renderedProjectCards = () => {
		return projects.map((project, index) => {
			const sectionColor =
				index % 0 === 2 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
			const {title, description, images, links, techStack, projectUrl, mainProjectImg} = project

			return (
				<section
					key={title}
					id={`project-section-${title}-${index}`}
					className={`py-20 px-6 ${sectionColor}`}
					aria-label="Project details main section container"
				>
					<div className="max-w-7xl mx-auto mb-12 bg-black rounded-xl">
						<div key={title} id={title} className="w-full p-8">
							<h2
								className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-300 text-center"
								id="technical-skills-title"
								aria-label={`${title}, project title`}
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
									aria-label="Technologies used to build project, title"
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
													aria-label="Technical skill label"
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
									aria-label="Technology stack used to build project, title"
								>
									Tech Stack
								</h2>
								<div className="pb-5">
									{techStack.map((stack: string, index) => {
										return (
											<li
												key={index}
												className="p-2 text-lg h-auto w-auto text-white flex items-center justify-center"
												aria-label={`Built using, ${stack}`}
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
				id="hero-section"
				aria-label="Title container of projects page"
				className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center p-8"
			>
				<h1 id="hero-title" aria-label="Title of projects page" className={textSizesPrimary}>
					Projects
				</h1>
				<p
					id="hero-subtitle"
					aria-label="Subtitle of the projects page"
					className={textSizesSecondary}
				>
					Welcome to my portfolio
				</p>
			</section>
			{renderedProjectCards()}
		</main>
	)
}
