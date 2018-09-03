Vue.component('Swicher', {
    props: {
        value: Boolean
    },
    watch:{
        value(v) {
            this.iValue = v
        },
        iValue(v) {
            this.$emit('input', v)
        }
    },
    template: `
        <div class="swicher" :class="{
            'swicher-on': iValue
            }" 
            @click="iValue=!iValue"
            >
            <div class="btn">
            </div>
        </div>
    `,
    data() {
        return {
            iValue: this.value
        }
    },
    beforeDestroy() {
        console.log('销毁之前')
        // 实例是不会运行 beforeDestroy
        // 可以在组件销毁之前 保留一些我们需要的数据
    },
    destroyed() {
        console.log('销毁之后')
        // 可以在组件销毁之前 保留一些我们需要的数据
         // 实例是不会运行 destroyed
    },
})