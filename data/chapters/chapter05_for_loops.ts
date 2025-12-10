import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 5: FOR LOOPS
// Concepts: for loops, range(), iterating strings/lists, accumulator pattern
// Prerequisites: Chapters 1-4 (variables, conditionals, strings, math)
// ============================================================

export const for_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic range() usage
    {
        id: "049",
        number: 1,
        title: "Sum to N",
        description: "Write a function called `sum_to_n` that takes a positive integer n and returns the sum of all integers from 1 to n (inclusive). Use a for loop with range().",
        hint: "Use range(1, n + 1) and add each number to a running total",
        starterCode: `def sum_to_n(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_to_n(n: int) -> int:
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`,
        testCases: [
            { input: "sum_to_n(5)", expected: "15" },
            { input: "sum_to_n(10)", expected: "55" },
            { input: "sum_to_n(1)", expected: "1" },
            { input: "sum_to_n(100)", expected: "5050" },
            { input: "sum_to_n(0)", expected: "0" }
        ]
    },
    {
        id: "050",
        number: 2,
        title: "Multiplication Table",
        description: "Write a function called `times_table` that takes a number n and returns a list of its first 10 multiples (n×1, n×2, ... n×10).",
        hint: "Use range(1, 11) and append each product to a list",
        starterCode: `def times_table(n: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def times_table(n: int) -> list:
    result = []
    for i in range(1, 11):
        result.append(n * i)
    return result`,
        testCases: [
            { input: "times_table(5)", expected: "[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]" },
            { input: "times_table(7)", expected: "[7, 14, 21, 28, 35, 42, 49, 56, 63, 70]" },
            { input: "times_table(1)", expected: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" },
            { input: "times_table(0)", expected: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]" },
            { input: "times_table(12)", expected: "[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]" }
        ]
    },

    // BUILDING (3-4): Iterating with conditions
    {
        id: "051",
        number: 3,
        title: "Count Evens",
        description: "Write a function called `count_evens` that takes a list of integers and returns the count of even numbers in the list. Use a for loop and the modulo operator.",
        hint: "Loop through list, check if num % 2 == 0, increment counter",
        starterCode: `def count_evens(numbers: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_evens(numbers: list) -> int:
    count = 0
    for num in numbers:
        if num % 2 == 0:
            count += 1
    return count`,
        testCases: [
            { input: "count_evens([1, 2, 3, 4, 5, 6])", expected: "3" },
            { input: "count_evens([2, 4, 6, 8])", expected: "4" },
            { input: "count_evens([1, 3, 5, 7])", expected: "0" },
            { input: "count_evens([])", expected: "0" },
            { input: "count_evens([0, 1, 2])", expected: "2" }
        ]
    },
    {
        id: "052",
        number: 4,
        title: "Filter Positive",
        description: "Write a function called `filter_positive` that takes a list of integers and returns a new list containing only the positive numbers (greater than 0), preserving their original order.",
        hint: "Create empty result list, loop through input, append if positive",
        starterCode: `def filter_positive(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_positive(numbers: list) -> list:
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result`,
        testCases: [
            { input: "filter_positive([1, -2, 3, -4, 5])", expected: "[1, 3, 5]" },
            { input: "filter_positive([-1, -2, -3])", expected: "[]" },
            { input: "filter_positive([10, 20, 30])", expected: "[10, 20, 30]" },
            { input: "filter_positive([0, 1, -1])", expected: "[1]" },
            { input: "filter_positive([])", expected: "[]" }
        ]
    },

    // APPLICATION (5-6): String iteration
    {
        id: "053",
        number: 5,
        title: "Count Vowels",
        description: "Write a function called `count_vowels` that takes a string and returns the number of vowels (a, e, i, o, u) in it. Count should be case-insensitive.",
        hint: "Loop through string, check if char.lower() is in 'aeiou'",
        starterCode: `def count_vowels(text: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_vowels(text: str) -> int:
    count = 0
    vowels = "aeiou"
    for char in text:
        if char.lower() in vowels:
            count += 1
    return count`,
        testCases: [
            { input: "count_vowels('Hello World')", expected: "3" },
            { input: "count_vowels('AEIOU')", expected: "5" },
            { input: "count_vowels('rhythm')", expected: "0" },
            { input: "count_vowels('Python Programming')", expected: "4" },
            { input: "count_vowels('')", expected: "0" }
        ]
    },
    {
        id: "054",
        number: 6,
        title: "Reverse String",
        description: "Write a function called `reverse_string` that takes a string and returns it reversed. Do this using a for loop (not slicing).",
        hint: "Start with empty string, loop through original, prepend each character",
        starterCode: `def reverse_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def reverse_string(text: str) -> str:
    result = ""
    for char in text:
        result = char + result
    return result`,
        testCases: [
            { input: "reverse_string('hello')", expected: "'olleh'" },
            { input: "reverse_string('Python')", expected: "'nohtyP'" },
            { input: "reverse_string('a')", expected: "'a'" },
            { input: "reverse_string('12345')", expected: "'54321'" },
            { input: "reverse_string('')", expected: "''" }
        ]
    },

    // PROBLEM SOLVING (7-8): Accumulator patterns
    {
        id: "055",
        number: 7,
        title: "Factorial Calculator",
        description: "Write a function called `factorial` that takes a non-negative integer n and returns n! (n factorial). Remember: 0! = 1, and n! = n × (n-1) × ... × 2 × 1.",
        hint: "Start with result = 1, loop from 1 to n, multiply each number",
        starterCode: `def factorial(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def factorial(n: int) -> int:
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result`,
        testCases: [
            { input: "factorial(5)", expected: "120" },
            { input: "factorial(0)", expected: "1" },
            { input: "factorial(1)", expected: "1" },
            { input: "factorial(10)", expected: "3628800" },
            { input: "factorial(3)", expected: "6" }
        ]
    },
    {
        id: "056",
        number: 8,
        title: "Power Without Operator",
        description: "Write a function called `power` that calculates base^exponent using only multiplication in a loop (not the ** operator). Assume exponent is non-negative.",
        hint: "Start with result = 1, multiply by base 'exponent' times",
        starterCode: `def power(base: int, exponent: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def power(base: int, exponent: int) -> int:
    result = 1
    for i in range(exponent):
        result *= base
    return result`,
        testCases: [
            { input: "power(2, 10)", expected: "1024" },
            { input: "power(5, 3)", expected: "125" },
            { input: "power(10, 0)", expected: "1" },
            { input: "power(3, 4)", expected: "81" },
            { input: "power(7, 2)", expected: "49" }
        ]
    },

    // INTEGRATION (9-10): Complex iterations
    {
        id: "057",
        number: 9,
        title: "Prime Checker",
        description: "Write a function called `is_prime` that takes a positive integer and returns True if it's prime, False otherwise. A prime number is only divisible by 1 and itself. Numbers less than 2 are not prime.",
        hint: "Check if any number from 2 to n-1 divides n evenly. If none do, it's prime.",
        starterCode: `def is_prime(n: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_prime(n: int) -> bool:
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True`,
        testCases: [
            { input: "is_prime(7)", expected: "True" },
            { input: "is_prime(4)", expected: "False" },
            { input: "is_prime(2)", expected: "True" },
            { input: "is_prime(1)", expected: "False" },
            { input: "is_prime(17)", expected: "True" },
            { input: "is_prime(15)", expected: "False" }
        ]
    },
    {
        id: "058",
        number: 10,
        title: "Find Maximum",
        description: "Write a function called `find_max` that takes a list of numbers and returns the largest one. Do NOT use the built-in max() function - implement it using a for loop.",
        hint: "Assume first element is max, then compare each element and update if larger",
        starterCode: `def find_max(numbers: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def find_max(numbers: list) -> int:
    if len(numbers) == 0:
        return None
    maximum = numbers[0]
    for num in numbers:
        if num > maximum:
            maximum = num
    return maximum`,
        testCases: [
            { input: "find_max([1, 5, 3, 9, 2])", expected: "9" },
            { input: "find_max([100])", expected: "100" },
            { input: "find_max([-5, -2, -10])", expected: "-2" },
            { input: "find_max([7, 7, 7])", expected: "7" },
            { input: "find_max([1, 2, 3, 4, 5])", expected: "5" }
        ]
    },

    // CAPSTONE (11-12): Complex algorithmic challenges
    {
        id: "059",
        number: 11,
        title: "FizzBuzz Generator",
        description: "Write a function called `fizzbuzz` that takes n and returns a list of strings from 1 to n where: multiples of 3 become 'Fizz', multiples of 5 become 'Buzz', multiples of both become 'FizzBuzz', other numbers become their string representation.",
        hint: "Check divisibility by 15 first (both), then 3, then 5, else convert to string",
        starterCode: `def fizzbuzz(n: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def fizzbuzz(n: int) -> list:
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`,
        testCases: [
            { input: "fizzbuzz(15)", expected: "['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']" },
            { input: "fizzbuzz(5)", expected: "['1', '2', 'Fizz', '4', 'Buzz']" },
            { input: "fizzbuzz(3)", expected: "['1', '2', 'Fizz']" },
            { input: "fizzbuzz(1)", expected: "['1']" },
            { input: "fizzbuzz(0)", expected: "[]" }
        ]
    },
    {
        id: "060",
        number: 12,
        title: "Pattern Generator",
        description: "Write a function called `staircase` that takes n and returns a string representing a staircase pattern. Each step i (from 1 to n) should have (n-i) spaces followed by i hash symbols, with each step on a new line (separated by \\n). No trailing newline.",
        hint: "Use nested string building: ' ' * (n-i) + '#' * i for each line",
        starterCode: `def staircase(n: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def staircase(n: int) -> str:
    lines = []
    for i in range(1, n + 1):
        spaces = ' ' * (n - i)
        hashes = '#' * i
        lines.append(spaces + hashes)
    return '\\n'.join(lines)`,
        testCases: [
            { input: "staircase(4)", expected: "'   #\\n  ##\\n ###\\n####'" },
            { input: "staircase(1)", expected: "'#'" },
            { input: "staircase(3)", expected: "'  #\\n ##\\n###'" },
            { input: "staircase(2)", expected: "' #\\n##'" },
            { input: "staircase(5)", expected: "'    #\\n   ##\\n  ###\\n ####\\n#####'" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const forLoopsExampleContent: ExampleContent = {
    intro: "For loops repeat code a specific number of times. The range() function is commonly used to control how many times the loop runs.",
    codeBlocks: [
        {
            code: `for i in range(5):
    print(i)`,
            explanation: "This prints 0, 1, 2, 3, 4 (each on a new line). range(5) generates numbers from 0 up to (but not including) 5."
        },
        {
            code: `for i in range(1, 6):
    print(i)`,
            explanation: "range(1, 6) starts at 1 and goes up to (but not including) 6. This prints 1, 2, 3, 4, 5."
        },
        {
            code: `for i in range(0, 10, 2):
    print(i)`,
            explanation: "The third value is the 'step'. This prints 0, 2, 4, 6, 8 (counting by 2s)."
        },
        {
            code: `name = "Python"
for letter in name:
    print(letter)`,
            explanation: "You can loop through each character in a string. This prints P, y, t, h, o, n (each on a new line)."
        },
        {
            code: `# Accumulator pattern
total = 0
for num in [10, 20, 30]:
    total = total + num
print(total)  # 60`,
            explanation: "The accumulator pattern: start with a base value, update it each iteration, use the final value."
        }
    ],
    tips: [
        "range(n) gives 0 to n-1",
        "range(start, end) gives start to end-1",
        "range(start, end, step) lets you count by any amount",
        "Use negative step to count backwards: range(10, 0, -1)"
    ],
    runnable: `# Try it yourself!

# Print numbers 1 to 5
print("Counting to 5:")
for i in range(1, 6):
    print(i)

print()  # Empty line

# Print a times table
num = 7
print(f"Times table for {num}:")
for i in range(1, 11):
    print(f"{i} x {num} = {i * num}")

print()

# Sum the numbers 1 to 100
total = 0
for i in range(1, 101):
    total += i
print(f"Sum of 1-100: {total}")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter05_for_loops: Chapter = {
    id: "05_for_loops",
    title: "For Loops",
    description: "Iteration",
    explanation: "Repeat code a specific number of times.",
    exampleCode: "for i in range(5):\\n    print(i)",
    exampleContent: forLoopsExampleContent,
    challenges: for_challenges,
    homework: homeworkByChapter["05_for_loops"]
};
