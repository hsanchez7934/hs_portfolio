'use client'

import './styles.css'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

import {FaHandPointDown} from 'react-icons/fa6'
import {FiSend} from 'react-icons/fi'
import {
	cardStyles,
	formFieldStyles,
	sectionInnerStyles,
	sectionStyles,
	textSizesPrimary
} from '../lib/utils'
import {FaAsterisk} from 'react-icons/fa'
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser'
import {z} from 'zod'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {contactData} from '../lib/data'

import {useState, useActionState, useRef} from 'react'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
import IconButton from '../ui/Button/IconButton'
import PageHero from '../ui/Hero/PageHero'
import Reveal from '../ui/motion/Reveal'

const formLabelStyles = 'mb-2 flex items-center text-base font-semibold text-slate-200 sm:text-lg'

export type State = {
	errors?: {
		name?: string[]
		email?: string[]
		message?: string[]
	}
	message?: string | null
}

const getIcon = (key: string) => {
	switch (key) {
		case 'Gmail':
			return <SiGmail className="text-cyan-300" />
		case 'LinkedIn':
			return <FaLinkedin className="text-cyan-300" />
		case 'Telephone':
			return <BsFillTelephoneFill className="text-cyan-300" />
		default:
			break
	}
}

const handleScrollTo = () => {
	const nextSection = document.getElementById('contact-page-contact-details')
	if (nextSection) {
		nextSection.scrollIntoView({behavior: 'smooth'})
	}
}

const FormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string()
})

