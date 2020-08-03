### Sorting Sort

Suppose you have a bunch of music on your computer. For each artist, you have a play count.

You want to sort this list from most to least played, so that you can rank your favorite artists. How can you do it?

1. find the most played artist, then add that artist to a new list.
2. do it again, to find the next-most-played artist.
3. keep doing this, and you'll end up with a sorted list.

Remember that $O(n)$ → linear time means you touch every element in a list once. To find the artist with the highest play count, you have to check each item in the list. This takes  $O(n)$ time, you have an operation that takes  $O(n)$ time, and you have to do that $n$ times.

This takes  $O(n x n)$ time or  $O(n^2)$ time. 

Selection sort is a neat algorithm, but it's not very fast. Quicksort is a faster sorting algorithm that only takes  $O(n log n)$ time.

These notes were taken from grokking algorithms book.