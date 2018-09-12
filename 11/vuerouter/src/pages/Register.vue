<template>
    <el-container class="page">
        <div class="login">
            <h3>登录</h3>
            <el-form>
                <el-form-item >
                    <el-input>
                        <template slot="prepend">
                            <i class="el-icon-tickets"></i>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-input >
                        <template slot="prepend">
                            <i class="el-icon-message"></i>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-input >
                        <template slot="prepend">
                            <i class="el-icon-mobile-phone"></i>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item  label="密码">
                    <el-input type="password"></el-input>
                </el-form-item>
                
                <el-form-item>
                     <router-link to="/login">已有账号，去登录?</router-link>
                </el-form-item>

                <el-button @click="click" type="primary" style="width:100%">登录</el-button>
 
            </el-form>
           
        </div>
    </el-container>
</template>

<script>
    export default {
        methods: {
            click() {
                /**
                 * $router 对象下的back原型链back方法用于返回至前一个页面
                 */
                // this.$router.back()
                // console.log(this.$router.go(1))
                // this.$router.push('/')
                // this.$router.replace('/')
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