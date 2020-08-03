const selectionSort = require("./selection-sort")

describe('selection sort', () => {
  let arr;
  let sortedArr;

  it('sort array by lower value', () => {
   arr = [5, 3, 6, 2, 10];
   sortedArr = selectionSort(arr);

    expect(sortedArr).toEqual([2, 3, 5, 6, 10]);
  });

  it('sort negative values by lower value', () => {
   arr = [-10, 0, -40, -20, -30];
   sortedArr = selectionSort(arr);

    expect(sortedArr).toEqual([-40, -30, -20, -10, 0]);
  });
});