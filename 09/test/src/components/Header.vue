<template>
    <header>
        <img src="../assets/logo.png" />

        <input v-ff="title" />
        <input v-model="title"/>
        <menu>
            <a href="#">{{title}}</a>
            <a href="#">关于</a>
            <a href="#">xxx</a>
            <a href="#">首页</a>
            <a href="#">首页</a>
        </menu>
    </header>
</template>

<script>
    export default {
        watch: {
            title(v){
                console.log('title:--',v)
            }
        },
        data() {
            return {
                title: '首页'
            }
        }
    }
</script>

<style>
    header {
        height: 50px;
        display: flex;
        border-radius: 5px;
    }
</style>