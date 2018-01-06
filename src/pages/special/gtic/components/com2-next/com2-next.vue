<style lang="scss">
  @import "../../../../../style/scss/helpers/functions";

  .com2-next__wrap {
    width: px2rem(560);
    margin: auto;
    box-sizing: border-box;
    padding: px2rem(35);
    border: px2rem(2) solid #ccc;
    .com2-logo__wrap-inner {
      margin-top: px2rem(-80px);
    }
    .com2-logo__item {
      margin-top: px2rem(20);
    }
    .com2-logo__title {
      color: #fff;
      font-size: px2rem(28);
      line-height: px2rem(40);
      text-align: center;
      background: #000 url(../../images/page-bg.png);
    }
    .com2-logo__desc {
      margin-top: px2rem(10);
      color: #CCCCCC;
      font-size: px2rem(24);
      line-height: px2rem(33);
    }
  }
</style>

<template>
  <div class="com2-next__wrap">
    <div class="com2-logo__wrap-inner" v-html="content"/>
  </div>
</template>
<script>
	import type1 from './type1.html'
	import type2 from './type2.html'
	import type3 from './type3.html'

	export default {
		props: {
			type: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				content: type1,
				list: {
					type1: type1,
					type2: type2,
					type3: type3
				}
			}
		},
		created() {
			this.content = this.list['type' + this.type]
		}
	}
</script>