export default function Contact() {
	const [toggleDialog, setToggleDialog] = useState(false)
	const [dialogText, setDialogText] = useState('')
	const [dialogTextColor, setDialogTextColor] = useState('')

	const loadingSpinnerRef = useRef(null)
	const airplaneIconRef = useRef(null)

	const toggleSubmitBtnIconState = (
		toggleIcons: boolean,
		airplaneIcon: React.RefObject<Element>,
		loadingSpinner: React.RefObject<Element>
	) => {
		if (toggleIcons) {
			// @ts-expect-error generic
			airplaneIcon.classList.remove('visibleSubmitBtnIcon')
			// @ts-expect-error generic
			airplaneIcon.classList.add('hiddenSubmitBtnIcon')
			// @ts-expect-error generic
			loadingSpinner.classList.remove('hiddenSubmitBtnIcon')
			// @ts-expect-error generic
			loadingSpinner.classList.add('visibleSubmitBtnIcon')
		} else {
			// @ts-expect-error generic
			airplaneIcon.classList.remove('hiddenSubmitBtnIcon')
			// @ts-expect-error generic
			airplaneIcon.classList.add('visibleSubmitBtnIcon')
			// @ts-expect-error generic
			loadingSpinner.classList.remove('visibleSubmitBtnIcon')
			// @ts-expect-error generic
			loadingSpinner.classList.add('hiddenSubmitBtnIcon')
		}
	}

	const sendContactMeMsg = (prevState: State, formData: FormData) => {
		const airplaneIcon = airplaneIconRef.current
		const loadingSpinner = loadingSpinnerRef.current

		if (airplaneIcon && loadingSpinner) {
			toggleSubmitBtnIconState(true, airplaneIcon, loadingSpinner)
		}

		// setShowLoadingSpinner(true)
		const formDataEntries = Object.fromEntries(formData)

		const validatedFields = FormSchema.safeParse({
			name: formDataEntries.name,
			email: formDataEntries.email,
			message: formDataEntries.message
		})

		if (!validatedFields.success) {
			// setShowLoadingSpinner(false)
			if (airplaneIcon && loadingSpinner) {
				toggleSubmitBtnIconState(false, airplaneIcon, loadingSpinner)
			}
			return {
				errors: validatedFields.error.flatten().fieldErrors,
				message: ''
			}
		}

		emailjs.init({
			publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
			blockHeadless: true,
			limitRate: {
				throttle: 1000
			}
		})
		const {name, email, message} = validatedFields.data
		const templateParams = {
			title: `Message from ${name}`,
			name,
			email,
			message
		}

		try {
			emailjs
				.send(
					// @ts-expect-error generic
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
					templateParams
				)
				.then((response: EmailJSResponseStatus) => {
					console.log(response.status, response.text)
					if (airplaneIcon && loadingSpinner) {
						toggleSubmitBtnIconState(false, airplaneIcon, loadingSpinner)
					}
					setDialogTextColor('green')
					setDialogText('Message sent successfully!')
					setToggleDialog(true)
					setTimeout(() => {
						setToggleDialog(false)
					}, 2000)
				})
		} catch (error) {
			if (error) {
				if (airplaneIcon && loadingSpinner) {
					toggleSubmitBtnIconState(false, airplaneIcon, loadingSpinner)
				}
				setDialogTextColor('red')
				setDialogText('Error occurred while sending message. Please try again.')
				setToggleDialog(true)
				setTimeout(() => {
					setToggleDialog(false)
				}, 2000)
			}
			return {message: 'Error occurred while sending message. Please try again.'}
		}
	}

	const initialState = {name: '', email: '', message: ''}
	// @ts-expect-error generic
	const [state, formAction] = useActionState(sendContactMeMsg, initialState)

	const renderedErrorMessage = () => {
		if (state?.errors) {
			const keys = Object.keys(state.errors)

			const datum = keys.map((key) => {
				// @ts-expect-error generic
				return state.errors[key]
			})

			return datum.map((error: string) => {
				return (
					<p className="text-sm text-red-600 bg-red-100 p-3 rounded-md" key={error}>
						Attention: {error}
					</p>
				)
			})
		}

		return <></>
	}

	const renderedSubmnitBtnIcons = () => {
		return (
			<>
				<LoadingSpinner
				// @ts-expect-error generic
					ref={loadingSpinnerRef}
					classes={'hiddenSubmitBtnIcon'}
				/>
				<FiSend
					className="visibleSubmitBtnIcon"
					// @ts-expect-error generic
					ref={airplaneIconRef}
				/>
			</>
		)
	}

	return (
		<main className="h-auto bg-white text-gray-900 font-sans pt-20 dark:bg-slate-950">
			<PageHero
				id="contact-page-hero-section"
				backgroundClassName="bg-[url(/contact_hero_img.jpg)]"
				title="Contact"
				titleId="contact-page-hero-title"
				subtitle="Let's connect"
				subtitleId="contact-page-hero-subtitle"
			>
				<IconButton
					id="contact-page-scroll-down-button"
					aria-label="Scroll down to next section"
					onClick={handleScrollTo}
					icon={<FaHandPointDown />}
					iconOnly
					className="animate-bounce"
				/>
			</PageHero>

			<section
				id="contact-page-contact-details"
				className={`${sectionStyles} h-auto bg-slate-50 dark:bg-slate-900`}
			>
				<Reveal className={`${sectionInnerStyles} mb-14`}>
					<h1 className={`${textSizesPrimary} mb-10`}>
						Reach out to me directly
					</h1>
					<ul className="grid gap-4 rounded-3xl bg-gray-50 dark:bg-slate-950 p-6 shadow-xl shadow-slate-950/20 lg:grid-cols-3">
						{contactData.map(({label, text}, index) => {
							return (
								<li
									key={index}
									className="rounded-2xl border border-white/10 bg-gray-100 dark:bg-slate-950/5 p-5 text-center text-base text-white sm:text-lg"
								>
									<span className="mb-3 flex items-center justify-center gap-2">
										{getIcon(label)} <span className="font-semibold text-slate-800 dark:text-white">{label} </span>
									</span>
									<span className="block break-words text-center text-slate-800 dark:text-white">{text}</span>
								</li>
							)
						})}
					</ul>
				</Reveal>

				<Reveal className={sectionInnerStyles}>
					<h1 className={`${textSizesPrimary} mb-8`}>
						Send me a message:
					</h1>
					<div className={cardStyles}>
						<form action={formAction} className="rounded-3xl bg-gray-50 dark:bg-slate-950 p-6 sm:p-8">
							<div className="space-y-8">
								<div>
									<label htmlFor="name" className={formLabelStyles} aria-required="true">
										Name:
										<FaAsterisk className="ml-2 text-xs text-red-400" />
									</label>
								<input
									type="text"
									id="name"
									name="name"
									aria-label="Insert your name here"
									placeholder="John Doe..."
									required
									aria-required="true"
									className={formFieldStyles}
								/>
							</div>

								<div>
									<label htmlFor="email" className={formLabelStyles} aria-required="true">
										Email:
										<FaAsterisk className="ml-2 text-xs text-red-400" />
									</label>
								<input
									type="text"
									id="email"
									name="email"
									aria-label="Insert your email here"
									placeholder="jdoe@example.com..."
									required
									aria-required="true"
									className={formFieldStyles}
								/>
							</div>

								<div>
									<label htmlFor="message" className={formLabelStyles} aria-required="true">
										Message:
										<FaAsterisk className="ml-2 text-xs text-red-400" />
									</label>
								<textarea
									id="message"
									name="message"
									aria-label="Insert your message here"
									placeholder="Hello, I am John Doe..."
									required
									aria-required="true"
									className={`${formFieldStyles} min-h-40`}
								/>
							</div>
							</div>

							<div
								id="customer-error"
								aria-live="polite"
								aria-atomic="true"
								className="flex flex-col items-center justify-center gap-3 p-4"
							>
								{renderedErrorMessage()}
							</div>

							<div className="flex items-center justify-center pb-2">
								<IconButton
									type="submit"
									icon={renderedSubmnitBtnIcons()}
								>
									Submit
								</IconButton>
							</div>
						</form>
					</div>
				</Reveal>
			</section>
			<Dialog open={toggleDialog} PaperProps={{className: 'rounded-3xl bg-white dark:bg-slate-950'}}>
				<DialogTitle color={dialogTextColor}>{dialogText}</DialogTitle>
			</Dialog>
		</main>
	)
}
