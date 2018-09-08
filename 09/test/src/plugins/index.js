import Button from './Button';

export default {
    install(Vue, options) {
        // console.log(options)
        Vue.component('Button', Button)

        // 自定义指令
        // Vue.directive()

        // 全局混入
        // Vue.mixin()

    }
}