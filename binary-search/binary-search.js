function binarySearch(list, item) {
  // low and high keep track of which part of the list you'll search in
  let steps = 1;
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    // check the middle element
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    
    // found the item
    if (guess == item) return {index: mid, steps };

    // one step more
    steps ++;
    
    // the guess was too high
    if (guess > item) {
      high = mid - 1;
    // the guess was to low
    } else {
      low = mid + 1;
    }
  }

  // the item doesn't exist
  return {index: -1, steps};
}

module.exports = binarySearch;