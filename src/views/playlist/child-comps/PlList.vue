<template>
  <div class="pl-list">
    <div class="pl-control">
      <div @click="allClick">
        <img src="@/assets/img/playlist/play.svg" alt />
        <span class="play">播放全部</span>
        <span>(共{{count.track}}首)</span>
      </div>
      <div class="sub">
        <span>+ 收藏 ({{count.subs | subFilter}})</span>
      </div>
    </div>
    <div class="pl-items">
      <pl-list-item 
      v-for="(item, index) in tracks" 
      :key="item.id" 
      :track="item" 
      :index="index" 
      @click.native="songClick(item.id, index)"></pl-list-item>
    </div>
  </div>
</template>

<script>
import PlListItem from "./PlListItem";

export default {
  props: {
    count: {
      type: Object
    },
    tracks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    songClick(id, index) {
      this.$router.push({
        path: '/song',
        query: {
          id
        }
      })
      this.$store.commit('updateIndex', index)
    },
    allClick() {
      let index = 0
      let id = this.tracks[index].id
      this.songClick(id, index)
    }
  },
  filters: {
    subFilter(value) {
      return value >= 10000 ? (value / 10000).toFixed(1) + "万" : value;
    }
  },
  components: {
    PlListItem
  }
};
</script>

<style>
.pl-list .pl-control {
  width: 100%;
  height: 44px;
  border-radius: 22px 22px 0 0;
  background-color: var(--color-background);
  position: sticky;
  top: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.pl-list .pl-control {
  font-size: 14px;
  letter-spacing: 1px;
}

.pl-list .pl-control img {
  width: 24px;
  margin-right: 10px;
}

.pl-list .pl-control .play {
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
}

.pl-list .pl-control .sub {
  background-color: #ff3a3a;
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  border-radius: 15px;
}
</style>