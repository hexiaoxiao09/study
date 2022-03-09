
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题



##### 字体
  *斜体*
  **加粗**
  ***斜体加粗***
  ~~删除线~~


##### 引用
  >这是引用的内容
  >>这是引用的内容
  >>>这是引用的内容
  >>>>貌似能一直引用下去


##### 分割线
  ---
  ----
  ***
  *****


##### 图片
  ![图片alt](图片地址 ''图片title'')
  **例：**
  ![图片alt](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/550/format/webp)


##### 超链接
  [简书](http://jianshu.com)
  [百度](http://baidu.com)
  <a href="https://www.jianshu.com" target="_blank">简书</a>


#### 列表
 ##### 无序列表
  - 列表内容
  + 列表内容
  * 列表内容
 ##### 有序列表
  1. 列表内容
  2. 列表内容
  3. 列表内容
 ##### 列表嵌套
  - 列表内容
      - 列表内容
         - 列表内容
  
  1. 列表内容
      - 列表内容
         - 列表内容


#### 表格
  表头|表头|表头
  ---|:--:|---:
  内容|内容|内容
  内容|内容|内容

  第二行分割表头和内容。
  -有一个就行，为了对齐，多加了几个
  文字默认居左
  -两边加：表示文字居中
  -右边加：表示文字居右
  **例：**
  姓名|技能|排行
  --|:--:|--:
  刘备|哭|大哥
  关羽|打|二哥
  张飞|骂|三弟



#### 代码
  单行代码
    `create database hero;`
  
  代码块
  ```
    function fun(){
        console.log('markdown 代码块语法');
    }
    fun();
  ```


#### 流程图
  ```flow
  st=>start: 开始
  op=>operation: My Operation
  cond=>condition: Yes or No?
  e=>end
  st->op->cond
  cond(yes)->e
  cond(no)->op
  &```

