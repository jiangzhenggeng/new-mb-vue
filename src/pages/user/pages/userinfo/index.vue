<style lang="less">

</style>
<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header-back @back="back" title="编辑资料"/>
    <div class="content-wrap">

    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PageHeaderBack from '@/components/header-back.vue'

  export default {
    created () {

    },
    mounted () {
      this.hidePageLoading()
    },
    computed: {
      ...mapState({
        show: state => state.show,
      })
    },
    components: {
      PageHeaderBack,
    },
    methods: {
      back () {
        window.location = '/'
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
