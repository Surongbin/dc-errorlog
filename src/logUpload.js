/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:19:59
 */ 
import { config } from './config'

export function uploadLog ({ stackInfo, ext, logType, levelName = 'ERROR' }, url = config.requestUrl) {
  const parameter = {
    'act_id': '1404',
    'log_type': logType,
    'stack_info': [{ ...stackInfo, level_name: levelName }],
    'ext': ext
  }
  imgSrc(url, parameter)
}
var str2utf8 = window.TextEncoder ? function (str) {
  var encoder = new TextEncoder('utf8')
  var bytes = encoder.encode(str)
  var result = ''
  for (var i = 0; i < bytes.length; ++i) {
    result += String.fromCharCode(bytes[i])
  }
  return result
} : function (str) {
  return eval('\'' + encodeURI(str).replace(/%/gm, '\\x') + '\'')
}

function imgSrc (url, parameter) {
  new Image().src = url + `?data=${encodeURIComponent(str2utf8(JSON.stringify(parameter)))}`
}

// function ajax (options) {
//   options = options || {}
//   options.type = (options.type || 'GET').toUpperCase()
//   options.dataType = 'json'
//   var params = formatParams(options.data)

//   if (window.XMLHttpRequest) {
//     var xhr = new XMLHttpRequest()
//   } else {
//     var xhr = new ActiveXObject('Microsoft.XMLHTTP')
//   }

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       var status = xhr.status
//       if (status >= 200 && status < 300) {
//         options.success && options.success(xhr.responseText, xhr.responseXML)
//       } else {
//         options.fail && options.fail(status)
//       }
//     }
//   }

//   if (options.type == 'GET') {
//     xhr.open('GET', options.url + '?' + params, true)
//     xhr.send(null)
//   } else if (options.type == 'POST') {
//     xhr.open('POST', options.url, true)
//     xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
//     Object.keys(options.headers).forEach(key => {
//       xhr.setRequestHeader(key, options.headers[key])
//     })
//     // 设置表单提交时的内容类型
//     //  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send(JSON.stringify(options.data))
//   }
// }
/*
*格式化参数
*/
// function formatParams (data) {
//   var arr = []
//   for (var name in data) {
//     arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
//   }
//   arr.push(('v=' + Math.random()).replace('.', ''))
//   return arr.join('&')
// }
