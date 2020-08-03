// 数组类型    在 TypeScript 中，数组类型有多种定义方式，比较灵活。

// 1、 最简单的数组表示方法  类型 + 方括号
let arr1: Number[] = [1, 2, 3, 4] // 数组项中只能是数字类型，不允许其他类型

// 2、 用数组泛型 来表示数组  Array<elemType>
let arr2: Array<Number> = [1, 2, 3, 74, 52]

// 3、 用接口表示数组
interface NumberArray {
  [index: number]: Number // 只要索引的类型是数字时，那么值的类型必须是数字。
}
let arr3: Array<Number> = [1, 2, 3, 74, 52, 87, 12]

// 4、 类数组  不是数组类型，比如 arguments
function sum1() {
  // let args: number[] = arguments; // 报错    arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
}



// 元组： 数组合并了相同类型的对象，而元组合并了不同类型的对象