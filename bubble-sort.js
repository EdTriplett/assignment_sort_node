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

module.exports = bubbleSort;
