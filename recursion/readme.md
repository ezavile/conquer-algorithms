### Recursion

Recursion is where a function calls itself.

### Base case and recursive case

Because a recursive function calls itself, it's easy to write a function incorrectly that ends up in a infinitive loop. So you have to tell it when to stop recursing. That's why every recursive functions has two parts: **the base case**, and the **recursive case.**

```js
function countdown(i) {
	console.log(i);
	// base case
	if (i <= 1) return;

	// recursive case
	countdown(i - 1);
}
```

### The stack

When you read an item, you only read the topmost item, and it's taken off the list. So your TODO it has only two actions: push (insert) and pop (remove and read). **This data structure is called a stack.**

Every time you make a function call, your computer saves the values for all the variables for that call in memory.

When you call a function from another function, the calling function is paused in a paritally completed state.

### The call stack with recursion

Recursive functions use the call stack too. **The stack plays a big part in recursion.**

Using the stack is convenient because you don't have to keep track of a pile of boxes yourself - the stack does it for you. But there's a cost: saving all that info can take up a lot of memory. Each program has a limited amount of space on the call stack, it will exist with a stack overflow error.

At that point you have two options: 

- you can rewrite your code to use a loop instead.
- you can use something called tail recursion, it's only supported by some languages, not all.

These notes were taken from grokking algorithms book.