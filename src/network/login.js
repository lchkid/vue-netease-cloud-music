import axios from './axios'

export function login() {
  return axios({
    url: '/login',
    params: {
      email: '',
      password: ''
    }
  })
}