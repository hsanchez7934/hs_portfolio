'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import {btnColors, btnFlexStyles} from '@/app/lib/utils'
import {FaHandPointLeft, FaHandPointRight} from 'react-icons/fa6'

interface Props {
	images: string[]
}

export default function ImageCarousal(props: Props) {
	const {images} = props
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentDisplayedImage, setCurrentDisplayedImage] = useState(images[currentIndex])

	const handleBtnLeft = () => {
		if (currentIndex === 0) {
			setCurrentIndex(images.length - 1)
			setCurrentDisplayedImage(images[images.length - 1])
		} else if (currentIndex > 0 && currentIndex <= images.length - 1) {
			setCurrentIndex(currentIndex - 1)
			setCurrentDisplayedImage(images[currentIndex - 1])
		}
	}

	const handleBtnRight = () => {
		if (images.length - 1 === currentIndex) {
			setCurrentIndex(0)
			setCurrentDisplayedImage(images[0])
		} else if (currentIndex <= images.length - 1 && currentIndex >= 0) {
			setCurrentIndex(currentIndex + 1)
			setCurrentDisplayedImage(images[currentIndex + 1])
		}
	}

	return (
		<div className="w-full h-full relative bg-black p-6">
			<Image src={`${currentDisplayedImage}`} width={500} height={500} className="h-full w-full object-cover object-center" alt="img" />
			<div className="w-full absolute h-14 left-0 flex" style={{top: '40%'}}>
				<div className="flex items-center w-1/2">
					<button
						id="img-carousal-button-left"
						type="button"
						aria-label="See previous project image"
						aria-pressed={undefined}
						onClick={() => handleBtnLeft()}
						className={`${btnColors} h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles} opacity-70`}
					>
						<FaHandPointLeft />
					</button>
				</div>
				<div className="flex items-center justify-end w-1/2">
					<button
						id="img-carousal-button-right"
						type="button"
						aria-label="See next project image"
						aria-pressed={undefined}
						onClick={() => handleBtnRight()}
						className={`${btnColors} h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full text-2xl sm:text-3xl md:text-4xl ${btnFlexStyles} opacity-70`}
					>
						<FaHandPointRight />
					</button>
				</div>
			</div>
		</div>
	)
}
