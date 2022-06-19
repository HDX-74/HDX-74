/*
 * @Description: 
 * @Author: 黄佳伟
 * @Date: 2022-05-15 21:03:17
 */
// 1.实现防抖和节流函数


// 2.CSS清除浮动的三种方式


// 3.隐藏节点的三种方式  opacity=0、
// 4.闭包的定义和作用

// 5.ES中新增声明变量的方式
                        声明变量或常量：var 、let（ES6新增） 、const （ES6新增）;
                        声明函数变量：function ；
                        声明类：class（ES6新增）；
                        声明 ‘ 静态加载 ’ 输入变量：import （ES6新增）

 // ES5->ES6新增的特性：


// 6.js中不改变数组本身的方法
// 7.箭头函数
// 8.http和https区别
                        https的端口是443，而http的端口是80
                        HTTPS在HTTP与TCP之间有一个SSL特殊的加密
//    网络5层结构:
                        应用层、传输层(UDP和TCP协议)、网络层、数据链路层、物理层
//    UDP和TCP区别：
                        无连接——————>面向连接
                        尽最大努力交付——————>提供可靠交付
                        支持一对一、一对多、多对一和多对多的交互通信——————>每一条TCP连接只能是一对一
//    TCP三次握手连接和四次挥手断开连接：

//    常用状态码：
                        1xx：表示通知信息，如请求收到了或正在进行处理
                        2xx：表示请求成功，如接收或知道了
                        3xx：表示请求的资源URL重定向（301与302的区别：前者是永久移动，后者是临时移动）
                        304，(未修改)自从上次请求后，请求网页未修改过。服务器返回此响应时，不会返回网页内容
                        4xx：表示客户端错误（403 Forbidden：服务器拒绝该次访问，404 Not Found：表示服务器上无法找到请求的资源）
                        5xx：表示服务器错误
// 9.js基本数据类型：
                        Number、String、Boolean、Null、 Undefined、Symbol（ES6）
//   引用数据类型:
                        Object：Date、Function、Array
// 10.css中伪类元素：
                        link,active.visited,hover以及
//    定义颜色的四种方式：
                        颜色名，十六进制，rgb，rgba
// 11.块级元素：
                        h系列、p、div、ul、ui、form     独占一行，可设置宽高
//    行内元素：
                        a、span、b、i           一行可有多个，不可设置宽高
//    行内块元素：
                        input、button、textarea       一行可设置多个，可设置宽高
//    html5新增标签：
                        video    表示一段视频并提供播放的用户界面       nav    
                        audio    表示音频    aside 
                        canvas    表示位图区域          article   
                        svg    定义矢量图      footer   header 
//    css3新增属性：    
                        text-shadow     文本阴影
                        box-shadow      盒子阴影
                        opacity
//    html5语义化的理解：
                        article/section/header/footer/nav/aside/main/figure/figcaption
                        让代码内容来结构化，选择与语义相符合的标签，使代码语义化，
                        不仅便于开发者阅读，
                        还能优化搜索引擎，
                        还能够让浏览器好的解析。
// 12.重绘与

// 13.url输入到浏览器的渲染过程：
                        1.DNS域名解析得到IP地址   
                        2.建立Tcp三次握手   
                        3.浏览器发送http请求  
                        4.服务器处理请求返回http报文 
                        5.浏览器得到html文档，开始渲染解析（先解析html构建Dom树,再解析css生成css规则树，然后合并树开始布局绘制）  
                        6.Tcp四次挥手断开连接

// 14.前端怎么考虑分辨率在不同浏览器的兼容性:
                        1 CSS@media查询:min-width,.content
                        2 js判断浏览器内核：针对同样的屏幕分辨率，各浏览器内核不同所呈现的效果有差别
                          谷歌和苹果：webkit;火狐：gecko;IE:trident;
// 15.vue的生命周期：
                        1 beforeCreate(创建前)
                        2 created(创建后)
                        3 beforeMount(挂载前)
                        4 mounted(挂载后)
                        5 beforeUpdate(更新前)
                        6 updated(更新后)
                        7 beforeDestroy(销毁前)
                        8 destroyed(销毁后)

                        Vue第一次页面加载会触发前四个钩子函数
                        DOM渲染在mounted这个周期就已经完成

//    react的生命周期：     
                        1 挂载：constructor()，getDerivedStateFromProps()，render()，componentDidMount()
                        2 更新：getDerivedStateFromProps()，shouldComponentUpdate()，render()，getSnapshotBeforeUpdate()，componentDidUpdate()
                        3 卸载：componentWillUnmount()

//              区别：
                    vue的思想是响应式的，也就是基于是数据可变的，实现了数据的双向绑定，
                    react整体是函数式的思想，是单向数据流，推崇结合immutable来实现数据不可变
                    vue 采用了template， react采用了jsx （本质上都是模版）

//              优缺点：


                    v-model  v-show  v-if

                    props组件传值：
            

//  16.JS数据类型转换：
                    string->number:Number();parseFloat();parseInt()

//  南凌科技：
js事件委托
数组最大子序列长度
合并两个有序链表成一个有序链表

//福诺面试

Vue路由配置
ES6新增
CSS选择器及优先级

new操作符做了哪些事：
简述cookie/session记住登录状态机制原理：
简述你对HTTP控制访问（CORS）的理解：
//    css属性position都有哪些值：
                    static：
                    relative：
                    absolute：
                    fixed：
网页中接收事件的顺序（事件流）有哪些？它们之间的区别是什么：

选择器优先级：id选择器>（类选择器 | 伪类选择器 | 属性选择器 ）> （后代选择器 | 伪元素选择器 ）> （子选择器 | 相邻选择器） > 通配符选择器

Promise：一般用来进行异步操作，接受一个函数作为参数然后返回promise实例，
这个函数中有两个参数，分别是resolve()和reject(),promise实例有三种状态pending、
resolved和rejected，分别代表了进行中、已成功和已失败。Resolve返回异步请求成功
的结果，reject返回异步请求失败的结果。得到返回结果后.then获取resolve函数的返回
结果、.catch返回reject函数返回结果
应用场景：一个页面，有多个请求，我们需求所有的请求都返回数据后再一起处理渲染
（淘宝店铺轮播和商品）图片等资源请求超时
优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数；
缺点：编写和理解，相对比较难

ajax:创建异步调用对象：xmlhttprequest 、创建http请求，指定请求方法、URL和验证信息
设置响应http请求状态变化的函数、发送http请求
获取异步调用返回数据、使用js和dom实现局部刷新
get和post:GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会
GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制
GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息

js事件循环：因为js是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文
压入执行栈中来保证代码的有序执行。在执行同步代码的时候，如果遇到了异步事件，js 引擎
并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。
当异步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。
任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，
js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。
当微任务对列中的任务都执行完成后去判断宏任务对列中的任务。
微任务包括了 promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。
宏任务包括了 script 脚本的执行、setTimeout ，setInterval 等定时事件，还有如 I/O 操作、UI 渲
染等。

原型与原型链：在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个
prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的
属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指
向构造函数的 prototype 属性对应的值，在 ES5 中这个指针__proto__ 属性被称为对象的原型，
当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找
这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。
原型链的尽头一般来说都是 Object.prototype

this:是执行上下文中的一个属性，它指向最后一次调用这个方法的对象
函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象
方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象
构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象
apply 、 call 和 bind 调用模式,bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数