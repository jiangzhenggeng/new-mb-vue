<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .com2-list__wrap {
    background: url(./bg.png);
    padding: px2rem(55);
    li {
      margin-bottom: px2rem(30);
      &:last-child {
        margin-bottom: 0;
      }
    }
    .com2-list__item {
      display: flex;
    }
    .com2-list__img {
      width: px2rem(164);
      height: px2rem(164);
      display: flex;
      justify-content: center;
      align-items: center;
      background: #212121;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .com2-list__desc {
      margin-left: px2rem(20);
      flex: 1;
      .com2-list__title {
        font-size: px2rem(24);
        color: #fff;
        font-weight: bold;
        line-height: px2rem(33);

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;

      }
      .com2-list__content {
        font-size: px2rem(20);
        color: #838383;
        line-height: px2rem(28);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: px2rem(8);
      }
      .com2-list__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: px2rem(15);
      }
      .com2-list__tike-num {
        color: #4FBAE8;
        font-size: px2rem(24);
      }
      .com2-list__tike-query {
        background: #4FBAE8;
        color: #000;
        font-size: px2rem(20);
        height: px2rem(33);
        width: px2rem(98);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .com2-list__down {
      width: px2rem(72);
      height: px2rem(40);
      margin: px2rem(100) auto;
      margin-bottom: px2rem(50);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<template>
  <div class="com2-list__wrap">
    <div class="com2-list__box">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
        >
          <a :href="'detail.php?type='+type+'&id='+item.id">
            <div class="com2-list__item">
              <div class="com2-list__img">
                <img :src="item.cover"/>
              </div>
              <div class="com2-list__desc">
                <div class="com2-list__title">{{item.username}}</div>
                <div class="com2-list__content">{{item.desc}}</div>
                <div class="com2-list__bottom">
                  <div class="com2-list__tike-num">{{item.vote}} 票</div>
                  <div v-if="item.status!=1" class="com2-list__tike-query" @click.stop="clickVote(item.id)">投票</div>
                  <div v-else class="com2-list__tike-query" @click.stop="clickVote(item.id)">你已投票</div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <!--<div class="com2-list__down">-->
      <!--<img src="./down.svg"/>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
	import {mapState} from 'vuex'
	import Mixins from '../com3-desc/mixins'

	export default {
		mixins: [Mixins],
		props: {
			list: {
				type: Array,
				default: Array
			},
			type: {
				type: String,
				required: true
			}
		},
		computed: {
			toUrl(url) {
				window.location = url
			}
		}
	}
</script>
