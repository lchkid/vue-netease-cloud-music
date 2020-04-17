<template>
  <div class="home-swiper">
    <swiper v-if="banner.length">
      <swiper-item v-for="item in banner" :key="item.bannerId">
        <a :href="item.url">
          <img :src="item.pic" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/swiper";

export default {
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.home-swiper {
  margin-top: 10px;
  width: 92%;
  border-radius: 10px;
  overflow: hidden;
  transform: rotate(0deg); /* 解决移动端overflow-hidden失效问题 */
}
</style>