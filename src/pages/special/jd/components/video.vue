<template>
  <div class="video-wrap">
    <div class="video">
      <div class="video-inner" @click="play">
        <video
          ref="video"
          src="http://www.w3school.com.cn/i/movie.ogg"
        />
        <div v-show="!playing" class="play-btn"/>
      </div>
    </div>
    <div class="video-next" v-animate>
      <img class="img" src="http://s1.jiguo.com/ad27caec-1b13-460b-b9b1-7afc050705d1"/>
      <div class="text">汽车挑战测试，十项指标全能王......</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playing: false
      }
    },
    mounted () {
      this.$refs['video'].onended = () => {
        this.playing = false
      }
    },
    methods: {
      play () {
        let video = this.$refs['video']
        if (this.playing && !video.ended) {
          video.pause()
          this.playing = false
        } else {
          video.play()
          this.playing = true
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../style/function.scss";

  .video-wrap {
    margin-top: px2rem(1126);

    .video {
      margin: auto;
      width: px2rem(830);
      height: px2rem(560);
      position: relative;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;

        background-image: url(./video-wondow.png);
        background-position: left top;
        background-size: 100% 100%;
        pointer-events: none;
      }
      .video-inner {
        width: px2rem(830);
        height: px2rem(470);
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #000;
        video {
          width: 100%;
          height: 100%;
        }
      }
    }

    .video-next {
      width: px2rem(830);
      height: px2rem(472);
      margin: auto;
      margin-top: px2rem(95);
      position: relative;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;

        background-image: url(./image-window.png);
        background-position: left top;
        background-size: 100% 100%;
      }
      .img {
        width: 100%;
        height: 100%;
      }
      .text {
        color: #fff;
        height: px2rem(75);
        line-height: px2rem(75);
        background-color: rgba(0, 0, 0, 0.34);
        font-size: px2rem(26);
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }

  .play-btn {

    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(./play-btn.png);
    background-position: center center;
    background-size: px2rem(106) px2rem(106);
    background-repeat: no-repeat;
  }
</style>
