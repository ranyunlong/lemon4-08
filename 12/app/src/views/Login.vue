<template>
    <Layout class="page">
        <Form class="login">
            <FormItem :error="formError.account">
                <Input placeholder="账号" v-model="form.account" @input="formError.account =''" >
                    <span slot="prepend">
                        <Icon type="ios-contact" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>
            <FormItem :error="formError.password">
                <Input placeholder="密码" v-model="form.password" @input="formError.password =''" type="password" >
                    <span slot="prepend">
                        <Icon type="ios-lock" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>

            <FormItem :error="formError.verifiy">
                <Input placeholder="验证码" v-model="form.verifiy" @input="formError.verifiy =''" />
               
            </FormItem>
            <FormItem>
                 <img :src="verifiyCodeSrc" @click="getVerifiy" />
            </FormItem>

            <FormItem>
                <Button long type="primary" @click="login">登录</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    import { login, verifiy } from '../api';
    export default {
        data() {
            return {
                iconSize: 18,
                verifiyCodeSrc: verifiy,
                form: {
                    account: 'ranyunlong',
                    password: 'ryl520cy',
                    verifiy: ''
                },
                formError: {
                    account: '',
                    password: '',
                    verifiy: ''
                }
            }
        },
        methods: {
            getVerifiy(e) {
                const verifiySrc = verifiy + '?' 
                this.verifiyCodeSrc = verifiySrc + e.timeStamp
            },
            login(e) {
                login(this.form)
                    .then(res=>{
                        console.log(res)
                        this.$store.commit('login', res.data)
                        this.$router.push('/')
                    })
                    .catch(err=>{
                        this.getVerifiy(e)
                        const { data } = err.response
                        Object.keys(data).forEach(k=>{
                            this.formError[k] = data[k]
                        })
                    })
            }
        },
    }
</script>

<style>
    .login{
        width: 320px;
        margin: 100px auto;
    }
</style>