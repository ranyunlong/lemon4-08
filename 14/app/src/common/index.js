import AppBar from './AppBar'
import TabBar from './TabBar'
import BackButton from './BackButton'

const components = {
    AppBar,
    TabBar,
    BackButton
}

export default {
    install(Vue, options) {
        // 循环全局注册组件
        Object.keys(components).forEach(k => {
            Vue.component(k, components[k])
        })
    }
}