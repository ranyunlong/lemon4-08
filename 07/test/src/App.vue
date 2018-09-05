<template>
    <div class="app">
      <h1>App组件</h1>
      <Test />
    </div>
</template>

<script>
  // Test 局部组件 私有组件
  import Test from './components/Test'
  // const Test =  {
  //   template:  `
  //     <div class="test">
  //       <h1>test</h1>
  //     </div>
  //   `
  // }

  console.log(Test)

  export default {
    components: {
      Test
    }
  }
</script>

<style>

</style>
