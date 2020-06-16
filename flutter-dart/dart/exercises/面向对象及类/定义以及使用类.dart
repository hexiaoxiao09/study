
import '类的私有属性和方法.dart';

class Person {
  String name;
  String sex;
  int age;
  String job;
  // 默认构造函数，在初始化类的时候调用
  // Person(String name, String sex, int age, String job){
  //   this.name = name;
  //   this.sex = sex;
  //   this.age = age;
  //   this.job = job;
  // }
  Person(this.name, this.sex, this.age, this.job);  // 上面的简写
  // Person(): name="wanger",sex="男",age=20,job="搬砖" {  // 初始化之前先赋值

  // }

  // 命名构造函数
  Person.now() {
    print('这是个命名构造函数');
  }
  printInfo() {
    print('姓名:${this.name}--性别:${this.sex}--年龄:${this.age}--工作:${this.job}');
  }
}

main() {
  // 实例化类
  // var p = new Person('张三', '男', 20, '搬砖');
  Person p = new Person('张三', '男', 20, '搬砖');
  Animal a = new Animal();
  print(a.name);
  // print(a._sex);
  a.printInfo();
  p.printInfo();
  // 调用命名构造函数
  Person p1 = new Person.now();
  print(p1);
}