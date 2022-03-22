#### 1.null和undefined的区别、
    null表示一个对象被定义存在空指针，转换成数值为0、
    undefined表示声明的变量未初始化，转换成数值为NAN
    typeof(null) ==> Object
    typeof(undefined) ==> undefined

#### 2.new
    1.先创建一个空对象
    2.将它赋值给this
    3.通过this将方法和属性添加至该对象
    4.返回this指向的新对象