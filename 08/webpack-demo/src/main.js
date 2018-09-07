// import App from './app'
// import './assets/style.css'
// import './assets/style.less'

// vue/dist/vue.esm 是用于在webpack的开发环境时使用的
import Vue from 'vue'

// import './assets/style.less'

// import '@/style.less'

import App from './App'

new Vue({
    el: '#app',
    template: `
        <App />
    `,
    components: {
        App
    }
})