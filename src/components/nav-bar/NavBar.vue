<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
}

.nav-bar-left,
.nav-bar-right {
  flex-shrink: 0;
  width: 60px;
}

.nav-bar-center {
  flex: 1;
}

.nav-bar img {
  height: 24px;
}
</style>