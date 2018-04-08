import component from './ellipsis-line.vue'

const componentPlus = {
	install(Vue) {
		Vue.component(component.name, component)
	}
}

export default componentPlus