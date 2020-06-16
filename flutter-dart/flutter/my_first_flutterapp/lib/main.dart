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
        child: Text('Hello World',
            // textDirection: TextDirection.ltr, // 文字的方向(ltr---left to right   rtl---right to left)
            textAlign: TextAlign.center,  // 文字居中
            style: TextStyle(
              fontSize: 40.0,
              // color: Colors.red,
              color: Color.fromRGBO(255, 0, 0, 0.5),
            )),
        height: 300.0,
        width: 300.0,
        decoration: BoxDecoration(
          color: Colors.yellow, // 背景色为黄色
          border: Border.all( // 四条边框
            color: Colors.black,  // 颜色为黑色
            width: 2.0  // 边框大小2px
          )
        ),
      ),
    );
  }
}
