'use client'

import './styles.css'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

import {FaHandPointDown} from 'react-icons/fa6'
import {textSizesPrimary, textSizesSecondary} from '../lib/utils'
import {FiSend} from 'react-icons/fi'
import {btnColors, btnFlexStyles} from '../lib/utils'
import {FaAsterisk} from 'react-icons/fa'
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser'
import {z} from 'zod'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {contactData} from '../lib/data'

import {useState, useActionState, useRef} from 'react'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'

const btnSizes =
	'rounded-full h-auto w-36 sm:w-38 md:w-40 lg:w-42 xl:w-48 2xl:w-52 p-2 lg:p-3 xl:p-4 2xl:p-5'
const btnTextSizes = 'text-base sm:text-lg xl:text-1xl 2xl:text-2xl'
const formLabelStyles = 'block mb-2 text-gray-500 text-base sm:text-lg xl:text-1xl 2xl:text-2xl'

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
			return <SiGmail className="mr-2" />
		case 'LinkedIn':
			return <FaLinkedin className="mr-2" />
		case 'Telephone':
			return <BsFillTelephoneFill className="mr-2" />
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
		<main className="h-auto bg-white text-gray-900 font-sans pt-20">
			<section
				id="contact-page-hero-section"
				aria-label="Hero section of the contact page"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh flex flex-col items-center justify-center bg-[url(/contact_hero_img.jpg)] bg-center bg-cover bg-no-repeat`}
			>
				<h1
					id="contact-page-hero-title"
					aria-label="Title of the website"
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-gray-200 font-bold mb-4 text-center text-white`}
				>
					Contact
				</h1>
				<p
					id="contact-page-hero-subtitle"
					aria-label="Subtitle of the website"
					className={`'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin dark:text-white text-center' w-52 sm:w-3/5 md:w-1/2 mb-12 text-center text-white`}
				>
					{`Let's be friends.`}
				</p>
				<button
					id="contact-page-scroll-down-button"
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
				id="contact-page-contact-details"
				aria-label="Contact details container"
				className={`bg-gray-100 dark:bg-gray-800 h-auto pt-11 pb-11`}
			>
				<div className="flex flex-col p-8 max-w-screen-xl ml-auto mr-auto mb-10">
					<h1 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-10 text-black dark:text-white text-center">
						Reach out to me directly
					</h1>
					<ul className="bg-gray-900 rounded-xl p-6 lg:flex">
						{contactData.map(({label, text}, index) => {
							return (
								<li
									key={index}
									className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-white mb-3 sm:text-center lg:w-1/3"
									aria-label={`Contact details, list items, ${text}`}
								>
									<span className="flex items-center justify-center">
										{getIcon(label)} <span className="text-gray-500 font-semibold">{label} </span>
									</span>
									<span className="block text-center">{text}</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div className="pb-8 max-w-screen-xl ml-auto mr-auto">
					<h1 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-black dark:text-white text-center">
						Send me a message:
					</h1>
					<div className="p-8">
						<form action={formAction} className="bg-gray-900 rounded-xl">
							<div className="p-8">
								<div className="flex">
									<label htmlFor="name" className={formLabelStyles} aria-required="true">
										Name:
									</label>
									<FaAsterisk className="text-red-500 text-xs ml-2" />
								</div>
								<input
									type="text"
									id="name"
									name="name"
									aria-label="Insert your name here"
									placeholder="John Doe..."
									required
									aria-required="true"
									className="block w-full rounded-md h-10 p-3 outline-cyan-400"
								/>
							</div>

							<div className="p-8">
								<div className="flex">
									<label htmlFor="email" className={formLabelStyles} aria-required="true">
										Email:
									</label>
									<FaAsterisk className="text-red-500 text-xs ml-2" />
								</div>
								<input
									type="text"
									id="email"
									name="email"
									aria-label="Insert your email here"
									placeholder="jdoe@example.com..."
									required
									aria-required="true"
									className="block w-full rounded-md h-10 p-3 outline-cyan-400"
								/>
							</div>

							<div className="p-8">
								<div className="flex">
									<label htmlFor="message" className={formLabelStyles} aria-required="true">
										Message:
									</label>
									<FaAsterisk className="text-red-500 text-xs ml-2" />
								</div>
								<textarea
									id="message"
									name="message"
									aria-label="Insert your message here"
									placeholder="Hello, I am John Doe..."
									required
									aria-required="true"
									className="block w-full rounded-md p-3 outline-cyan-400"
								/>
							</div>

							<div
								id="customer-error"
								aria-live="polite"
								aria-atomic="true"
								className="p-4 flex items-center justify-center flex-col"
							>
								{renderedErrorMessage()}
							</div>

							<div className="flex items-center justify-center pb-10">
								<button
									type="submit"
									className={`${btnColors} ${btnFlexStyles} ${btnTextSizes} ${btnSizes}`}
								>
									Submit
									{renderedSubmnitBtnIcons()}
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Dialog open={toggleDialog}>
				<DialogTitle color={dialogTextColor}>{dialogText}</DialogTitle>
			</Dialog>
		</main>
	)
}
