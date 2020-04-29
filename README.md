# VueNetEaseCloudMusic

### 关于数据

感谢[Binaryify](https://github.com/Binaryify)大佬开源的[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 



### 关于项目

#### 首页 (/home)
<img src="https://raw.githubusercontent.com/lchkid/vue-netease-cloud-music/master/screenshots/home.gif" style="zoom:50%;" />

##### 记录

- 某云app首页歌单推荐有横向滚动模块，所以歌单子组件采用better-scroll横向布局
```css
.wrapper {
  white-space: nowrap;
}
	
.content {
  display: inline-block;
}
```

##### BUG

- 当竖向和横向bette-scroll内容区域重叠时，点击事件会发生两次，用`.prevent`和`.stop`也无法阻止第二次点击，只能用`.once`

##### TODO

- [ ] ~~听歌识曲 (这个估计不会做)~~
- [ ] 搜索页跳转
- [x] 右上角点击返回当前播放曲目
- [ ] 轮播图手动控制
- [ ] 首页menu的跳转
- [x] 排行榜
- [ ] 推荐歌单查看更多按钮跳转



#### 视频 (/video)
<img src="https://raw.githubusercontent.com/lchkid/vue-netease-cloud-music/master/screenshots/video.gif" style="zoom:50%;" />

##### 记录

- 视频标签组件很简单的一个点击切换功能

##### BUG

- 可能接口选的不对，从接口获取视频标签总感觉数据有点问题，所以自行添加了推荐列表

##### TODO

- [ ] 顶部导航栏视频跳转
- [x] 右上角点击返回当前播放曲目
- [ ] 搜索页跳转
- [ ] 视频点赞、评论、分享



#### 歌单  (/playlist)
<img src="https://raw.githubusercontent.com/lchkid/vue-netease-cloud-music/master/screenshots/playlist.gif" style="zoom:50%;" />

##### 记录

- 歌单列表不管从哪里跳转来都携带了大量的歌曲信息，纯粹靠父子通信太复杂了，所以这里采用Vuex来储存数据。在点击歌单封面跳转时，从服务器请求该歌单的数据，存储到歌单组件data中，同时转发至Vuex。由于Vuex数据刷新后会丢失，所以在`created()`勾子中做判断是否需要再去服务器请求数据
- 通过自定义Info和Count类将歌单信息和歌单统计数据进行处理并存储，在点击指定曲目跳转到播放页面时，从服务器请求数据，存储歌曲在该歌单的序号及歌曲数据到播放器组件data中同时转发到Vuex，这样在点击上一曲下一曲时可以通过序号再传入所需的歌曲信息

##### TODO

- [ ] 顶部导航栏更多按钮
- [x] 右上角点击返回当前播放曲目
- [ ] 歌单评论，分享
- [x] 播放全部
- [ ] 收藏歌单



#### 播放器  (/song)
<img src="https://raw.githubusercontent.com/lchkid/vue-netease-cloud-music/master/screenshots/song.gif" style="zoom:50%;" />

##### 记录

- 从歌单跳转过来时携带歌曲的ID信息，从服务器请求歌曲数据，通过自定义Song类将数据进行处理并存储同时转发到Vuex
- 封面子组件用了一个infinite旋转动画，同时因自动播放属性，播放器创建时传递给Vuex一个播放状态，在歌曲暂停时通过状态属性控制动画暂停
- 音频子组件嫌自带面板太丑所以隐藏了controls并手动写了一个控制面板，通过监听audio的timeUpdate等事件控制当前时间和进度条样式等

##### TODO

- [ ] 顶部导航栏分享按钮
- [ ] 离开页面时不暂停播放
- [ ] 歌词功能
- [ ] 歌曲喜欢、评论、更多
- [x] 单曲循环、上一曲、下一曲
- [x] 歌曲播放完毕自动跳转至下一曲



### TODO LIST

- [ ] 我的
- [ ] 云村
- [ ] 账号



#### 项目搭建

- 下载[API](https://github.com/Binaryify/NeteaseCloudMusicApi)

```
node app.js
```

- 下载项目

```
npm install
```

##### 本地运行
```
npm run serve
```

##### 项目打包
```
npm run build
```

