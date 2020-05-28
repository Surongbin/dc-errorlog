/*
 * @Description: 日志上报接口
 * @Author: cooky
 * @Date: 2020-05-14 17:33:03
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:19:59
 */ 
import {config} from './config'

export function uploadLog ({stackInfo, ext, logType, levelName = 'ERROR'}, url = config.requestUrl,  successCallBack, failCallBack) {
  const parameter = {
    act_id: '1404',
    log_type: logType,
    stack_info: [{ ...stackInfo, level_name: levelName }],
    ext
  }
  // post(url, parameter)
  ajax({
        type: 'post',
        data: parameter,
        url,
        headers: {
          'Gw-key': config.gwKey
        },
        success: successCallBack,
        fail: failCallBack
      })
}
// export function post(url, parameter) {
//     var XMLHttpRequest = window.__oXMLHttpRequest_ || window.XMLHttpRequest;
//     if (typeof XMLHttpRequest === 'function') {
//       try {
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", url, !0)
//         xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//         xhr.setRequestHeader("Gw-key", config.gwKey)
//         xhr.send(JSON.stringify(parameter))
//       } catch (e) {
//         console.error('Failed to log, POST请求失败', e)
//       }
//     } else {
//       console.error('Failed to log, 浏览器不支持XMLHttpRequest')
//     }
//   }
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = "json";
    var params = formatParams(options.data);

    if (window.XMLHttpRequest) {
       var xhr = new XMLHttpRequest();
    } else { 
       var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
       if (xhr.readyState == 4) {
           var status = xhr.status;
           if (status >= 200 && status < 300) {
               options.success && options.success(xhr.responseText, xhr.responseXML);
           } else {
               options.fail && options.fail(status);
           }
       }
    }

    if (options.type == "GET") {
       xhr.open("GET", options.url + "?" + params, true);
       xhr.send(null);
    } else if (options.type == "POST") {
       xhr.open("POST", options.url, true);
       xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
       Object.keys(options.headers).forEach(key => {
         xhr.setRequestHeader(key, options.headers[key])
       })
       //设置表单提交时的内容类型
      //  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
       xhr.send(JSON.stringify(options.data));
    }
}
/*
*格式化参数
*/
function formatParams(data) {
  var arr = [];
  for (var name in data) {
      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".",""));
  return arr.join("&");
}