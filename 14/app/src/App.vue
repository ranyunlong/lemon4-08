<template>
  <div id="app">
    <transition
      :enter-active-class="enter"
      :leave-active-class="leave"
      >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      enter: "page-switch fadeInRight",
      leave: "page-switch fadeOutLeft"
    }
  },
  watch: {
    $route(to, from) {
      const toLength = to.fullPath.split('/')
      const fromLength = from.fullPath.split('/')
      if(toLength > fromLength) {
         // 进入子页面
         console.log('进入子页面了')
        this.enter = "page-switch fadeInRight"
        this.leave = "page-switch fadeOutLeft"
      } else if(toLength < fromLength) {
        console.log('返回主页面了')
        this.enter = "page-switch fadeInLeft"
         this.leave = "page-switch fadeOutRight"
         
      }
    }
  }
}
</script>

<style>
.page-switch {
    animation-duration: .5s;
}

body{
  margin: 0;
}
#app {
  /* 根据屏幕的可视区域的宽高来计算 */
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  overflow: hidden;
}

.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.screen .content {
  flex: 1;
  overflow: auto;
}
</style>
