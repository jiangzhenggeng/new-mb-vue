<style lang="scss">
  @import "./window-modal.scss";
</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="window_show" class="loading__wrap">
    <div class="loading__inner">
      <template v-if="type=='loading'">
        <img class="window__icon loading__icon" src="./images/loading@3x.png"/>
      </template>
      <template v-if="type=='success'">
        <img class="window__icon" src="./images/success@3x.png"/>
      </template>
      <template v-if="type=='fail'">
        <img class="window__icon" src="./images/fail@3x.png"/>
      </template>
      <div class="loading__text" v-if="text">{{ text }}</div>
    </div>
  </modal>
</template>
<script>

  import Modal from '../modal/modal.vue'

  export default {
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
        this.__close_timer__ && clearTimeout(this.__close_timer__);
        if (time) {
          this.__close_timer__ = setTimeout(() => {
            this.close()
          }, time)
        }
      },
      close () {
        this.window_show = false
        this.__close_timer__ && clearTimeout(this.__close_timer__);
      }
    }
  }
</script>