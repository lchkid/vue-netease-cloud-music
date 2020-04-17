<template>
  <div id="song">
    <song-nav-bar :song-name="song.name" :song-artist="song.artist"></song-nav-bar>
    <song-cover :song-img="song.img"></song-cover>
    <song-lyric></song-lyric>
    <song-menu></song-menu>
    <song-control :song="song"></song-control>
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
  computed: {
    bgImg() {
      return {backgroundImage: `url(${this.song.img})`};
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

.song-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-position: center;
  background-size: 1000%;
  filter: blur(30px);
  z-index: -1;
  
  background-color: grey;
}
</style>