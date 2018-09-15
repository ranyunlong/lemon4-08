<template>
  <div id="app">
    <Header class="header">
      <div>Admin</div>
      <div v-if="user.username">
        <span>欢迎您：{{user.username}} {{c}}</span>
        <Button size="small" type="error" @click="logout">安全退出</Button>
      </div>
      <div v-else>
          <router-link to="/login">登录</router-link>
      </div>
    </Header>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

// mapState 和 mapGetters 他们俩都是属性 都混入到computed选项里
// mapMutations 和 mapActions 他们俩都是方法 都混入到 methods 选项里面去
export default {
  name: 'App',
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['user','c'])
  }
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
