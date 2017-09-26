const insertionSort = array => {
	array.forEach((el, i) => {
		insert(array, i - 1, el);
	});
	return array;
};

const insert = (arr, rightIndex, value) => {
	// value is the value of arr[rightIndex + 1]
	// rightIndex is the furthest right sorted element

	// Step through sorted elements right to left.
	// As long as your value is less than the element
	// at arr[i] and you still have elements
	let i = rightIndex;
	while (i >= 0 && arr[i] > value) {
		// copy the element
		arr[i + 1] = arr[i];
		i -= 1;
	}

	// insert the actual element
	arr[i + 1] = value;
};

module.exports = insertionSort;
