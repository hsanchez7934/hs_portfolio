import './styles.css'

interface Props {
	classes: string
}

const LoadingSpinner = (props: Props) => {
	const {classes} = props
	return (
		<div className={`${classes} loader-container`}>
			<span className="loader"></span>
		</div>
	)
}
export default LoadingSpinner
