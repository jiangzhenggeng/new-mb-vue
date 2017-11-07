<style lang="scss">

  @import "../../style/scss/helpers/functions";

  .area2-select-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #9D9D9D;
    font-size: px2rem(28);
    z-index: 9;
  }

  .area2-select-mask {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .area2-select-inner {
    height: px2rem(640);
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .area2-select-header {
    height: px2rem(100);
    line-height: px2rem(100);
    text-align: center;
    position: relative;
    font-size: px2rem(32);
    border-bottom: 1px solid #F3F3F3;
  }

  .area2-close-wrap {
    padding: px2rem(24);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    img {
      display: block;
      width: px2rem(30);
      height: px2rem(30);
    }
  }

  .area2-close-icon {
    width: 100%;
    height: 100%;
  }

  .area2-sub-header {
    height: px2rem(80);
    line-height: px2rem(80);
    border-bottom: 1px solid #F3F3F3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 0 px2rem(24);
  }

  .area2-sub-item {
    padding: 0 px2rem(20);
    position: relative;
  }

  .area2-sub-item::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: px2rem(6);
    bottom: 0;
    left: 0;
    background-color: #F34416;
    display: none;
  }

  .area2-sub-item.on {
    color: #F34416;
  }

  .area2-sub-item.on::after {
    display: block;
  }

  .area2-item-wrap {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  .swiper-container{
    height: 100%;
  }
  .swiper-slide {
    overflow-y: scroll;
  }
  .area2-swiper-box {
    height: px2rem(436);
  }

  .area2-swiper-inner {
    padding: px2rem(25) px2rem(44);
  }

  .area2-swiper-slide {
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .area2-swiper-slide.on {
    color: #F34416;
  }

  .area2-swiper-areaname {
    position: relative;
    padding-right: 45px;
  }

  .area2-swiper-areaname::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0px;
    top: 50%;
    margin-top: -10px;
    line-height: normal;
    display: none;
    background-position: center center;
    background-size: 10px auto;
    background-repeat: no-repeat;
    background-image: url(http://cdn.jiguo.com/static/WeiXin/images/center/area_gou.png);
  }

  .on .area2-swiper-areaname::after {
    display: block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>

<template>
  <transition name="fade">
    <div class="area2-select-wrap" v-if="show">
      <div class="area2-select-mask" @click="close"></div>
      <div class="area2-select-inner">
        <div class="area2-select-header">
          <div class="area2-close-wrap" @click="">
            <img class="area2-close-icon" src="./area_close.png"/>
          </div>
          <div>所在区域</div>
        </div>

        <div class="area2-sub-header">
          <div class="area2-sub-item">北京</div>
          <div class="area2-sub-item">北京市</div>
          <div class="area2-sub-item">海淀区</div>
        </div>

        <div class="area2-item-wrap">
          <swiper
            :options="swiperOption"
            :not-next-tick="notNextTick"
            ref="mySwiper"
          >
            <swiper-slide>
              <div v-for="item in provinceList" @click="selectItem(item,'select_province')">
                <div class="area2-swiper-inner">
                  <div bindtap="selectResideprovince">
                    <div class="area2-swiper-areaname">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div v-for="item in cityList" @click="selectItem(item,'select_city')">
                <div class="area2-swiper-inner">
                  <div bindtap="selectResideprovince">
                    <div class="area2-swiper-areaname">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div v-for="item in countyList" @click="selectItem(item,'select_county')">
                <div class="area2-swiper-inner">
                  <div bindtap="selectResideprovince">
                    <div class="area2-swiper-areaname">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
  require('swiper/dist/css/swiper.css')
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import PickerItem from '../picker-item/picker-item.vue'
  import cityList from './cityList'

  function getArea (pid) {
    var areaArray = []
    cityList.forEach(item => {
      if (item.pid === pid) {
        areaArray.push(item)
      }
    })
    return areaArray
  }

  function nameFind (name) {
    var data = {}
    cityList.forEach(item => {
      if (item.name === name) {
        data = item
      }
    })
    return data
  }

  export default {
    name: 'pdIosSelect',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      province: {
        type: String,
        default: '北京'
      },
      city: {
        type: String,
        default: '北京市'
      },
      county: {
        type: String,
        default: '东城区'
      }
    },
    data () {
      return {
        provinceList: getArea(0),
        cityList: getArea(1),
        countyList: getArea(2),
        select_province: nameFind(this.province),
        select_city: nameFind(this.city),
        select_county: nameFind(this.county),
        inner_show: this.show,

        notNextTick: true,
        swiperOption: {
          initialSlide:0,
          loop: false,
          direction: 'horizontal',
          debugger: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        }
      }
    },
    watch: {
      select_province (newVal) {
        this.cityList = getArea(newVal.id)
      },
      select_city (newVal) {
        this.countyList = getArea(newVal.id)
      },
      show (newVal) {
        this.inner_show = newVal
      }
    },
    components: {
      PickerItem,
      swiper,
      swiperSlide
    },
    methods: {
      getReturnData () {
        var array = []
        this.provinceList.length && array.push(this.select_province)
        this.cityList.length && array.push(this.select_city)
        this.countyList.length && array.push(this.select_county)

        return array
      },
      close () {
        this.inner_show = false
        this.$emit('update:show', false)
        this.$emit('close', this.getReturnData())
      },
      ok () {
        this.$emit('update:show', false)
        this.inner_show = false
        this.$emit('ok', this.getReturnData())
      },
      selectItem(item,key){
        this[key] = item;
      }
    }
  }
</script>