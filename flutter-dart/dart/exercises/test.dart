

// 模块抽离  可以在这里写私有属性和私有方法
// 私有属性和方法前面加_(下划线)
class PersonPrivate {
  String name = 'xiaoer';
  String _sex = '男'; // 私有属性，
  int age = 18;
  
  void printInfo() {
    print('姓名: ${this.name}---性别:${this._sex}---年龄:${this.age}');
  }
  String getsex() {
    return this._sex;
  }
  int _countage(n) {
    return this.age += n;
  }
  int execage(n) {
    return this._countage(n);
  }


  get afterTen{ // 类似于Vue里面的计算属性
    return this.age += 10;
  }
  set changesex(value) {
    return this._sex = value;
  }
}