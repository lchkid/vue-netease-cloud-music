<template>
  <div id="playlist">
    <pl-nav-bar></pl-nav-bar>
    <better-scroll class="playlist-wrapper">
      <div class="playlist-content">
        <div class="pl-detail">
          <pl-info :info="info"></pl-info>
          <pl-menu :count="count"></pl-menu>
        </div>
        <pl-list :tracks="tracks" :count="count"></pl-list>
      </div>
    </better-scroll>
    <div class="playlist-bg" :style="bgImg"></div>
  </div>
</template>

<script>
import { getPlaylist, Info, Count } from "@/network/playlist";

import BetterScroll from "@/components/better-scroll/BetterScroll";

import PlNavBar from "./child-comps/PlNavBar";
import PlInfo from "./child-comps/PlInfo";
import PlMenu from "./child-comps/PlMenu";
import PlList from "./child-comps/PlList";

export default {
  name: "PlayList",
  data() {
    return {
      info: {},
      count: {},
      tracks: []
    };
  },
  components: {
    BetterScroll,
    PlNavBar,
    PlInfo,
    PlMenu,
    PlList
  },
  computed: {
    bgImg() {
      return { backgroundImage: "url(" + this.info.img + ")" };
    }
  },
  created() {
    const id = this.$route.query.id
    getPlaylist(id).then(res => {
      // console.log(res)
      const data = res.playlist
      this.info = new Info(data)
      this.count = new Count(data)
      this.tracks = data.tracks
      // 提交列表信息到vuex
      this.$store.commit("updatePlaylist", this.tracks)
    })
  }
};
</script>

<style>
.playlist-wrapper {
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.pl-detail {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.playlist-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 35%;
  background-position: center;
  background-size: 200%;
  filter: blur(30px);
  z-index: -1;
}
</style>