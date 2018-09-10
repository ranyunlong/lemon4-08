# Vnode 

Vnode 是vue里的虚拟dom

dom 浏览器的dom
虚拟dom 虚拟的一套dom

虚拟dom和真实dom 的结构类似 `类似html元素dom对象结构`

为什么要做一套虚拟的出来呢？

真实的html标签dom对象是会被浏览器渲染出来的？必定会消耗很多的图形运算功能

虚拟dom 是一个对象

如果我有1000条数据
我修改了其中两条

虚拟dom 会生成1000个对象 （它是不会被浏览器图形化渲染的）

虚拟dom会有两套 （虚拟dom， old虚拟dom）

虚拟dom 里的东西会和真实dom绑定在一起

当数据发生变化 虚拟dom和之前的虚拟dom 会去做数据的比较，当数据发生变化时，才会去更新真实的dom元素




<!-- 如果我写在的组件里 循环了1000条数据，如果我更改1000里面的2条数据
浏览器会重新再渲染1000次 -->


# 单页面应用（spa）

spa 就是把路由页面跳转 搬到前端来进行渲染完成

1. hash 模式