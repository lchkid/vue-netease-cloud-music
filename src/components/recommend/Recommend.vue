<template>
  <better-scroll class="recommend-wrapper">
    <div class="recommend-bottom">
      <div class="rb-item" v-for="item in playlist" :key="item.id" @click="plClick(item.id)">
        <div class="rb-cover">
          <img :src="item.picUrl || item.coverImgUrl" alt />
        </div>
        <div class="rb-name">{{item.name}}</div>
      </div>
    </div>
  </better-scroll>
</template>

<script>
import BetterScroll from "@/components/better-scroll/BetterScroll";

export default {
  props: {
    playlist: {
      type: Array
    }
  },
  components: {
    BetterScroll
  },
  methods: {
    plClick(id) {
      // console.log(id)
      this.$router.push({
        path: "/playlist",
        query: {
          id
        }
      }).catch(err => err);
    }
  }
};
</script>

<style>
.recommend-wrapper {
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
}

.recommend-wrapper .content {
  display: inline-block;
}

.recommend-bottom {
  display: flex;
  width: 100%;
  margin-left: 10px;
}

.rb-item {
  width: 100px;
  flex-shrink: 0;
  margin: 0 5px;
}

.rb-cover {
  border-radius: 5px;
  overflow: hidden;
}

.rb-cover img {
  width: 100%;
}

.rb-name {
  white-space: pre-wrap;
  margin-top: 10px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>