import Vue from 'vue'
import Vuex from 'vuex'
// 注册vuex插件
Vue.use(Vuex)

//1.创建一个仓库
// 仓库的原始数据 可以通过预设 也可以通过ajax向后台请求

// localStorage

// 默认在vuex 仓库还没创建时 获取到本地存储里的用户数据
const user =  JSON.parse(localStorage.getItem('user')) || {
    username: null,
    phone: null,
    email: null
}

// vue 模块化
import rule from './modules/rule'
import users from './modules/user'

// 创建仓库
export default new Vuex.Store({
    state: { // 仓库的原始数据 对象的键值对
        user, // 把从本地存储里获取到的数据放到state 原始数据中
        c: 100,
        d: 200
    },
    getters: { // 方法 订阅数据变化的
        user(state) {
            return state.user
        },
        c(state){
            return state.c
        },
        d(state) {
            return state.d
        }
    },
    mutations: { // 方法 用来修改原始state里的数据的
        login(state, payload) {
            // 修改vuex state里的user数据
            state.user = payload
            // 同时把user登录的数据添加至 localStorage
            localStorage.setItem('user', JSON.stringify(payload))
        },
        logout(state, payload) {
            state.user = {
                username: null,
                phone: null,
                email: null
            }

            localStorage.removeItem('user')
        },
        changeC(state, payload) {
            state.c++;
        },
        changeD(state) {
            // 一个 mutaion 可以触发多个state值的变化
          state.d++;  
        }
    },
    actions: { // 方法
        CHANGE_NUMBER({commit}, payload) {
            // action 也是一个 对多的功能
            // 一个action 请求可以触发多个commit 提交
            commit('changeC', payload)
            commit('changeD', payload)
        }
    },
    modules: {
        rule,
        users
    }
})

// 不管vuex 使用了多少个模块 所有的数据都在 一个state里

// 相当于vuex 在vue中全局混入的$store这个对象

// 仓库里的getters 只是用来订阅数据的 不能直接改变获取到的数据

// mutaions里的方法需要通过$store对象的 commit 方法来提交修改