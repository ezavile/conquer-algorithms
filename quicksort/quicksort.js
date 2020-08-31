function quicksort(arr) {  
  if (arr.length < 2) return arr;

  const pivot = arr.shift();
  const less = arr.filter(item => item <= pivot);
  const greater = arr.filter(item => item > pivot);

  const sortedLess = quicksort(less);
  const sortedGreater = quicksort(greater);

  return sortedLess.concat(pivot).concat(sortedGreater);
}

module.exports = quicksort;