/* 
 *  函数类型
 *  在js中 有两种常见的定义函数的方式--函数声明和函数表达式
 *  在ts中 定义函数的时候需要定义输入和输出的数据类型
*/
// 函数声明
function sum(x, y) {
  return x + y
}
// 函数表达式
let mySum = function (x, y) {
  return x + y
}
// ts定义函数  传参必须和定义函数的参数一致
function MySum (x: number, y: number): number {
  return x + y
}


// TODO  注意：在ts中  =>  用来表示函数的定义，左边输入类型用括号括起来，右边是输出类型   而在js中  =>  是用来表示箭头函数
let mysum: (x: number, y: number) => number = function (x: number, y: number): number{
  return x + y
}

// 用接口定义函数类型
interface SearchFn {
  (source: string, substring: string): boolean
}
let mySearch: SearchFn;
mySearch = function(source: string, substring: string){
  return source.search(substring) !== -1;
}

// 函数参数的可选参数和默认值参数    
// 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了   
// TypeScript 会将添加了默认值的参数识别为可选参数     此时的可选参数就没有 必须在必需参数后面的限制
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let onlyTom = buildName('Tom')

// 函数重载
// 重复定义了函数reverse 前几次是函数定义，最后一次是函数实现
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}






