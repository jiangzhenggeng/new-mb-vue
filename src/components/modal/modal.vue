<style lang="scss">
  @import "../../style/scss/helpers/functions";
  .window__modal-enter-active, .window__modal-leave-active {
    transition: all .3s;
  }

  .window__modal-enter, .window__modal-leave-active {
    opacity: 0;
    transform: scale(1.5);
  }

  .window__modal {
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    &.no-event {
      pointer-events: none;
    }
    &.mask {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
<template>
  <transition name="window__modal">
    <div v-if="window_show" class="window__modal" :class="{'no-event':!modal,'mask':mask}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  var eventsList = ['mousewheel', 'DOMMouseScroll', 'touchmove']
  export default {
    props: {
      modal: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      window_show (newVal) {
        this.window_show = newVal
        if (/*this.mask &&*/ newVal ) {
          eventsList.forEach((item) => {
            window.addEventListener(item, this._preventDefault, {passive: false})
          })
        } else {
          eventsList.forEach((item) => {
            window.removeEventListener(item, this._preventDefault)
          })
        }
      },
      visible (newVal) {
        this.window_show = newVal
        if (/*this.mask &&*/ newVal ) {
          eventsList.forEach((item) => {
            window.addEventListener(item, this._preventDefault, {passive: false})
          })
        } else {
          eventsList.forEach((item) => {
            window.removeEventListener(item, this._preventDefault)
          })
        }
      }
    },
    data () {
      return {
        window_show: this.visible
      }
    },
    methods: {
      show () {
        this.window_show = true
      },
      close () {
        this.window_show = false
      },
      _preventDefault (e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      },
    }
  }
</script>