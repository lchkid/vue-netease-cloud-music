import { axios } from './axios'

export function getHomeBanner() {
  return axios({
    url: "/banner",
    params: {
      type: 2
    }
  })
}

export function getPersonalized() {
  return axios({
    url: "/personalized",
  })
}

export function getResource() {
  return axios({
    url: "/recommend/resource"
  })
}

export function getHighquality() {
  return axios({
    url: "/top/playlist/highquality"
  })
}