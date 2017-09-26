const insertion = require("./insertion-sort");
const bubble = require("./bubble-sort");
const merge = require("./mergeSort");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const arr = new Array(2000);

for (let i = 0; i < 2000; i++) {
	arr[i] = Math.floor(Math.random() * 1000);
}

suite
	.add("Insertion Sort", () => {
		insertion(arr);
	})
	.add("Bubble Sort", () => {
		bubble(arr);
	})
	.add("Merge Sort", () => {
		merge(arr);
	})
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function() {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	// run async
	.run({ async: true });
