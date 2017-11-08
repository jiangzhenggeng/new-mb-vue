import { mapActions } from 'vuex'

export default {
  data () {
    return {
      USER_VAR_CONFIG: window.USER_VAR_CONFIG
    }
  },
  methods: {
    validatemobile (tel, refFiled) {
      tel = (tel || '').replace(/\s+/g, '')
      if (!tel) {
        this.$alert('请输入手机号码！')
        this.$refs[refFiled] && this.$refs[refFiled].focus()
        return false
      }
      if (!/1[\d]{10}$/.test(tel)) {
        this.$alert('请输入正确的手机号码！')
        this.$refs[refFiled] && this.$refs[refFiled].focus()
        return false
      }
      return true
    },

    back (url) {
      if (!url) {
        this.$alert('请输入正确的URL地址！')
        return
      }
      this.updateDirection({
        direction: 'out'
      })
      this.$router.push({
        path: url
      })
    },
    clearInputContent (dataFiled) {
      if (this[dataFiled]) {
        this[dataFiled] = ''
      }
    },
    ...mapActions([
      'updateDirection',
      'hidePageLoading'
    ])
  }
}