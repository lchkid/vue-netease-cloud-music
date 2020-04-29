<template>
  <div id="rank">
    <rank-nav-bar></rank-nav-bar>
    <better-scroll class="rank-wrapper" ref="bscroll">
      <div class="rank-content">
        <rank-detail :top-list="topList"></rank-detail>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import { getRankData } from "@/network/rank";
import { debounce } from "@/common/utils";

import BetterScroll from "@/components/better-scroll/BetterScroll";

import RankNavBar from "./child-comps/RankNavBar";
import RankDetail from "./child-comps/RankDetail";

export default {
  name: "Rank",
  data() {
    return {
      topList: []
    };
  },
  components: {
    BetterScroll,
    RankNavBar,
    RankDetail
  },
  created() {
    getRankData().then(res => {
      this.topList = res.list;
    });
  },
  mounted() {
    // 图片加载完后调用better-scroll的refresh方法并防抖
    const refresh = debounce(this.$refs.bscroll.refresh, 500)
    this.$bus.$on("imgLoad", () => {
      refresh()
    });
  },
  deactivated() {
    this.$bus.$off("imgLoad");
  }
}
</script>

<style>
.rank-wrapper {
  width: 90%;
  margin: 0 auto;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>