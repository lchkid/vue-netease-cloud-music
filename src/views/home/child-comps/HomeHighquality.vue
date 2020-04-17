<template>
  <div class="home-highquality">
    <div class="recommend-top">
      <div class="rt-title">属于你的音乐阵地</div>
      <button class="rt-more">查看更多</button>
    </div>
    <recommend :playlist="highquality"></recommend>
  </div>
</template>

<script>
import Recommend from "@/components/recommend/Recommend";

export default {
  props: {
    highquality: {
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
.home-highquality {
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
  font-size: 14px;
}
</style>