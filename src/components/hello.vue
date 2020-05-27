<!--
 * @Description: 
 * @Author: cooky
 * @Date: 2020-05-26 14:33:32
 * @LastEditors: cooky
 * @LastEditTime: 2020-05-27 20:10:42
--> 
<template>
  <div>222</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted () {
    // console.log(son) // 子组件错误errorHandler捕获 
  },
  // methods: {
  //   demo () {
  //     // eslint-disable-next-line no-undef
  //     return x // errorHandler捕获 
  //     // return 1
  //   },
  //   asyncFunc () {
  //     new Promise(resolve => { // unhandledrejection 捕获
  //       error
  //     })
  //   },
  //   async getList () {
  //     await this.asyncFunc()
  //     // await this.demo() // errorHandler捕获 ，未处理异步方法则unhandledrejection捕获
  //   }
  // }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
