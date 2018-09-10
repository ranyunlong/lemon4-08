<template>
  <div id="app">
    <!-- router-view 路由切换容器 指定路由在哪切换 -->
    <!-- <a href="#/">首页</a>
    <a href="#/news">新闻</a> -->

    <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>

    <!-- 
      router-link
      比a标签多的好处是 会自动在hash模式和history模式里自动切换
     -->

    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
