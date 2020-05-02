<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>
    <div class="profile-top">
      <div class="pt-userinfo">
        <div class="ptu-left">
          <img src="@/assets/img/common/avatar.jpg" alt />
          <span>lchkid</span>
        </div>
        <div class="ptu-right">
          <span>开通黑胶VIP</span>
        </div>
      </div>
      <profile-menu></profile-menu>
    </div>
    <div class="profile-bottom">
      <div class="pb-item">
        <p>我的音乐</p>
        <img src="@/assets/img/profile/song.png" alt />
      </div>
      <div class="pb-item">
        <p>最近播放</p>
        <img src="@/assets/img/profile/song.png" alt />
      </div>
      <div class="pb-item">
        <p>创建歌单</p>
        <img src="@/assets/img/profile/song.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileNavBar from "./child-comps/ProfileNavBar";
import ProfileMenu from "./child-comps/ProfileMenu";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileMenu
  }
};
</script>

<style>
#profile {
  height: 100vh;
  padding-top: 44px;
  background-color: var(--color-menu);
}

.pt-userinfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px 10px;
}

.ptu-left img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.ptu-left span {
  color: #ffffff;
  padding-left: 10px;
}

.ptu-right span {
  color: #ffffff;
  font-size: 14px;
}

.ptu-right {
  position: relative;
}

.ptu-right::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  right: -8px;
  bottom: 5px;
  transform: rotate(45deg);
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}

.profile-bottom {
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 49px;
  padding: 20px;
  border-radius: 20px 20px 0 0;
}
.pb-item p {
  font-weight: bold;
  margin-bottom: 20px;
}

.pb-item img {
  width: 100%;
  margin-bottom: 20px;
}
</style>