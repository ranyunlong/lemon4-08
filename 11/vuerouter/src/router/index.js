// 导入vue
import Vue from 'vue'
// vue的路由插件模块
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage', // 给当前所匹配的路由定义名称
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage', // 给当前所匹配的路由定义名称
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage', // 给当前所匹配的路由定义名称
      component: RegisterPage
    }
  ]
})
