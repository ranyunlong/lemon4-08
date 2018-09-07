<template>
  <div id="app">
    <Button color="red">按钮</Button>
    <Test />
  </div>
</template>

<script>
import Button from './components/Button'
import Test from './components/Test'
export default {
  name: 'App',
  components: {
    Button,
    Test
  }
}
</script>

<style>
</style>
