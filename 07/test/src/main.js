// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 局部组件 私有组件
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})



// import * as aa from './test';

// export default 导出是直接导出到 import 预设的变量上
// export 导出需要用 { } 的方式去导入
// 导入 export 导出的所有成员 
// import * as 的语法 可以导入 模块内所有导出的成员 

// console.log(aa)


// import { Fna, Fnb, Test1, Test2, Test3 } from './modulea'