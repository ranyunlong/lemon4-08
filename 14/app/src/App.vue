<template>
  <div id="app">
    <div class="screen">
      <mu-appbar color="#ff88bb" title="Title">
         <mu-button flat slot="left">
           左边
         </mu-button>

        <mu-button flat slot="right">
           左边
         </mu-button>
      </mu-appbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}

.screen {
  width: 100vw;
  height: 100vh;
}

.mu-appbar {
  height: 90px;
}

</style>
