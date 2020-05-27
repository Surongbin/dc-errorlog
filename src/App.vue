<!--
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-26 14:33:32
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:10:42
--> 
<template>
<!--  {{msg}}无法捕获未定义 -->
  <div>hello <Hello/></div>
</template>

<script>
// import { uploadLog } from '@/api/log'
import Hello from '@/components/hello'
export default {
  data () {
    return {
      
    }
  },
  components: { Hello },
  mounted () {
    // eslint-disable-next-line no-undef
    // x.a = 1 // errorHandler捕获
    // Promise.reject('未拦截错误1') // unhandledrejection 捕获
    // uploadLog({}, this.apiUrl)
    // this.foo() // errorHandler捕获 
    // this.demo() // errorHandler捕获
    // this.getList()
    // abc() // errorHandler捕获  
    // const asyncFunc = () => new Promise(resolve => { // unhandledrejection 捕获
    //   error
    // })
    // setTimeout(async() => {
    //   await asyncFunc()
    // })
    // this.getList() // methods里有异步方法，也可以通过unhandledrejection 捕获
  },
  methods: {
    demo () {
      // eslint-disable-next-line no-undef
      return x // errorHandler捕获 
      // return 1
    },
    asyncFunc () {
      new Promise(resolve => { // unhandledrejection 捕获
        error
      })
    },
    async getList () {
      await this.asyncFunc()
      // await this.demo() // errorHandler捕获 ，未处理异步方法则unhandledrejection捕获
    }
  }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
