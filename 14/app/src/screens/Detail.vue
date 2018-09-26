<template>
    <div class="page screen">
      <AppBar title="动态详情">
        <BackButton slot="left" />
        <mu-button icon color="#fff" slot="right">
          <mu-icon value="reorder"></mu-icon>
        </mu-button>
      </AppBar>
      <div class="content">
          <News :data="data" />
      </div>
    <mu-button @click="click">{{btn}}</mu-button>
    </div>
</template>

<script>
    function axios(path) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                // 
                resolve({
                    id: 1,
                    username: '张三',
                    upic: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                    pubtime: '2018-09-19',
                    car: '奥巴马',
                    content: '今天玩的真开心',
                    photos: ['http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg','http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',],
                    like: 3,
                    comment: 8
                })
            },300)
        })
    }
    import News from '@/components/News'
    export default {
        data() {
            return {
                data: {},
                btn: '按钮'
            }
        },
        created() {
            const loading = this.$loading({
                overlayColor: 'rgba(0,0,0,0.5)',
                color: '#fff'
            })
            
            axios('/test', {id: this.$route.params.id})
            .then(res=>{
                this.data = res
                loading.close()
            })
            
        },
        methods: {
            click() {
                this.$nextTick(()=>{
                    // 等到dom 里的数据下一次更新完后执行
                    console.log('修改按钮')
                })
                // this.btn = '修改完成'
                console.log('修改完成')
            }
        },
        components: {
            News
        }
    }
</script>

<style>
.page {
    display: flex;
    flex-direction: column;
}

.page .content {
    flex: 1;
    overflow: auto;
}
</style>