import React from 'react'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans">
			{/* Hero Section */}
			<section className="py-20 px-6 text-center bg-gray-100">
				<h1 className="text-4xl font-bold mb-4">Hi, I am [Your Name]</h1>
				<p className="text-lg max-w-xl mx-auto mb-6">
					Senior Front-End Engineer specializing in React, Next.js, and UI/UX development.
				</p>
				<Link
					href="/projects"
					className="inline-block px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
				>
					View Projects
				</Link>
			</section>

			{/* About Section */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold mb-4">About Me</h2>
					<p className="text-gray-700">
						With 7+ years of experience in front-end development, I craft performant, accessible,
						and scalable interfaces. I love working on design-to-code implementation and mentoring
						other developers.
					</p>
				</div>
			</section>

			{/* Projects Preview */}
			<section className="py-20 px-6 bg-gray-100">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
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
