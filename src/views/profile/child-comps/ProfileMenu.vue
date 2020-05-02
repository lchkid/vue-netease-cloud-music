<template>
  <div class="pt-menu">
    <menu-list>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/profile/menu/download.png" alt />
        </template>
        <template #text>本地音乐</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/profile/menu/radio.png" alt />
        </template>
        <template #text>我的电台</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/profile/menu/collect.png" alt />
        </template>
        <template #text>我的收藏</template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/profile/menu/new.png" alt />
        </template>
        <template #text>关注新歌</template>
      </menu-item>
    </menu-list>
  </div>
</template>

<script>
import MenuList from "@/components/menu/MenuList";
import MenuItem from "@/components/menu/MenuItem";

export default {
  components: {
    MenuList,
    MenuItem
  }
};
</script>

<style>
.pt-menu .text {
  margin-top: -5px;
  color: #ffffff;
  padding-bottom: 10px;
}
</style>