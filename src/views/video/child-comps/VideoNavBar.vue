<template>
  <div class="video-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/video/nav-bar/video.svg" alt />
      </template>
      <template #center>
        <input type="text" />
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
.nav-bar {
  background-color: #fff;
}

.nav-bar input[type="text"] {
  outline: none;
  background-color: #f7f7f7;
  border: 0 solid #f7f7f7;
  border-radius: 19px;
  height: 38px;
  width: 100%;
  padding: 0 30px;
}
</style>