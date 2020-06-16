

/* Dart 中的静态成员：
 * 
 * 1. 使用static关键字来实现类级别的变量和函数
 * 2. 静态方法不能访问非静态成员，非静态方法可以访问静态成员
 * 
 */


/* 
 * 对象操作符
 *  1.  ?     条件运算符
 *  2.  as    类型转换
 *  1.  is    类型判断
 *  1.  ..    级联操作
 */



/*
 * Dart中的类的继承
 * 1、 子类使用extends关键字来继承父类
 * 2、 子类会继承父类的可见属性和方法，但不会继承构造函数
 * 3、 子类能复写父类的方法getter和setter 
 */

class Test {
  static String name = 'lisi';
  static int age = 20;
  String job = '搬砖';
  String name1;
  String name2;
  String name3;
  int age2;
  Test(this.name3, this.age2);
  static void test1() {
    print(name);
    // print(job); // 静态方法不能 访问非静态成员
    // test2();
  }
  void test2 () {
    print(name);  // 非静态方法可以访问静态成员
    print(job);
  }
  void printName() {
    print('${this.name1}---${this.name2}');
  }
}

class Person extends Test {
  int score;  // 定义子类自己的属性
  // 如果父类里有默认构造函数且有参数时，子类的默认构造函数需要使用super关键字进行传参
  Person(String name3, int age2, this.score) : super(name3, age2);
  // 定义子类自己的方法
  printInfo() {
    print('${this.name3}---${this.age2}---${this.score}');
    super.printName();  // 在子类里面调用父类的方法
  }
  // 覆写父类的方法
  @override
  void printName() {
    print('这是子类覆写父类方法');
  }
}

main() {
  Person p = new Person('xiaoming', 20, 89);
  print(p.job); // 可以访问父类里的非静态属性和方法
  p.printInfo();
  p.printName();





  // Test t = new Test();
  // t.test2();
  // Test.test1(); // 可以不用实例化，直接访问里面的静态成员



  //  ? ---  条件运算符
  // Test t;
  // t.test2();  // 报错
  // t?.test2(); // 不会报错，但是也没打印内容，因为t是null



  //   is --- 类型判断
  // Test t = new Test();
  // print(t is Test); // true
  // print(t is Object); // true


  //  as --- 类型转换
  // var p;
  // p = '';
  // p = new Test();
  // p.test2();  // 在老版本这样写是报错的，可以向下面这样写
  // (p as Test).test2();


  // .. ---- 级联操作
  // Test t = new Test();
  // t.name1 = '123';
  // t.name2 = '456';
  // t.printName();

  // t..name1 = 'qwe'  // 这就是级联操作符的用法，效果和上面一样
  //  ..name2 = 'asd'
  //  ..printName();

}
