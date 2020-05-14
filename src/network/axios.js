import originAxios from 'axios'

export default function axios(config) {
  const instance = originAxios.create({
    baseURL: 'https://lchkid.top:3333',
    // baseURL: 'http://localhost:3332',
    timeout: 20000,
    withCredentials: true
  })
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log('请求失败', err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('响应失败', err);
  })
  return instance(config);
}