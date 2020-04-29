<template>
  <div class="user-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/playlist/nav-bar/back.svg" alt />
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