/*
 * @Description: axios请求封装
 * @Author: cooky
 * @Date: 2019-09-17 20:36:10
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 19:19:13
 */
import axios from 'axios'
import {
  VueAxios
} from './axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/distribute', // api base_url
  timeout: 10000 // 请求超时时间
})

const err = (error) => {
  return Promise.reject(error)
}

// 响应拦截器
service.interceptors.response.use((response) => {
  // Promise.reject('未拦截错误')
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
