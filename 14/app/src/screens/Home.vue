<template>
    <div class="page">
      <AppBar title="奥迪车友汇">
        <mu-button icon color="#fff" slot="right">
          <mu-icon value="reorder"></mu-icon>
        </mu-button>
      </AppBar>
      <div class="content">
        <mu-carousel hide-controls hide-indicators class="banner">
            <mu-carousel-item>
                <img src="http://p0.meituan.net/440.0/dealwatera/62d03079346bfe3883f8ef17202cfca0145855.jpg">
            </mu-carousel-item>
            <mu-carousel-item>
                <img src="http://p0.meituan.net/440.0/dealwatera/b139af7af5c43ec9b5d6f1500db3d794171058.jpg">
            </mu-carousel-item>
        </mu-carousel>
        <News @click="newsSelect(item)" v-for="item in datas" :key="item.id" :data="item" />
      </div>
    </div>
</template>

<script>
    import News from '../components/News'
    export default {
        data() {
            return {
            datas: [
                {
                id: 1,
                username: '张三',
                upic: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                pubtime: '2018-09-19',
                car: '奥巴马',
                content: '今天玩的真开心',
                photos: ['http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',],
                like: 3,
                comment: 8
                },
                {
                id: 2,
                username: '李四',
                upic: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                pubtime: '2018-01-10',
                car: '奥迪',
                content: '今天不开心',
                photos: ['http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',],
                like: 3,
                comment: 8
                },
                {
                id: 3,
                username: '李四',
                upic: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                pubtime: '2018-01-10',
                car: '奥迪',
                content: '今天不开心',
                photos: ['http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',],
                like: 3,
                comment: 8
                },
                {
                id: 4,
                username: '李四',
                upic: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                pubtime: '2018-01-10',
                car: '奥迪',
                content: '今天不开心',
                photos: ['http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',],
                like: 3,
                comment: 8
                }
            ]
            }
        },
        methods: {
            newsSelect(item) {
                this.$router.push('/home/detail')
            }
        },
        components: {
            News
        }
    }
</script>

<style>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.page .banner {
    height: 150px;
}

.page .content {
    flex: 1;
    overflow: auto;
}
</style>