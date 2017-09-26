const bubbleSort = arr => {
	let swaps = true;
	while (swaps) {
		swaps = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				swaps = true;
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
	}
	return arr;
};

// let arr = new Array(10000)
// for (let i=0; i<10000; i++){
// 	arr[i] = Math.floor(Math.random()*100000)
// }
// console.log(bubbleSort(arr))

module.exports = bubbleSort;
