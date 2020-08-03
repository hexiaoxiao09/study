let arr = [2, 4, 6, 1, 7, 8, 4, 9, 99, 6]
// 快速排序
function quickSort(arr) {
  if (arr.length == 0) {
    return arr
  }
  var pirotIndex = Math.floor(arr.length / 2)
  var pirot = arr.splice(pirotIndex, 1)[0]
  var left = [],
    right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > pirot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pirot, quickSort(right))
}
console.log(quickSort(arr))

// 插入排序
function insertionSort(arr) {
  var preIndex, current
  for (var i = 1; i < arr.length; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}
console.log(insertionSort(arr))

// 冒泡排序
function bubbleSort(arr) {
  if (arr.length == 0) {
    return arr
  }
  for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] //ES6解构
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))

// 选择排序
function selectionSort(arr) {
  if (arr.length == 0) return arr
  var minIndex
  for (var i = 0; i < arr.length; i++) {
    minIndex = i
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
console.log(selectionSort(arr))

// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) return arr
  var middle = Math.floor(arr.length / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}
console.log(mergeSort(arr))

