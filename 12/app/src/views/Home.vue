<template>
    <Layout class="page">
        <Layout>
            <Sider hide-trigger>
                <HomeMenu />
            </Sider>
            <Content class="content">
                <router-view />
            </Content>
        </Layout>
        <Footer class="footer">Footer</Footer>
    </Layout>
</template>

<script>
    import HomeMenu from '@/components/HomeMenu'
    export default {
        components:{
            HomeMenu
        }
    }
</script>

<style>
.page {
    height: 100%;
    background: #ccc;
}

.page .footer{
    background: #fff;
}
.page .content {
    padding: 10px;
}
</style>