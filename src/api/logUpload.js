/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:19:59
 */ 
import { axios } from '@/utils/request'
export function uploadLog ({stackInfo, ext, logType, levelName = 'ERROR'}, url) {
  const parameter = {
    act_id: '1404',
    log_type: logType,
    stack_info: [{ ...stackInfo, level_name: levelName }],
    ext
  }
  // cooky
  console.log(parameter, url)
  return axios({
    method: 'post',
    data: parameter,
    baseURL: '/distribute', // url,
    headers: {
      'Gw-key': 'wugou4s1fl2ii5sbbgog9001'
    }
  })
}
