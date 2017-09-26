const insertion = require("./insertion-sort");
const bubble = require("./bubble-sort");
const merge = require("./mergeSort");

const arr = new Array(1000000);

for (let i = 0; i < 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10000000);
}



benchmark = (arr) =>{
  let start = Date.now()
  for (let i=0; i<1000; i++){
  insertion(arr)   
  }
  let end = Date.now()
  console.log('Insertion took ', end-start, ' ms')


  start = Date.now()
  for (let i=0; i<1000; i++){
  bubble(arr)   
  }
  end = Date.now()
  console.log('Bubble took ', end-start, ' ms')


  start = Date.now()
  for (let i=0; i<1000; i++){
  merge(arr)   
  }
  end = Date.now()
  console.log('Merge took ', end-start, ' ms')
}

benchmark(arr);