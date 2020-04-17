<template>
  <div class="swiper">
    <div class="swiper-items"><slot></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperCount: 0,
      elWidth: 0, // 轮播图宽度
      currentIndex: 0,
      interval: 3000,
      transtionval: 1500
    }
  },
  mounted() {
    let swiperEl = document.querySelector('.swiper-items');
    let swiperItemEls = document.querySelectorAll('.swiper-item');
    this.swiperCount = swiperItemEls.length;
    this.elWidth = swiperEl.offsetWidth;
    // 在banner队列最后插入第一张banner
    let swiperItemFirst = swiperItemEls[0].cloneNode(true);
    swiperEl.appendChild(swiperItemFirst);
    setInterval(() => {
      this.currentIndex++;
      // 用transtionval时间进行transform变化
      swiperEl.style.transition = `all ${this.transtionval}ms ease 0ms`;
      this.setTransform(swiperEl, -this.currentIndex * this.elWidth);
      // 在interval时间内,用transtionval时间判断是否是最后一张banner,如是则返回第一张
      window.setTimeout(() => {
        swiperEl.style.transition = '0ms';
        if(this.currentIndex == this.swiperCount) {
          this.currentIndex = 0;
          this.setTransform(swiperEl, -this.currentIndex * this.elWidth);
        }
      }, this.transtionval)
    }, this.interval);
  },
  methods: {
    setTransform(node, cPosition) {
      node.style.transform = `translate(${cPosition}px, 0)`;
      node.style['-webkit-transform'] = `translate(${cPosition}px, 0)`;
      node.style['-ms-transform'] = `translate(${cPosition}px, 0)`;
    }
  }
};
</script>

<style>
.swiper {
  overflow: hidden;
}

.swiper-items {
  display: flex;
  width: 100%;
}
</style>