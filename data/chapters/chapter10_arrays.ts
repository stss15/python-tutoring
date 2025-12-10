import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 10: NUMERIC ARRAYS
// ============================================================

export const array_challenges: Challenge[] = [
    {
        id: "109",
        number: 1,
        title: "Array Sum",
        description: "Write a function called `array_sum` that takes a list of numbers and returns their sum (without using built-in sum()).",
        starterCode: `def array_sum(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def array_sum(nums: list) -> int:
    total = 0
    for num in nums:
        total += num
    return total`,
        testCases: [
            { input: "array_sum([1, 2, 3, 4, 5])", expected: "15" },
            { input: "array_sum([])", expected: "0" },
            { input: "array_sum([-5, 5])", expected: "0" }
        ]
    },
    {
        id: "110",
        number: 2,
        title: "Array Product",
        description: "Write a function called `array_product` that returns the product of all numbers. Return 1 for empty list.",
        starterCode: `def array_product(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def array_product(nums: list) -> int:
    product = 1
    for num in nums:
        product *= num
    return product`,
        testCases: [
            { input: "array_product([1, 2, 3, 4])", expected: "24" },
            { input: "array_product([])", expected: "1" },
            { input: "array_product([5, 0, 3])", expected: "0" }
        ]
    },
    {
        id: "111",
        number: 3,
        title: "Array Double",
        description: "Write a function called `double_all` that returns a new list with each element doubled.",
        starterCode: `def double_all(nums: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def double_all(nums: list) -> list:
    result = []
    for num in nums:
        result.append(num * 2)
    return result`,
        testCases: [
            { input: "double_all([1, 2, 3])", expected: "[2, 4, 6]" },
            { input: "double_all([])", expected: "[]" },
            { input: "double_all([0, -5])", expected: "[0, -10]" }
        ]
    },
    {
        id: "112",
        number: 4,
        title: "Filter Greater Than",
        description: "Write a function called `filter_greater` that returns numbers greater than a threshold.",
        starterCode: `def filter_greater(nums: list, threshold: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_greater(nums: list, threshold: int) -> list:
    result = []
    for num in nums:
        if num > threshold:
            result.append(num)
    return result`,
        testCases: [
            { input: "filter_greater([1, 5, 3, 8, 2], 3)", expected: "[5, 8]" },
            { input: "filter_greater([1, 2, 3], 10)", expected: "[]" },
            { input: "filter_greater([], 5)", expected: "[]" }
        ]
    },
    {
        id: "113",
        number: 5,
        title: "Running Total",
        description: "Write a function called `running_total` that returns a list where each element is the sum of all elements up to that point.",
        starterCode: `def running_total(nums: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def running_total(nums: list) -> list:
    result = []
    total = 0
    for num in nums:
        total += num
        result.append(total)
    return result`,
        testCases: [
            { input: "running_total([1, 2, 3, 4])", expected: "[1, 3, 6, 10]" },
            { input: "running_total([5])", expected: "[5]" },
            { input: "running_total([])", expected: "[]" }
        ]
    },
    {
        id: "114",
        number: 6,
        title: "Second Largest",
        description: "Write a function called `second_largest` that returns the second largest number. Return None if list has fewer than 2 unique values.",
        starterCode: `def second_largest(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def second_largest(nums: list) -> int:
    unique = list(set(nums))
    if len(unique) < 2:
        return None
    unique.sort(reverse=True)
    return unique[1]`,
        testCases: [
            { input: "second_largest([1, 5, 2, 8, 3])", expected: "5" },
            { input: "second_largest([5, 5, 5])", expected: "None" },
            { input: "second_largest([1])", expected: "None" }
        ]
    },
    {
        id: "115",
        number: 7,
        title: "Remove Duplicates",
        description: "Write a function called `remove_duplicates` that returns a list with duplicates removed, preserving original order.",
        starterCode: `def remove_duplicates(nums: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def remove_duplicates(nums: list) -> list:
    seen = []
    for num in nums:
        if num not in seen:
            seen.append(num)
    return seen`,
        testCases: [
            { input: "remove_duplicates([1, 2, 2, 3, 1])", expected: "[1, 2, 3]" },
            { input: "remove_duplicates([1, 1, 1])", expected: "[1]" },
            { input: "remove_duplicates([])", expected: "[]" }
        ]
    },
    {
        id: "116",
        number: 8,
        title: "Merge Sorted",
        description: "Write a function called `merge_sorted` that takes two sorted lists and returns a single sorted list.",
        starterCode: `def merge_sorted(list1: list, list2: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def merge_sorted(list1: list, list2: list) -> list:
    result = []
    i, j = 0, 0
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1
    return result`,
        testCases: [
            { input: "merge_sorted([1, 3, 5], [2, 4, 6])", expected: "[1, 2, 3, 4, 5, 6]" },
            { input: "merge_sorted([], [1, 2])", expected: "[1, 2]" },
            { input: "merge_sorted([1], [1])", expected: "[1, 1]" }
        ]
    },
    {
        id: "117",
        number: 9,
        title: "Rotate Array",
        description: "Write a function called `rotate_left` that rotates array elements left by k positions.",
        starterCode: `def rotate_left(nums: list, k: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def rotate_left(nums: list, k: int) -> list:
    if len(nums) == 0:
        return []
    k = k % len(nums)
    return nums[k:] + nums[:k]`,
        testCases: [
            { input: "rotate_left([1, 2, 3, 4, 5], 2)", expected: "[3, 4, 5, 1, 2]" },
            { input: "rotate_left([1, 2, 3], 0)", expected: "[1, 2, 3]" },
            { input: "rotate_left([1, 2], 5)", expected: "[2, 1]" }
        ]
    },
    {
        id: "118",
        number: 10,
        title: "Bubble Sort",
        description: "Write a function called `bubble_sort` that sorts a list using bubble sort algorithm.",
        starterCode: `def bubble_sort(nums: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def bubble_sort(nums: list) -> list:
    arr = nums.copy()
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
        testCases: [
            { input: "bubble_sort([5, 2, 8, 1, 9])", expected: "[1, 2, 5, 8, 9]" },
            { input: "bubble_sort([1, 2, 3])", expected: "[1, 2, 3]" },
            { input: "bubble_sort([])", expected: "[]" }
        ]
    },
    {
        id: "119",
        number: 11,
        title: "Two Sum",
        description: "Write a function called `two_sum` that finds indices of two numbers that add to target. Return empty list if none.",
        starterCode: `def two_sum(nums: list, target: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def two_sum(nums: list, target: int) -> list:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
        testCases: [
            { input: "two_sum([2, 7, 11, 15], 9)", expected: "[0, 1]" },
            { input: "two_sum([3, 2, 4], 6)", expected: "[1, 2]" },
            { input: "two_sum([1, 2, 3], 10)", expected: "[]" }
        ]
    },
    {
        id: "120",
        number: 12,
        title: "Moving Average",
        description: "Write a function called `moving_average` that calculates the moving average with window size k. Return list of averages (rounded to 2 decimals).",
        starterCode: `def moving_average(nums: list, k: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def moving_average(nums: list, k: int) -> list:
    if len(nums) < k:
        return []
    result = []
    for i in range(len(nums) - k + 1):
        window = nums[i:i + k]
        avg = round(sum(window) / k, 2)
        result.append(avg)
    return result`,
        testCases: [
            { input: "moving_average([1, 2, 3, 4, 5], 3)", expected: "[2.0, 3.0, 4.0]" },
            { input: "moving_average([10, 20], 2)", expected: "[15.0]" },
            { input: "moving_average([1, 2], 5)", expected: "[]" }
        ]
    }
];

export const arraysExampleContent: ExampleContent = {
    intro: "Working with numeric lists: sorting, filtering, and algorithms.",
    codeBlocks: [
        {
            code: `nums = [5, 2, 8, 1]
nums.sort()
print(nums)  # [1, 2, 5, 8]`,
            explanation: "sort() modifies list in place."
        }
    ],
    tips: ["Use min/max for extremes", "Use sum for totals"],
    runnable: `nums = [3, 1, 4, 1, 5, 9]
print("Sum:", sum(nums))
print("Min:", min(nums))`
};

export const chapter10_arrays: Chapter = {
    id: "10_arrays",
    title: "Numeric Arrays",
    description: "Working with Lists of Numbers",
    explanation: "Manipulating lists of numbers: sorting, deleting, calculating.",
    exampleCode: "x = [3, 1, 2]\\nx.sort()",
    exampleContent: arraysExampleContent,
    challenges: array_challenges,
    homework: homeworkByChapter["10_arrays"]
};
