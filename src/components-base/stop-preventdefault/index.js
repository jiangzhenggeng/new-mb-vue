let eventsList = [
	'mousewheel',
	'DOMMouseScroll',
	'touchmove'
]

function preventDefault(e) {
	e.preventDefault()
	e.stopPropagation()
	return false
}

export function stopScrollEvent(obj) {
	let dom = obj || window
	eventsList.forEach((item) => {
		dom.addEventListener(item, preventDefault, {passive: false})
	})
	return () => {
		eventsList.forEach((item) => {
			dom.removeEventListener(item, preventDefault)
		})
	}
}

export default {
	methods: {
		stopScrollEvent
	}
}
