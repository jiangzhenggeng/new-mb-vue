<style lang="scss" scoped="">
  @import "../../../../../style/scss/helpers/functions";

  .header__wrap {
    height: px2rem(88);
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
    transition: all .3s;
    &.hidden-to-top {
      top: px2rem(-88);
    }
    ul {
      display: block;
      font-size: 0;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-track {
        border-radius: 0;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 0px;
      }
    }
    li {
      display: inline-block;
      min-width: px2rem(80);
      overflow: hidden;
      color: #CCCCCC;
      font-size: px2rem(16);
      position: relative;
      text-align: right;
      padding-right: px2rem(50);
      padding-left: px2rem(30);
      box-sizing: content-box;
      &:after {
        content: '';
        display: block;
        position: absolute;
        right: px2rem(20);
        bottom: 0;
        transform: rotateZ(30deg);;
        background: #666666;
        width: px2rem(2);
        height: px2rem(35);
      }
      .header__title {
        font-size: px2rem(16);
      }
      .header__title-en {
        font-size: px2rem(32);
      }
      &.on {
        .header__title {
          color: #FFF78D;
        }
        .header__title-en {
          color: #52C1F3;
        }
      }
    }
  }
</style>
<template>
  <div class="header__wrap" ref="header__wrap">
    <ul ref="ul" @click="scrollTopId($event,'li')">
      <li v-for="item in navList" :class="item.on?'on':''" :data-id="item.id">
        <div class="header__title">{{ item.title }}</div>
        <div class="header__title-en">{{ item.en }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
	import $ from 'jquery'
	import tools from '../../../../../tools/index'

	export default {
		props: {
			href: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				navList: [
					{
						title: '首页',
						en: 'Home',
						id: 'home',
						on: true
					},
					{
						title: '评选介绍',
						en: 'Introduction',
						id: 'introduce'
					},
					{
						title: '评选流程',
						en: 'Schedule',
						id: 'time-line'
					},
					{
						title: '奖项信息',
						en: 'Awards',
						id: 'awards'
					},
					{
						title: '评委嘉宾',
						en: 'Judges',
						id: 'judges'
					},
					{
						title: '主办',
						en: 'About',
						id: 'host'
					}
				]
			}
		},
		mounted() {
			var _this = this
			var windowScrollFlage = $('.window__scroll-flage')

			$(window).off('scroll.header.nav').on('scroll.header.nav', function () {

				$(_this.$refs['header__wrap']).addClass('hidden-to-top')
				_this.touchstart && clearTimeout(_this.touchstart)
				_this.touchstart = setTimeout(() => {
					if ($(_this.$refs['ul']).length <= 0) return;

					$(_this.$refs['header__wrap']).removeClass('hidden-to-top')

					windowScrollFlage.each(function () {
						if (
							$(window).scrollTop() + $(window).height() >= $(this).offset().top &&
							$(window).scrollTop() <= $(this).offset().top
						) {

							var ulLeft = $(_this.$refs['ul']).scrollLeft()
							var target = $(_this.$refs['ul']).find('li[data-id=' + $(this).attr('id') + ']')

							target.closest('ul').find('.on').removeClass('on')
							target.addClass('on')

							ulLeft = ulLeft + target.offset().left - ($(window).width() / 2) + (target.outerWidth() / 2)
							$(_this.$refs['ul']).scrollLeft(ulLeft)
							return false
						}
					})
				}, 300)
			})
		},
		beforeDestroy() {
			$(window).off('scroll.header.nav')
		},
		methods: {
			scrollTopId(e, selector) {
				//事件代理
				const event = this.$eventProxy(e, selector)

				if (this.href) {
					this.$router.push({
						path: '/mb#' + $(event.target).data('id')
					})
					return
				}

				var dom
				if ($(event.target).data('id')) {
					dom = $('#' + $(event.target).data('id'))
				} else {
					dom = $('html')
				}
				var top = $(dom).offset().top - $('.header-nav').height()
				if ($(event.target).data('id') == 'introduce') {
					top -= $('.first__wrap-title').height() / 2
				}

				if (dom.length) {
					$('html,body').animate({
						scrollTop: top
					})
					$(event.target).closest('ul').find('.on').removeClass('on')
					$(event.target).addClass('on')
				}

				var ulLeft = $(this.$refs['ul']).scrollLeft()
				ulLeft = ulLeft + $(event.target).offset().left - ($(window).width() / 2) + ($(event.target).outerWidth() / 2)
				$(this.$refs['ul']).animate({
					scrollLeft: ulLeft
				})
			}
		}
	}
</script>