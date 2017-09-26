const quickSort = arr => {
	if (arr.length < 2) return arr;

	let pivot = arr[arr.length - 1];
	let pivotPoint = 0;
	let sortedPoint = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] <= pivot) {
			[arr[i], arr[pivotPoint]] = [arr[pivotPoint], arr[i]];
			pivotPoint++;
		}

		sortedPoint++;
	}

	[arr[arr.length - 1], arr[pivotPoint]] = [arr[pivotPoint], pivot];

	return arr;
};

console.log(quickSort([6, 5, 9, 8, 7, 3, 1, 2, 4]));
