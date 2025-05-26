// @ts-expect-error generic
export const technicalSkills: {label: string; value: string}[] = [
	{
		label: 'Languages',
		value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3'
	},
	{
		label: 'Frameworks/Libraries',
		value: 'React, Next.js, Redux, jQuery'
	},
	{
		label: 'Styling & UI',
		value: 'Tailwind CSS, Styled Components, Material UI, Design Systems, Responsive Web Design'
	},
	,
	{label: 'Build Tools', value: 'Webpack, Babel, ESLint, Prettier, StyleLint'},
	{label: 'Testing', value: 'Jest, React Testing Library, Chai, Cypress'},
	{label: 'Version Control & DevOps', value: 'Git, Github, GitLab, CI/CD, Heroku, Firebase'},
	{label: 'Tools', value: 'Figma, Postman, Chrome Dev Tools, VS Code'},
	{label: 'Performance', value: 'Lighthouse, Lazy Loading, Code Splitting, Web Vitals'},
	{label: 'Accessibility', value: 'Semantic HTML, ARIA, WCAG Guidelines'},
	{label: 'Other', value: 'Rest APIs, GraphQL, Agile/Scrum'}
]

export const workHistory = [
	'Led the front end development of a major enterprise application used by thousands of clients, delivering performant and scalable features with JavaScript, jQuery, and TypeScript.',
	'Partnered with product managers and UX designers to translate business requirements into clean, responsive, and accessible UI components.',
	'Owned UI development lifecycle: feature planning, development, testing, and post release optimization.',
	'Decreased UI bug count by 35% via test automation and structured QA handoffs.',
	'Introduced and standardized use of a component based system to accelerate team velocity and maintain consistency.',
	'Participated in Agile ceremonies, code reviews, and cross-functional sprint planning with backend, QA, and product teams.',
	'Wrote clean, maintinable code following industry best practices and internal standards.'
]

export const projects = [
	{
		title: 'Cocktail Explorer',
		projectUrl: 'https://hs-ck-2fb0336fc8da.herokuapp.com/',
		description: [
			{
				text: 'Access a vast and curated collection of cocktail recipes, ranging from timeless classics to contemporary creations. Cocktail Explorer boasts a comprehensive database, ensuring users have an extensive array of choices to suit every palate and occasion.',
				label: 'Extensive recipe library'
			},
			{
				text: `Navigate through the diverse repertoire of cocktails effortlessly with intuitive search options. Whether you're in the mood for a refreshing summer cocktail or a warming winter concoction, finding the perfect recipe is a breeze.`,
				label: 'Intuitive search functionality'
			},
			{
				text: `Each cocktail recipe is accompanied by clear and concise step-by-step instructions, ensuring even the novice mixologist can craft a perfect drink. Visual aids such as images and videos provide additional guidance for an immersive learning experience.`,
				label: 'Step by step instructions and visual aids'
			},
			{
				text: 'Enjoy the Cocktail Explorer experience on the go with our mobile-responsive design. Access your favorite recipes and cocktail inspiration anytime, anywhere, from the convenience of your smartphone or tablet.',
				label: 'Mobile responsiveness'
			}
		],
		techStack: [
			'TypeScript',
			'JavaScript',
			'React.js',
			'Redux Toolkit',
			'React Router',
			'HTML5',
			'CSS3',
			'Node.js/Express.js'
		],
		links: [
			{
				text: 'Database powered by the Cocktail DB',
				url: 'https://www.thecocktaildb.com/'
			},
			{
				text: 'Hosted on Heroku',
				url: 'https://heroku.com'
			}
		],
		images: ['/ck_img_1.png', '/ck_img_2.png', '/ck_img_3.png', '/ck_img_4.png', '/ck_img_5.png']
	}
]
