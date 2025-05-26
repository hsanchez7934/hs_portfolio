'use client'

import {textSizesPrimary, textSizesSecondary} from '../lib/utils'
import {projects} from '../lib/data'
import ImageCarousal from '../ui/ImageCarousal/ImageCarousal'

export default function Projects() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			<section
				id="hero-section"
				aria-label="Hero Section of the website"
				className={`bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center`}
				style={{height: '40svh'}}
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
									className={textSizesPrimary}
									id="technical-skills-title"
									aria-label="Technical skills title"
								>
									Cocktail Explorer
								</h2>
								<div className="h-auto w-full bg-black">
									{<ImageCarousal images={images} />}
								</div>
								<ul className=''>
									{description.map(({text, label}, index) => {
										return (
											<li
												key={index}
												className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-black dark:text-white mb-3 sm:text-center"
											>
												<span
													className="font-semibold dark:text-gray-500 sm:block"
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
						)
					})}
					<div></div>
				</div>
			</section>
		</main>
	)
}
