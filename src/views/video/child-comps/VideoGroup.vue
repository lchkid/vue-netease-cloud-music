<template>
  <div class="video-group">
    <video-group-item v-for="item in videoList" :key="item.id" :video="item"></video-group-item>
  </div>
</template>

<script>
import VideoGroupItem from './VideoGroupItem'

export default {
  props: {
    videoList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VideoGroupItem
  }
}
</script>

<style>
.video-group {
  width: 100vw;
}
</style>