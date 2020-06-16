// 
// 在Dart中，必须得吧类抽离成单独文件才能设置私有属性和方法用_来表示

class Animal {
  String name;
  String _sex = '女';
  printInfo() {
    print(this._sex);
  }
}