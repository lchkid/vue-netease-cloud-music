import axios from './axios'

export function getRankData() {
  return axios({
    url: '/toplist/detail'
  })
}

// export class topList {
//   constructor(data) {
//     this.name = data.name
//     this.tracks = data.tracks
//   }
// }