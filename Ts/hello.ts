
function SayHellow (person: String) {
  return `Hello ${person}`;
}

let userName = '123';
console.log(SayHellow(userName));



//  在typescript 定义变量

// 定义number类型
let num: Number = 6;
// 定义String类型
let str: String = 'zhangsan';
let str1: String = `姓名:${str}---年龄:${num}`;
// 定义Null类型
let n: null = null;
// 定义undefined类型
let un: undefined = undefined;
// 定义void类型    只能将他赋值为undefined和null
let kong: void;


// undefined/null与void的区别是：undefined和null是所有类型的子类型 也就是说undefined类型可以复制给其他类型，而void不行
num = n;     // 可行
num = un;     // 可行
// num = kong;  // 报错

str = n;     // 可行
str = un;     // 可行
// str = kong;  // 报错



// Any(任意值)  如果是普通类型，则赋值过程是不允许改变类型的，但是如果是any类型则允许改变类型
let a: any = 'lisi';
a = 1;
console.log(a); // 1

// 在任意值上访问任意属性和任意方法都是允许的
let a2: any = 'wangmazi';
console.log(a2.age);  // 访问任意属性
console.log(a2.job.age);

a2.setName('xiaoming'); // 调用任意方法
a2.setJob('teacher');


// 未声明类型的变量   如果变量在声明的时候未指定类型，则会被识别为任意类型(any)
let something;          // ->    let something: any
something = 'cuihua';
something = 5;




// 类型推论：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
// 如果声明变量是没有赋值，那么不管之后有没有赋值都会被推断为any类型； 反之，如果声明变量赋值了，则之后会被推断成声明变量时赋值的类型
let myName = 'hexiaoxiao';  // ->  let myName: String = 'hexiaoxiao'
// myName = 123; // 报错

let myJob;  // -> let myJob: any;
myJob = 'banzhuan';
myJob = 123;  // 不会报错



// 联合类型：联合类型（Union Types）表示取值可以为多种类型中的一种。
let b: String|Number;

