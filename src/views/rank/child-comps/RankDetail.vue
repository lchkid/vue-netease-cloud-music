<template>
  <div class="rank-detail">
    <rank-detail-item v-for="item in topList" :key="item.id" :top-list="item"></rank-detail-item>
  </div>
</template>

<script>
import RankDetailItem from './RankDetailItem'
export default {
  props: {
    topList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    RankDetailItem
  }
}
</script>

<style>
.rank-detail {
  margin: 20px 0;
}
</style>