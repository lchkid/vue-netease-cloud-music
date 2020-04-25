<template>
  <div id="song">
    <song-nav-bar :song-name="song.name" :song-artist="song.artist"></song-nav-bar>
    <song-cover :song-img="song.img"></song-cover>
    <song-lyric></song-lyric>
    <song-menu></song-menu>
    <song-control 
      :song="song" 
      @nextClick="nextClick"
      @prevClick="prevClick"
    ></song-control>
    <!-- <div class="song-filter"></div> -->
    <div class="song-bg" :style="bgImg"></div>
  </div>
</template>

<script>
import { getSongDetail, Song } from "@/network/song";

import SongNavBar from "./child-comps/SongNavBar";
import SongCover from "./child-comps/SongCover";
import SongLyric from "./child-comps/SongLyric";
import SongMenu from "./child-comps/SongMenu";
import SongControl from "./child-comps/SongControl";

export default {
  name: "Song",
  data() {
    return {
      song: {},
    };
  },
  components: {
    SongNavBar,
    SongCover,
    SongLyric,
    SongMenu,
    SongControl
  },
  methods: {
    prevClick() {
      this.$store.commit('decreaseIndex')
      this.song = new Song(this.$store.getters.getSong(this.$store.state.currentIndex))
    },
    nextClick() {
      this.$store.commit('increaseIndex')
      this.song = new Song(this.$store.getters.getSong(this.$store.state.currentIndex))
    }
  },
  computed: {
    bgImg() {
      return {background: `url(${this.song.img}) center/300% no-repeat`};
    }
  },
  created() {
    if(this.$store.state.playlist.length) {
      let trackIndex = this.$store.state.currentIndex;
      let track = this.$store.getters.getSong(trackIndex)
      this.song = new Song(track)
      this.$store.commit('updateSong', this.song)
    }else {
      let id = this.$route.query.id
      getSongDetail(id).then(res => {
        this.song = new Song(res.songs[0])
        this.$store.commit('updateSong', this.song)
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path != "/song") {
        this.$store.commit("updateStatus", false);
      }
    }
  },
};
</script>

<style>
#song {
  display: flex;
  flex-direction: column;
}

/* .song-filter {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: -1;
} */

.song-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(20px);
  z-index: -2;
  transform: scale(1.2);
}
</style>