<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <better-scroll class="home-wrapper">
      <div class="home-content">
        <home-swiper :banner="banner"></home-swiper>
        <home-menu></home-menu>
        <home-personalized :personalized="personalized"></home-personalized>
        <home-resource :resource="resource"></home-resource>
        <home-highquality :highquality="highquality"></home-highquality>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import { getHomeBanner, getPersonalized, getResource, getHighquality } from "@/network/home";

import BetterScroll from "@/components/better-scroll/BetterScroll";

import HomeNavBar from "./child-comps/HomeNavBar";
import HomeSwiper from "./child-comps/HomeSwiper";
import HomeMenu from "./child-comps/HomeMenu";
import HomePersonalized from "./child-comps/HomePersonalized";
import HomeResource from "./child-comps/HomeResource";
import HomeHighquality from "./child-comps/HomeHighquality";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      personalized: [],
      resource: [],
      highquality: [],
    };
  },
  components: {
    BetterScroll,
    HomeNavBar,
    HomeSwiper,
    HomeMenu,
    HomePersonalized,
    HomeResource,
    HomeHighquality
  },
  created() {
    getHomeBanner().then(res => {
      this.banner = res.banners;
    });
    getPersonalized().then(res => {
      // console.log(res)
      this.personalized = res.result;
    });
    getResource().then(res => {
      this.resource = res.recommend
    })
    getHighquality().then(res => {
      this.highquality = res.playlists
    })
  }
};
</script>

<style>
.home-wrapper {
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>