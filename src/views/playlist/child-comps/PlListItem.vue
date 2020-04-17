<template>
  <div class="pl-list-item">
    <div class="order">{{index + 1}}</div>
    <div class="track">
      <div class="title">{{track.name}}</div>
      <div class="artist">{{track.ar[0].name}}</div>
    </div>
    <div class="handler">
      <img src="@/assets/img/playlist/more.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object
    },
    index: {
      type: Number
    }
  }
};
</script>

<style>
.pl-list-item {
  background-color: #fff;
  width: 100%;
  height: 44px;
  color: #b3b3b3;
  display: flex;
}

.pl-list-item .order,
.handler {
  width: 60px;
  text-align: center;
  line-height: 44px;
  flex-shrink: 0;
}

.pl-list-item .track {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pl-list-item .track .title,
.artist {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.pl-list-item .track .title {
  color: #333333;
}

.pl-list-item .track .artist {
  color: #808080;
  font-size: 14px;
}

.pl-list-item .handler img {
  width: 24px;
}
</style>