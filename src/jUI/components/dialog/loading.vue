<style lang="scss">
  @import "./window-dialog.scss";
</style>
<style lang="scss" scoped="">
  @import "../../style/scss/helpers/functions";

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading__icon {
    animation: rotate-animation 1000ms infinite linear;
  }

  .dialog__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="window_show" class="dialog__wrap">
    <div class="dialog__inner">
      <slot>
        <template v-if="type=='loading'">
          <img class="window__icon loading__icon" src="./images/loading@3x.png"/>
        </template>
        <template v-if="type=='success'">
          <img class="window__icon" src="./images/success@3x.png"/>
        </template>
        <template v-if="type=='fail'">
          <img class="window__icon" src="./images/fail@3x.png"/>
        </template>
      </slot>
      <slot name="text">
        <div class="dialog__text" v-if="text">{{ text }}</div>
      </slot>
    </div>
  </modal>
</template>
<script>

  import Modal from '../modal/modal.vue'

  export default {
    name: 'Loading',
    props: {
      type: {
        type: String,
        default: 'loading'
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
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        window_show: this.visible
      }
    },
    components: {
      Modal
    },
    methods: {
      show (time) {
        this.window_show = true
        this.__close_timer__ && clearTimeout(this.__close_timer__)
        if (time) {
          this.__close_timer__ = setTimeout(() => {
            this.close()
          }, time)
        }
      },
      close () {
        this.window_show = false
        this.__close_timer__ && clearTimeout(this.__close_timer__)
      }
    }
  }
</script>