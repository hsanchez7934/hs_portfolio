// @ts-expect-error generic
export const technicalSkills: {label: string; value: string}[] = [
	{
		label: 'Languages',
		value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3'
	},
	{
		label: 'Mobile Development',
		value:
			'React Native, Expo, React Navigation, iOS/Android Simulator, Firebase Authentication, Firebase Storage, Firebase Firestore, EAS Build, Push Notifications'
	},
	{
		label: 'Frameworks/Libraries',
		value: 'React, Next.js, Redux, jQuery, Reat Hook Form, Yup'
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
	'Implemented and standardized use of a component based system to accelerate team velocity and maintain consistency.',
	'Participated in Agile ceremonies, code reviews, and cross-functional sprint planning with backend, QA, and product teams.',
	'Wrote clean, maintinable code following industry best practices and internal standards.'
]

export const projects = [
	{
		title: 'Cocktail Explorer',
		projectUrl: 'https://hs-ck-2fb0336fc8da.herokuapp.com/',
		description: [
			{
				label: 'Project Overview',
				text: 'Introducing Cocktail Explorer, a sophisticated web application designed for cocktail enthusiasts and mixology aficionados alike. This elegantly crafted platform serves as your virtual guide through the world of mixology, offering an immersive and user-friendly experience for discovering, creating, and sharing exquisite cocktail recipes.'
			},

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
			{text: 'GitHub repo', url: 'https://github.com/hsanchez7934/hs_ck_db'},
			{
				text: 'Hosted on Heroku',
				url: 'https://heroku.com'
			},
			{
				text: 'Database powered by the Cocktail DB',
				url: 'https://www.thecocktaildb.com/'
			}
		],
		images: ['/ck_img_1.png', '/ck_img_2.png', '/ck_img_3.png', '/ck_img_4.png', '/ck_img_5.png'],
		mainProjectImg: '/ck_img_5.png'
	},
	{
		title: 'UI Components Library',
		projectUrl: 'https://ui-components-delta.vercel.app/',
		description: [
			{
				label: 'Project Overview',
				text: 'Developed a modular and reusable UI component library using React, Next.js, and TailwindCSS, designed to streamline development and enhance user interface consistency across web applications. The library includes a suite of flexible components such as Buttons, Text Inputs, Badges, and more—each built with customization and accessibility at its core. This project reflects strong front-end engineering fundamentals, including component-driven development, design system thinking, and performance-conscious UI construction.'
			},
			{
				label: 'Customization',
				text: 'Enabled component-level customization through robust prop interfaces and Tailwind-based styling overrides for maximum design flexibility.'
			},
			{
				label: 'Accessability',
				text: 'Prioritized accessibility best practices using semantic HTML and ARIA attributes, ensuring inclusive user experiences.'
			},
			{
				label: 'Optimization',
				text: 'Optimized for fast rendering and performance, with a focus on clean component architecture and reusability.'
			},
			{
				label: 'UI/UX',
				text: 'Emphasized UI consistency and scalability, supporting rich, modern aesthetics suitable for enterprise-level or consumer-facing applications.'
			}
		],
		techStack: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
		links: [
			{text: 'GitHub repo', url: 'https://github.com/hsanchez7934/ui-components'},
			{
				text: 'Hosted on Vercel',
				url: 'https://vercel.com'
			}
		],
		images: ['/ui_components_proj_img1.png'],
		mainProjectImg: '/ui_components_proj_img2.png'
	}
]

export const contactData = [
	{label: 'Gmail', text: 'hsanchez7934@gmail.com'},
	{label: 'LinkedIn', text: 'https://www.linkedin.com/in/hector-a-sanchez/'},
	{label: 'Telephone', text: '(720) 999 -7262'}
]
