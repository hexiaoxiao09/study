

/* 
 *
 * mixins 的中文意思是混入， 就是在类中混入其他功能
 * 
 *  在dart中可以使用mixins实现类似多继承的功能
 * 
 * 
 *  在Dart2.X 中： 
 *    
 *    1. 作为mixins的类只能继承自Object， 不能继承其他类
 * 
 *    2. 作为mixins的类不能由构造函数
 * 
 *    3. 一个类可以mixins多个mixins类
 *    
 *    4. mixins不是继承，也不是接口，而是一种全新的特性
 * 
 * 
 * 
 *   mixins 的实例类型 是其超类的子类型
 */

// 无法extends多个类，但是可以implements多个接口


class A {
  String username = 'zhangsan';
  void printA() {
    print('这是A里面的方法');
  }
}

class B {
  int number = 18;
  void printB() {
    print('这是B里面的方法');
  }
}

class C {
  String name;
  Object age;
  C(this.name, this.age);
  printInfo() {
    print('${this.name}---${this.age}');
  }
}

// class D with A, B { // 这里的A,B两个类不能是继承其他类的，而且这两个类里面不能由构造函数
  
// }

class D extends C with A, B { // 此时D类继承了C类的属性和方法，有mixins了A类和B类   如果A类和B类里有同样的方法时，后写的会覆盖前面的

  D(String name, Object age) : super(name, age);



}


main() {
  var d = new D('lisi', 20);
  d.printA();
  d.printInfo();
  d.printB();
  print(d.username);
  print(d.number);


  print(d is D);
  print(d is A);
  print(d is B);
  print(d is C);
  // print(d is A,B);
}