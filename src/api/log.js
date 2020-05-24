/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-14 17:36:41
 */ 
// import { axios } from '@/utils/request'

export function uploadLog ({stackInfo, ext, logType}) {
  const parameter = {
    act_id: '1404',
    log_type: logType,
    stack_info: [{ ...stackInfo, level_name: 'ERROR' }],
    ext
  }
  return axios({
    // url: '/',
    method: 'post',
    data: parameter,
    baseURL: 'http://10.46.199.205:8895/distribute',
    headers: {
      'Gw-key': 'wugou4s1fl2ii5sbbgog9001'
    }
  })
}
