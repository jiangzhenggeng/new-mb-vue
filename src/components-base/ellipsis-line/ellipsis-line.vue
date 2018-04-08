<template>
  <div
    class="ellipsis-line-wrap"
    :style="`-webkit-line-clamp:${line}`"
  >
    <slot></slot>
  </div>
</template>
<script>
	export default {
		name: 'EllipsisLine',
		props: {
			line: {
				type: Number,
				default: 1
			}
		}
	}
</script>
<style lang="less">
  .ellipsis-line-wrap {
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
</style>
