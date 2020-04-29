<template>
  <div class="playlist-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/playlist/nav-bar/back.svg" @click="backClick" alt />
      </template>
      <template #center>
        <span>歌单</span>
        <img src="@/assets/img/playlist/nav-bar/more.svg" alt />
      </template>
      <template #right>
        <img src="@/assets/img/common/cd.svg" alt />
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar/NavBar";

export default {
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.nav-bar-center span{
  color: #ffffff;
  font-weight: bold;
}

.nav-bar-center img {
  position: absolute;
  top: 10px;
  right: 58px;
}
</style>