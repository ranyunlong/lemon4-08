<template>
    <el-container class="page">
        <div class="login">
            <h3>登录</h3>
            <el-form autocomplete="off" label-width="50px" >
                <el-form-item  label="账号">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>

                <el-form-item  label="密码">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                
                <el-form-item>
                     <router-link to="/register">没有账号，去注册页面？</router-link>
                </el-form-item>

                <el-button type="primary" @click="login" style="width:100%">登录</el-button>

                
            </el-form>
           
        </div>
    </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                // axios
                // .get('/api/home',{
                //     params:{
                //         a: 100
                //     }
                // })
                // .then(res=>{
                //     console.log(res)
                // })
                // .catch(err=>{
                //     console.log(err)
                // })

                // axios.post('/api/home?a=100', {
                //     username:'张三',
                //     haha:'hehe'
                // })
                // .then(res=>{
                //     console.log(res)
                // })
                // .catch(err=> {
                //     console.log(err)
                // })
                

                // axios
                //     .delete('/api')
                //     .then(res=>{
                //         console.log(res)
                //     })
                //     .catch(err=>{
                //         console.log(err)
                //     })

                // axios({
                //     url: 'http://localhost:3000/api',
                //     method: 'post',
                //     params: { // querystring 查询字符串
                //         a: 100
                //     },
                //     data: { // post才能使用data

                //     },
                //     timeout: 1000, //请求超时的期限
                //     responseType: 'json', // 响应值的类型
                // }).then(res=>{
                //     console.log(res)
                // })
                // .catch(err=>{
                //     console.log(err)
                // })

                axios.post('/api/login',this.form)
                .then(res=>{
                    // console.log(res)
                    if(res.data) {
                        // console.log(this.$route)
                        // console.log(this.$router)

                        // $router 对象用于处理路由跳转
                        this.$router.push('/')
                    }

                })
                .catch(err=> {
                    console.dir(err.response.data)
                })

            }
        }
    }
</script>

<style lang="less">
    .login{
        width: 320px;
        height: auto;
        margin: 100px auto;
        border: 1px solid #ddd;
        padding: 50px 20px;
        h3{
            text-align: center;
            margin: 10px;
        }
    }   
</style>