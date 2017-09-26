const insertion = require("./insertion-sort");
const bubble = require("./bubble-sort");
const merge = require("./mergeSort");
const quick = require('./quickSort')


let bigArr = (int) =>{
  let arr = new Array(int)

  for (let i=0; i<int; i++){
    arr[i] = Math.floor(Math.random()*int)
  }
  return arr
}

benchmark = (arr, iterations) =>{
  let start = Date.now()
  for (let i=0; i<iterations; i++){
  insertion(arr)   
  }
  let end = Date.now()
  console.log('Insertion took ', end-start, ' ms')


  start = Date.now()
  for (let i=0; i<iterations; i++){
  bubble(arr)   
  }
  end = Date.now()
  console.log('Bubble took ', end-start, ' ms')


  start = Date.now()
  for (let i=0; i<iterations; i++){
  merge(arr)   
  }
  end = Date.now()
  console.log('Merge took ', end-start, ' ms')

  start = Date.now()
  for (let i=0; i<iterations; i++){
  quick(arr)   
  }
  end = Date.now()
  console.log('Quick took ', end-start, ' ms')

}

benchmark(bigArr(1000), 1000);

/*
Insertion took  906202  ms
Bubble took  4824  ms
Merge took  1155313  ms
*/