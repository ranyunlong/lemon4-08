<template>
    <div class="app-bar">
       <div class="app-bar-left">
           <slot name="left" />
       </div>
       <div class="app-bar-title">
           <slot name="title">{{title}}</slot>
       </div>
       <div class="app-bar-right">
           <slot name="right" />
       </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: ''
        }
    }
</script>

<style>
    .app-bar {
        height: 90px;
        background: #ff88bb;
        box-shadow: 0 0 1px 5px #ddd;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
    }

    .app-bar .app-bar-title {
        flex: 1;
        text-align: center;
        color: #fff;
    }

    .app-bar .app-bar-left,
    .app-bar .app-bar-right {
        max-width: 100px;
        overflow: hidden;
        min-width: 100px;
    }
</style>