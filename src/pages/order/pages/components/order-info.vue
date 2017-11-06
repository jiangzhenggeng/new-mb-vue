<style lang="scss" >
  @import "./module.less";

  .module__box {

    .order__item-row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .order__item-input-warp,
    .order__cell-flex {
      flex: 1;
      position: relative;
    }
    .order__item-title {
      width: 160px;
      line-height: 80px;
      color: #a3a3a3;
    }
    .order__item-input-warp {
      width: 100%;
      padding: 20px;
      border: 2px solid #e6e6e6;
      border-radius: 10px;
      display: block;
    }
    .input__text {
      width: 100%;
      border: none;
      font-size: 28px;
      height: 35px;
      line-height: 35px;
      outline: none;
      background: transparent;
      appearance: none;
    }
    .order__item-tips {
      font-size: 24px;
      color: #a3a3a3;
      margin-top: 10px;
    }
  }
</style>
<template>
  <div class="module__wrap">
    <h3 class="module__title">收货信息</h3>
    <div class="module__box">

      <div class="order__item-row">
        <div class="order__item-title">姓名：</div>
        <label class="order__item-input-warp">
          <input type="text" class="input__text" id="username" value="蒋正庚" placeholder="姓名" error="请填写姓名">
        </label>
      </div>
      <div class="order__item-row">
        <div class="order__item-title">手机号：</div>
        <label class="order__item-input-warp">
          <input type="number" class="input__text" name="order[tel]" id="tel" value="15727321579" placeholder="手机号"
                 error="请填写手机号">
        </label>
      </div>
      <div class="order__item-row">
        <div class="order__item-title">地址：</div>
        <label class="order__item-input-warp" @click="show_select_area = true">
          <input type="text" class="input__text" :value="area | areaFilter"
                 placeholder="详细地址" disabled>
          <picker-area
            province="贵州"
            city="贵阳市"
            county="花溪区"
            :show.sync="show_select_area"
            @ok="areaSelect"
          ></picker-area>
        </label>
      </div>
      <div class="order__item-row">
        <div class="order__item-title">详细地址：</div>
        <label class="order__item-input-warp">
          <input type="text" class="input__text" name="order[address]" id="address" value="清华同方科技广场D座东楼1605"
                 placeholder="详细地址" error="未填写收货地址">
        </label>
      </div>
      <div class="order__item-row">
        <div class="order__item-title">邮编：</div>
        <label class="order__item-input-warp">
          <input type="number" class="input__text" name="order[postalcode]" id="postalcode" value="550069"
                 placeholder="邮编" error="未填写邮编">
        </label>
      </div>
      <div class="order__item-row">
        <div class="order__item-title">备注信息：</div>
        <div class="order__cell-flex">
          <label class="order__item-input-warp">
            <input type="text" class="input__text" name="order[product_remarks]" id="product_remarks" value=""
                   placeholder="备注信息" error="请填写备注信息">
          </label>
          <div class="order__item-tips">还有什么需要对果小妞叮嘱的么？快写下来吧！</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PickerArea from '@/components/picker-area/index.vue'

  export default {
    data () {
      return {
        show_select_area: false,
        area: {
          province: '',
          city: '',
          county: ''
        }
      }
    },
    components: {
      PickerArea
    },
    methods: {
      areaSelect (array) {
        this.area.province = array[0] && array[0].name
        this.area.city = array[1] && array[1].name
        this.area.county = array[2] && array[2].name
      }
    },
    filters: {
      areaFilter (area) {

        return area.province ? area.province + '/' + area.city + (area.county ? '/' + area.county : '') : ''
      }
    }
  }
</script>










