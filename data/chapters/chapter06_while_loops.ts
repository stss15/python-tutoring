import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 6: WHILE LOOPS
// Concepts: while loops, break, continue, input validation patterns
// Prerequisites: Chapters 1-5 (all previous including for loops)
// ============================================================

export const while_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic while loop
    {
        id: "061",
        number: 1,
        title: "Countdown",
        description: "Write a function called `countdown` that takes a starting number and returns a list counting down to 1. Use a while loop.",
        hint: "While n > 0: append n, decrement n",
        starterCode: `def countdown(start: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def countdown(start: int) -> list:
    result = []
    while start > 0:
        result.append(start)
        start -= 1
    return result`,
        testCases: [
            { input: "countdown(5)", expected: "[5, 4, 3, 2, 1]" },
            { input: "countdown(3)", expected: "[3, 2, 1]" },
            { input: "countdown(1)", expected: "[1]" },
            { input: "countdown(0)", expected: "[]" },
            { input: "countdown(10)", expected: "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]" }
        ]
    },
    {
        id: "062",
        number: 2,
        title: "Double Until",
        description: "Write a function called `double_until` that starts with 1 and keeps doubling until it exceeds the target. Return the final value.",
        hint: "While value <= target: double the value",
        starterCode: `def double_until(target: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def double_until(target: int) -> int:
    value = 1
    while value <= target:
        value *= 2
    return value`,
        testCases: [
            { input: "double_until(100)", expected: "128" },
            { input: "double_until(1)", expected: "2" },
            { input: "double_until(500)", expected: "512" },
            { input: "double_until(10)", expected: "16" },
            { input: "double_until(1000)", expected: "1024" }
        ]
    },

    // BUILDING (3-4): Combining with conditions
    {
        id: "063",
        number: 3,
        title: "Sum Until Limit",
        description: "Write a function called `sum_until_limit` that takes a list of numbers and a limit. Sum the numbers in order, but stop (and don't include) the first number that would push the total over the limit. Return the sum.",
        hint: "Check if adding next number exceeds limit before adding it",
        starterCode: `def sum_until_limit(numbers: list, limit: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_until_limit(numbers: list, limit: int) -> int:
    total = 0
    i = 0
    while i < len(numbers):
        if total + numbers[i] > limit:
            break
        total += numbers[i]
        i += 1
    return total`,
        testCases: [
            { input: "sum_until_limit([10, 20, 30, 40], 50)", expected: "30" },
            { input: "sum_until_limit([5, 5, 5, 5], 100)", expected: "20" },
            { input: "sum_until_limit([100], 50)", expected: "0" },
            { input: "sum_until_limit([1, 2, 3, 4, 5], 10)", expected: "10" },
            { input: "sum_until_limit([], 100)", expected: "0" }
        ]
    },
    {
        id: "064",
        number: 4,
        title: "Find First Divisible",
        description: "Write a function called `first_divisible` that takes a list of numbers and a divisor. Return the first number in the list that is evenly divisible by the divisor. Return -1 if none found.",
        hint: "Loop through list with while, check num % divisor == 0",
        starterCode: `def first_divisible(numbers: list, divisor: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def first_divisible(numbers: list, divisor: int) -> int:
    i = 0
    while i < len(numbers):
        if numbers[i] % divisor == 0:
            return numbers[i]
        i += 1
    return -1`,
        testCases: [
            { input: "first_divisible([7, 9, 12, 15], 3)", expected: "9" },
            { input: "first_divisible([1, 2, 3, 4, 5], 5)", expected: "5" },
            { input: "first_divisible([7, 11, 13], 2)", expected: "-1" },
            { input: "first_divisible([10, 20, 30], 10)", expected: "10" },
            { input: "first_divisible([], 5)", expected: "-1" }
        ]
    },

    // APPLICATION (5-6): Real-world patterns  
    {
        id: "065",
        number: 5,
        title: "Digit Counter",
        description: "Write a function called `count_digits` that takes a positive integer and returns how many digits it has. Use division by 10 in a while loop (don't convert to string).",
        hint: "While n > 0: increment counter, n = n // 10",
        starterCode: `def count_digits(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_digits(n: int) -> int:
    if n == 0:
        return 1
    count = 0
    while n > 0:
        count += 1
        n = n // 10
    return count`,
        testCases: [
            { input: "count_digits(12345)", expected: "5" },
            { input: "count_digits(0)", expected: "1" },
            { input: "count_digits(9)", expected: "1" },
            { input: "count_digits(1000000)", expected: "7" },
            { input: "count_digits(99)", expected: "2" }
        ]
    },
    {
        id: "066",
        number: 6,
        title: "Digit Sum",
        description: "Write a function called `digit_sum` that takes a positive integer and returns the sum of all its digits. Use modulo and division (don't convert to string).",
        hint: "Use n % 10 to get last digit, n // 10 to remove it",
        starterCode: `def digit_sum(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def digit_sum(n: int) -> int:
    total = 0
    while n > 0:
        total += n % 10
        n = n // 10
    return total`,
        testCases: [
            { input: "digit_sum(123)", expected: "6" },
            { input: "digit_sum(999)", expected: "27" },
            { input: "digit_sum(0)", expected: "0" },
            { input: "digit_sum(10)", expected: "1" },
            { input: "digit_sum(54321)", expected: "15" }
        ]
    },

    // PROBLEM SOLVING (7-8): Algorithm implementation
    {
        id: "067",
        number: 7,
        title: "GCD Calculator",
        description: "Write a function called `gcd` that calculates the Greatest Common Divisor of two positive integers using Euclid's algorithm: while b != 0, replace (a, b) with (b, a % b). Return a.",
        hint: "temp = b, b = a % b, a = temp (or use tuple unpacking)",
        starterCode: `def gcd(a: int, b: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def gcd(a: int, b: int) -> int:
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a`,
        testCases: [
            { input: "gcd(48, 18)", expected: "6" },
            { input: "gcd(100, 25)", expected: "25" },
            { input: "gcd(17, 13)", expected: "1" },
            { input: "gcd(12, 12)", expected: "12" },
            { input: "gcd(54, 24)", expected: "6" }
        ]
    },
    {
        id: "068",
        number: 8,
        title: "Collatz Sequence",
        description: "Write a function called `collatz` that returns the Collatz sequence starting from n until reaching 1. Rule: if even, divide by 2; if odd, multiply by 3 and add 1. Return the sequence as a list (including n and 1).",
        hint: "Append n, while n != 1: apply rule, append new n",
        starterCode: `def collatz(n: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def collatz(n: int) -> list:
    sequence = [n]
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        sequence.append(n)
    return sequence`,
        testCases: [
            { input: "collatz(6)", expected: "[6, 3, 10, 5, 16, 8, 4, 2, 1]" },
            { input: "collatz(1)", expected: "[1]" },
            { input: "collatz(3)", expected: "[3, 10, 5, 16, 8, 4, 2, 1]" },
            { input: "collatz(12)", expected: "[12, 6, 3, 10, 5, 16, 8, 4, 2, 1]" },
            { input: "collatz(7)", expected: "[7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]" }
        ]
    },

    // INTEGRATION (9-10): Complex scenarios
    {
        id: "069",
        number: 9,
        title: "Binary Search",
        description: "Write a function called `binary_search` that takes a SORTED list and a target value. Return the index of the target if found, or -1 if not. Use the binary search algorithm with while loop.",
        hint: "Use low and high pointers, find mid, compare and adjust",
        starterCode: `def binary_search(sorted_list: list, target: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def binary_search(sorted_list: list, target: int) -> int:
    low = 0
    high = len(sorted_list) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    
    return -1`,
        testCases: [
            { input: "binary_search([1, 3, 5, 7, 9], 5)", expected: "2" },
            { input: "binary_search([1, 3, 5, 7, 9], 1)", expected: "0" },
            { input: "binary_search([1, 3, 5, 7, 9], 9)", expected: "4" },
            { input: "binary_search([1, 3, 5, 7, 9], 4)", expected: "-1" },
            { input: "binary_search([], 5)", expected: "-1" }
        ]
    },
    {
        id: "070",
        number: 10,
        title: "Newton's Square Root",
        description: "Write a function called `sqrt_newton` that calculates the square root of n using Newton's method. Start with guess = n/2, improve with guess = (guess + n/guess)/2 until difference between consecutive guesses is < 0.0001. Return rounded to 4 decimals.",
        hint: "Keep track of old guess, update, check abs(new - old) < 0.0001",
        starterCode: `def sqrt_newton(n: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def sqrt_newton(n: float) -> float:
    if n == 0:
        return 0.0
    guess = n / 2
    while True:
        new_guess = (guess + n / guess) / 2
        if abs(new_guess - guess) < 0.0001:
            return round(new_guess, 4)
        guess = new_guess`,
        testCases: [
            { input: "sqrt_newton(16)", expected: "4.0" },
            { input: "sqrt_newton(2)", expected: "1.4142" },
            { input: "sqrt_newton(100)", expected: "10.0" },
            { input: "sqrt_newton(0)", expected: "0.0" },
            { input: "sqrt_newton(25)", expected: "5.0" }
        ]
    },

    // CAPSTONE (11-12): Complex algorithmic challenges
    {
        id: "071",
        number: 11,
        title: "Number to Words",
        description: "Write a function called `num_to_words` that converts a number 0-99 to English words. E.g., 42 → 'forty-two', 15 → 'fifteen', 70 → 'seventy'.",
        hint: "Handle 0-19 with lookup list, 20+ with tens lookup and recursion/combination",
        starterCode: `def num_to_words(n: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def num_to_words(n: int) -> str:
    ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if n < 20:
        return ones[n]
    elif n % 10 == 0:
        return tens[n // 10]
    else:
        return tens[n // 10] + '-' + ones[n % 10]`,
        testCases: [
            { input: "num_to_words(42)", expected: "'forty-two'" },
            { input: "num_to_words(15)", expected: "'fifteen'" },
            { input: "num_to_words(70)", expected: "'seventy'" },
            { input: "num_to_words(0)", expected: "'zero'" },
            { input: "num_to_words(99)", expected: "'ninety-nine'" }
        ]
    },
    {
        id: "072",
        number: 12,
        title: "Balanced Brackets",
        description: "Write a function called `is_balanced` that takes a string containing only parentheses '()'. Return True if all parentheses are balanced (every '(' has a matching ')'), False otherwise.",
        hint: "Use a counter: +1 for '(', -1 for ')'. Never go negative, end at 0.",
        starterCode: `def is_balanced(s: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_balanced(s: str) -> bool:
    count = 0
    i = 0
    while i < len(s):
        if s[i] == '(':
            count += 1
        elif s[i] == ')':
            count -= 1
        if count < 0:
            return False
        i += 1
    return count == 0`,
        testCases: [
            { input: "is_balanced('(())')", expected: "True" },
            { input: "is_balanced('(()')", expected: "False" },
            { input: "is_balanced('()()')", expected: "True" },
            { input: "is_balanced(')(')", expected: "False" },
            { input: "is_balanced('')", expected: "True" },
            { input: "is_balanced('((()))')", expected: "True" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const whileLoopsExampleContent: ExampleContent = {
    intro: "While loops repeat code as long as a condition is True. They're useful when you don't know how many times you need to repeat.",
    codeBlocks: [
        {
            code: `count = 0
while count < 5:
    print(count)
    count = count + 1`,
            explanation: "The loop checks the condition before each iteration. When count reaches 5, the condition is False and the loop stops."
        },
        {
            code: `total = 0
while total < 100:
    total = total + 25
    print(f"Total: {total}")`,
            explanation: "This keeps adding 25 until total reaches or exceeds 100. Prints: 25, 50, 75, 100."
        },
        {
            code: `# Finding a value
numbers = [3, 7, 2, 9, 4]
i = 0
while i < len(numbers):
    if numbers[i] > 5:
        print(f"Found: {numbers[i]}")
        break
    i += 1`,
            explanation: "Use 'break' to exit a loop early when you find what you're looking for."
        },
        {
            code: `# Skip certain values
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)`,
            explanation: "'continue' skips to the next iteration. This prints only odd numbers: 1, 3, 5, 7, 9."
        }
    ],
    tips: [
        "Always make sure your condition will eventually become False, or use 'break'",
        "Infinite loops happen when the condition never becomes False",
        "'break' exits the loop completely, 'continue' skips to the next iteration",
        "Use while when you don't know how many iterations you need"
    ],
    runnable: `# Try it yourself!

# Count down from 10
print("Countdown:")
count = 10
while count > 0:
    print(count)
    count = count - 1
print("Blast off!")

print()

# Find how many times to double to exceed 100
value = 1
doubles = 0
while value <= 100:
    value *= 2
    doubles += 1
print(f"Doubled {doubles} times to get {value}")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter06_while_loops: Chapter = {
    id: "06_while_loops",
    title: "Conditional Loops",
    description: "Conditional Loops",
    explanation: "Repeat code while a condition is true.",
    exampleCode: "while True:\\n    break",
    exampleContent: whileLoopsExampleContent,
    challenges: while_challenges,
    homework: homeworkByChapter["06_while_loops"]
};
