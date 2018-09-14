<template>
  <div id="app">
    <Header class="header">
      <div>Admin</div>
      <div>欢迎您：xxx</div>
    </Header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  height: 100%;
}

#app .header{
   background: #fff;
   display: flex;
   justify-content: space-between;
}
</style>
