/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:30:02
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 19:53:07
 */ 
import Vue from 'vue'
import App from './App.vue'
import GlobalError from '@/packages'

// Vue.use(GlobalError, {
//   url: 'http://10.46.199.205:8895/distribute',
//   logType: 'dali'
// })

// eslint-disable-next-line no-undef
// x.a = 1
GlobalError.init({
  url: 'http://10.46.199.205:8895/distribute',
  logType: 'dali'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
