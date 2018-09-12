<template>
    <el-container class="page">
        <el-aside width="200px">
            <el-menu 
                background-color="#545c64"
                text-color="#fff"
                default-active="1"
                style="height:100%"
                >
                <div class="logo">LOGO</div>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">数据中心</el-menu-item>
                <el-menu-item index="3">管理中心</el-menu-item>
                <el-submenu index="4">
                     <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-menu mode="horizontal">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据中心</el-menu-item>
                    <el-menu-item index="3">管理中心</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
        <el-button @click="$router.back()">返回</el-button>
    </el-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
    .page {
        .logo {
            height: 50px;
            color: #fff;
            line-height: 50px;
            padding: 0 20px;
            background-color: lighten(#545c64, 20%);
        }
        width: 100%;
        height: 100%;
        .el-aside {}
        .el-header{
            padding: 0;
        }
    }
</style>