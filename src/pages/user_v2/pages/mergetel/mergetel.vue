<style lang="scss">
  @import "./../../../../style/scss/helpers/functions";

  .merge__wrap {

    .page__body {
      padding-bottom: px2rem(200);
    }
    .merge__title {
      text-align: center;
      font-size: px2rem(32);
      color: #333333;
      line-height: px2rem(40);
      margin: px2rem(50) auto px2rem(20) auto;
      font-weight: bold;
    }
    .merge__wrap-header {

      .merge__bind-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: px2rem(600);
        margin: auto;
        margin-top: px2rem(50);
        overflow: hidden;
      }
      .merge__header-desc {
        padding: px2rem(24);
        color: #666;
        line-height: px2rem(36);
        font-size: px2rem(24);
        margin: px2rem(20) 0;
      }

      .merge__bind-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #f2f2f2;
        z-index: 2;
        position: relative;
        padding: 0 px2rem(20);
      }

      .merge__bind-text {
        margin-top: px2rem(20);
        font-size: px2rem(24);
        color: #383838;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .merge__bind-icon,
      .merge__bind-icon img {
        width: px2rem(100);
        height: px2rem(100);
      }

      .merge__bind-icon img,
      .merge__bind-link img {
        display: block;
      }
      .merge__bind-icon {
        border-radius: 50%;
        overflow: hidden;
      }

      .merge__bind-link,
      .merge__bind-link img {
        width: px2rem(56);
        height: px2rem(56);
      }

      .merge__bind-link {
        background-color: #f2f2f2;
        z-index: 2;
        position: relative;
        padding: 0 px2rem(20);
        box-sizing: content-box;
      }

      .merge__bind-link-wrap {
        position: relative;
        top: px2rem(-20)
      }

      .merge__bind-link-line {
        position: absolute;
        width: px2rem(240 * 2);
        border-bottom: px2rem(2) dashed #a1a1a1;
        height: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 1;
      }
    }
    .table__view {
      .merge__td-icon {
        width: px2rem(50);
      }
      td, th {
        line-height: 1.5;
        padding: px2rem(24);
        vertical-align: middle;
      }
      th {
        background-color: #E4E4E4;
        color: #333333;
        font-size: px2rem(28);
        &.th1, &.th3 {
          width: px2rem(200);
        }
      }
      td {
        background-color: #F5F5F5;
        color: #666666;
        font-size: px2rem(24);
        line-height: px2rem(34);
        padding: px2rem(22);
      }
    }

    .table__view-tbody {

      tr:nth-child(even) td {
        background-color: #F5F5F5;
      }

      tr:nth-child(odd) td {
        background-color: #fff;
      }
    }

    /*按扭*/
    .merge-btn-warp {
      padding: px2rem(24);
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      .merge-btn {
        height: px2rem(100);
        line-height: px2rem(100);
        text-align: center;
        color: #fff;
        background: #F66039;
        border-radius: px2rem(8);
        font-size: px2rem(32);
      }
      &.gray {
        background-color: #D9D9D9;
      }
      &.red {
        background-color: #F66039;
      }
      &:active {
        opacity: 0.8;
      }
    }

  }
