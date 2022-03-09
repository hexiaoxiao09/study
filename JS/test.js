console.log(1)
setTimeout(() => {
  console.log(2)
},0)
new Promise((resolve, reject) => {
  console.log(3)
  resolve()
}).then(res => {
  console.log(4)
})
console.log(5)




var test = function(a) {
  this.a = a
  return function(b){
    this.a + b
  }
}(function(a,b){return a }(11,45))
var result = test(7)