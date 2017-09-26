function merge(leftArr, rightArr) {
  let newArr = []
  let leftIndex = 0
  let rightIndex = 0;
  while (leftIndex<leftArr.length && rightIndex<rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      newArr.push(leftArr[leftIndex])
      leftIndex++
    }else {
      newArr.push(rightArr[rightIndex])
      rightIndex++
    }
  }

  if (leftIndex === leftArr.length) {
    console.log('leftIndex === leftArr.length')
    newArr.concat(rightArr.slice(rightIndex))
  }   
  if (rightIndex === rightArr.length) {
    console.log('rightIndex === rightArr.length')
    newArr.concat(leftArr.slice(leftIndex))
  }
  return newArr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
      return arr
    }
    let pivot = Math.floor(arr.length/2)
    let leftArr = arr.slice(0, pivot)
    let rightArr = arr.slice(pivot)
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    return merge(leftArr, rightArr)
}

console.log(merge([1, 2, 9], [6, 7, 8]))
