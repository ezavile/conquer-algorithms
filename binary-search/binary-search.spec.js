const binarySearch = require("./binary-search")

describe('binary search', () => {
  const getArray = items => Array(items).fill().map((_, i) => i + 1);
  const getSteps = items => Math.log2(items);

  let itemsLength;

  it('found items on first index', () => {
    itemsLength = 8;
    expect(binarySearch(getArray(itemsLength), 1)).toEqual({index: 0, steps: getSteps(itemsLength) });

    itemsLength = 128;
    expect(binarySearch(getArray(itemsLength), 1)).toEqual({index: 0, steps: getSteps(itemsLength) });
  });

  it('found item on last index', () => {
    expect(binarySearch([1, 3, 5, 7, 8], 8).index).toBe(4);
  });

  it('not found element', () => {
    itemsLength = 1024;

    expect(binarySearch(getArray(itemsLength), 0).index).toEqual(-1);
  });
});