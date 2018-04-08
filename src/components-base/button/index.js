import component from './index.vue'

const componentPlus = {
	install(Vue) {
		Vue.component(component.name, component)
	}
}

export default componentPlus