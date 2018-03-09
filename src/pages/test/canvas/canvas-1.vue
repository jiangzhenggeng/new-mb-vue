<style lang="less">

</style>
<template>
  <canvas
    width='600'
    height='300'
    style='width:600px;height:300px;'
    id="canvas"
    ref="canvas"
  />
</template>
<script>
	export default {
		mounted() {
			let ctx = this.$refs['canvas'].getContext('2d')
			// ctx.width = 500
			// ctx.height = 500

			ctx.fillStyle = 'green'
			ctx.fillRect(0, 0, 100, 100)
			ctx.strokeWidth = '1'
			ctx.strokeStyle = 'red'
			ctx.strokeRect(0, 0, 100, 100)
		}
	}
</script>