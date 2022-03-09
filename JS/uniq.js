// 去重


let arr = [2, 4, 2, 1, 7, 2, 4, 5, 99, 5, 5, 2, 3, 4, 3, 5, 6]

function uniq1(arr) {
  if(arr.length === 0) return
  let newArr = []
  arr.forEach(item => {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item)
    }
  })
  return newArr
}

// console.log(uniq1(arr))




function uniq2(arr) {
  if(arr.length === 0) return
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        ++i
      }
    }
    newArr.push(arr[i])
  }
  return newArr
}

// console.log(uniq2(arr))




function uniq3(arr) {
  if(arr.length === 0) return
  let newArr = []
  let obj = {}
  for(let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]){
      obj[arr[i]] = 1
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(uniq3(arr))




// 最简单的去重
console.log([...new Set(arr)])

