<template>
    <Layout class="page">
        <Form class="register">
            <FormItem :error="formError.username" >
                <Input placeholder="账号" @input="formError.username=''" v-model="form.username">
                    <span slot="prepend">
                        <Icon type="ios-contact" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>
            <FormItem :error="formError.email">
                <Input placeholder="邮箱" @input="formError.email=''" v-model="form.email">
                    <span slot="prepend">
                        <Icon type="ios-mail" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>
            <FormItem :error="formError.phone">
                <Input placeholder="手机" @input="formError.phone=''" v-model="form.phone">
                    <span slot="prepend">
                        <Icon type="ios-phone-portrait" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>
            <FormItem :error="formError.password">
                <Input placeholder="密码"  @input="formError.password=''" v-model="form.password" type="password" >
                    <span slot="prepend">
                        <Icon type="ios-lock" :size="iconSize" />
                    </span>
                </Input>
            </FormItem>

            <FormItem :error="formError.verifiy">
                <Input placeholder="验证码"  @input="formError.verifiy=''" v-model="form.verifiy"  />
            </FormItem>

            <FormItem>
                <img :src="verifiyCodeSrc" @click="getVerifiy" style="height:33px;" />
            </FormItem>

            <FormItem>
                <Button long type="success" @click="register">注册</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    import { register, verifiy } from '../api'
    export default {
        data() {
            return {
                iconSize: 18,
                form: {
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                    verifiy: ''
                },
                formError: {
                    username: '',
                    email: '',
                    phone: '',
                    password: '',
                    verifiy: ''
                },
                verifiyCodeSrc: verifiy
            }
        },
        methods: {
            getVerifiy(e) {
                const verifiySrc = verifiy + '?' 
                this.verifiyCodeSrc = verifiySrc + e.timeStamp
            },
            // 注册
            register(e) {
                register(this.form).then(res=>{
                    this.$router.push('/login')
                }).catch(err=>{
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
    .register{
        width: 320px;
        margin: 100px auto;
    }
</style>