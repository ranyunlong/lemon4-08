<template>
  <div id="app">
      {{name | UpperCase | filterNumber | LowerCase}}

      {{name2 | Name('张')}}
      {{yuan | Yen}}
  </div>
</template>

<script>
import Home from './views/Home';
import testMixins from './mixins/test'
export default {
  name: 'App',
  mixins: [testMixins], // 局部混入
  filters: {
    UpperCase(value) {
      return value.toUpperCase()
    },
    LowerCase(value) {
      return value.toLowerCase()
    },
    filterNumber(value) {
      return value.replace(/[0-9]/g, '')
    },
    Name(value, n) {
      // console.log(value)
      // console.log(n)
      return value.replace(n, '')
    }
  },
  created() {
    // console.log(1)
    // 自身的属性后执行
  },
  components: {
    Home
  },
  data() {
    return {
      title: '哈哈',
      name: '12321Jobs12312321',
      name2: '李张三',
      yuan: 100
    }
  }
}
</script>

<style lang="less">
  
</style>
