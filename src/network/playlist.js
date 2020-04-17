import { axios } from './axios'

export function getPlaylist(id) {
  return axios({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export class Info {
  constructor(data) {
    this.img = data.coverImgUrl,
    this.name = data.name,
    this.desc = data.description,
    this.avatar = data.creator.avatarUrl,
    this.nickname = data.creator.nickname
  }
}

export class Count {
  constructor(data) {
    this.play = data.playCount,
    this.comment = data.commentCount,
    this.share = data.shareCount,
    this.track = data.trackCount,
    this.subs = data.subscribedCount
  }
}