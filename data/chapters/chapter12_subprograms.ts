import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 12: SUBPROGRAMS (FUNCTIONS)
// Capstone chapter - requires all previous skills
// ============================================================

export const subprogram_challenges: Challenge[] = [
    {
        id: "133",
        number: 1,
        title: "Function Factory",
        description: "Write a function called `create_multiplier` that takes a number n and returns a function that multiplies its input by n.",
        starterCode: `def create_multiplier(n: int):
    # Your code here
    pass`,
        solutionCode: `def create_multiplier(n: int):
    def multiply(x):
        return x * n
    return multiply`,
        testCases: [
            { input: "create_multiplier(3)(5)", expected: "15" },
            { input: "create_multiplier(2)(10)", expected: "20" },
            { input: "create_multiplier(0)(100)", expected: "0" }
        ]
    },
    {
        id: "134",
        number: 2,
        title: "Default Arguments",
        description: "Write a function called `greet` with parameters name and greeting (default 'Hello'). Return '[greeting], [name]!'.",
        starterCode: `def greet(name: str, greeting: str = 'Hello') -> str:
    # Your code here
    pass`,
        solutionCode: `def greet(name: str, greeting: str = 'Hello') -> str:
    return f"{greeting}, {name}!"`,
        testCases: [
            { input: "greet('Alice')", expected: "'Hello, Alice!'" },
            { input: "greet('Bob', 'Hi')", expected: "'Hi, Bob!'" },
            { input: "greet('Carol', 'Welcome')", expected: "'Welcome, Carol!'" }
        ]
    },
    {
        id: "135",
        number: 3,
        title: "Variable Arguments",
        description: "Write a function called `sum_all` that takes any number of arguments and returns their sum.",
        starterCode: `def sum_all(*args) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_all(*args) -> int:
    total = 0
    for num in args:
        total += num
    return total`,
        testCases: [
            { input: "sum_all(1, 2, 3)", expected: "6" },
            { input: "sum_all(5)", expected: "5" },
            { input: "sum_all()", expected: "0" }
        ]
    },
    {
        id: "136",
        number: 4,
        title: "Recursive Factorial",
        description: "Write a function called `factorial` that calculates n! using recursion.",
        starterCode: `def factorial(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def factorial(n: int) -> int:
    if n <= 1:
        return 1
    return n * factorial(n - 1)`,
        testCases: [
            { input: "factorial(5)", expected: "120" },
            { input: "factorial(0)", expected: "1" },
            { input: "factorial(1)", expected: "1" }
        ]
    },
    {
        id: "137",
        number: 5,
        title: "Recursive Fibonacci",
        description: "Write a function called `fibonacci` that returns the nth Fibonacci number (0, 1, 1, 2, 3, 5...).",
        starterCode: `def fibonacci(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def fibonacci(n: int) -> int:
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)`,
        testCases: [
            { input: "fibonacci(6)", expected: "8" },
            { input: "fibonacci(0)", expected: "0" },
            { input: "fibonacci(10)", expected: "55" }
        ]
    },
    {
        id: "138",
        number: 6,
        title: "Higher Order Map",
        description: "Write a function called `my_map` that takes a function and a list, applies the function to each element, and returns the result list.",
        starterCode: `def my_map(func, items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def my_map(func, items: list) -> list:
    result = []
    for item in items:
        result.append(func(item))
    return result`,
        testCases: [
            { input: "my_map(lambda x: x * 2, [1, 2, 3])", expected: "[2, 4, 6]" },
            { input: "my_map(str.upper, ['a', 'b'])", expected: "['A', 'B']" },
            { input: "my_map(lambda x: x, [])", expected: "[]" }
        ]
    },
    {
        id: "139",
        number: 7,
        title: "Higher Order Filter",
        description: "Write a function called `my_filter` that takes a predicate function and a list, and returns elements where predicate returns True.",
        starterCode: `def my_filter(predicate, items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def my_filter(predicate, items: list) -> list:
    result = []
    for item in items:
        if predicate(item):
            result.append(item)
    return result`,
        testCases: [
            { input: "my_filter(lambda x: x > 3, [1, 4, 2, 5])", expected: "[4, 5]" },
            { input: "my_filter(lambda x: x % 2 == 0, [1, 2, 3, 4])", expected: "[2, 4]" },
            { input: "my_filter(lambda x: True, [])", expected: "[]" }
        ]
    },
    {
        id: "140",
        number: 8,
        title: "Higher Order Reduce",
        description: "Write a function called `my_reduce` that takes a function, a list, and an initial value. Reduce the list to a single value by applying the function cumulatively.",
        starterCode: `def my_reduce(func, items: list, initial):
    # Your code here
    pass`,
        solutionCode: `def my_reduce(func, items: list, initial):
    result = initial
    for item in items:
        result = func(result, item)
    return result`,
        testCases: [
            { input: "my_reduce(lambda a, b: a + b, [1, 2, 3], 0)", expected: "6" },
            { input: "my_reduce(lambda a, b: a * b, [1, 2, 3, 4], 1)", expected: "24" },
            { input: "my_reduce(lambda a, b: a + b, [], 10)", expected: "10" }
        ]
    },
    {
        id: "141",
        number: 9,
        title: "Decorator Function",
        description: "Write a function called `double_result` that is a decorator. It doubles the return value of any function it wraps.",
        starterCode: `def double_result(func):
    # Your code here
    pass`,
        solutionCode: `def double_result(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 2
    return wrapper`,
        testCases: [
            { input: "@double_result\\ndef add(a, b): return a + b\\nadd(2, 3)", expected: "10" },
            { input: "@double_result\\ndef five(): return 5\\nfive()", expected: "10" }
        ]
    },
    {
        id: "142",
        number: 10,
        title: "Memoization",
        description: "Write a function called `memoize` that wraps a function and caches its results. Return cached result if same args seen before.",
        starterCode: `def memoize(func):
    # Your code here
    pass`,
        solutionCode: `def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper`,
        testCases: [
            { input: "@memoize\\ndef fib(n): return n if n < 2 else fib(n-1) + fib(n-2)\\nfib(10)", expected: "55" }
        ]
    },
    {
        id: "143",
        number: 11,
        title: "Calculator Builder",
        description: "Write a function called `make_calculator` that returns a dict with 'add', 'subtract', 'multiply', 'divide' functions that take two numbers.",
        starterCode: `def make_calculator() -> dict:
    # Your code here
    pass`,
        solutionCode: `def make_calculator() -> dict:
    def add(a, b):
        return a + b
    def subtract(a, b):
        return a - b
    def multiply(a, b):
        return a * b
    def divide(a, b):
        if b == 0:
            return None
        return a / b
    return {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide
    }`,
        testCases: [
            { input: "make_calculator()['add'](5, 3)", expected: "8" },
            { input: "make_calculator()['subtract'](10, 4)", expected: "6" },
            { input: "make_calculator()['divide'](10, 0)", expected: "None" }
        ]
    },
    {
        id: "144",
        number: 12,
        title: "Mini Language Parser",
        description: "Write a function called `evaluate` that evaluates simple math expressions given as a list: ['add', 5, 3] → 8, ['mul', 4, 2] → 8, ['sub', 10, 3] → 7, ['div', 8, 2] → 4.",
        starterCode: `def evaluate(expression: list):
    # Your code here
    pass`,
        solutionCode: `def evaluate(expression: list):
    op = expression[0]
    a = expression[1]
    b = expression[2]
    
    # Recursively evaluate nested expressions
    if isinstance(a, list):
        a = evaluate(a)
    if isinstance(b, list):
        b = evaluate(b)
    
    if op == 'add':
        return a + b
    elif op == 'sub':
        return a - b
    elif op == 'mul':
        return a * b
    elif op == 'div':
        if b == 0:
            return None
        return a / b
    return None`,
        testCases: [
            { input: "evaluate(['add', 5, 3])", expected: "8" },
            { input: "evaluate(['mul', ['add', 2, 3], 4])", expected: "20" },
            { input: "evaluate(['div', 10, 2])", expected: "5.0" }
        ]
    }
];

export const subprogramsExampleContent: ExampleContent = {
    intro: "Functions organize code into reusable blocks. Advanced features include recursion, higher-order functions, and closures.",
    codeBlocks: [
        {
            code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))         # Hello, Alice!
print(greet("Bob", "Hi"))     # Hi, Bob!`,
            explanation: "Default parameter values make arguments optional."
        },
        {
            code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`,
            explanation: "Recursive functions call themselves with a base case to stop."
        }
    ],
    tips: [
        "Functions should do one thing well",
        "Use descriptive names",
        "Recursion needs a base case"
    ],
    runnable: `def add(a, b):
    return a + b

def apply_twice(func, value):
    return func(func(value, value), func(value, value))

print(apply_twice(add, 5))  # 40`
};

export const chapter12_subprograms: Chapter = {
    id: "12_subprograms",
    title: "Subprograms",
    description: "Functions and Logic",
    explanation: "Define functions and manage program flow.",
    exampleCode: "def my_func():\\n    pass",
    exampleContent: subprogramsExampleContent,
    challenges: subprogram_challenges,
    homework: homeworkByChapter["12_subprograms"]
};
