import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import UserManager from '@/views/UserManager'
import SettingManager from '@/views/SettingManager'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { // 当前路由的元数据 自定义
        requireAuth: true // 需要验证
      },
      redirect: '/users',
      children: [
        {
          path: '/users', 
          // 如果父路由需要登录，子路由也需要添加登录验证
          meta: { // 当前路由的元数据 自定义
            requireAuth: true // 需要验证
          },
          name: 'UserManager',
          component: UserManager
        },
        {
          path: '/setting',
          meta: { // 当前路由的元数据 自定义
            requireAuth: true // 需要验证
          },
          name: 'SettingManager',
          component: SettingManager
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { // 当前路由的元数据 自定义
        checkIsLogin: true // 需要检测是否登录
      }
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register,
      meta: { // 当前路由的元数据 自定义
        checkIsLogin: true // 需要检测是否登录
      }
    }
  ]
})
