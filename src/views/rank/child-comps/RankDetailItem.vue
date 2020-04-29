<template>
  <div class="rank-detail-item" @click="rankClick">
    <div class="rdi-left">
      <img
        class="rdi-cover"
        :src="topList.coverImgUrl"
        @load="imgLoad"
        alt
      />
      <p class="rdi-text">{{topList.updateFrequency}}</p>
    </div>
    <div class="rdi-right">
      <p v-for="(item, index) in topList.tracks" :key="index">{{index + 1}}. {{item.first}} - {{item.second}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topList: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    rankClick() {
      this.$router.push({
        path: '/playlist',
        query: {
          id: this.topList.id
        }
      })
    }
  }
};
</script>

<style>
.rank-detail-item {
  display: flex;
  align-items: center;
  padding: 5px;
}

.rdi-cover {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}

.rdi-left {
  position: relative;
}

.rdi-text {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 12px;
  color: #ffffff;
}

.rdi-right {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
}
</style>