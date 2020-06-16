import './test.dart';


class Person {
  String name;
  int age;
  // 默认构造函数
  Person(this.name, this.age);
  // 命名构造函数
  Person.setInfo(String name, int age) {
    this.name = name;
    this.age = age;
    print('这是命名构造函数，可以写多个');
  }
  void printInfo() {
    print('姓名:${this.name}----年龄: ${this.age}');
  }
}

void main() {
  var p = new Person.setInfo('lisi', 20);
  p.printInfo();
  var p2 = new PersonPrivate();
  // print(p2.age);
  // print(p2.getsex());
  // print(p2.execage(10));
  print(p2.afterTen);
  print(p2.changesex='女');
  
  // print('Hello World');
  // final a = new DateTime.now();
  // print(a);

  // String str1 = 'Hello';
  // String str2 = 'World';
  // print('$str1$str2');
  // var b = 10;
  // var c = b--;
  // print(b);
  // print(c);
  // List d = [1,2,3];
  // print(d);
  // print(d.reversed);  //(3, 2, 1)

  // sumNum(num){} //不指定返回类型
  // int sum(int num) {  // 可以指定返回类型(最好带上), 定义接收参数的类型
  //   int init = 0;
  //   for(int i = 1; i <= num; i++){
  //     init += i;
  //   }
  //   return init;
  // };
  // print(sum(100));

  //  定义可选参数可选参数 用 [] 放在最后面   默认参数 -- 直接在形参上赋值
  // String userInfo(String userName, [int age, String sex='男']) {
  //   if(age != null) {
  //      return '姓名:$userName --- 性别:$sex --- 年龄:$age';
  //   }
  //   return '$userName --- $sex --- 年龄保密';
  // };

  // print(userInfo('hexiaoxiao', 24, '男'));
  // print(userInfo('hexiaoxiao'));

  // 定义命名参数
  // String userInfo(String userName, {int age, String sex='男'}) {
  //   if(age != null) {
  //      return '姓名:$userName --- 性别:$sex --- 年龄:$age';
  //   }
  //   return '$userName --- $sex --- 年龄保密';
  // };

  // print(userInfo('hexiaoxiao', age:24, sex:'男'));
  // print(userInfo('hexiaoxiao'));
}
