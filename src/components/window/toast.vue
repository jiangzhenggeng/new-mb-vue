<style lang="scss" scoped="">
  @import "../../style/scss/helpers/functions";

  .toast__wrap {
    position: fixed;
    display: inline-block;
    border-radius: px2rem(8);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    padding: px2rem(15) px2rem(30);
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    z-index: 999999;
    font-size: px2rem(28);
    min-width: px2rem(180);
  }

  .dialog__text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .toast__modal-bottom-enter-active, .window__modal-bottom-leave-active {
    transition: all .3s;
  }

  .toast__modal-bottom-enter, .window__modal-bottom-leave-active {
    bottom: px2rem(-200);
    opacity: 0;
  }
</style>
<template>
  <transition :name="`toast__modal-${transitionName}`">
    <div class="toast__wrap" v-if="window_show">
      <slot name="text">
        <div class="dialog__text" v-if="inner_text">{{ inner_text }}</div>
      </slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Toast',
    props: {
      position: {
        type: String,
        default: 'bottom'
      },
      type: {
        type: String,
        default: 'loading'
      },
      text: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
      time: {
        type: Number,
        default: 2000
      }
    },
    data () {
      return {
        window_show: this.visible,
        inner_text: this.text
      }
    },
    computed: {
      transitionName () {
        switch (this.position.toLocaleLowerCase()) {
          case 'bottom':
            return 'bottom'
          case 'top':
            return 'top'
          case 'center':
            return 'center'
          default:
            return 'bottom'
        }
      }
    },
    methods: {
      setText (text) {
        this.inner_text = text
        return this
      },
      show (time) {
        this.window_show = true
        this.__close_timer__ && clearTimeout(this.__close_timer__)
        this.__close_timer__ = setTimeout(() => {
          this.close()
        }, time > -1 ? time : this.time)
      },
      close () {
        this.window_show = false
        this.__close_timer__ && clearTimeout(this.__close_timer__)
      }
    }
  }
</script>