import './styles.css'
import React from 'react'

interface Props {
	ref: React.RefObject<HTMLDivElement>,
	classes: string
}

const LoadingSpinner = (props: Props) => {
	const {ref, classes} = props
	return (
		<div className={`${classes} loader-container`} ref={ref}>
			<span className="loader"></span>
		</div>
	)
}
export default LoadingSpinner
