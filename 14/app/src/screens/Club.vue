<template>
    <div class="page">
      <AppBar title="车汇">
        <mu-button icon color="#fff" slot="right">
          <mu-icon value="reorder"></mu-icon>
        </mu-button>
      </AppBar>
      <div class="content" ref="content">
        <Tree :datas="datas" ref="tree" />
      </div>
    </div>
</template>

<script>
    import Tree from '@/common/Tree'
    export default {
        created() {
            console.log(this.$children)
            // this.$parent.data = []
        },  
        mounted() {
            console.log(this.$refs)
        },
        data() {
            return {
                datas: [
                    {
                        name:'选项1',
                        isshow: false,
                        children: [
                            {
                                name: '选项1-1',
                                isshow: false,
                                children: [
                                    {
                                        name: '选项1-1-1',
                                        isshow: true,
                                        children: [
                                            {
                                                name: '选项1-1-1'
                                            },
                                            {
                                                name: '选项1-1-2'
                                            },
                                            {
                                                name: '选项1-1-3'
                                            }
                                        ]
                                    },
                                    {
                                        name: '选项1-1-2'
                                    },
                                    {
                                        name: '选项1-1-3'
                                    }
                                ]
                            },
                            {
                                name: '选项1-2'
                            },
                             {
                                name: '选项1-3'
                            }
                        ]
                    },
                    {
                        name:'选项2',
                        isshow: false,
                        children: [
                            {
                                name: '选项2-1'
                            },
                            {
                                name: '选项2-2'
                            },
                             {
                                name: '选项2-3'
                            }
                        ]
                    },
                    {
                        name:'选项3'
                    }
                ]
            }
        },
        components: {
            Tree
        }
    }
</script>

<style>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.page .content {
    flex: 1;
    overflow: auto;
}
</style>