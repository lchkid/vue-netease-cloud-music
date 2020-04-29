<template>
  <div class="rank-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/rank/back.svg" @click="backClick" alt />
      </template>
      <template #center>
        <span>排行榜</span>
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
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}

.nav-bar-center span{
  color: #000000;
  font-weight: bold;
}
</style>