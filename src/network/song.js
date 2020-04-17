import { axios } from './axios'

export function getSongDetail(ids) {
  return axios({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export class Song {
  constructor(data) {
    this.id = data.id,
    this.name = data.name
    this.artist = data.ar
    this.img = data.al.picUrl
    this.time = data.dt
  }
}