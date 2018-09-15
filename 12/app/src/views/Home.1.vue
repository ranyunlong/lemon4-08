<template>
    <Layout class="page">
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>
                <div>{{c}} </div>
                <div>{{d}}</div>
                <Button @click="CHANGE_NUMBER">
                    
                    修改num
                </Button>

                {{users}}
                {{admin}}
            </Content>
        </Layout>
        <Footer class="footer">Footer</Footer>
    </Layout>
</template>

<script>
    import { mapActions, mapGetters, createNamespacedHelpers } from 'vuex'

    // 获取命名空间模块里的参数
    const users = createNamespacedHelpers('users')
    const rule = createNamespacedHelpers('rule')
    export default {
        computed: {
            ...mapGetters([
                'c',
                'd'
            ]),
            ...users.mapGetters([
                'users'
            ]),
            ...rule.mapGetters(['admin'])

        },
        methods:{
            ...mapActions([ // 一般情况下不直接使用mutaions 里的方法 使用action里的方法
                'CHANGE_NUMBER' // action 里的方法，可以使用大写来命名用下划线代替驼峰 这样防止组件局部变量冲突
            ])
        }
    }
</script>

<style>
.page {
    height: 100%;
}

.page .footer{
    background: #fff;
}
</style>