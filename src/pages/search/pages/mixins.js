
import SearchInput from './../bases/search-input.vue'
import loadAsyncData from './../bases/load-async-data.vue'
import $ from 'jquery'
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      height: $(window).height() - 104,
      keyword: this.$route.query.keyword || ''
    }
  },
  computed: {
    extData () {
      return {
        type: this.type,
        keyword: this.keyword,
      }
    }
  },
  components: {
    loadAsyncData,
    SearchInput
  },
  methods: {
    search (keyword) {
      this.keyword = keyword
      this.searchIng()
    },
    searchIng () {
      if (this.$refs['load-data-limit']) {
        this.$refs['load-data-limit'].refresh()
        this.$nextTick(() => {
          this.$refs['load-data-limit'].getItemData()
        })
      }
    },
    ...mapActions(['hidePageLoading'])
  }
}