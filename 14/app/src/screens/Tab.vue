<template>
    <div class="tab screen">
        <div class="tabs">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <TabBar :data="data" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        icon: 'home',
                        label: '首页',
                        path: '/home'
                    },
                    {
                        icon: 'home',
                        label: '车汇',
                        path: '/club'
                    },
                    {
                        icon: 'home',
                        label: '消息',
                        path: '/message'
                    },
                    {
                        icon: 'home',
                        label: '我的',
                        path: '/mine'
                    }
                ]
            }
        },
        methods: {
            select(e,item){
                console.log(e, item)
            }
        }
    }
</script>

<style>
    .tab {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .tab .tabs {
        flex: 1;
        overflow: hidden;
    }

    
</style>