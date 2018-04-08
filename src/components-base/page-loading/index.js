import component from './index.vue'
import createComponent from '../../common/create-component'

const componentPlus = {
	install(Vue) {
		Vue.component(component.name, component)
		Vue.prototype['$' + component.name] = createComponent(Vue, component)
	}
}

export default componentPlus