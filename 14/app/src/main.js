// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Museui from 'muse-ui'
import common from './common'
import Loading from 'muse-ui-loading';
Vue.use(Loading);


// import 'muse-ui/dist/muse-ui.css'

Vue.use(Museui)
Vue.use(common)



Vue.config.productionTip = false
// 取消日志和警告的输出
Vue.config.silent = true
//  做生产调试时使用
// Vue.config.devtools = true

// 捕获错误的钩子函数
// Vue.config.errorHandler = function (err, vm, info){}

// 捕获警告输出
// Vue.config.warnHandler = function  (err, vm, trace){}

// 设置不被vue编译的自定义标签
Vue.config.ignoredElements = ['ivbutton']

// 给键盘事件的修饰符添加别名
Vue.config.keyCodes = {enter: 13}

// 关闭vue启动时的生产提示
Vue.config.productionTip = false


var c = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
})

console.log(c)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
