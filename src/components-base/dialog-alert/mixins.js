import zIndexMarge from '../../common/z-index-marge'
import dialogModel from '../dialog-model/index.vue'

export default {
	data() {
		return {
			show: false,
			animate: true,
			message: '',
			customStyle: ''
		}
	},
	computed: {
		zIndex() {
			return zIndexMarge()
		}
	},
	components: {
		dialogModel
	},
	methods: {
		open() {
			this.show = true
			this.$emit('show')
			return this
		},
		close() {
			this.show = false
			this.$emit('close')
			return this
		},
		setMessage(message) {
			this.message = message
			return this
		},
		setAnimate(animate) {
			this.animate = animate
			return this
		}
	}
}


