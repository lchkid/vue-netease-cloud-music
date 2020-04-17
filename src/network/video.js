import { axios } from './axios'

export function getVideoGroupList() {
  return axios({
    url: '/video/group/list'
  })
}

export function getVideoDetail(id) {
  return axios({
    url: '/video/group',
    params: {
      id
    }
  })
}

export class Video {
  constructor(data) {
    this.id = data.urlInfo.id,
    this.cover = data.coverUrl,
    this.url = data.urlInfo.url,
    this.title = data.title,
    this.avatar = data.creator.avatarUrl,
    this.name = data.creator.nickname
  }
}