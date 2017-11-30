<template>
  <div class="nav-wrapper " :class="navScrollBarFixed ? 'suspend' : '' ">
    <nav class="main">
      <div class="nav-item"
           :class="currentIndex === index ? 'on' : ''"
           v-for="(item,index) in navList"
           @click.prevent="scrollToTarget(index, item.target)"
           ref="navItem"
      >
        <div class="nav-text">
          <p class="cn-text">{{item.cnText}}</p>
          <p class="en-text">{{item.enText}}</p>
        </div>
        <i v-if="item.divide" class="divide"></i>
      </div>
      <div class="gtic-swards-logo" v-if="minNavWidthFlag">GTIC<br>AWARDS 2018</div>
    </nav>
  </div>
</template>

<script>
	import bus from '../assets/js/bus'
	import $ from 'jquery'

	export default {
		data() {
			return {
				navList: [
					{
						cnText: '首页',
						enText: 'Home',
						target: 'home-box',
						divide: true
					},
					{
						cnText: '评选介绍',
						enText: 'Introduction',
						target: 'introduction-box',
						divide: true
					},
					{
						cnText: '评选流程',
						enText: 'Schedule',
						target: 'time-line-box',
						divide: true
					},
					{
						cnText: '奖项信息',
						enText: 'Awards',
						target: 'awards-box',
						divide: true
					},
					{
						cnText: '评委嘉宾',
						enText: 'Judges',
						target: 'judge-box',
						divide: true
					},
					{
						cnText: '主办',
						enText: 'About',
						target: 'host-box',
						divide: false
					}
				],
				currentIndex: 0,
				navScrollBarFixed: false,
				minNavWidthFlag: true
			}
		},
		created() {
			this.handleResize()
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				const winHight = $(window).height()
				const docHeight = $('html,body').height()
				const delHeight = docHeight - winHight
				if (scrollTop > 0) {
					this.navScrollBarFixed = true
				} else {
					this.navScrollBarFixed = false
				}
				const scrollMsg = {
					scrollTop: scrollTop,
					navScrollBarFixed: this.navScrollBarFixed
				}
				bus.$emit('scrollTop', scrollMsg)

				for (let i in this.navList) {
					let i = parseInt(i)
					let targetDom = '#' + this.navList[i].target
					let targetTop = $(targetDom).offset().top - 70
					let j = i + 1
					if (scrollTop >= targetTop) {
						if (i === 0) {
							this.currentIndex = 0
						} else if (i !== this.navList.length - 1) {
							let nextTargetDom = '#' + this.navList[j].target
							let nextTargetTop = $(nextTargetDom).offset().top - 70
							if (scrollTop < nextTargetTop) {
								if (this.currentIndex !== i) {
									this.currentIndex = i
								}
							}
							if ((i === this.navList.length - 2) && (scrollTop >= delHeight)) {
								this.currentIndex = this.navList.length - 1
							}
						}
					}
				}
			},
			scrollToTarget(index, target) {
				this.currentIndex = index
				const targetDom = '#' + target
				const targetTop = ($(targetDom).offset().top - 70 > 180) ? $(targetDom).offset().top - 70 : 0
				$('html,body').animate({scrollTop: targetTop});
			},
			handleResize() {
				const winWidth = $(window).width()
				if (winWidth < 1335) {
					this.minNavWidthFlag = false
				} else {
					this.minNavWidthFlag = true
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .nav-wrapper {
    width: 100%;
    padding-top: 15px;
    height: 70px;
    box-sizing: border-box;
    &.suspend {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #000;
      z-index: 10;
      .gtic-swards-logo {
        display: block;
      }
    }
  }

  .gtic-swards-logo {
    display: none;
    font-size: 20px;
    line-height: 20px;
    color: #7C7C7C;
    position: absolute;
    left: 30px;
    top: 20px;
  }

  nav {
    display: flex;
    justify-content: center;

  }

  .nav-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    .nav-text {
      text-align: right;
      display: inline-block;
    }
    .cn-text {
      font-size: 12px;
      line-height: 17px;
    }
    .en-text {
      font-size: 30px;
      line-height: 22px;
      letter-spacing: 1px;
    }
    .divide {
      display: inline-block;
      width: 15px;
      height: 42px;
      background: url("../assets/images/divide.png") no-repeat center center;
      background-size: 15px auto;
      margin: 0 22px;
    }
    &.on, &:hover {
      .nav-text {
        color: #FFF78D;
      }
      .en-text {
        color: #52C1F3;
      }
    }
  }
</style>
