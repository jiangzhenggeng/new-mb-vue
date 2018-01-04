<template>
  <div class="page" @click="showDialg">
    哈哈哈
  </div>
</template>

<script>
	export default {
		data() {
			return {
				a: {
					b: {
						c: 'hah'
					}
				}
			}
		},
    mounted(){
			console.log(this.$data)
    },
		methods: {
			showDialg() {
				this.Dialog().show()
			}
		}
	}
</script>



