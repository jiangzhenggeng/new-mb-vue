<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .com2-logo__wrap {
    margin: auto;
    width: px2rem(477);
    .com2-logo__wrap-inner {
      display: flex;
    }

    .com2-logo__wrap-logo {
      width: px2rem(112);
      height: px2rem(91);
      img {
        width: 100%;
        height: 100%
      }
    }
    .com2-logo__desc {
      flex: 1;
      text-align: center;
    }
    .com2-logo__title {
      color: #51C0F0;
      font-weight: 500;
      font-size: px2rem(40);
      line-height: px2rem(56);
    }
    .com2-logo__english {
      color: #FFFFFF;
      font-size: px2rem(20);
      line-height: px2rem(28);
      margin-top: px2rem(8);
    }
  }
</style>

<template>
  <div class="com2-logo__wrap">
    <div class="com2-logo__wrap-inner">
      <div class="com2-logo__wrap-logo">
        <img :src="list['type'+typeid].cover"/>
      </div>
      <div class="com2-logo__desc">
        <div class="com2-logo__title">{{list['type'+typeid].title}}</div>
        <div class="com2-logo__english">{{list['type'+typeid].en}}</div>
      </div>
    </div>
  </div>
</template>
<script>
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	export default {

		data() {
			return {
				typeid: GetQueryString('type'),
				list: {
					type1: {
						cover: require('./type-1.svg'),
						title: '年度AI先锋-投票',
						en: 'AI Pioneer of the Year'
					},
					type2: {
						cover: require('./type-2.svg'),
						title: '年度创新产品-投票',
						en: 'Innovative Product of the Year'
					},
					type3: {
						cover: require('./type-3.svg'),
						title: '年度商业应用-投票',
						en: 'Commercial Application of the Year'
					},
				}
			}
		}
	}
</script>
