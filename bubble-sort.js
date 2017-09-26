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

console.log(bubbleSort([3, 5, 1, 100, 7, 2, 4]));
