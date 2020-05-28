/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:19:59
 */ 
import { axios } from '../utils/request'
import {config} from '../config'

export function uploadLog ({stackInfo, ext, logType, levelName = 'ERROR'}, url = config.requestUrl) {
  const parameter = {
    act_id: '1404',
    log_type: logType,
    stack_info: [{ ...stackInfo, level_name: levelName }],
    ext
  }
  return axios({
    method: 'post',
    data: parameter,
    url,
    baseURL: '/',
    headers: {
      'Gw-key': config.gwKey
    }
  })
}
