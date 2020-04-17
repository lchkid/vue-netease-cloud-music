<template>
  <div class="song-cover">
    <div class="sc-playboard">
      <div class="sc-disc">
        <img src="@/assets/img/song/cover/disc-ip6.png" alt />
      </div>
      <div class="sc-pic" :class="isPause">
        <img :src="songImg" alt />
      </div>
    </div>
    <div class="sc-needle">
      <img src="@/assets/img/song/cover/needle-ip6.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songStatus: true,
    }
  },
  props: {
    songImg: {
      type: String,
      default: ''
    }
  },
  computed: {
    isPause() {
      this.songStatus = this.$store.state.currentStatus
      return {pause: !this.songStatus}
    }
  }
};
</script>

<style>
@-webkit-keyframes circling {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes circling {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.song-cover img {
  width: 100%;
}

.sc-playboard {
  width: 300px;
  height: 300px;
  margin: 65px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sc-disc {
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}

.sc-pic {
  width: 65%;
  -webkit-animation: circling 20s linear infinite;
  animation: circling 20s linear infinite;
}

.sc-pic.pause {
  -webkit-animation-play-state: paused;
  animation-play-state: paused
}

.sc-play {
  position: absolute;
  width: 30%;
}

.sc-needle {
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translate(-15%, 0);
  width: 100px;
  z-index: 1;
}

.sc-needle img {
  width: 100%;
}
</style>