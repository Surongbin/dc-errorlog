/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:31:55
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:24:41
 */ 
import { uploadLog } from '../api/logUpload'
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
    // 当 Promise 被 reject 并且没有得到处理理的时候，会触发 unhandledrejection 事件。所以可以对此事件进⾏行行监听，将错误信息捕获上报。
    // 异步事件没有进行try catch捕获，也会触发unhandledrejection事件
    window.addEventListener('unhandledrejection', e => {
      throw e.reason // reason是error对象， 此处抛出错误，在error事件中统一处理
    })
    // 当发⽣生 JavaScript 运⾏行行时错误（包括处理理程序中引发的语法错误和异常）时，使⽤用接⼝口 ErrorEvent 的 error 事件将在 window 被触发，并被 window.onerror() 调⽤用
    window.addEventListener('error', args => {
      console.log('error event: ', args)
      if (args.message === 'Script error.') {
        return
      }
      this.error(args.error)
      return true
    }, true)
  },
  initVueEvent (Vue) {
    Vue.config.errorHandler = this.error.bind(this)
    Vue.prototype.$throw = this.error.bind(this)
  },
  error (err, { type = 'code', errorCode = 203001 } = {}) {
    const errorParams = {
      type,
      errorMsg: err.message,
      errorCode,
      stack: err.stack,
    }
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(err.stack, errorParams)
    }
    uploadLog({stackInfo: errorParams, logType: this.logType}, this.apiUrl)
  }
}
export default GlobalError
