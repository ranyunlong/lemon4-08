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
      enter: "animated fadeInLeft",
      leave: "animated fadeOutRight"
    }
  },
  watch: {
    $route(to, from) {
      const toLength = to.fullPath.split('/')
      const fromLength = from.fullPath.split('/')
      if(toLength > fromLength) {
         // 进入子页面
         console.log('进入子页面了')
         this.enter = "animated fadeInLeft"
         this.leave = "animated fadeOutRight"
      } else if(toLength < fromLength) {
        console.log('返回主页面了')
         this.enter = "animated fadeInRight"
         this.leave = "animated fadeOutLeft"
      }
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  /* 根据屏幕的可视区域的宽高来计算 */
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
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
