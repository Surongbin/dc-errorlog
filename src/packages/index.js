/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:31:55
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-15 11:01:35
 */ 
import { uploadLog } from '@/api/log'
// const errorHandler = function (err, vm, info) {
//   const errorParams = {
//     type: 'code',
//     errorMsg: err.message,
//     errorCode: 203001,
//     stack: err.stack
//   }
//   console.log(err.message, errorParams)
//   uploadLog(errorParams)
// }
// 当发⽣生 JavaScript 运⾏行行时错误（包括处理理程序中引发的语法错误和异常）时，使⽤用接⼝口 ErrorEvent 的 error 事件将在 window 被触发，并被 window.onerror() 调⽤用
// window.onerror =  (msg, url, lineNo, columnNo, e) => {
//     console.log(msg, url, lineNo, columnNo, e)
//     if (msg === 'Script error.') {
//         return
//     }
//     // errorHandler(e)
// }

// // 当 Promise 被 reject 并且没有得到处理理的时候，会触发 unhandledrejection 事件。所以可以对此事件进⾏行行监听，将错误信息捕获上报。
// window.addEventListener('unhandledrejection', e => {
//   if ((e.reason)) {
//       errorHandler('未处理', e.reason)
//   } else {
//       errorHandler(e.reason)
//   }
// })

class GlobalError {
  static instance;
  static getInstance () {
    if(!this.instance) {
        this.instance = new GlobalError(name);
    }
    return this.instance;
  }
  constructor() {
    this.instance = null
  }
  init ({url, logType}) {
    this.apiUrl = url
    this.logType = logType
    this.initEvent()
    this.initVueEvent()
  }
  initGlobalEvent () {
    window.onerror =  (msg, url, lineNo, columnNo, e) => {
        console.log(msg, url, lineNo, columnNo, e)
        if (msg === 'Script error.') {
            return
        }
        // errorHandler(e)
    }
    window.addEventListener('unhandledrejection', e => {
      if ((e.reason)) {
          errorHandler('未处理', e.reason)
      } else {
          errorHandler(e.reason)
      }
    })
  }
  initVueEvent () {
    Vue.config.errorHandler = errorHandler
    Vue.mixin({
      beforeCreate () {
        const methods = this.$options.methods
        if (!methods) {
          return
        }
        Object.keys(methods).forEach(key => {
          const fn = methods[key]
          this.$options.methods[key] = function (...args) {
            const ret = fn.apply(this, args)
            try {
              if (ret && typeof ret.then === 'function' && typeof ret.catch === 'function') {
                return ret.catch(Vue.config.errorHandler)
              } else {
                return ret
              }
            } catch (error) {
              return ret.catch(Vue.config.errorHandler)
            }
          }
        })
      }
    })
    Vue.prototype.$throw = errorHandler
  }
  error (err, { type = 'code', errorCode = 203001 }) {
    const errorParams = {
      type,
      errorMsg: err.message,
      errorCode,
      stack: err.stack
    }
    console.log(err.message, errorParams)
    uploadLog(errorParams, this.apiUrl)
  }
}
function install ({url, logType}) {
  if (install.installed) {
    return false;
  }

  install.installed = true;
}
GlobalError.install = install

export default GlobalError
// const GlobalError = {
//   install (Vue) {
//     Vue.config.errorHandler = errorHandler
//     Vue.mixin({
//       beforeCreate () {
//         const methods = this.$options.methods
//         if (!methods) {
//           return
//         }
//         Object.keys(methods).forEach(key => {
//           const fn = methods[key]
//           this.$options.methods[key] = function (...args) {
//             const ret = fn.apply(this, args)
//             try {
//               if (ret && typeof ret.then === 'function' && typeof ret.catch === 'function') {
//                 return ret.catch(Vue.config.errorHandler)
//               } else {
//                 return ret
//               }
//             } catch (error) {
//               return ret.catch(Vue.config.errorHandler)
//             }
//           }
//         })
//       }
//     })
//     Vue.prototype.$throw = errorHandler
//   }
// }
// export default GlobalError
