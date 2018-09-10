import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import News from '@/views/News';
import NewsList from '@/views/NewsList';
import Detail from '@/views/Detail';
import NotFound from '@/views/NotFound';

// 使用vue注册vueRouter这个插件
Vue.use(VueRouter)

// VueRouter(options)
/**
 * options {}
 * 1. mode '' 路由模式
 * 2. routes [] 路由的匹配规则  匹配组件
 */

export default new VueRouter({
    mode: 'history', // hash是默认的
    routes: [
        {
            path: '/',
            component: Home // 需要匹配的组件
        },
        {
            path: '/news',
            component: News,
            redirect: '/news/list', //  redirect 重定向 不加载当前的组件 加载重定向的那个组件
            children: [ // 给新闻页面配置子路由
                {
                    path:'/news/list',
                    component: NewsList,
                    // alias: '/news' // alias别名 要显示的别名 不显示自己的路径，显示别名路径
                },
                {
                    path:'/news/:date/:id', // :id就是用来在$route的params对象里面获取对应的路径参数的key
                    component: Detail
                }
            ]
        },
        {
            path: '/404',  //定义一个错误页面
            component: NotFound
        },
        {
            path: '*', //* 是通配符 前面的路由规则不能匹配到的， 我都能匹配到
            redirect:'/404'
        }
    ]
})

// 谁的子路由就在谁的组件里做切换