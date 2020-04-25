<template>
  <div class="song-control">   
    <div class="sc-player">
      <div class="progress">
        <span>{{time | timeFilter}}</span>
        <div class="progress-down">
          <div class="progress-up" :style="timePlayed"></div>
        </div>
        <span>{{song.time | timeFilter}}</span>
      </div>
    </div>
      <audio 
        ref="audio" :src="songUrl" autoplay
        @canplay="songCanPlay"
        @timeupdate="songTimeUpdate"
        @ended="songEnded"
      />
    <div class="sc-tab-bar">
      <span class="iconfont icon-loop" :class="{active: loop}" @click="loopClick"></span>
      <span class="iconfont icon-prev" @click="prevClick"></span>
      <span class="iconfont control" :class="isPause" @click="controlClick"></span>
      <span class="iconfont icon-next" @click="nextClick"></span>
      <span class="iconfont icon-list"></span>
    </div>
  </div>
</template>

<script>
import { timeShift, timeWidth } from '@/common/utils'

export default {
  data() {
    return {
      audio: {},
      time: 0.00,
      pause: false,
      loop: false,
    }
  },
  props: {
    song: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 音频监控
    songCanPlay() {
      this.time = 0.00
      this.audio = this.$refs.audio
    },
    songTimeUpdate() {
      this.time = this.audio.currentTime * 1000
    },
    songEnded() {
      if(this.loop) {
        this.audio.play()
      }else {
        this.$emit('nextClick')
      }
    },
    

    // 操作控件
    controlClick() {
      this.pause ? this.audio.play() : this.audio.pause()
      this.pause = !this.pause
      this.$store.commit('updateStatus', this.pause)
    },
    loopClick() {
      this.loop = !this.loop
    },
    prevClick() {
      this.$emit('prevClick')
    },
    nextClick() {
      this.$emit('nextClick')
    }
  },
  computed: {
    songUrl() {
      return `https://music.163.com/song/media/outer/url?id=${this.song.id}.mp3`
    },
    isPause() {
      return this.pause ? {'icon-play': true} : {'icon-pause': true}
    },
    timePlayed() {
      return {'width': timeWidth(this.time, this.song.time)}
    }
  },
  filters: {
    timeFilter(value) {
      return timeShift(value)
    }
  }
}
</script>

<style>
.song-control {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
}

.progress {
  text-align: center;
  display: flex;
  align-items: center;
}

.progress > span {
  font-size: 14px;
  color: #f7f7f7;
  width: 60px;
}

.progress .progress-down {
  flex: 1;
  height: 2px;
  background-color: #333333;
}

.progress .progress-down .progress-up {
  height: 100%;
  width: 10%;
  background-color: #ff203a;
  position: relative;
}

.progress .progress-down .progress-up::after {
  content: '';
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  right: -10px;
  top: -4px;
  background-color: #fff;
}

#audio {
  width: 100%;
}

.sc-tab-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.iconfont.control {
  font-size: 80px;
}

.iconfont.active {
  color: #ff203a;
}
</style>