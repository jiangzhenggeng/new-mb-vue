<template>
  <div class="page">
    <loading v-show="show"/>
    <div class="content-wrap ft">

    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Test from './Test.vue'

  export default {
    mounted () {
      this.hidePageLoading()
      this.$createAip(Test).show()
    },
    computed: {
      ...mapState([
        'show'
      ])
    },
    methods: {
      ...mapActions(['hidePageLoading'])
    }
  }
</script>



