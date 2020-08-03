const factorial = require("./recursion")

describe('recursion', () => {

  it('factorial of 1!', () => {
    expect(factorial(1)).toBe(1);
  });

  it('factorial of 3!', () => {
    expect(factorial(3)).toBe(6);
  });

  it('factorial of 5!', () => {
    expect(factorial(5)).toBe(120);
  });
});