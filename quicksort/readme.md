### Quicksort

Quicksort is a sorting algorithm, it's much faster than selection sort and is frequently used in real life. Empty arrays and arrays with just one element will be the base case.

Here are the steps:

1. Pick a pivot (no matter what pivot you pick, you can call quicksort recursively on the two sub-arrays).
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Call quicksort recursively on the two sub-arrays.

These notes were taken from grokking algorithms book.
