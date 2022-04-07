/* 
 * 对象类型  ----  接口
 * 定义： 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)
 * 类(class)可以实现接口，关键字 implement
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


// 接口继承
interface Father extends Person {
  wife: string,
}






/* 
 * interface 和 type 的区别
 * 1. 两者语法不同(interface只能表示function，object和class类型，type除了这些类型还可以表示其他类型)
 * 2. interface可以合并同名接口，type不可以
 * 3. 继承的写法不同(interface继承使用关键字extends，type继承使用 & 符号)
 */
// 1.
interface A {
  name:string
}
type B = {sex: string}
type BB = number
// 2.
interface A {
  age:number
}
const person: A = {name:'名字', age: 10}

// 3.
interface C extends A {
  height: number
}
interface D extends B {
  weight: number
}

type E = {job: string} & A
type F = {address: string} & B




// 类实现接口
class AAA implements A {
  name: 'xxx';
  age: 10

}

class BBB implements B {
  sex: 'male'
}


