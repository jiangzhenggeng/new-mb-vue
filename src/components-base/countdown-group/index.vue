<script>
	import mixinsEvent from '../../common/event-emitter'

	export default {
		name: 'CountdownGroup',
		componentName: 'CountdownGroup',
		mixins: [mixinsEvent],
		provide() {
			return {
				CountdownGroup: this
			}
		},
		props: {
			interval: {
				type: Number,
				default: 1000
			}
		},
		created() {
			this.$on('el.add.Countdown', this.addCountdown)
			this.$on('el.remove.Countdown', this.removeCountdown)
		},
		render() {
			let children = this.$slots.default
			if (!children || !children.length) {
				return
			}
			if (process.env.NODE_ENV !== 'production' && children.length > 1) {
				new Error('countdown-group只能包含一个根元素')
			}
			return children[0]
		},
		methods: {
			addCountdown(countdown) {
				if (!this.countdownArray) {
					this.countdownArray = []
				}
				if (countdown.run.call(countdown)) {
					this.countdownArray.push(countdown)
					this.startAllBack()
				}
			},
			removeCountdown(countdown) {
				if (!this.countdownArray.length) {
					this.stopAllBack()
				} else {
					let index = this.countdownArray.indexOf(countdown)
					this.countdownArray.splice(index, 1)
				}
			},

			startAllBack() {
				if (this.countdownGroupRunStatus) return
				this._runingAllCountdown()
			},
			stopAllBack() {
				this.countdownGroupRunStatus &&
				clearTimeout(this.countdownGroupRunStatus)
				this.countdownGroupRunStatus = false
			},
			_runingAllCountdown() {
				this.countdownGroupRunStatus = setTimeout(() => {
					this._runingLoop()
				}, this.interval)
			},
			_runingLoop() {
				this.countdownArray = this.countdownArray.filter((countdown) => {
					let result = countdown.run.call(countdown)
					return result
				})

				this.$emit('run')
				if (this.countdownArray.length <= 0) {
					setTimeout(() => {
						this.stopAllBack()
						this.$emit('end')
					}, this.interval)
				} else {
					this._runingAllCountdown()
				}
			}
		},
		beforeDestroy() {
			this.countdownGroupRunStatus &&
			clearTimeout(this.countdownGroupRunStatus)
			this.countdownGroupRunStatus = false
		}
	}
</script>













