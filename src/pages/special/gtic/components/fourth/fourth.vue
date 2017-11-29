<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .fourth__wrap {
    margin-top: px2rem(80);
    font-size: px2rem(24);
    color: #999999;
    .fourth__wrap-text {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 px2rem(40);
    }
    .fourth__wrap-item {
      margin-bottom: px2rem(13);
      width: px2rem(215);
      overflow: hidden;
    }
  }

</style>
<template>
  <div class="fourth__wrap">
    <div class="fourth__wrap-inner">
      <div class="fourth__wrap-title">
        <common-title
          :index="`04`"
          :title="`Judges`"
          :bottom="`/ 评委嘉宾 /`"
        />
      </div>
      <div class="fourth__wrap-text">
        <common-item class="fourth__wrap-item" v-for="item in list" :item="item" :key="item | getKey"></common-item>
      </div>
    </div>
  </div>
</template>
<script>
	import CommonTitle from './../common-title/common-title.vue'
	import CommonItem from './item.vue'

	export default {
		data() {
			return {
				list: [
					{
						name: '陈昱',
						img: require('./images/01陈昱-云启资本-执行董事.jpg'),
						desc: '云启资本<br>执行董事'
					},
					{
						name: '龚伦常',
						img: require('./images/02龚伦常-智东西-CEO.png'),
						desc: '智东西<br>CEO'
					},
					{
						name: '顾旻曼',
						img: require('./images/03顾旻曼-真格基金-董事总经理.jpg'),
						desc: '真格基金<br>董事总经理'
					},
					{
						name: '何建文',
						img: require('./images/04何建文-辰韬资本-管理合伙人.jpg'),
						desc: '辰韬资本<br>管理合伙人'
					},
					{
						name: '贾静',
						img: require('./images/05贾静-德联资本-合伙人.png'),
						desc: '德联资本<br>合伙人'
					},
					{
						name: '刘鹏',
						img: require('./images/06刘鹏-极果-创始人&CEO.png'),
						desc: '极果<br>创始人&CEO'
					},
					{
						name: '满坤',
						img: require('./images/07满坤-安创空间合伙人、安创资本管理合伙人.png'),
						desc: '安创空间合伙人、安创资本管理合伙人'
					},
					{
						name: '毛圣博',
						img: require('./images/08毛圣博-熊猫资本-合伙人.jpg'),
						desc: '熊猫资本<br>合伙人'
					},
					{
						name: '孟醒',
						img: require('./images/09孟醒-顺为资本-副总裁.jpg'),
						desc: '顺为资本<br>副总裁'
					},
					{
						name: '石东华',
						img: require('./images/010石东华-索道投资-创始合伙人.jpg'),
						desc: '索道投资<br>创始合伙人'
					},
					{
						name: '王华东',
						img: require('./images/011王华东-经纬创投-合伙人.png'),
						desc: '经纬创投<br>合伙人'
					},
					{
						name: '王晟',
						img: require('./images/012王晟-英诺天使基金-合伙人.jpg'),
						desc: '英诺天使基金<br>合伙人'
					},
					{
						name: '吴智勇',
						img: require('./images/013吴智勇-丰厚资本-创始合伙人.jpg'),
						desc: '丰厚资本<br>创始合伙人'
					},
					{
						name: '熊伟铭',
						img: require('./images/014熊伟铭-华创资本-合伙人.jpg'),
						desc: '华创资本<br>合伙人'
					},
					{
						name: '祝晓成-',
						img: require('./images/015祝晓成-臻云创投-创始合伙人.jpg'),
						desc: '臻云创投<br>创始合伙人'
					}
				]
			}
		},
		components: {
			CommonTitle,
			CommonItem
		},
		filters: {
			getKey(item) {
				return item.key || Math.random()
			}
		}
	}
</script>