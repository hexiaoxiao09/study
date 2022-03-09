

//  值引用和地址引用

let a = {
  num: 100
}
let b = 100;
let c = b;
let d = a
let e = JSON.parse(JSON.stringify(a))
d.num = 300
// d={a:100}
console.log(a)
console.log(d)
console.log(e)
// let a = new Promise()