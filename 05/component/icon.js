
// Vue.component 生成的组件是 全局组件  就在任意一个实例中都可以使用的组件
// 命名的问题 组件名称语义化 命名冲突
// 私有 或局部组件
Vue.component('Icon', {
    props: {
        name: String,
        size: {
            type: Number,
            default: 16
        },
        color: String
    },
    watch:{ // watch 选项 观察当前实例中的变量的
        // 想要观察当前实例的哪一个属性就添加一个和属性同名的函数
        color(newVal, oldval){
            // 如果color 发生变化，函数就会执行
            // console.log('color 变化了', newVal, oldval)
            // 这里监听到父组件传过来的color 发生变化
            this.iColor = newVal
        },
        iColor(newVal, oldval){
            // 如果iColor 发生变化，函数就会执行
            // console.log('iColor 变化了')
        }
    },
    data() {
        return {
            iColor: this.color
        }
    },
    template: `
        <i 
            @click="click"
            class="glyphicon" 
            :style="{
                fontSize: size + 'px',
                color:iColor
            }" 
            :class="iconName">
        </i>
    `,
    computed: {
        iconName() {
            if (this.name) {
                return 'glyphicon-' + this.name
            }
        }
    },
    methods:{ 
        click() {
            this.iColor = 'black'
            
            // 组件挂载元素上的事件 由组件内部去触发
            // 在组件内部使用this.$emit() 就可以触发 组件挂载元素上的事件监听
            // 自定义事件
            // 组件挂载元素上的事件 都是自定义的
            this.$emit('aa', this.iColor) 
        }
    }
})