</style>
<template>
  <div class="content-wrap merge__wrap">
    <page-header-back @back="back('/mb/userv2/bind')">
      <div slot="title">合并账号</div>
    </page-header-back>
    <div class="page__body">
      <div class="merge__wrap-header">
        <div class="merge__title">您在极果拥有以下账号</div>
        <div class="merge__bind-header">
          <div class="merge__bind-wrap">
            <div class="merge__bind-icon" :style="`background-color: ${from.bg}`">
              <img :src="`${from.icon}`"/>
            </div>
            <div class="merge__bind-text">&nbsp;{{ params.data.username }}&nbsp;</div>
          </div>
          <div class="merge__bind-link-wrap">
            <div class="merge__bind-link">
              <img src="./icon/link@3x.png"/>
            </div>
            <div class="merge__bind-link-line"></div>
          </div>
          <div class="merge__bind-wrap">
            <div class="merge__bind-icon">
              <img src="./icon/phone@3x.png"/>
            </div>
            <div class="merge__bind-text">&nbsp;{{ params.data.tel }}&nbsp;</div>
          </div>
        </div>
        <div class="merge__header-desc">
          <div>为使您能更好的体验极果的服务，避免多账号带来的数据错乱问题，建议您对账号进行合并，合并以后：</div>
          <div>- 您仍可用两账号原有的登录方式进行登录</div>
          <div>- 两账号的订单、优惠券等资产将合并在一起，具体规则见下表</div>
          <div>- 账号合并完成后，如做“解除绑定”操作，资产将不可再拆分</div>
        </div>
      </div>
      <table class="merge__table table__view" cellpadding="0" cellspacing="0">
        <tr>
          <th class="th1">账号数据</th>
          <th class="th2 tl">说明</th>
          <th class="th3">是否会合并</th>
        </tr>
        <tbody class="table__view-tbody">
        <tr>
          <td class="tc">
            <div class="merge__td">我的收藏</div>
          </td>
          <td>
            <div class="merge__td">收藏的文章、产品、试用活动、话题</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/success-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">评论</div>
          </td>
          <td>
            <div class="merge__td">对文章发过的评论</div>
            <div class="merge__td">对评论进行的回复</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/error-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">点赞</div>
          </td>
          <td>
            <div class="merge__td">对文章做过的点赞</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/error-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">收到的消息</div>
          </td>
          <td>
            <div class="merge__td">系统消息</div>
            <div class="merge__td">试用消息</div>
            <div class="merge__td">收到的评论、赞、评分</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/error-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">我的文章</div>
          </td>
          <td>
            <div class="merge__td">发表的文章、草稿箱中的文章草稿</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/success-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">评分</div>
          </td>
          <td>
            <div class="merge__td">对文章打过的评分</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/error-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">试用订单</div>
          </td>
          <td>
            <div class="merge__td">参与试用活动时产生的订单</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/success-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">优惠券</div>
          </td>
          <td>
            <div class="merge__td">账号下未使用、已使用、已过期的优惠券</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/success-2@3x.png"/>
          </td>
        </tr>

        <tr>
          <td class="tc">
            <div class="merge__td">发货地址</div>
          </td>
          <td>
            <div class="merge__td">收获人姓名、电话、地址等</div>
          </td>
          <td class="tc">
            <img class="merge__td-icon" src="./icon/error-2@3x.png"/>
          </td>
        </tr>

        </tbody>
      </table>
    </div>

    <div class="merge-btn-warp">
      <div class="merge-btn" @click="okMergeUser">确认合并账号</div>
    </div>
    <loading-window ref="loading-window"></loading-window>
  </div>
</template>

<script>
  import $ from 'jquery'
  import PageHeaderBack from '@/components/header-back.vue'
  import mixins from './../bind/mixins'
  import LoadingWindow from '@/components/window/loading.vue'
  import Cookie from 'js-cookie'

  import WeiXIn from './icon/login_wechat@3x.png'
  import QQ from './icon/login_qq@3x.png'
  import WeiBo from './icon/login_weibo@3x.png'

  export default {
    mixins: [mixins],
    data () {
      var params = Cookie.getJSON('bind-user')
      if (!params.data || !params.data.from) {
        window.location = '/'
      }
      return {
        params: params,
        from: (function () {
          if (params.data.from == 'wid') {
            return {
              icon: WeiXIn,
              bg: 'rgb(141,200,27)'
            }
          } else if (params.data.from == 'qqid') {
            return {
              icon: QQ,
              bg: 'rgb(104,165,225)'
            }
          } else if (params.data.from == 'wbid') {
            return {
              icon: WeiBo,
              bg: 'rgb(245,100,103)'
            }
          }
        })()
      }
    },
    components: {
      PageHeaderBack,
      LoadingWindow
    },
    methods: {
      okMergeUser () {
        if (this.timer) return
        this.timer = true
        this.$refs['loading-window'].show()
        $.post('/api/user/MergeThreeUserTel', repalyData => {
          this.timer = false
          if (!repalyData.result) {
            this.$alert(repalyData.errorMsg || '合并失败')
          } else if (repalyData.result.status == 1) {
            Cookie.remove('bind-user')
            if (repalyData.result.url) {
              window.location = repalyData.result.url
            } else {
              window.location = '/'
            }
          } else {
            this.$alert(repalyData.errorMsg || '合并失败')
          }
        }, 'json').always(() => {
          this.$refs['loading-window'].close()
          this.timer = false
        })
      }
    }
  }
</script>
