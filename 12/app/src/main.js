// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由配置
import router from './router'
// 导出vuex仓库配置
import store from './store'

import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iview)

Vue.config.productionTip = false

// console.log(router)

// 前置路由守卫 路由进入之前
router.beforeEach((to, from ,next)=>{
  // to 要去哪里  
  // from 来自哪里
  // next 放行 函数 它是用来放行的
  // 需要验证
  if (to.meta.requireAuth) {
    // vuex 仓库里的用户信息
    // 检测仓库里的用户信息是否存在
    if(store.getters.user.username) {
      // 存在验证通过，放行
      next()
    } else {
      // 不存在，验证失败，让其跳转至不需要验证登录的页面
      next('/login')
    }
  } else {
    // 不需要验证， 直接放行
    next()
  }

  // 判断是否已登录
  if (to.meta.checkIsLogin) {
    // 如果已登录，就不放行
    if(store.getters.user.username) {
      // 路由让其返还至源地址
      // router.back()
      next('/')
    } else {
      // 如果未登录
      next()
    }
  }
})

console.log(store)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 把路由添加进vue实例
  store, // 把vuex的仓库添加进vue实例
  components: { App },
  template: '<App/>'
})
