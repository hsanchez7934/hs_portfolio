const textSizesPrimary =
	'text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-tight text-slate-950 dark:text-white text-center'
const textSizesSecondary =
	'text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-8 text-slate-700 dark:text-slate-200 text-center'

const sectionStyles = 'px-6 py-20'
const sectionInnerStyles = 'mx-auto max-w-6xl'

const btnColors =
	'bg-slate-900 text-white shadow-lg shadow-slate-900/10 transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400'
const btnFlexStyles = 'inline-flex items-center justify-center gap-2.5'
const btnSizes =
	'rounded-full min-h-12 px-6 py-3 text-sm font-semibold sm:min-h-14 sm:px-7 sm:text-base xl:text-lg'
const iconBtnSizes =
	'h-12 w-12 rounded-full text-xl sm:h-14 sm:w-14 sm:text-2xl md:h-16 md:w-16 md:text-3xl'

const heroSectionStyles =
	'relative isolate h-dvh min-h-[620px] overflow-hidden bg-slate-950 bg-center bg-cover bg-no-repeat px-6 pt-6'
const heroOverlayStyles =
	'absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/85 via-slate-950/55 to-cyan-950/60'
const heroContentStyles = 'mx-auto flex h-full max-w-4xl flex-col items-center justify-center text-center'
const heroTitleStyles =
	'text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl'
const heroSubtitleStyles =
	'mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg md:text-xl lg:text-2xl'

const cardStyles =
	'rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/20'
const darkCardStyles =
	'rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-xl shadow-slate-950/20'
const badgeStyles =
	'inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100'
const formFieldStyles =
	'block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-slate-950 dark:text-white'

export {
	badgeStyles,
	btnColors,
	btnFlexStyles,
	btnSizes,
	cardStyles,
	darkCardStyles,
	formFieldStyles,
	heroContentStyles,
	heroOverlayStyles,
	heroSectionStyles,
	heroSubtitleStyles,
	heroTitleStyles,
	iconBtnSizes,
	sectionInnerStyles,
	sectionStyles,
	textSizesPrimary,
	textSizesSecondary
}
