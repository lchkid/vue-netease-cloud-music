<template>
  <div class="home-menu">
    <menu-list>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/home/menu/recommend.svg" alt="">
        </template>
        <template #text>
          每日推荐
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/home/menu/songlist.svg" alt="">
        </template>
        <template #text>
          歌单
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/home/menu/rank.svg" alt="">
        </template>
        <template #text>
          排行榜
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/home/menu/dj.svg" alt="">
        </template>
        <template #text>
          电台
        </template>
      </menu-item>
      <menu-item>
        <template #icon>
          <img src="@/assets/img/home/menu/live.svg" alt="">
        </template>
        <template #text>
          直播
        </template>
      </menu-item>
    </menu-list>
  </div>
</template>

<script>
import MenuList from '@/components/menu/MenuList'
import MenuItem from '@/components/menu/MenuItem'

export default {
  components: {
    MenuList,
    MenuItem
  }
}
</script>

<style>
.home-menu {
  width: 95%;
}

.home-menu .icon {
  background-color: var(--color-menu);
  border-radius: 50%;
}
</style>