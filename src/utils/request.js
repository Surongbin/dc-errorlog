/*
 * @Description: axios请求封装
 * @Author: cooky
 * @Date: 2019-09-17 20:36:10
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:20:46
 */
import axios from 'axios'
import {
  Axios
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
  return response.data
}, err)

export {
  service as axios
}
