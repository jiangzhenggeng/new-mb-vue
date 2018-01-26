<style lang="scss">
  @import "../../../../../style/scss/helpers/functions";

  .com3__wrap {
    background: url(./bg.png);
    padding: px2rem(55);
    .face {
      width: px2rem(150);
      height: px2rem(150);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      border: px2rem(2) solid #fff;
      margin: auto;
      img {
        width: 100%;
        display: block;
      }
    }
    .face__wrap {
      position: relative;
      margin: auto;
      width: px2rem(200);
      margin-bottom: px2rem(60);
    }
    .tick-number {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background: #59BFEB;
      color: #fff;
      font-size: px2rem(24);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: px2rem(10) px2rem(30);
      border-radius: px2rem(25);
      word-break: keep-all;
      white-space: pre-wrap;
    }
    .content {
      .title {
        line-height: px2rem(33);
        font-size: px2rem(24);
        font-weight: 500;
        color: #FFFFFF;
        text-align: center;
      }
      .content-desc {
        line-height: px2rem(35);
        font-size: px2rem(24);
        font-weight: 500;
        color: #B3B3B3;
        margin-top: px2rem(34);
        text-indent: 2em;
        p {
          text-indent: 2em;
        }
      }
    }
    .vote-btn-wrap {
      margin: px2rem(30) auto;
      .vote-btn {
        width: px2rem(150);
        height: px2rem(50);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #59BFEB;
        color: #000;
        font-size: px2rem(20);
        font-weight: 400;
        margin: auto;
      }
    }
  }
</style>

<template>
  <div class="com3__wrap">
    <div class="com3__box">
      <div class="face__wrap">
        <div class="face">
          <img :src="inner_item.cover"/>
        </div>
        <div class="tick-number">{{inner_item.vote}}票</div>
      </div>
      <div class="content">
        <div class="title">{{inner_item.username}}</div>
        <div class="content-desc">{{inner_item.desc}}</div>
        <div class="vote-btn-wrap">
          <div class="vote-btn">投票结束</div>
          <!--<div v-if="inner_item.status!=1" class="vote-btn" @click="clickVote(inner_item.id)">投票</div>-->
          <!--<div v-else class="vote-btn">已投票</div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import Mixins from './mixins'

	export default {
		mixins: [Mixins],
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				inner_item: this.item
			}
		},
		watch: {
			item() {
				this.inner_item = this.item
			}
		},
		methods: {
			voteSuccess(id) {
				this.inner_item.vote = parseInt(String(this.inner_item.vote || 0)) + 1
				this.inner_item.status = 1
			}
		}
	}
</script>
