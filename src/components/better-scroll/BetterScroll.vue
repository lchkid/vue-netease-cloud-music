<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backToTop(time = 500) {
      this.scroll && this.scroll.scrollTo(0, 0, time);
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      scrollX: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  }
};
</script>

<style>
</style>