<style lang="scss">
  @import "./style.scss";
</style>

<template>
  <div
    @click="open"
    class="area2-select-wrap"
  >
    <slot></slot>
    <div class="area2-select-box" v-if="show_inner">
      <div class="area2-select-mask" @click.stop="close"/>
      <div class="area2-select-inner">
        <div class="area2-select-header">
          <div class="area2-close-wrap" @click.stop="close">
            <img class="area2-close-icon" src="./area_close.png"/>
          </div>
          <div>所在区域</div>
        </div>

        <div class="area2-sub-header">
          <template v-if="inner_addrSelect.length">
            <div
              v-for="(inner_addrSelectItem,inner_addrSelectIndex) in inner_addrSelect"
              :key="inner_addrSelectItem.id"
              @click="tapTabBar(inner_addrSelectIndex)"
              :class="['area2-sub-item',currentTab==inner_addrSelectIndex?'on':'']"
            >
              {{inner_addrSelectItem.name}}
            </div>
          </template>
          <template v-if="inner_addrSelect.length<addrList.length">
            <div
              :class="['area2-sub-item',currentTab>=addrList.length-1?'on':'']"
              @click="tapTabBar(inner_addrSelect.length)"
            >
              {{'请选择'}}
            </div>
          </template>

        </div>

        <div class="area2-item-wrap">
          <swiper
            :options="swiperOption"
            :not-next-tick="notNextTick"
            ref="mySwiper"
          >
            <swiper-slide
              v-for="(addrListItem,addrListIndex) in addrList"
              :key="addrListIndex"
            >
              <div
                v-for="item in addrListItem"
                :key="item.name"
                @click="clickSelectArea(item.id,item.name)"
                class="area2-swiper-inner"
              >
                <div class="area2-swiper-areaname">{{ item.name }}</div>
                <img v-if="inner_addrSelect[addrListIndex] && item.name==inner_addrSelect[addrListIndex].name" class="area2-swiper-gou" src="./area_gou.png" />
              </div>
            </swiper-slide>

          </swiper>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
	require('swiper/dist/css/swiper.css')
	import {swiper, swiperSlide} from 'vue-awesome-swiper'

	import PickerItem from '../picker-item/picker-item.vue'
	import _cityList from './cityList'

	let cityList = _cityList.sort(function (a, b) {
		return a.id > b.id ? -1 : 1
	})

	function getCurrentItemList(cityList, pid, defaultSelect) {
		var list = []
		var selectid
		for (let i = cityList.length - 1; i >= 0; i--) {
			let item = cityList[i]
			if (item.pid == pid) {
				if (defaultSelect && defaultSelect.name == item.name) {
					selectid = item.id
				}
				list.push(item)
			}
		}
		return {
			list,
			selectid
		}
	}

	export default {
		name: 'pdIosSelect',
		props: {
			show: {
				type: Boolean,
				default: false
			},
			addrSelect: {
				type: Array,
				default: []
			},
		},
		data() {
			let vm = this
			return {
				addrList: [],
				inner_addrSelect: [],

				show_inner: this.show,
				currentTab: 0,

				notNextTick: true,
				swiperOption: {
					loop: false,
					direction: 'horizontal',
					onSlideChangeStart(swiper) {
						vm.currentTab = swiper.activeIndex
					}
				}
			}
		},
		watch: {
			addrSelect() {
				this._setInitSelect()
			}
		},
		created() {
			this._setInitSelect()
		},
		components: {
			PickerItem,
			swiper,
			swiperSlide
		},
		methods: {
			_setInitSelect() {
				var addrSelect = this.addrSelect
				var addrList = []
				var tempResult, selectid
				var hasFixGh = true
				addrSelect = addrSelect.filter((item) => {
					if (item.name && hasFixGh) {
						return true
					}
					hasFixGh = false
					return false
				}).map((item) => {
					item.name = (item.name + '').replace(/^\s+|\s+$/g, '')
					return item
				})

				let inner_addrSelect = []
				for (var i = 0; i < addrSelect.length || i == 0; i++) {
					selectid = tempResult ? tempResult.selectid : 0
					tempResult = getCurrentItemList(cityList, selectid, addrSelect[i])
					addrList[i] = tempResult.list
					if (tempResult.selectid) {
						inner_addrSelect.push(addrSelect[i])
					}
				}

				this.addrList = addrList
				this.inner_addrSelect = inner_addrSelect
				this.currentTab = addrList.length - 1
				this.swiperOption.initialSlide = addrList.length - 1
			},
			open() {
				this.show_inner = true
				this.$emit('open')
			},
			close() {
				this.show_inner = false
				this.$emit('close')
			},
			tapTabBar(currentTab) {
				this.$refs['mySwiper'].swiper.slideTo(currentTab)
				this.currentTab = currentTab
			},
			clickSelectArea(itemId, itemName) {
				var currentTab = this.$refs['mySwiper'].swiper.activeIndex
				var nextTab = currentTab + 1
				var inner_addrSelect = this.inner_addrSelect
				var addrList = this.addrList
				//已选择地址
				inner_addrSelect[currentTab] = {
					name: itemName,
					id: itemId
				}
				inner_addrSelect.splice(currentTab + 1)
				var nextItemList = getCurrentItemList(cityList, itemId)
				if (nextItemList.list.length) {
					addrList[nextTab] = nextItemList.list
				}
				addrList.splice(nextTab + 1)

				this.addrList = addrList
				this.inner_addrSelect = inner_addrSelect
				this.currentTab = currentTab >= addrList.length - 1 ? currentTab : currentTab + 1

				this.$nextTick(() => {
					if (currentTab >= addrList.length - 1) {
						this.$emit('select', this.inner_addrSelect)
						this.close()
					}
					this.$refs['mySwiper'].swiper.slideTo(this.currentTab)
				})
			}
		}
	}
</script>