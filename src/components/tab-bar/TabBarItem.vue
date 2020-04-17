<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="img-active">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "#ea3f2d"
    }
  },
  methods: {
    itemClick() {
      this.isActive ? null : this.$router.replace(this.link);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.link);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : { color: "#949494" };
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

.tab-bar-item img {
  height: 30px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 3px;
}

.tab-bar-item .img-active {
  width: 30px;
  height: 30px;
  margin: 3px auto;
  background-color: var(--color-menu);
  border-radius: 50%;
}
.tab-bar-item .img-active img {
  height: 24px;
  margin: 3px auto;
}
</style>