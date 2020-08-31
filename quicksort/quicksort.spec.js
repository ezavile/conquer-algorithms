const quicksort = require("./quicksort")

describe('quicksort', () => {
  it('returns only [1]', () => {
    expect(quicksort([1])).toEqual([1]);
  });

  it('returns [7, 30]', () => {
    expect(quicksort([30, 7])).toEqual([7, 30]);
  });

  it('returns [7,10,33]', () => {
    expect(quicksort([10, 7, 33])).toEqual([7, 10, 33]);
  });

  it('returns [1,2,3,4]', () => {
    expect(quicksort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
  });
});