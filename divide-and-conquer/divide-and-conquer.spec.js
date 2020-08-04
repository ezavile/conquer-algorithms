const { sum, count, max } = require("./divide-and-conquer")

describe('divide and conquer', () => {
  let result;
  let list;

  beforeEach(() => {
    list = [100, 500, 200, 300, 400];
  })

  it('sum elements', () => {
    result = sum(list);
  

    expect(result).toBe(list.reduce((c, n) => c + n));
  });

  it('returns count of items', () => {
    result = count(list);

    expect(result).toBe(list.length);
  });

  it('returns the maximum number', () => {
    result = max(list);

    expect(result).toBe(list.reduce((c, n) => c > n ? c : n))
  });
});