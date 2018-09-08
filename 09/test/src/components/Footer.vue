<template>
    <footer>
        <h1>页脚</h1>
        <input v-focus:click.stop.f1="111+1" type="text">
        <button v-ev:mousemove.stop.prevent="click">点击</button>
        <input v-ff="tt" />

    </footer>
</template>

<script>
/**
 * 在自定义指令的每一个钩子函数里都会有以下几个参数
 * 1. el
 * 2. binding
 * 3. vnode
 * 4. oldVnode
 */
    export default {
        directives: { //directives 自定义指令
            focus: { // v-focus
                bind(el, binding, vnode, oldVnode) {
                    // v-focus绑定到元素或组件上时触发
                    // console.log('bind')
                    // html 原生元素对象
                    // el.focus()
                    // 在这里 指令所在的元素还没有被插入到dom所以 元素一些动态操作是不能实现的
                    el.style.background = 'red';
                    // console.log(binding)
                },
                inserted(el, binding, vnode, oldVnode) {
                    // 当指令所在的元素插入到dom时 触发这个钩子
                    // console.log('inserted')
                    el.focus()
                },
                update(el, binding, vnode, oldVnode) {
                    // console.log('update')
                }
            },
            ev: {
                bind(el, binding) {
                    if (binding.arg) {
                        el.addEventListener(binding.arg, (e)=> {
                            e = e || event
                            if (binding.modifiers.stop) {
                                // 阻止事件冒泡
                                e.stopPropagation()
                            }
                            if(binding.modifiers.prevent) {
                                // 阻止默认行为
                                e.preventDefault()
                            }
                            binding.value(e)
                        })
                    }
                },
                inserted() {

                }
            }
        },
        methods: {
            click(e) {
                console.log(e)
            }
        },
        data() {
            return {
                tt: 'xx'
            }
        }
    }
</script>

<style>
    footer{
        border-radius: 10px;
    }
</style>