<template>
  <div class="video-tab">
    <better-scroll class="vt-wrapper">
        <ul class="vt-content">
          <li class="vt-item" :class="{active: currentIndex == index}" v-for="(item, index) in tabList" :key="item.name" @click="tabClick(index)">{{item.name}}</li>
        </ul>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "@/components/better-scroll/BetterScroll";

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    BetterScroll
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      let id = this.tabList[index].id
      this.$emit('tabClick', id)
    }
  }
};
</script>

<style>
.video-tab {
  background-color: #ffffff;
}

.vt-wrapper {
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
}
.vt-wrapper .content {
  display: inline-block;
}

.vt-content {
  display: flex;
}

.vt-item {
  flex-shrink: 0;
  padding: 5px;
  margin: 0 5px;
}

.vt-item.active {
  color: #ff0000;
  border-bottom: 2px solid #ff0000;
}
</style>