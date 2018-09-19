<template>
    <div class="app-news" @click="$emit('click',$event)">
        <header>
            <mu-avatar size="35" color="#ccc">
                <img :src="data.upic">
            </mu-avatar>
            <div class="title">
                <h4 
                    :class="{
                        'no-data': !data.username
                    }">
                    {{data.username}}
                </h4>
                <div class="info">
                    <span class="pubtime" :class="{
                        'no-data': !data.pubtime
                    }">{{data.pubtime}}</span>
                    <span class="car" :class="{
                        'no-data': !data.car
                    }">{{data.car}}</span>
                </div>
            </div>
        </header>
        <p>{{data.content}}</p>
        <div class="photos">
            <div class="photo" v-for="(item, index) in data.photos" :key="index">
                <img :src="item">
            </div>
        </div>
        <footer>
            <div class="data">
                <i>{{data.like}} 赞</i>
                <i>{{data.comment}} 评论</i>
            </div>
            <div class="icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        props: {
            data: Object
        }
    }
</script>

<style>
    .app-news {
        background: #fff;
        padding: 0 15px;
        margin: 10px 0;
        margin-bottom: 15px;
    }

    .app-news header {
        height: 90px;
        display: flex;
        align-items: center;
    }
    .app-news header .mu-avatar {
        margin-right: 15px;
        width: 72px;
        height: 72px;
    }
    .app-news header .title{
        flex: 1;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: inherit;
        justify-content:space-around;
    }

    .app-news header .title h4 {
        margin: 0;
        
        height: 35px;
    }

    .no-data {
        background: #ddd;
    }

    .app-news header .title .info {
        height: 35px;
    }

    .app-news p {
        height: 50px;
    }

    .app-news .photos {
        display: flex;
        padding: 0 5px;
        flex-wrap: wrap;
    }

    .app-news .photos .photo {
        width: 223px;
        height: 223px;
        overflow: hidden;
        padding: 5px;

    }

    .app-news .photos .photo img{
        max-width: 100%;
        display: block;
    }

    .app-news footer{
        height: 98px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .app-news footer .data i{
        margin-right: 10px;
    }

    .app-news footer .icon span {
        display: inline-block;
        width: 45px;
        height: 45px;
        background: #ccc;
        border-radius: 50%;
    }
</style>