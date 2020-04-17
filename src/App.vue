<template>
  <div id="app">
    <keep-alive exclude="PlayList,Song">
      <router-view />
    </keep-alive>
    <tab-bar v-show="isShow"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tab-bar/TabBar";

export default {
  name: "App",
  components: {
    TabBar
  },
  watch: {
    $route(to, from) {
      if (to.path == "/playlist" || to.path == "/song") {
        this.$store.commit("updateShowTB", false);
      } else {
        this.$store.commit("updateShowTB", true);
      }
    }
  },
  computed: {
    isShow() {
      return this.$store.state.ShowTB;
    }
  }
};
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/iconfont/iconfont.css";
</style>
