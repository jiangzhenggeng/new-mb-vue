<template>
  <span><slot :data="rData"></slot></span>
</template>
<script>
	import ParseTime from './parse-time'
	import FormatTime from './format-time'
	import mixinsEvent from '../../common/event-emitter'

	export default {
		name: 'Countdown',
		mixins: [mixinsEvent],
		inject: {
			CountdownGroup: {
				default: null
			}
		},
		props: {
			endtime: {
				type: Number,
				isRequired: true
			},
			format: {
				type: String,
				default: '%dd天%hh小时%ii分%ss秒'
			},
			interval: {
				type: Number,
				default: 1000
			},
			formatType: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				rData: {}
			}
		},
		mounted() {
			this.dispatch('CountdownGroup', 'el.add.Countdown', [this])
		},
		methods: {
			run() {
				var newTime = new Date().getTime()
				var endTime = this._parseTime()

				var timeNumber = Math.round((endTime - newTime) / 1000)
				var timeNumber = timeNumber >= 0 ? timeNumber : 0

				let countdownTime = this._formatTime(timeNumber)

				let rData = {
					endTime,
					countdownTime,
					format: this.changeFormat,
					time: timeNumber,
					run: true,
					end: false
				}
				let result = true
				if (timeNumber > 0) {
					rData.run = true
					rData.end = false
					this.rData = rData
					this.$emit('run', rData)
					result = true
				} else {
					rData.run = false
					rData.end = true
					this.$emit('end', rData)
					result = false
				}
				this.rData = rData
				return result
			},
			_parseTime() {
				if (this._endtime) {
					return this._endtime
				}
				this._endtime = ParseTime(this.endtime)
				return this._endtime
			},
			_formatTime(intDiff) {
				let format_time = FormatTime(intDiff, 2)
				let day = format_time.day
				let hour = format_time.hour
				let minute = format_time.minute
				let second = format_time.second

				let changeFormat = this.format

				if (this.formatType == 1) {
					if (day > 0) {
						changeFormat = '%dd天后'
					} else if (hour > 0) {
						changeFormat = '%hh小时后'
					} else if (intDiff > 180) {
						changeFormat = '%ii分钟后'
					} else {
						changeFormat = '%ss秒后'
						second = intDiff
					}
				} else if (this.formatType == 2) {
					if (day > 0) {
						changeFormat = '%dd天%hh小时%ii分%ss秒'
					} else if (hour > 0) {
						changeFormat = '%hh小时%ii分%ss秒'
					} else if (minute > 0) {
						changeFormat = '%ii分%ss秒'
					} else {
						changeFormat = '%ss秒'
					}
				}

				this.changeFormat = changeFormat

				return this.changeFormat
					.replace('%dd', day)
					.replace('%hh', hour)
					.replace('%ii', minute)
					.replace('%ss', second)
			}
		},
		beforeDestroy() {
			this.dispatch('CountdownGroup', 'el.remove.Countdown', [this])
		}
	}
</script>