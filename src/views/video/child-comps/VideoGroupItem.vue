<template>
  <div class="vg-item">
    <div class="video">
      <video :width="getWidth" :poster="video.cover" :src="video.url" controls></video>
    </div>
    <div class="title">{{video.title}}</div>
    <div class="info">
      <div class="uploader">
        <img :src="video.avatar" alt />
        {{video.name}}
      </div>
      <div class="handler">
        <img src="@/assets/img/video/detail/like.svg" alt />
        <img src="@/assets/img/video/detail/comment.svg" alt />
        <img src="@/assets/img/video/detail/more.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getWidth() {
      return document.body.offsetWidth * 0.9;
    }
  }
};
</script>

<style>
.vg-item {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10px;
}

.vg-item .video {
  width: 90%;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
}

.vg-item .title {
  width: 90%;
  border-bottom: 1px solid #c9c9c950;
  padding: 20px 0;
  font-size: var(--font-size);
  font-weight: bold;
}

.vg-item .info {
  width: 90%;
  height: 30px;
  display: flex;
  margin: 10px 0;
  font-size: 14px;
}

.vg-item .info img {
  width: 30px;
}

.vg-item .uploader,
.handler {
  flex: 1;
}

.vg-item .uploader img {
  border-radius: 50%;
  margin-right: 10px;
}

.vg-item .handler {
  display: flex;
  justify-content: space-between;
}
</style>