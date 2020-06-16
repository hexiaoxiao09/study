/* 
 * 泛型就是解决接口、类、方法的复用性，以及对不特定数据类型的支持(类型校验)
 */


// 定义传入值的类型和返回值的类型的普通方法 
String test(String value) {
  return value;
}



// 定义泛型方法
T test1<T>(T value) { // 对传入的值和返回值的类型校验
  return value;
}

test2<T>(T value) { // 只对传入值进行校验
  return value;
}


// 自定义泛型类
class Personal<T> {
  List l = new List<T>();
  void add(T value) {
    this.l.add(value);
  }
  void printInfo() {
    for(var i = 0; i<this.l.length; i++){
      print(this.l[i]);
    }
  }
}

main() {

  print(test1('zhangsan')); // 没有类型校验

  print(test1<String>('lisi'));  // 有类型校验

  List test3 = new List<int>(); // 系统内置的泛型类
  test3.add(123);
  print(test3);

  Personal p = new Personal<int>();
  p.add(123);
  p.add(456);
  p.printInfo();
}
