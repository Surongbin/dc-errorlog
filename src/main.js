/*
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-14 17:30:02
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-14 17:32:45
 */ 
import Vue from 'vue'
// import App from './App.vue'
import GlobalError from '@/components/ErrorLog'

Vue.use(GlobalError)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
