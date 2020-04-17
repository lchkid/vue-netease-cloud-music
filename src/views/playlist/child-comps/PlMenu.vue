<template>
  <div class="pl-menu">
    <menu-list>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/playlist/menu/comment.svg" alt />
        </template>
        <template #text>{{count.comment}}</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/playlist/menu/share.svg" alt />
        </template>
        <template #text>{{count.share}}</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/playlist/menu/download.svg" alt />
        </template>
        <template #text>下载</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/playlist/menu/mutli.svg" alt />
        </template>
        <template #text>多选</template>
      </menu-item>
    </menu-list>
  </div>
</template>

<script>
import MenuList from "@/components/menu/MenuList";
import MenuItem from "@/components/menu/MenuItem";

export default {
  props: {
    count: {
      type: Object
    }
  },
  components: {
    MenuList,
    MenuItem
  }
};
</script>

<style>
.pl-menu {
  margin-top: -10px;
  margin-bottom: 10px;
}

.pl-menu .text {
  margin-top: -5px;
  color: #ffffff;
  padding-bottom: 10px;
}
</style>