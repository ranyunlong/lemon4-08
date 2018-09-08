// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI) 添加vue插件的
// Vue.use(ElementUI)

import plugin from './plugins/index.js'

Vue.use(plugin, {a:100})





// 模拟vue 的use 方法

// vue的u方法
// Vue.u = function (p, o) {
//   // 调用传递过来的plugin对象的 install 给install方法里传入vue的构造函数 和
//   p.install(Vue, o)
// }

// plugin对象
// const plugin = {
//   install(Vue, options) {
//       // console.log(options)
//       Vue.component('Button', {
//           template: `
//               <button class="btn">
//                   <slot></slot>
//               </button>
//           `
//       })
//   }
// }

// 调用Vue下的u方法 传递plugin对象和options对象
// Vue.u(plugin, {x:1})

Vue.config.productionTip = false


/**
 * 混入
 * 1. 局部混入 （多个Api 相同的情况下 但又不是全局的情况下用局部混入）
 * 2. 全局混入 Vue.mixin()
 * 
 * 混入的作用是为了避免编写 相同的选项（维护的问题）
 */

 Vue.mixin({
   data() {
     return {
       num: 10010
     }
   }
 })

/**
 * 全局指令 
 * Vue.directive('ff',{})
 * 指令使用比较频繁的情况下使用全局
 * 
 * 局部指令
 * 只使用一次 或少量次数的指令 使用局部
 */

 Vue.directive('ff', {
   bind(el, binding, vnode) {
     // 当指令绑定到元素上时触发
      // 是获取到binding的值
      el.value = binding.value
      // 绑定的值在组件中的变量名称
      const name =  binding.expression
      // 给元素添加 原生事件获取到 元素的内容变化

      //  vnode.context 你的指令所在的组件
      el.addEventListener('input', function() {
        // 通过vnode的context修改组件中对应的变量
        vnode.context[name] = el.value
      })
   },
   inserted(el, binding) {
      // 表示该指令所在的元素已经插入到dom了
      // el.focus()
   },
   update(el, binding) {
    // 当指令绑定的数据发生改变时触发该钩子函数
    el.value = binding.value
   }
 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
