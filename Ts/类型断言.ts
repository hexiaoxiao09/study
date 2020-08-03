/* 
 *  类型断言： 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 *  语法： 值 as 类型  或者 <类型>值
 *  用途:  1、将一个联合类型断言为其中一个类型
 *         2、 将父类断言为更加具体的子类
*/

// 当ts不确定一个联合类型的变量到底是那个类型的时候，我们只能访问此联合类型的所有类型中共有的属性和方法
interface Cat {
  name: string;
  run: ()=> void;
}
interface Fish {
  name: string;
  swim: ()=> void;
}
function getName(animal: Cat | Fish) {
  // if(typeof animal.swim === function) // 报错  Cat里面没有swim方法
  if(typeof (animal as Fish).swim === 'function') { // 不会报错， 因为直接断言animal是Fish   但是运行的时候还是会报错，相当于断言隐藏了animal为Cat的可能
    return true
  }else {
    return false
  }
  return animal.name
}


// 当类之间有继承关系的时候，类型断言也很常见





