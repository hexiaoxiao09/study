


    
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

/* 
 * 自定义组件、
 * StatelessWidget --- 无状态组件(状态不可变的widget)
 * statefulWidget  --- 有状态组件(持有状态可能在widget生命周期改变)
 * MaterialApp     --- 通常作为flutter的根组件来使用
 * Scaffold        --- 用来定义状态栏的组件
 * Container       --- 容器组件  类似div
 */
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            '这个是标题',
            textDirection: TextDirection.rtl,
          ),
        ),
        body: HomeContent(),
      ), // 主页
      theme: ThemeData(
          // 配置主题
          primarySwatch: Colors.red),
    );
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: Text('Hello World! This is my first time study Flutter. ',
            // textDirection: TextDirection.ltr, // 文字的方向(ltr---left to right   rtl---right to left)
            textAlign: TextAlign.center, // 文字居中
            // overflow: TextOverflow.ellipsis,  // 溢出隐藏
            overflow: TextOverflow.clip,  // fade 和 clip 看不出区别
            maxLines: 1,  // 行数
            textScaleFactor: 1.2, // 字体的缩放
            style: TextStyle(
              fontSize: 20.0,
              // color: Colors.red,
              color: Color.fromRGBO(255, 0, 0, 0.5),
              fontWeight: FontWeight.w100,  // 字体粗细
              fontStyle: FontStyle.italic,  // 字体是否倾斜
              decoration: TextDecoration.lineThrough, // 删除线   none-没有线 overline-上划线 underline-下划线
              decorationColor: Colors.red,  // 删除线的颜色
              decorationStyle: TextDecorationStyle.dashed, //虚线样式
            )),
        height: 300.0,
        width: 300.0,
        decoration: BoxDecoration(
          color: Colors.yellow, // 背景色为黄色
          border: Border.all(
            // 四条边框
            color: Colors.black, // 颜色为黑色
            width: 2.0 // 边框大小2px
          ),
          borderRadius: BorderRadius.all( 
            // Radius.circular(150.0)  // 圆形
            Radius.circular(10.0)  // 圆角
          )
        ),
        // padding: EdgeInsets.all(10.0),
        padding: EdgeInsets.fromLTRB(10, 20, 30, 40),
        margin: EdgeInsets.fromLTRB(5, 6, 7, 8),
        transform: Matrix4.translationValues(100, 100, 100),  // 移动
        alignment: Alignment.bottomLeft,  // 居底部左侧
      ),
    );
  }
}
