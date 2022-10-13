# Insertion Sort
Insertion sort is an efficient algorithm for sorting small amount of elements. Insertion sort works the way many people sort a hand of playing cards. we start off with an empty hand and begin to pick up the cards off of the table. as we add the cards to our hand, we start putting the cards in the correct position by comparing the card with the rest of the cards we are currently holding.

## Visualization
You can visualize this algorithm at the following link: 
 - https://visualgo.net/en/sorting
 and pick **INS** option on the top.
 - https://sortvisualizer.com/insertionsort/ there is also this with sound effects while it sorts, it looks fun.

## Complexity
| opertaion   | best       | worst           |
| ---------   | ----       | -----           |
| iteration   | $O(n)$     | $O(n)$          |
| Shift Items | $O(1)$     | $O(n)$          |
| Total       | $O(n)$     | $O(n^2)$        |
|             | **linear** | **quadratic**   |

# Problem description

- **Input:** array of numbers $[x_1, x_2, x_3, ... x_n]$

- **output:** ordered numbers in the array where $x_1 \leq x_2 \leq x_3 \leq  ... \leq x_n$
