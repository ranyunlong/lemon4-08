<template>
  <div id="app">
      <Button>HAHA </Button>
  </div>
</template>

<script>
import Home from './views/Home';
import testMixins from './mixins/test'
export default {
  name: 'App',
  mixins: [testMixins], // 局部混入
  created() {
    // console.log(1)
    // 自身的属性后执行
  },
  components: {
    Home
  },
  data() {
    return {
      title: '哈哈'
    }
  }
}
</script>

<style lang="less">
  
</style>
