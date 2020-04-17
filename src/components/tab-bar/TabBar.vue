<template>
  <div id="tab-bar">
    <tab-bar-item link="/home">
      <template #item-icon>
        <img src="@/assets/img/tab-bar/home.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tab-bar/home_active.svg" alt />
      </template>
      <template #item-text>
        <div>发现</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/video">
      <template #item-icon>
        <img src="@/assets/img/tab-bar/video.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tab-bar/video_active.svg" alt />
      </template>
      <template #item-text>
        <div>视频</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <template #item-icon>
        <img src="@/assets/img/tab-bar/profile.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tab-bar/profile_active.svg" alt />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/comment">
      <template #item-icon>
        <img src="@/assets/img/tab-bar/comment.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tab-bar/comment_active.svg" alt />
      </template>
      <template #item-text>
        <div>云村</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/user">
      <template #item-icon>
        <img src="@/assets/img/tab-bar/user.svg" alt />
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tab-bar/user_active.svg" alt />
      </template>
      <template #item-text>
        <div>账号</div>
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  components: {
    TabBarItem
  }
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(90, 90, 90, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>