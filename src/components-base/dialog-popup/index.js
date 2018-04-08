import createComponent from '../../common/create-component'
import component from './index.vue'

const componentPlus = {
	install(Vue) {
		Vue.component(component.name, component)
		Vue.prototype['$' + component.name] = createComponent(Vue, component)
	}
}

export default componentPlus