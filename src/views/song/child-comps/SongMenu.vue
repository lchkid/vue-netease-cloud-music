<template>
  <div class="song-menu">
    <menu-list>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/song/menu/love.svg" alt />
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/song/menu/download.svg" alt />
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/song/menu/ring.svg" alt />
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/song/menu/comment.svg" alt />
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/song/menu/more.svg" alt />
        </template>
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
}
</script>

<style>
.song-menu {
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
}
</style>