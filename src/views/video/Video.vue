<template>
  <div id="video">
    <video-nav-bar></video-nav-bar>
    <video-tab :tab-list="tabList" @tabClick="tabClick"></video-tab>
    <better-scroll class="video-wrapper">
      <div class="video-content">
        <video-group :video-list="videoList"></video-group>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import { getVideoGroupList, getVideoDetail, Video } from '@/network/video'

import BetterScroll from "@/components/better-scroll/BetterScroll";

import VideoNavBar from "./child-comps/VideoNavBar";
import VideoTab from "./child-comps/VideoTab";
import VideoGroup from "./child-comps/VideoGroup";

export default {
  name: "Video",
  data() {
    return {
      tabList: [{
        id: 9100,
        name: '推荐'
      }],
      videoList: []
    };
  },
  components: {
    BetterScroll,
    VideoNavBar,
    VideoTab,
    VideoGroup
  },
  methods: {
    tabClick(id) {
      getVideoDetail(id).then(res => {
        this.videoList = res.datas.map(item => new Video(item.data))
      })
    }
  },
  created() {
    getVideoGroupList().then(res => {
      this.tabList.push(...res.data)
    })
    this.tabClick(9100)
  }
};
</script>

<style>
.video-wrapper {
  width: 100%;
  position: absolute;
  top: 74px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  background-color: #f8f8f8;
}

.video-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>