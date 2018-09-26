<template>
    <div>
        <ul>
            <li v-for="(item, index) in datas" :key="index">
                <span @click="item.isshow = !item.isshow">{{item.name}}</span>
                <Tree v-if="item.isshow" :datas="item.children" />
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created() {
            // console.log(this)
            // this.$listeners('click', func() {}) 监听事件的， 跟在组件上使用v-on 一样的效果
        },
        props: {
            datas: Array
        },
        // comments: true,
        name: 'Tree' // 作为私有组件使用时，当需要在组件内部递归调用自身组件时 可以使用name 来生成一个局部的私有的自身组件
    }
</script>

<style scoped>

</style>