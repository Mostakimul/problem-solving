# JavaScript Problem Solving Tasks

#### 1. Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like `name`, `age`, and `gender`. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

### 2. Task: Object Manipulation

Create an array of objects representing books with properties like `title`, `author`, and `year`. Write a function that takes the array and returns a new array with only the book titles. Print the result.

### 3. Task: Function Composition

Write three functions:

- One to square a number.
- One to double a number.
- One to add 5 to a number.

Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

### 4. Task: Sorting Objects

Create an array of objects representing cars with properties like `make`, `model`, and `year`. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

### 5. Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their `age` property. Print the updated array.

### 6. Task: Array Reduction

Create an array of numbers. Write a function that uses the `reduce` method to calculate the sum of all even numbers in the array.

### 7. Task: Leap Year Checker

Write a function that determines whether a given year is a leap year.

### 8. Task: Count Vowels

Write a function that counts the number of vowels in a given string.  
Example: _Happy New Year_

### 9. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

### 10. Task: Find Maximum Value

Write a function that takes an array of numbers and returns the maximum value.

### 11. Task: Advanced Sorting

Create an array of objects representing students with `name` and `grades` properties. Write a function to sort the students by average grade in descending order.

### 12. Task: Functional Programming - Reduce

Write a function that uses the `reduce` function to calculate the total value of an array of objects with `quantity` and `price` properties.

### 13. Task: Array Intersection

Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

### 14. Task: Object Transformation

Create an array of objects representing customers with `name`, `purchases`, and `loyaltyPoints` properties. Write a function to transform the array by doubling the `loyaltyPoints` of customers with more than 5 purchases.

### 15. Task: Function Memoization

Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

### 16. Task: Two Sum

Given an array of integers `nums` and an `integer` target, return `indices` of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: `nums = [2,7,11,15], target = 9`
Output: `[0,1]`
Explanation: Because `nums[0]` + `nums[1]` == `9`, we return `[0, 1]`.

Example 2:
Input: nums = `[3,2,4]`, target = `6`
Output: `[1,2]`

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

```
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
```

### 17. Task: 3Sum

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j, i != k, and j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: `nums = [-1,0,1,2,-1,-4]`.
Output: `[[-1,-1,2],[-1,0,1]]`
Explanation:

```
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
```

The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

```
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
```

### 18. Task: Remove Duplicates From Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Custom Judge:
The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

> Example 1:
> Input: nums = [1,1,2]
> Output: 2, nums = [1,2,_]
> Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
> It does not matter what you leave beyond the returned k (hence they are underscores).

> Example 2:
> Input: nums = [0,0,1,1,1,2,2,3,3,4]
> Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
> Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
> It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

```
1 <= nums.length <= 3 \* 104
-100 <= nums[i] <= 100
```

nums is sorted in non-decreasing order.

### 19. Task: Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

### 20. Task: Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
