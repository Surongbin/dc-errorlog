/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:31:55
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:24:41
 */ 
import { uploadLog } from '@/api/log'
// eslint-disable-next-line no-undef
// z.b = 2
const GlobalError = {
  install (Vue, {url, logType}) {
    this.apiUrl = url
    this.logType = logType
    this.initVueEvent(Vue)
    this.initGlobalEvent()
  },
  init ({url, logType}) {
    this.apiUrl = url
    this.logType = logType
    this.initGlobalEvent()
  },
  initGlobalEvent () {
    // 当发⽣生 JavaScript 运⾏行行时错误（包括处理理程序中引发的语法错误和异常）时，使⽤用接⼝口 ErrorEvent 的 error 事件将在 window 被触发，并被 window.onerror() 调⽤用
    window.onerror =  (msg, url, lineNo, columnNo, e) => {
        console.log('onerror==',msg, url, lineNo, columnNo, e)
        // if (msg === 'Script error.') {
        //     return
        // }
        this.error(e)
    }
    // 当 Promise 被 reject 并且没有得到处理理的时候，会触发 unhandledrejection 事件。所以可以对此事件进⾏行行监听，将错误信息捕获上报。
    // window.addEventListener('unhandledrejection', e => {
    //   console.log('unhandledrejection==', e, e.stack)
    //   this.error({
    //     message: '未处理的unhandledrejection事件：' + e.reason,
    //     ...e
    //   })
    // })
  },
  initVueEvent (Vue) {
    Vue.config.errorHandler = this.error.bind(this)
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
      },
      renderError (e) {
        console.log('renderError', e)
      }
    })
    Vue.prototype.$throw = this.error.bind(this)
  },
  error (err, { type = 'code', errorCode = 203001 } = {}) {
    const errorParams = {
      type,
      errorMsg: err.message,
      errorCode,
      stack: err.stack,
    }
    console.log(err.stack)
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(err.message, errorParams)
    }
    uploadLog({stackInfo: errorParams, logType: this.logType}, this.apiUrl)
  }
}
export default GlobalError

// const errorHandler = function (err) {
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
//     // if (msg === 'Script error.') {
//     //     return
//     // }
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


  // function install ({url, logType}) {
  //   if (install.installed) {
  //     return false
  //   }
  //   install.installed = true
  //   console.log('install: ', url, logType)
  // }
  // GlobalError.install = install
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
