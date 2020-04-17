<template>
  <div id="user">
    <div class="user-bg"></div>
    <user-nav-bar></user-nav-bar>
  </div>
</template>

<script>
// import {} from "@/network/user";

import BetterScroll from "@/components/better-scroll/BetterScroll";

import UserNavBar from "./child-comps/UserNavBar";

export default {
  name: "User",
  components: {
    BetterScroll,
    UserNavBar
  }
}
</script>

<style>
.user-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(30deg , #f8f8f8, #6d6d6d);
  z-index: -1;
}
</style>