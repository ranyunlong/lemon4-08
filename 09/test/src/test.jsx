
//@babel/preset-env
export default {
    data() {
        return {
            title: '这是一个div',
            arr: ['张三','李四']
        }
    },
    methods: {
        click() {
            console.log(222)
        },
        input(e) {
            this.title = e.target.value
        }
    },
    render() {
        return (
           <div>
               {
                   this.arr.map((k,i) => {
                       return (
                           <div key={i}>{k}{i}</div>
                       )
                   })
               }
               {[<div>1</div>, <div>2</div>]}
                <input value={this.title} onInput={this.input} />
           </div>
        )
    }
}