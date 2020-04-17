<template>
  <div class="menu-item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu-item {
  flex: 1;
  text-align: center;
}

.icon {
  height: 50px;
  width: 50px;
  margin: 0 auto;
}

.icon img{
  width: 24px;
  margin: 13px auto;
  vertical-align: middle;
}

.text {
  color: #666;
  font-size: 13px;
  margin-top: 10px;
}
</style>