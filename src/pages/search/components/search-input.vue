<template>
  <div class="search__header-box">
    <div class="search__header-wrap">
      <div class="search__header-inner">
        <label class="search__input-box">
          <input @keyup="keyup($event)" type="text" class="search__input" placeholder="搜索"/>
        </label>
        <div class="search__btn-wrap">
          <span class="search__btn" @click="cancelOrSearch">{{ searchText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import { mapState, mapActions } from 'vuex'

  export default {
    data: function () {
      return {
        searchText: '取消',
        backUrl: Cookie.get('isSearchCurrUrl'),
      }
    },
    computed: {
      ...mapState({
        keyword: state => state.search.keyword
      })
    },
    watch: {
      keyword () {
        if (this.keyword) {
          this.searchText = '搜索'
        } else {
          this.searchText = '取消'
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
          this.searchLoadingData(event.target.value)
        }, 500)
      },
      cancelOrSearch () {
        if (this.keyword) {
          this.searchLoadingData(this.keyword)
        } else {
          if (window.history.length > 2) {
            this.$router.back()
          } else if (this.backUrl) {
            window.location = this.backUrl
          } else {
            window.location = '/'
          }
        }
      },
      ...mapActions('search', [
        'searchLoadingData'
      ])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
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
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 24px;
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
    margin-left: 20px;
    user-select: none;

    .search__btn {
      display: block;
      line-height: 70px;
      width: 70px;
      color: #595858;
    }
  }
</style>
