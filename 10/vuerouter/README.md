# vue-router

### 安装 

```shell
> npm install vue-router
> yarn add vue-router
```

### 使用

1. 在src里面创建一个router的文件夹
2. 在router文件夹里创建一个index.js文件
在router的index。js里创建好路由的配置
```js
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import News from '@/views/News';

// 使用vue注册vueRouter这个插件
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash', // hash是默认的
    routes: [
        {
            path: '/',
            component: Home // 需要匹配的组件
        },
        {
            path: '/news',
            component: News
        }
    ]
})
```

3. 在main.js入口文件里面导入路由

```js
new Vue({
  el: '#app',
  router, // 加入router
  components: { App },
  template: '<App/>'
})

```

4. 在根组件里添加router-view 路由切换容器

```html
<template>
  <div id="app">
    <!-- router-view 路由切换容器 指定路由在哪切换 -->
    <router-view />
  </div>
</template>
```

