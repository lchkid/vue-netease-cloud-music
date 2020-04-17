<template>
  <div class="home-personalized">
    <div class="recommend-top">
      <div class="rt-title">推荐歌单 为你而来</div>
      <button class="rt-more">查看更多</button>
    </div>
    <recommend :playlist="personalized"></recommend>
  </div>
</template>

<script>
import Recommend from "@/components/recommend/Recommend";

export default {
  props: {
    personalized: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Recommend
  }
};
</script>

<style>
.home-personalized {
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
  font-size: 14px;
}

.recommend-top {
  position: relative;
  margin: 10px;
}

.recommend-top .rt-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
}

.recommend-top .rt-more {
  position: absolute;
  right: 0;
  top: 0;

  background-color: #fff;
  height: 24px;
  line-height: 24px;
  text-align: center;
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
}
</style>