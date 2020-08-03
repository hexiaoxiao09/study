/* 
 *  枚举: 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
 *  枚举 使用 enum 关键字来定义
*/
enum Days {Sun, Mon, Tue, Wed, Thu, Fir, Sat}

console.log(Days['Sun'] === 0)  // true
console.log(Days['Mon'] === 1)  // true
console.log(Days['Tue'] === 2)  // true
// ....

console.log(Days[0] === 'Sun')  // true
console.log(Days[1] === 'Mon')  // true
console.log(Days[2] === 'Tue')  // true
// ...


// 手动给枚举项赋值
//  如果没有手动赋值的枚举项与手动赋值的枚举项的值重复， ts是察觉不了这点    后续为手动赋值的项的递增步长为1
enum A {a = 1, b = 2, c = 5, d, e}
