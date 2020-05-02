<template>
  <div class="pt-nav-bar">
    <nav-bar>
      <template #left>
        <img src="@/assets/img/profile/nav-bar/cloud.png" alt />
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
}
</script>

<style>
.pt-nav-bar {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-menu);
}
</style>