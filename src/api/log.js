/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 19:53:21
 */ 
// import { axios } from '@/utils/request'

export function uploadLog ({stackInfo, ext, logType}, url) {
  const parameter = {
    act_id: '1404',
    log_type: logType,
    stack_info: [{ ...stackInfo, level_name: 'ERROR' }],
    ext
  }
  console.log(parameter, url)
  // return axios({
  //   method: 'post',
  //   data: parameter,
  //   baseURL: url,
  //   headers: {
  //     'Gw-key': 'wugou4s1fl2ii5sbbgog9001'
  //   }
  // })
}
