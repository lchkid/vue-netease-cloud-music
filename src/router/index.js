import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const Video = () => import('@/views/video/Video')
const Profile = () => import('@/views/profile/Profile')
const Comment = () => import('@/views/comment/Comment')
const User = () => import('@/views/user/User')
const PlayList = () => import('@/views/playlist/PlayList')
const Song = () => import('@/views/song/Song')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/comment',
    component: Comment
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: PlayList
  },
  {
    path: '/song',
    name: 'song',
    component: Song
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router