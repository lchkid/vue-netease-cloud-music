<template>
  <div class="song-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/song/nav-bar/back.svg" @click="backClick" alt />
      </template>
      <template #center>
        <p class="snv-title">{{songName}}</p>
        <p class="snv-artist">{{showName}}</p>
      </template>
      <template #right>
        <img src="@/assets/img/song/nav-bar/share.svg" alt />
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar/NavBar";

export default {
  props: {
    songName: {
      type: String,
      default: ''
    },
    songArtist: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
      this.$store.commit("updateStatus", false);
    }
  },
  computed: {
    showName() {
      return this.songArtist.length == 1 ? this.songArtist[0].name : this.songArtist.map(item => item.name).join('/')
    }
  }
}
</script>

<style scoped>
.nav-bar-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-bar-center p{
  flex: 1;
  line-height: initial;
  color: #ffffff;
}

.nav-bar-center .snv-title {
  padding-top: 5px;
  width: calc(100vw - 120px);
  white-space: nowrap;
  overflow: hidden;;
}

.nav-bar-center .snv-artist {
  position: relative;
  font-size: 12px;
}

.nav-bar-center .snv-artist::after {
  content: '';
  position: absolute;
  height: 5px;
  width: 5px;
  bottom: 5px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transform: rotate(45deg);
}

</style>