const quickSort = (arr, start=0, end=arr.length) => {
  if (end-start < 2) return;

  let pivot = arr[end-1];
  let pivotPoint = start;
  let sortedPoint = start;

  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[pivotPoint]] = [arr[pivotPoint], arr[i]];
      pivotPoint++;
    }

    sortedPoint++;
  }

  [arr[end - 1], arr[pivotPoint]] = [arr[pivotPoint], pivot];
  quickSort(arr, start, pivotPoint)
  quickSort(arr, pivotPoint+1, end)
  return arr;
};

module.exports = quickSort