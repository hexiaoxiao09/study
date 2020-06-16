/* 
 * 和Java一样 ，dart也有接口，但是和Java也有区别：
 * 
 *  首先，dart的接口没有interface关键字定义接口，而是普通类或抽象类都可以作为接口被实现同样适用implements关键字去实现
 * 
 *  但是，如果实现的是普通类 ，会将普通类和抽象类中的属性的方法全部需要覆写一遍
 * 
 *  而因为抽象类可以定义抽象方法，普通类不可以所以一般使用抽象类实现像Java那样定义接口(建议用抽象类定义接口)
 */


// 定义一个DB库 ， 支持mysql， mssql， Mongodb ( 三个类里面有相同方法 )

abstract class DB { // 当做接口
  String uri; // 数据库的连接地址
  add();
  del();
  update();
}

class MySQL implements DB {
  @override
  String uri;

  MySQL(uri); // 实例化的时候就执行

  @override
  add() {
    print('这是mysql的add方法');
  }

  @override
  del() {
    print('这是mysql的del方法');
  }

  @override
  update() {
    print('这是mysql的update方法');
  }

  
}



main() {
  
  MySQL mysql = new MySQL('这里是数据库的地址');
  mysql.add();
}