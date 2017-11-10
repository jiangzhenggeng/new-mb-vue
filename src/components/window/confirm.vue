<style lang="scss">
  @import "./window-dialog.scss";
</style>
<style lang="scss" scoped="">
  @import "../../style/scss/helpers/functions";

  .dialog__inner {
    width: 80%;
    height: auto;

    .confirm__body {
      padding: px2rem(50) px2rem(24);
      text-align: center;
      font-size: px2rem(32);
      min-height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .confirm__btn-wrap {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      user-select: none;
    }
    .confirm__btn-wrap {
      border-top: px2rem(1.5) solid #ccc;
      text-align: center;
      height: px2rem(90);
    }
    .confirm__btn {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: px2rem(30);
      &:active {
        background-color: #f7f7f7;
        color: #666;
      }
      &:after {
        position: absolute;
        content: '';
        display: block;
        height: 100%;
        width: px2rem(1.5);
        background-color: #ccc;
        left: px2rem(-1.5/2);
        top: 0;
      }
      &:first-child:after {
        display: none;
      }
    }
  }
</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="window_show" class="dialog__wrap">
    <div class="dialog__inner">
      <div class="confirm__body">
        <slot name="content">
          <div class="dialog__text" v-if="inner_text">{{ inner_text }}</div>
        </slot>
      </div>
      <div class="confirm__btn-wrap">
        <div v-if="type=='confirm'" class="confirm__btn" @click="cancel">
          <slot name="left-btn">取消</slot>
        </div>
        <div class="confirm__btn" @click="ok">
          <slot name="right-btn">确认</slot>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>

  import Modal from '../modal/modal.vue'

  export default {
    name: 'Confirm',
    props: {
      type: {
        type: String,
        default: 'confirm'
      },
      modal: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: '提示信息'
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        window_show: this.visible,
        inner_text: this.text
      }
    },
    components: {
      Modal
    },
    methods: {
      cancel () {
        this.$emit('cancel')
        this.close()
        return this
      },
      ok () {
        this.$emit('ok')
        this.close()
        return this
      },
      setText (text) {
        this.inner_text = text
        return this
      },
      show (time) {
        this.window_show = true
        this.__close_timer__ && clearTimeout(this.__close_timer__)
        if (time) {
          this.__close_timer__ = setTimeout(() => {
            this.close()
          }, time)
        }
        return this
      },
      close () {
        this.window_show = false
        this.__close_timer__ && clearTimeout(this.__close_timer__)
        return this
      }
    }
  }
</script>