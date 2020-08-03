/**
 * From i = 0 to array length
 *  Assume the element at 'i' is the least in the array, assign 'i' to 'indexOfMin'
 *  For 'j' from 'i + 1' to end of array
 *    See if there is an element with lower value
 *      if there is, record its index
 *  if the index of the current element and the index of the 'lowest' element is not the same, swap
 * 
 */
function selectionSort(arr) {  
  for (let i = 0; i < arr.length; i++) {
    // Prove me wrong algorithm, because we are making assumption 
    let indexOfMin = i;

    // validate assumption
    for (let j = i + 1; j < arr.length; j++) {
      // evaluate if next element is lower than our assumption
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    // if the indexOfMin is not the same as the current, swap 
    if (indexOfMin !== i) {
      let newAssumption = arr[indexOfMin]
      arr[indexOfMin] = arr[i];
      arr[i] = newAssumption;
    }
  }

  return arr;
}

module.exports = selectionSort;