import pageLoading from './page-loading'
import dialogToast from './dialog-toast'
import dialogModel from './dialog-model'
import dialogAlert from './dialog-alert'
import dialogPopup from './dialog-popup'
import countdownGroup from './countdown-group'
import countdown from './countdown'
import addrSelect from './addr-select'

import customForm from './custom-form'
import customFormItem from './custom-form-item'
import customInput from './custom-input'
import buttonGroup from './button-group'
import button from './button'


const components = [
	pageLoading,
	dialogToast,
	dialogModel,
	dialogAlert,
	dialogPopup,
	countdownGroup,
	countdown,
	addrSelect,
	customForm,
	customFormItem,
	customInput,
	buttonGroup,
	button
]


const installComponent = {
	install(Vue) {
		components.forEach((component) => {
			component.install(Vue)
		})
	}
}

export default installComponent


























