/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:30:02
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-26 14:34:55
 */ 
import Vue from 'vue'
import App from './App.vue'
import GlobalError from '@/packages'

Vue.use(GlobalError, {
  url: 'http://10.46.199.205:8895/distribute',
  logType: 'dali'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
