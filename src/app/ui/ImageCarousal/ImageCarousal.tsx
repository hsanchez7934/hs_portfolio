'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

interface Props {
	images: string[]
}

export default function ImageCarousal(props: Props) {
	const {images} = props
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleBtnLeft = () => {
		if (currentIndex === 0) {
			setCurrentIndex(images.length - 1)
		} else if (currentIndex > 0 && currentIndex <= images.length - 1) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	const handleBtnRight = () => {
		if (images.length - 1 === currentIndex) {
			setCurrentIndex(0)
		} else if (currentIndex <= images.length - 1 && currentIndex >= 0) {
			setCurrentIndex(currentIndex + 1)
		}
	}

	return (
		<div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-950 lg:hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={images[currentIndex]}
					initial={{opacity: 0, x: 24}}
					animate={{opacity: 1, x: 0}}
					exit={{opacity: 0, x: -24}}
					transition={{duration: 0.3, ease: 'easeOut'}}
				>
					<Image
						src={`${images[currentIndex]}`}
						width={500}
						height={500}
						className="h-full w-full object-cover object-center"
						alt="Project user interface screenshot"
					/>
				</motion.div>
			</AnimatePresence>
			<div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
					{images.length > 1 ? (
						<motion.button
							id="img-carousal-button-left"
							type="button"
							aria-label="See previous project image"
							aria-pressed={undefined}
							onClick={() => handleBtnLeft()}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 text-white shadow-lg backdrop-blur transition hover:bg-cyan-500 hover:text-slate-950"
							whileHover={{scale: 1.08}}
							whileTap={{scale: 0.94}}
						>
							<FaChevronLeft />
						</motion.button>
					) : (
						<></>
					)}
					{images.length > 1 ? (
						<motion.button
							id="img-carousal-button-right"
							type="button"
							aria-label="See next project image"
							aria-pressed={undefined}
							onClick={() => handleBtnRight()}
							className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 text-white shadow-lg backdrop-blur transition hover:bg-cyan-500 hover:text-slate-950"
							whileHover={{scale: 1.08}}
							whileTap={{scale: 0.94}}
						>
							<FaChevronRight />
						</motion.button>
					) : (
						<></>
					)}
			</div>
			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
				{images.map((image, index) => (
					<button
						key={image}
						type="button"
						aria-label={`Show project image ${index + 1}`}
						onClick={() => setCurrentIndex(index)}
						className={`h-2.5 rounded-full transition-all ${
							index === currentIndex ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/50'
						}`}
					/>
				))}
			</div>
		</div>
	)
}
