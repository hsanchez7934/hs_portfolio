'use client'

import {textSizesPrimary, textSizesSecondary} from '../lib/utils'
import {projects} from '../lib/data'
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
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			<section
				id="hero-section"
				aria-label="Hero Section of the website"
				className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center p-8"
			>
				<h1 id="hero-title" aria-label="Title of the website" className={textSizesPrimary}>
					Projects
				</h1>
				<p id="hero-subtitle" aria-label="Subtitle of the website" className={textSizesSecondary}>
					Welcome to my portfolio
				</p>
			</section>

			<section
				id="section-under-hero-technical-skills"
				className="py-20 px-6 bg-white dark:bg-gray-900"
				aria-label="Section under hero, technical skills"
			>
				<div className="max-w-4xl mx-auto mb-12">
					{projects.map((project) => {
						const {title, description, images, links, techStack, projectUrl} = project
						return (
							<div key={title} id={title} className="w-full bg-black p-8">
								<h2
									className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-300 text-center"
									id="technical-skills-title"
									aria-label="Technical skills title"
								>
									{title}
								</h2>
								<a
									href={`${projectUrl}`}
									style={{
										color: 'aqua'
									}}
									className="block text-center hover:underline"
								>
									Visit project here
								</a>
								<div className="h-auto w-full bg-black">{<ImageCarousal images={images} />}</div>
								<ul className="mb-12">
									{description.map(({text, label}, index) => {
										return (
											<li
												key={index}
												className="text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-white mb-3 sm:text-center"
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
								<h2
									className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-300 text-center"
									id="technical-skills-title"
									aria-label="Technical skills title"
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
												className="block text-center hover:underline mb-2"
												style={{color: 'aqua'}}
												href={url}
												key={index}
											>
												{text}
											</a>
										)
									})}
								</div>
							</div>
						)
					})}
					<div></div>
				</div>
			</section>
		</main>
	)
}
