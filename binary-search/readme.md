## Binary Search

Binary search is an algorithm; its input is a sorted list of elements, if an element you're looking for is in that list, binary search returns the position where it's located. Otherwise binary search returns null.

With binary search, you guess the middle number and eliminate half remaining numbers every time. 

In general for any list of n, binary search will take $log_2n$ steps to run in the worst case;

For a list of 8 elements, $log_28$ = 3, because $2^3$ =  8. So for a list of 8 numbers, you have to check 4 numbers at most.

For a list of 1,204 elements $log_21024$ = 10, because $2^10$ == 1024. So for a list of 1024 numbers, you'd have to check 10 numbers at most.

**Binary search only works when your list is in sorted order.**

These notes were taken from grokking algorithms book.