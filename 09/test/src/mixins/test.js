export default {
    created() { // 
        // console.log(2)   
        // 混入的属性先执行
        // 自身的属性后执行
        // console.log(this)
    },
    data() {
        return {
            title: '呵呵'
        }
    },
    methods: {
        run() {
            
        }
    }
}