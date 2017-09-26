const insertion = require("./insertion-sort");
const bubble = require("./bubble-sort");
const merge = require("./mergeSort");
const quick = require('./quickSort')
const iterQuick = require('./iterativeQuickSort')
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const arr = new Array(1000);

for (let i = 0; i < 1000; i++) {
	arr[i] = Math.floor(Math.random() * 10000);
}

/* with 1 million member array
Insertion Sort x 36.40 ops/sec ±4.03% (49 runs sampled)
Bubble Sort x 231 ops/sec ±0.77% (81 runs sampled)
Merge Sort x 1.19 ops/sec ±3.07% (7 runs sampled)
Fastest is Bubble Sort
*/

suite
	.add("Insertion Sort", () => {
		insertion([...arr]);
	})
	.add("Bubble Sort", () => {
		bubble([...arr]);
	})
	.add("Merge Sort", () => {
		merge([...arr]);
	})
	.add("Quick Sort", () => {
		quick([...arr]);
	})
	.add('Iterative Quick Sort', ()=>{
		iterQuick([...arr]);
	})
	.on("cycle", function(event) {
		console.log(String(event.target));
//		console.log(String(arr));
	})
	.on("complete", function() {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	// run async
	.run({ async: true });
