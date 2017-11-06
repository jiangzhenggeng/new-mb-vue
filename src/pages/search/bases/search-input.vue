<style lang="scss" scoped>
  .search__header-box,
  .search__header-wrap {
    height: 104px;
    font-size: 32px;
  }

  .search__header-wrap {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 32px;
    border-bottom: 1px solid #ececec;
    z-index: 5;
  }

  .search__header-inner {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
  }

  .search__header-inner-box {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 12px 0 24px;
  }

  .search__input-box {
    flex: 1;
    border-radius: 100px;
    border: 2px solid #e8e8e8;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 38px;
    height: 70px;
    position: relative;

    .search__input {
      color: #595858;
      -webkit-appearance: none;
      font-size: 32px;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }

  .search__btn-wrap {
    user-select: none;
    line-height: 70px;
    width: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .search__btn {
    width: 84%;
    height: 84%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search__close-wrap {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;

    img {
      width: 70px;
    }
  }
</style>

<template>
  <div class="search__header-box">
    <div class="search__header-wrap">
      <div class="search__header-inner">
        <div class="search__header-inner-box">
          <label class="search__input-box">
            <input
              @keyup="keyup($event)"
              type="text"
              class="search__input"
              :placeholder="placeholder"
              :value="inner_keyword"
            />
            <div v-show="close_search" class="search__close-wrap" @click="closeSearch">
              <img src="./searh-close.svg"/>
            </div>
          </label>
        </div>
        <div class="search__btn-wrap">
          <div
            class="search__btn"
            @click="cancelOrSearch"
            v-waves.circle="true"
          >
            {{ searchText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      },
      cancel: {
        type: String,
        default: '取消'
      },
      search: {
        type: String,
        default: '搜索'
      },
      keyword: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        inner_keyword: this.keyword,
        backUrl: Cookie.get('isSearchCurrUrl'),
        close_search: !!this.keyword
      }
    },
    computed: {
      searchText () {
        const inner_keyword = this.inner_keyword
        if (inner_keyword) {
          return this.search
        } else {
          return this.cancel
        }
      }
    },
    watch: {
      inner_keyword () {
        if (this.inner_keyword) {
          this.close_search = true
        } else {
          this.close_search = false
        }
      }
    },
    methods: {
      keyup (event) {
        if (event.target.value.length >= 50) {
          event.target.value = event.target.value.substr(0, 50)
        }
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.inner_keyword = event.target.value
          this.$emit('search', this.inner_keyword, false)
        }, 120)
      },
      cancelOrSearch () {
        if (this.inner_keyword) {
          this.$emit('search', this.inner_keyword, true)
        } else {
          this.$emit('cancel', this.inner_keyword)
          if (window.history.length > 2) {
            this.$emit('back')
            this.$router.back()
          } else if (this.backUrl) {
            window.location = this.backUrl
          } else {
            window.location = '/'
          }
        }
      },
      closeSearch () {
        if (this.inner_keyword) {
          this.inner_keyword = ''
          this.$emit('search', '', true)
        } else {
          this.cancelOrSearch()
        }
      }
    }
  }
</script>

