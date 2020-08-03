/* 
 * 对象类型  ----  接口
 * 定义： 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)
 * ts的接口是哟个灵活的概念除了可用于对类的一部分行为进行抽象以外，也常用于对 对象的形状进行描述
*/
// Example
// 定义一个接口
interface Person {
  readonly id: Number;  // 只读属性  只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
  name: String;
  age: Number;
  job?: String;       // 可选属性：该属性可以不存在
  // [propName: string]: String|Number;  // 任意属性: 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  [propName: string]: any;  // 任意属性: 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
}
// 定义一个变量，变量类型是Person  这样就约束了tom的形状必须和接口Person一致
let tom: Person = {
  id: 1,
  name: 'Tom',
  age: 20,
  job: 'teacher'
}




