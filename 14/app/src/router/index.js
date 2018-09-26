import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/screens/Home'
import Club from '@/screens/Club'
import Message from '@/screens/Message'
import Mine from '@/screens/Mine'
import Detail from '@/screens/Detail'

import Tab from '@/screens/Tab'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Tab,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'club',
          component: Club
        },
        {
          path: 'message',
          component: Message
        },
        {
          path: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/home/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
