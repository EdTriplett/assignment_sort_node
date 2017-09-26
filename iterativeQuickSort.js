const iterativeQuickSort = arr => {
  const stack = [{ start: 0, end: arr.length - 1 }];

  while (stack.length) {
    console.log(arr);
    let { start, end } = stack.pop();
    let pivot = arr[end];
    let pivotPoint = start;
    let sortedPoint = start;

    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[pivotPoint]] = [arr[pivotPoint], arr[i]];
        pivotPoint++;
      }

      sortedPoint++;
    }

    [arr[end], arr[pivotPoint]] = [arr[pivotPoint], pivot];
    if (!(end - start < 2)) {
      stack.push({ start: 0, end: pivotPoint - 1 });
      stack.push({ start: pivotPoint + 1, end: end });
    }
  }

  return arr;
};

console.log(iterativeQuickSort([8, 7, 6, 5, 4, 3, 2, 1]));

module.exports = iterativeQuickSort;
