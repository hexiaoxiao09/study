abstract class A {
  printA();
}

abstract class B {
  printB();
}


class C implements A,B {
  @override
  printA() {
    print('这是A接口里的方法');
  }

  @override
  printB() {
    print('这是B接口里的方法');
  }

}



main() {
  
  C c = new C();
  c.printA();
  c.printB();
}