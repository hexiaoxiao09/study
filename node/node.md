##1.npm
    nrm: npm 的镜像源管理工具
    nvm: 在同一台机器上安装和切换不同版本的 node 的工具

##2.node
    nodemon/supervisor: 实时监听
    node 文件名 nodemon/supervisor 文件名

##3.前端模块化：
    AMD, CMD, CommonJs规范, es6的module规范

3.1 **AMD**(异步模块定义): 异步加载，不阻塞页面的加载，能并行加载多个模块，但是不能按需加载，必须提前加载所需依赖(AMD规范的实现就是require.js) 

    require([module],callback):// 加载模块，参数一，是数组，指定加载的模块，参数二回调函数，模块加载完成后执行

3.2 **CMD**:  即一个js文件就是一个模块，但是CMD的加载方式更加优秀，是通过按需加载的方式，而不是必须在模块开始就加载所有的依赖(实现js库为sea.js) // 加载多个模块，在加载完成时，执行回调
```
    seajs.use(['./a', './b'], function(a, b) {
        a.doSomething();
        b.doSomething();
    });
```
3.3 **CommonJs规范**: 

1. 模块输出的是一个值的拷贝， 模块是运行时加载，同步加载  
2. CommonJS 模块的顶层this指向当前模块
3. require : 加载所要依赖的其他模块
4.  module.exports 或者exports :对外暴露的接口

```exports 与module.exports 的区别：exports 是对 module.exports 的引用，不能直接给exports 赋值，直接赋值无效，结果是一个空对象,module.exports 可以直接赋值```

3.4 **es6的module规范**: 

    特点：
        1. ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。
        2. 自动采用严格模式"use strict"。须遵循严格模式的要求
        3. ES6 模块的设计思想是尽量的静态化，编译时加载”或者静态加载，编译时输出接口
        4. ES6 模块export、import命令可以出现在模块的任何位置，但是必须处于模块顶层。如果处于块级作用域内，就会报错
        5. ES6 模块输出的是值的引用
        6. export：用于规定模块的对外接口    import：用于输入其他模块提供的功能。
    
3.5 **node应用由模块组成 采用CommonJs规范**


