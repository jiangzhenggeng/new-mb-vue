<template>
  <div @click="open" class="area-select-wrap">
    <slot></slot>
    <div
      :class="['area2-select-wrap',show?'show':'']"
      :style="`z-index:`"
    >
      <div class="area2-select-mask" @click.stop="close"/>
      <div class="area2-select-inner">
        <div class="area2-select-header">
          <div class="area2-close-wrap btn-active" @click.stop="close">
            <img
              class="area2-close-icon"
              src="./area_close.png"
            />
          </div>
          <div>所在区域</div>
        </div>
        <div class="area2-sub-header">
          <div
            v-if="inner_addrSelect.length"
            v-for="(addrSelectItem,addrSelectIndex) in inner_addrSelect"
            :key="addrSelectItem.id"
            @click="tapTabBar(addrSelectIndex)"
            :class="['area2-sub-item',currentTab==addrSelectIndex?'on':'']"
          >
            {{addrSelectItem.name}}
          </div>
          <div
            v-if="inner_addrSelect.length<addrList.length"
            :class="['area2-sub-item',currentTab>=addrList.length-1?'on':'']"
            @click="tapTabBar(inner_addrSelect.length)"
          >
            {{'请选择'}}
          </div>
        </div>
        <div class="area2-item-wrap">
          <swiper
            class="area2-swiper-box"
            :options="swiperOption"
            ref="mySwiper"
          >
            <swiper-item
              v-for="(addrListItem,addrListIndex) in addrList"
              :key="addrListIndex"
            >
              <div class="area2-swiper-scroll-view">
                <div class="area2-swiper-inner">
                  <div
                    v-for="item in addrListItem"
                    :key="item.name"
                    @click="clickSelectArea(item,addrListIndex)"
                    :class="[
                      'area2-swiper-item',
                      'btn-active',
                      inner_addrSelect[addrListIndex] && item.name==inner_addrSelect[addrListIndex].name?'on':''
                    ]"
                  >
                    <div class="area2-swiper-areaname">{{item.name}}</div>
                  </div>
                </div>
              </div>
            </swiper-item>
          </swiper>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
	require('swiper/dist/css/swiper.css')

	var cityList = require('./cityList')
	cityList = cityList.sort(function (a, b) {
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

	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import zIndexMarge from '../../common/z-index-marge'

	export default {
		name: 'AddrSelect',
		props: {
			addrSelect: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			let vm = this
			return {
				show: false,
				currentTab: 0,
				addrList: [],
				inner_addrSelect: [],
				swiperOption: {
					onSlideChangeEnd(swiper) {
						vm.currentTab = swiper.activeIndex
					}
				}
			}
		},
    computed:{
			zIndex(){
				return zIndexMarge()
      }
    },
		components: {
			swiper,
			swiperItem: swiperSlide
		},
		watch: {
			addrSelect() {
				this._setInitSelect()
			}
		},
		mounted() {
			this.mySwiper = this.$refs['mySwiper'].swiper
			window.mySwiper = this.mySwiper
			this._setInitSelect()
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

				let _addrSelect = []
				for (var i = 0; i < addrSelect.length || i == 0; i++) {
					selectid = tempResult ? tempResult.selectid : 0
					tempResult = getCurrentItemList(cityList, selectid, addrSelect[i])
					addrList[i] = tempResult.list
					if (tempResult.selectid) {
						_addrSelect.push(addrSelect[i])
					}
				}
				this.addrList = addrList
				this.inner_addrSelect = _addrSelect
				this.currentTab = addrList.length - 1
				this.mySwiper.slideTo(this.currentTab, 320, false)
			},
			open() {
				this.show = true
				this.$emit('open')
			},
			close() {
				this.show = false
				this.$emit('close')
			},
			tapTabBar(currentTab) {
				this.currentTab = currentTab
				this.mySwiper.slideTo(currentTab, 320, false)
			},
			clickSelectArea(item, currentTab) {
				var nextTab = currentTab + 1
				var inner_addrSelect = this.inner_addrSelect
				var addrList = this.addrList
				//已选择地址
				inner_addrSelect[currentTab] = {
					name: item.name,
					id: item.id
				}
				inner_addrSelect.splice(currentTab + 1)
				var nextItemList = getCurrentItemList(cityList, item.id)
				if (nextItemList.list.length) {
					addrList[nextTab] = nextItemList.list
				}
				addrList.splice(nextTab + 1)

				this.inner_addrSelect = inner_addrSelect
				this.addrList = addrList

				let temp_currentTab = currentTab >= addrList.length - 1 ? currentTab : currentTab + 1

				this.$nextTick(() => {
					this.mySwiper.slideTo(temp_currentTab, 320, false)
					if (currentTab >= addrList.length - 1) {
						this.$emit('select', this.inner_addrSelect)
						this.close()
					}
					this.$nextTick(() => {
						this.currentTab = temp_currentTab
					})
				})
			}
		}
	}
</script>
<style lang="scss">
  @import "./index.scss";
</style>












