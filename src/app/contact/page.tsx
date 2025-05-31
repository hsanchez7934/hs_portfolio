'use client'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

import {FiSend} from 'react-icons/fi'
import {btnColors, btnFlexStyles} from '../lib/utils'
import {FaAsterisk} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import {z} from 'zod'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {contactData} from '../lib/data'

import {useState, useActionState} from 'react'

const btnSizes =
	'rounded-full h-auto w-36 sm:w-38 md:w-40 lg:w-42 xl:w-48 2xl:w-52 p-2 lg:p-3 xl:p-4 2xl:p-5'
const btnTextSizes = 'text-base sm:text-lg xl:text-1xl 2xl:text-2xl'

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
			break

		default:
			break
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

	const sendContactMeMsg = (prevState: State, formData: FormData) => {
		const formDataEntries = Object.fromEntries(formData)

		const validatedFields = FormSchema.safeParse({
			name: formDataEntries.name,
			email: formDataEntries.email,
			message: formDataEntries.message
		})

		if (!validatedFields.success) {
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
				.then((response: any) => {
					console.log(response.status, response.text)
					setDialogTextColor('green')
					setDialogText('Message sent successfully!')
					setToggleDialog(true)
					setTimeout(() => {
						setToggleDialog(false)
					}, 1500)
				})
		} catch (error) {
			if (error) {
				setDialogTextColor('red')
				setDialogText('Error occurred while sending message. Please try again.')
				setToggleDialog(true)
				setTimeout(() => {
					setToggleDialog(false)
				}, 1500)
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

	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans pt-20">
			<section
				id="contact-page-hero-section"
				aria-label="Contact details container"
				className={`bg-gray-100 dark:bg-gray-800 h-dvh sm:h-svh`}
			>
				<div className="flex flex-col p-8">
					<h1 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-black dark:text-white text-center">
						Reach out to me directly:
					</h1>
					<ul className="bg-gray-900 rounded-xl p-6">
						{contactData.map(({label, text}, index) => {
							return (
								<li
									key={index}
									className="font-thin text-base sm:text-lg xl:text-1xl 2xl:text-2xl text-black dark:text-white mb-3 sm:text-center"
									aria-label={`Contact details, list items, ${text}`}
								>
									<span className="flex items-center justify-center">
										{getIcon(label)}{' '}
										<span className="dark:text-gray-500 font-semibold">{label}: </span>
									</span>
									<span className="block text-center">{text}</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div>
					<h1 className="text-lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-black dark:text-white text-center">
						Send me a message:
					</h1>
					<div>
						<form action={formAction}>
							<div className="p-8">
								<div className="flex">
									<label
										htmlFor="name"
										className="block mb-2 text-black dark:text-gray-500"
										aria-required="true"
									>
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
									<label
										htmlFor="email"
										className="block mb-2 text-black dark:text-gray-500"
										aria-required="true"
									>
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
									<label
										htmlFor="message"
										className="block mb-2 text-black dark:text-gray-500"
										aria-required="true"
									>
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

							<div className="flex items-center justify-center">
								<button
									type="submit"
									className={`${btnColors} ${btnFlexStyles} ${btnTextSizes} ${btnSizes}`}
								>
									Submit <FiSend className="ml-2" />
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
