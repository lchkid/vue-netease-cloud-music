<template>
  <div class="home-recommend">
    <div class="recommend-top">
      <div class="rt-title">不可错过的场景推荐(需要登录)</div>
      <button class="rt-more">查看更多</button>
    </div>
    <recommend :playlist="resource"></recommend>
  </div>
</template>

<script>
import Recommend from "@/components/recommend/Recommend";

export default {
  props: {
    resource: {
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
.home-recommend {
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
  font-size: 14px;
}
</style>