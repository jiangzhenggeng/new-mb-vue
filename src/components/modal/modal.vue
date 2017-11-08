<style lang="scss">

  @import "../../style/scss/helpers/functions";

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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
      background-color: rgba(0, 0, 0, 0.7);
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
      visible (newVal) {
        this.window_show = newVal
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
      }
    }
  }
</script>