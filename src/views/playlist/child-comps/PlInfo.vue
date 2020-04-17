<template>
  <div class="pl-info">
    <div class="pl-cover">
      <img :src="info.img" alt />
    </div>
    <div class="pl-creator">
      <div class="title">
        <p>{{info.name}}</p>
      </div>
      <div class="name">
        <img :src="info.avatar" alt />
        <span>{{info.nickname}}</span>
      </div>
      <div class="desc">
        <p>{{info.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
.pl-info {
  width: 90%;
  padding-top: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
}

.pl-cover,
.pl-creator {
  width: 50%;
  flex-shrink: 1;
}

.pl-cover img {
  width: 80%;
  border-radius: 5px;
}

.pl-creator {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  letter-spacing: 1px;
  margin-left: -10px;
}

.pl-creator .title,.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.pl-creator .name {
  font-size: 14px;
  color: #ffffffe0;
}

.pl-creator .name img {
  width: 24px;
  border-radius: 50%;
  margin-right: 5px;
}

.pl-creator .desc {
  font-size: 14px;
  color: #ffffffd0;
}

</style>