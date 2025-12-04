import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    id: "first_functions",
    title: "Your First Functions",
    description: "Function Syntax, Parameters & Returns",
    explanation: `
      <p class="mb-4">Functions are reusable blocks of code. Every program you write should be organized into functions - this makes code easier to test, debug, and understand.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Defining Functions</h4>
      <p class="mb-2">Use <code>def</code> followed by the function name and parentheses. Parameters go inside the parentheses.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Type Hints</h4>
      <p class="mb-2">Type hints document what types your function expects: <code>def greet(name: str) -> str:</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Return vs Print</h4>
      <p class="mb-2"><code>return</code> sends a value back to the caller. <code>print</code> displays output but returns <code>None</code>.</p>
    `,
    exampleCode: `def add(a: int, b: int) -> int:
    """Add two numbers and return the result."""
    return a + b

def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"

# Calling functions
result = add(5, 3)      # result = 8
message = greet("Alex") # message = "Hello, Alex!"`,
    challenges: [
      {
        id: "001",
        number: 1,
        description: "Create a function `double` that takes an integer `n` and returns it multiplied by 2.",
        starterCode: `def double(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def double(n: int) -> int:
    """Return n multiplied by 2."""
    return n * 2`
      },
      {
        id: "002",
        number: 2,
        description: "Create a function `square` that takes a number and returns its square (the number multiplied by itself).",
        starterCode: `def square(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def square(n: int) -> int:
    """Return n squared."""
    return n * n`
      },
      {
        id: "003",
        number: 3,
        description: "Create a function `greeting` that takes a `name` and returns the string `Hello, {name}!`",
        starterCode: `def greeting(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def greeting(name: str) -> str:
    """Return a greeting for the given name."""
    return f"Hello, {name}!"`
      },
      {
        id: "004",
        number: 4,
        description: "Create a function `add_three` that takes three integers `a`, `b`, and `c` and returns their sum.",
        starterCode: `def add_three(a: int, b: int, c: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def add_three(a: int, b: int, c: int) -> int:
    """Return the sum of three numbers."""
    return a + b + c`
      },
      {
        id: "005",
        number: 5,
        description: "Create a function `full_name` that takes `first` and `last` strings and returns them combined with a space between.",
        starterCode: `def full_name(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def full_name(first: str, last: str) -> str:
    """Combine first and last name with a space."""
    return f"{first} {last}"`
      },
      {
        id: "006",
        number: 6,
        description: "Create a function `rectangle_area` that takes `width` and `height` and returns the area (width × height).",
        starterCode: `def rectangle_area(width: float, height: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def rectangle_area(width: float, height: float) -> float:
    """Calculate area of a rectangle."""
    return width * height`
      },
      {
        id: "007",
        number: 7,
        description: "Create a function `average_of_two` that takes two numbers and returns their average.",
        starterCode: `def average_of_two(a: float, b: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def average_of_two(a: float, b: float) -> float:
    """Return the average of two numbers."""
    return (a + b) / 2`
      },
      {
        id: "008",
        number: 8,
        description: "Create a function `cube` that takes a number and returns it raised to the power of 3.",
        starterCode: `def cube(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def cube(n: int) -> int:
    """Return n cubed (n to the power of 3)."""
    return n ** 3`
      },
      {
        id: "009",
        number: 9,
        description: "Create a function `introduce` that takes `name` and `age` and returns `My name is {name} and I am {age} years old.`",
        starterCode: `def introduce(name: str, age: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def introduce(name: str, age: int) -> str:
    """Return an introduction sentence."""
    return f"My name is {name} and I am {age} years old."`
      },
      {
        id: "010",
        number: 10,
        description: "Create a function `percentage` that takes `part` and `whole` and returns what percentage the part is of the whole.",
        starterCode: `def percentage(part: float, whole: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def percentage(part: float, whole: float) -> float:
    """Calculate what percentage part is of whole."""
    return (part / whole) * 100`
      },
    ],
  },
  {
    id: "working_with_numbers",
    title: "Working with Numbers",
    description: "Arithmetic, Math Operations & Rounding",
    explanation: `
      <p class="mb-4">Python handles both integers (whole numbers) and floats (decimals). Understanding arithmetic operations is fundamental.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic Operators</h4>
      <p class="mb-2"><code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>**</code> power</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Integer Division & Modulo</h4>
      <p class="mb-2"><code>//</code> divides and rounds down to nearest integer. <code>%</code> gives the remainder.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Rounding</h4>
      <p class="mb-2"><code>round(number, decimals)</code> rounds to specified decimal places.</p>
    `,
    exampleCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount for a restaurant bill."""
    tip = bill * (tip_percent / 100)
    return round(tip, 2)

def get_remainder(dividend: int, divisor: int) -> int:
    """Return the remainder when dividing two numbers."""
    return dividend % divisor

print(calculate_tip(85.50, 20))  # 17.1
print(get_remainder(17, 5))      # 2`,
    challenges: [
      {
        id: "011",
        number: 1,
        description: "Create a function `celsius_to_fahrenheit` that converts Celsius to Fahrenheit using the formula: (celsius × 9/5) + 32",
        starterCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32`
      },
      {
        id: "012",
        number: 2,
        description: "Create a function `fahrenheit_to_celsius` that converts Fahrenheit to Celsius using: (fahrenheit - 32) × 5/9",
        starterCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9`
      },
      {
        id: "013",
        number: 3,
        description: "Create a function `split_bill` that takes a `total` and `num_people` and returns how much each person pays, rounded to 2 decimal places.",
        starterCode: `def split_bill(total: float, num_people: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def split_bill(total: float, num_people: int) -> float:
    """Split a bill evenly among people."""
    return round(total / num_people, 2)`
      },
      {
        id: "014",
        number: 4,
        description: "Create a function `calculate_tip` that takes `bill` and `tip_percent` and returns the tip amount rounded to 2 decimal places.",
        starterCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount from bill and percentage."""
    return round(bill * (tip_percent / 100), 2)`
      },
      {
        id: "015",
        number: 5,
        description: "Create a function `kg_to_pounds` that converts kilograms to pounds (1 kg = 2.205 pounds).",
        starterCode: `def kg_to_pounds(kg: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def kg_to_pounds(kg: float) -> float:
    """Convert kilograms to pounds."""
    return kg * 2.205`
      },
      {
        id: "016",
        number: 6,
        description: "Create a function `hours_to_seconds` that takes a number of hours and returns the equivalent in seconds.",
        starterCode: `def hours_to_seconds(hours: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def hours_to_seconds(hours: int) -> int:
    """Convert hours to seconds."""
    return hours * 60 * 60`
      },
      {
        id: "017",
        number: 7,
        description: "Create a function `get_remainder` that takes `a` and `b` and returns the remainder when `a` is divided by `b`.",
        starterCode: `def get_remainder(a: int, b: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def get_remainder(a: int, b: int) -> int:
    """Return remainder of a divided by b."""
    return a % b`
      },
      {
        id: "018",
        number: 8,
        description: "Create a function `integer_division` that takes two numbers and returns the result of integer division (rounded down).",
        starterCode: `def integer_division(a: int, b: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def integer_division(a: int, b: int) -> int:
    """Return integer division result (floor division)."""
    return a // b`
      },
      {
        id: "019",
        number: 9,
        description: "Create a function `circle_area` that takes a radius and returns the area (π × radius²). Use 3.14159 for π, round to 2 decimal places.",
        starterCode: `def circle_area(radius: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def circle_area(radius: float) -> float:
    """Calculate area of a circle."""
    pi = 3.14159
    return round(pi * radius ** 2, 2)`
      },
      {
        id: "020",
        number: 10,
        description: "Create a function `compound_interest` that takes `principal`, `rate` (as decimal), and `years`. Return the final amount using: principal × (1 + rate)^years, rounded to 2 decimal places.",
        starterCode: `def compound_interest(principal: float, rate: float, years: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def compound_interest(principal: float, rate: float, years: int) -> float:
    """Calculate compound interest final amount."""
    return round(principal * (1 + rate) ** years, 2)`
      },
    ],
  },
  {
    id: "making_decisions",
    title: "Making Decisions",
    description: "If, Elif, Else & Comparisons",
    explanation: `
      <p class="mb-4">Programs make decisions using conditional statements. These let your code take different paths based on conditions.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Comparison Operators</h4>
      <p class="mb-2"><code>==</code> equal, <code>!=</code> not equal, <code><</code> less than, <code>></code> greater than, <code><=</code> less or equal, <code>>=</code> greater or equal</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Logical Operators</h4>
      <p class="mb-2"><code>and</code> both must be true, <code>or</code> either can be true, <code>not</code> inverts</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Early Return Pattern</h4>
      <p class="mb-2">Return as soon as you have an answer - keeps code flat and readable.</p>
    `,
    exampleCode: `def get_grade(score: int) -> str:
    """Return letter grade for a numeric score."""
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"

def is_adult(age: int) -> bool:
    """Return True if age is 18 or older."""
    return age >= 18`,
    challenges: [
      {
        id: "021",
        number: 1,
        description: "Create a function `is_positive` that takes a number and returns `True` if it's greater than 0, `False` otherwise.",
        starterCode: `def is_positive(n: float) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_positive(n: float) -> bool:
    """Check if number is positive."""
    return n > 0`
      },
      {
        id: "022",
        number: 2,
        description: "Create a function `is_even` that takes an integer and returns `True` if it's even, `False` if odd.",
        starterCode: `def is_even(n: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_even(n: int) -> bool:
    """Check if number is even."""
    return n % 2 == 0`
      },
      {
        id: "023",
        number: 3,
        description: "Create a function `absolute_value` that takes a number and returns its absolute value (positive version) without using the built-in `abs()` function.",
        starterCode: `def absolute_value(n: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def absolute_value(n: float) -> float:
    """Return absolute value without using abs()."""
    if n < 0:
        return -n
    return n`
      },
      {
        id: "024",
        number: 4,
        description: "Create a function `max_of_two` that takes two numbers and returns the larger one.",
        starterCode: `def max_of_two(a: float, b: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def max_of_two(a: float, b: float) -> float:
    """Return the larger of two numbers."""
    if a > b:
        return a
    return b`
      },
      {
        id: "025",
        number: 5,
        description: "Create a function `max_of_three` that takes three numbers and returns the largest.",
        starterCode: `def max_of_three(a: float, b: float, c: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def max_of_three(a: float, b: float, c: float) -> float:
    """Return the largest of three numbers."""
    largest = a
    if b > largest:
        largest = b
    if c > largest:
        largest = c
    return largest`
      },
      {
        id: "026",
        number: 6,
        description: "Create a function `get_grade` that takes a score (0-100) and returns: 'A' for 90+, 'B' for 80-89, 'C' for 70-79, 'D' for 60-69, 'F' for below 60.",
        starterCode: `def get_grade(score: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_grade(score: int) -> str:
    """Convert numeric score to letter grade."""
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"`
      },
      {
        id: "027",
        number: 7,
        description: "Create a function `fizz_buzz` that takes an integer and returns: 'FizzBuzz' if divisible by both 3 and 5, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, otherwise the number as a string.",
        starterCode: `def fizz_buzz(n: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def fizz_buzz(n: int) -> str:
    """Classic FizzBuzz problem."""
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    if n % 3 == 0:
        return "Fizz"
    if n % 5 == 0:
        return "Buzz"
    return str(n)`
      },
      {
        id: "028",
        number: 8,
        description: "Create a function `ticket_price` that takes an `age`. Return 0 for under 3, 10 for 3-12, 15 for 13-64, and 10 for 65+.",
        starterCode: `def ticket_price(age: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def ticket_price(age: int) -> int:
    """Return ticket price based on age."""
    if age < 3:
        return 0
    if age <= 12:
        return 10
    if age <= 64:
        return 15
    return 10`
      },
      {
        id: "029",
        number: 9,
        description: "Create a function `in_range` that takes `n`, `low`, and `high`. Return `True` if n is between low and high (inclusive).",
        starterCode: `def in_range(n: int, low: int, high: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def in_range(n: int, low: int, high: int) -> bool:
    """Check if n is between low and high inclusive."""
    return low <= n <= high`
      },
      {
        id: "030",
        number: 10,
        description: "Create a function `is_leap_year` that returns `True` if a year is a leap year. A leap year is divisible by 4, except century years must also be divisible by 400.",
        starterCode: `def is_leap_year(year: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_leap_year(year: int) -> bool:
    """Check if year is a leap year."""
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    return year % 4 == 0`
      },
      {
        id: "031",
        number: 11,
        description: "Create a function `can_vote` that takes `age` and `is_citizen` (bool). Return `True` only if age is 18+ AND is_citizen is True.",
        starterCode: `def can_vote(age: int, is_citizen: bool) -> bool:
    # Your code here
    pass`,
        solutionCode: `def can_vote(age: int, is_citizen: bool) -> bool:
    """Check if person can vote."""
    return age >= 18 and is_citizen`
      },
      {
        id: "032",
        number: 12,
        description: "Create a function `shipping_cost` that takes `weight_kg` and `express` (bool). Base cost is $5 plus $2 per kg. Express doubles the total.",
        starterCode: `def shipping_cost(weight_kg: float, express: bool) -> float:
    # Your code here
    pass`,
        solutionCode: `def shipping_cost(weight_kg: float, express: bool) -> float:
    """Calculate shipping cost."""
    cost = 5 + (weight_kg * 2)
    if express:
        cost = cost * 2
    return cost`
      },
    ],
  },
  {
    id: "text_basics",
    title: "Text Processing Basics",
    description: "String Methods & Formatting",
    explanation: `
      <p class="mb-4">Strings are sequences of characters. Python provides powerful built-in methods for working with text.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common String Methods</h4>
      <p class="mb-2"><code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace()</code>, <code>.split()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Properties</h4>
      <p class="mb-2"><code>len(s)</code> for length, <code>in</code> to check containment, indexing with <code>s[0]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">f-Strings</h4>
      <p class="mb-2">f-strings embed expressions: <code>f"Hello {name}, you are {age} years old"</code></p>
    `,
    exampleCode: `def shout(text: str) -> str:
    """Return text in uppercase with exclamation."""
    return f"{text.upper()}!"

def clean_input(text: str) -> str:
    """Remove whitespace and convert to lowercase."""
    return text.strip().lower()

def get_initials(full_name: str) -> str:
    """Return initials from a full name."""
    parts = full_name.split()
    initials = ""
    for part in parts:
        initials += part[0].upper()
    return initials`,
    challenges: [
      {
        id: "033",
        number: 1,
        description: "Create a function `shout` that takes a string and returns it in all uppercase.",
        starterCode: `def shout(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def shout(text: str) -> str:
    """Convert text to uppercase."""
    return text.upper()`
      },
      {
        id: "034",
        number: 2,
        description: "Create a function `whisper` that takes a string and returns it in all lowercase.",
        starterCode: `def whisper(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def whisper(text: str) -> str:
    """Convert text to lowercase."""
    return text.lower()`
      },
      {
        id: "035",
        number: 3,
        description: "Create a function `string_length` that takes a string and returns its length.",
        starterCode: `def string_length(text: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def string_length(text: str) -> int:
    """Return the length of a string."""
    return len(text)`
      },
      {
        id: "036",
        number: 4,
        description: "Create a function `first_char` that takes a string and returns its first character.",
        starterCode: `def first_char(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def first_char(text: str) -> str:
    """Return the first character of text."""
    return text[0]`
      },
      {
        id: "037",
        number: 5,
        description: "Create a function `last_char` that takes a string and returns its last character.",
        starterCode: `def last_char(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def last_char(text: str) -> str:
    """Return the last character of text."""
    return text[-1]`
      },
      {
        id: "038",
        number: 6,
        description: "Create a function `contains_char` that takes a string and a character, returns `True` if the character is in the string.",
        starterCode: `def contains_char(text: str, char: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def contains_char(text: str, char: str) -> bool:
    """Check if character is in text."""
    return char in text`
      },
      {
        id: "039",
        number: 7,
        description: "Create a function `clean_string` that takes a string, removes leading/trailing whitespace, and returns it in lowercase.",
        starterCode: `def clean_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def clean_string(text: str) -> str:
    """Strip whitespace and convert to lowercase."""
    return text.strip().lower()`
      },
      {
        id: "040",
        number: 8,
        description: "Create a function `repeat_string` that takes a string and a number `n`, returns the string repeated `n` times.",
        starterCode: `def repeat_string(text: str, n: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def repeat_string(text: str, n: int) -> str:
    """Repeat text n times."""
    return text * n`
      },
      {
        id: "041",
        number: 9,
        description: "Create a function `replace_spaces` that takes a string and replaces all spaces with underscores.",
        starterCode: `def replace_spaces(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def replace_spaces(text: str) -> str:
    """Replace all spaces with underscores."""
    return text.replace(" ", "_")`
      },
      {
        id: "042",
        number: 10,
        description: "Create a function `format_currency` that takes a number and returns it as a currency string like `$19.99` with exactly 2 decimal places.",
        starterCode: `def format_currency(amount: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_currency(amount: float) -> str:
    """Format number as currency with $ and 2 decimals."""
    return f"\${amount:.2f}"`
      },
    ],
  },
  {
    id: "for_loops",
    title: "For Loops",
    description: "Iterating with Range and Sequences",
    explanation: `
      <p class="mb-4">For loops repeat code a specific number of times or iterate through items in a sequence.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">range() Function</h4>
      <p class="mb-2"><code>range(stop)</code> - 0 to stop-1<br><code>range(start, stop)</code> - start to stop-1<br><code>range(start, stop, step)</code> - with custom step</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating Strings</h4>
      <p class="mb-2"><code>for char in text:</code> loops through each character</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accumulator Pattern</h4>
      <p class="mb-2">Start with initial value, update in each iteration, return final result.</p>
    `,
    exampleCode: `def sum_to_n(n: int) -> int:
    """Return sum of numbers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

def count_char(text: str, target: str) -> int:
    """Count occurrences of target character in text."""
    count = 0
    for char in text:
        if char == target:
            count += 1
    return count`,
    challenges: [
      {
        id: "043",
        number: 1,
        description: "Create a function `sum_to_n` that takes an integer `n` and returns the sum of all integers from 1 to n (inclusive).",
        starterCode: `def sum_to_n(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_to_n(n: int) -> int:
    """Sum all integers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`
      },
      {
        id: "044",
        number: 2,
        description: "Create a function `factorial` that takes a non-negative integer and returns its factorial (n! = n × (n-1) × ... × 1). Note: 0! = 1.",
        starterCode: `def factorial(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def factorial(n: int) -> int:
    """Calculate n factorial."""
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result`
      },
      {
        id: "045",
        number: 3,
        description: "Create a function `count_char` that takes a string and a character, returns how many times that character appears.",
        starterCode: `def count_char(text: str, char: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_char(text: str, char: str) -> int:
    """Count occurrences of char in text."""
    count = 0
    for c in text:
        if c == char:
            count += 1
    return count`
      },
      {
        id: "046",
        number: 4,
        description: "Create a function `count_vowels` that takes a string and returns the count of vowels (a, e, i, o, u). Case insensitive.",
        starterCode: `def count_vowels(text: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_vowels(text: str) -> int:
    """Count vowels in text (case insensitive)."""
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count`
      },
      {
        id: "047",
        number: 5,
        description: "Create a function `power` that takes `base` and `exponent` and returns base^exponent using a loop (don't use **).",
        starterCode: `def power(base: int, exponent: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def power(base: int, exponent: int) -> int:
    """Calculate base to the power of exponent using a loop."""
    result = 1
    for _ in range(exponent):
        result *= base
    return result`
      },
      {
        id: "048",
        number: 6,
        description: "Create a function `reverse_string` that takes a string and returns it reversed. Don't use slicing [::-1].",
        starterCode: `def reverse_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def reverse_string(text: str) -> str:
    """Reverse a string using a loop."""
    result = ""
    for char in text:
        result = char + result
    return result`
      },
      {
        id: "049",
        number: 7,
        description: "Create a function `sum_even` that takes an integer `n` and returns the sum of all even numbers from 2 to n (inclusive).",
        starterCode: `def sum_even(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_even(n: int) -> int:
    """Sum all even numbers from 2 to n."""
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total`
      },
      {
        id: "050",
        number: 8,
        description: "Create a function `multiply_digits` that takes a positive integer and returns the product of all its digits.",
        starterCode: `def multiply_digits(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def multiply_digits(n: int) -> int:
    """Multiply all digits of a number."""
    result = 1
    for digit in str(n):
        result *= int(digit)
    return result`
      },
      {
        id: "051",
        number: 9,
        description: "Create a function `count_words` that takes a sentence and returns the number of words (words are separated by spaces).",
        starterCode: `def count_words(sentence: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_words(sentence: str) -> int:
    """Count words in a sentence."""
    if not sentence.strip():
        return 0
    return len(sentence.split())`
      },
      {
        id: "052",
        number: 10,
        description: "Create a function `times_table` that takes a number `n` and returns a string showing the times table from 1×n to 10×n, each on a new line.",
        starterCode: `def times_table(n: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def times_table(n: int) -> str:
    """Generate times table for n from 1 to 10."""
    lines = []
    for i in range(1, 11):
        lines.append(f"{i} x {n} = {i * n}")
    return "\\n".join(lines)`
      },
    ],
  },
  {
    id: "while_loops",
    title: "While Loops & Validation",
    description: "Condition-Based Iteration",
    explanation: `
      <p class="mb-4">While loops continue until a condition becomes False. They're useful when you don't know exactly how many iterations you need.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic While Loop</h4>
      <p class="mb-2"><code>while condition:</code> - continues as long as condition is True</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Avoid Infinite Loops</h4>
      <p class="mb-2">Always ensure the condition will eventually become False!</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Patterns</h4>
      <p class="mb-2">Counting down, processing until a condition is met, number manipulation.</p>
    `,
    exampleCode: `def count_digits(n: int) -> int:
    """Count how many digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count

def collatz_steps(n: int) -> int:
    """Count steps until n reaches 1 using Collatz sequence."""
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps`,
    challenges: [
      {
        id: "053",
        number: 1,
        description: "Create a function `count_digits` that takes a positive integer and returns how many digits it has.",
        starterCode: `def count_digits(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_digits(n: int) -> int:
    """Count digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count`
      },
      {
        id: "054",
        number: 2,
        description: "Create a function `sum_digits` that takes a positive integer and returns the sum of its digits.",
        starterCode: `def sum_digits(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_digits(n: int) -> int:
    """Sum all digits of a number."""
    total = 0
    n = abs(n)
    while n > 0:
        total += n % 10
        n //= 10
    return total`
      },
      {
        id: "055",
        number: 3,
        description: "Create a function `reverse_number` that takes a positive integer and returns it with digits reversed. E.g., 1234 → 4321.",
        starterCode: `def reverse_number(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def reverse_number(n: int) -> int:
    """Reverse the digits of a number."""
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return reversed_n`
      },
      {
        id: "056",
        number: 4,
        description: "Create a function `is_palindrome_number` that returns `True` if a positive integer reads the same forwards and backwards.",
        starterCode: `def is_palindrome_number(n: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_palindrome_number(n: int) -> bool:
    """Check if number is a palindrome."""
    original = n
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return original == reversed_n`
      },
      {
        id: "057",
        number: 5,
        description: "Create a function `gcd` that takes two positive integers and returns their Greatest Common Divisor using Euclid's algorithm.",
        starterCode: `def gcd(a: int, b: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def gcd(a: int, b: int) -> int:
    """Find GCD using Euclid's algorithm."""
    while b != 0:
        a, b = b, a % b
    return a`
      },
      {
        id: "058",
        number: 6,
        description: "Create a function `collatz_steps` that counts how many steps it takes to reach 1. If n is even, divide by 2. If odd, multiply by 3 and add 1.",
        starterCode: `def collatz_steps(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def collatz_steps(n: int) -> int:
    """Count Collatz sequence steps to reach 1."""
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps`
      },
      {
        id: "059",
        number: 7,
        description: "Create a function `is_prime` that returns `True` if a number is prime (greater than 1 and only divisible by 1 and itself).",
        starterCode: `def is_prime(n: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_prime(n: int) -> bool:
    """Check if number is prime."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True`
      },
      {
        id: "060",
        number: 8,
        description: "Create a function `next_prime` that takes an integer and returns the next prime number greater than it.",
        starterCode: `def next_prime(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def next_prime(n: int) -> int:
    """Find the next prime number after n."""
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True
    
    candidate = n + 1
    while not is_prime(candidate):
        candidate += 1
    return candidate`
      },
      {
        id: "061",
        number: 9,
        description: "Create a function `digital_root` that keeps summing digits until a single digit remains. E.g., 9875 → 29 → 11 → 2.",
        starterCode: `def digital_root(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def digital_root(n: int) -> int:
    """Keep summing digits until single digit remains."""
    while n >= 10:
        total = 0
        while n > 0:
            total += n % 10
            n //= 10
        n = total
    return n`
      },
      {
        id: "062",
        number: 10,
        description: "Create a function `binary_to_decimal` that takes a binary string (e.g., '1011') and returns the decimal integer (11).",
        starterCode: `def binary_to_decimal(binary: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def binary_to_decimal(binary: str) -> int:
    """Convert binary string to decimal integer."""
    result = 0
    power = 0
    for digit in reversed(binary):
        if digit == '1':
            result += 2 ** power
        power += 1
    return result`
      },
    ],
  },
  {
    id: "lists_basics",
    title: "Lists: The Basics",
    description: "Creating and Accessing Lists",
    explanation: `
      <p class="mb-4">Lists store ordered collections of items. They're one of Python's most versatile data structures.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Lists</h4>
      <p class="mb-2"><code>nums = [1, 2, 3]</code> or <code>empty = []</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Elements</h4>
      <p class="mb-2"><code>nums[0]</code> first element, <code>nums[-1]</code> last element</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Operations</h4>
      <p class="mb-2"><code>len()</code>, <code>in</code>, <code>.append()</code>, <code>.pop()</code></p>
    `,
    exampleCode: `def sum_list(numbers: list) -> int:
    """Return the sum of all numbers in the list."""
    total = 0
    for num in numbers:
        total += num
    return total

def find_max(numbers: list) -> int:
    """Find the largest number in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`,
    challenges: [
      {
        id: "063",
        number: 1,
        description: "Create a function `sum_list` that takes a list of numbers and returns their sum. Don't use the built-in `sum()` function.",
        starterCode: `def sum_list(numbers: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def sum_list(numbers: list) -> float:
    """Sum all numbers in a list."""
    total = 0
    for num in numbers:
        total += num
    return total`
      },
      {
        id: "064",
        number: 2,
        description: "Create a function `average` that takes a list of numbers and returns their average. Return 0 for an empty list.",
        starterCode: `def average(numbers: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def average(numbers: list) -> float:
    """Calculate average of numbers in a list."""
    if not numbers:
        return 0
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)`
      },
      {
        id: "065",
        number: 3,
        description: "Create a function `find_max` that takes a list of numbers and returns the largest. Don't use the built-in `max()` function.",
        starterCode: `def find_max(numbers: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def find_max(numbers: list) -> float:
    """Find the maximum value in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`
      },
      {
        id: "066",
        number: 4,
        description: "Create a function `find_min` that takes a list of numbers and returns the smallest. Don't use the built-in `min()` function.",
        starterCode: `def find_min(numbers: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def find_min(numbers: list) -> float:
    """Find the minimum value in a list."""
    if not numbers:
        return None
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    return smallest`
      },
      {
        id: "067",
        number: 5,
        description: "Create a function `count_item` that takes a list and an item, returns how many times that item appears in the list.",
        starterCode: `def count_item(items: list, target) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_item(items: list, target) -> int:
    """Count occurrences of target in list."""
    count = 0
    for item in items:
        if item == target:
            count += 1
    return count`
      },
      {
        id: "068",
        number: 6,
        description: "Create a function `first_and_last` that takes a list and returns a new list containing only the first and last elements.",
        starterCode: `def first_and_last(items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def first_and_last(items: list) -> list:
    """Return first and last elements of a list."""
    if len(items) < 2:
        return items.copy()
    return [items[0], items[-1]]`
      },
      {
        id: "069",
        number: 7,
        description: "Create a function `reverse_list` that takes a list and returns it reversed. Don't use `.reverse()` or `[::-1]`.",
        starterCode: `def reverse_list(items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def reverse_list(items: list) -> list:
    """Reverse a list without built-in methods."""
    result = []
    for i in range(len(items) - 1, -1, -1):
        result.append(items[i])
    return result`
      },
      {
        id: "070",
        number: 8,
        description: "Create a function `contains` that takes a list and an item, returns `True` if the item is in the list. Don't use the `in` operator.",
        starterCode: `def contains(items: list, target) -> bool:
    # Your code here
    pass`,
        solutionCode: `def contains(items: list, target) -> bool:
    """Check if target is in list without using 'in'."""
    for item in items:
        if item == target:
            return True
    return False`
      },
      {
        id: "071",
        number: 9,
        description: "Create a function `find_index` that takes a list and a target value. Return the index of the first occurrence, or -1 if not found.",
        starterCode: `def find_index(items: list, target) -> int:
    # Your code here
    pass`,
        solutionCode: `def find_index(items: list, target) -> int:
    """Find index of first occurrence of target."""
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1`
      },
      {
        id: "072",
        number: 10,
        description: "Create a function `all_positive` that takes a list of numbers and returns `True` if ALL numbers are positive.",
        starterCode: `def all_positive(numbers: list) -> bool:
    # Your code here
    pass`,
        solutionCode: `def all_positive(numbers: list) -> bool:
    """Check if all numbers are positive."""
    for num in numbers:
        if num <= 0:
            return False
    return True`
      },
    ],
  },
  {
    id: "lists_transformation",
    title: "Transforming Lists",
    description: "Filtering, Mapping & Building New Lists",
    explanation: `
      <p class="mb-4">Often we need to create new lists based on existing ones - filtering items, transforming values, or combining data.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Filter Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add items that meet condition.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Map Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add transformed version of each item.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>items[start:end]</code> - elements from start to end-1</p>
    `,
    exampleCode: `def filter_positive(numbers: list) -> list:
    """Return only positive numbers from the list."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result

def double_all(numbers: list) -> list:
    """Return a new list with all numbers doubled."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,
    challenges: [
      {
        id: "073",
        number: 1,
        description: "Create a function `filter_positive` that takes a list of numbers and returns a new list containing only the positive numbers.",
        starterCode: `def filter_positive(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_positive(numbers: list) -> list:
    """Filter to only positive numbers."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result`
      },
      {
        id: "074",
        number: 2,
        description: "Create a function `filter_even` that takes a list of integers and returns a new list containing only the even numbers.",
        starterCode: `def filter_even(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_even(numbers: list) -> list:
    """Filter to only even numbers."""
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result`
      },
      {
        id: "075",
        number: 3,
        description: "Create a function `double_all` that takes a list of numbers and returns a new list with each number doubled.",
        starterCode: `def double_all(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def double_all(numbers: list) -> list:
    """Double each number in the list."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`
      },
      {
        id: "076",
        number: 4,
        description: "Create a function `square_all` that takes a list of numbers and returns a new list with each number squared.",
        starterCode: `def square_all(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def square_all(numbers: list) -> list:
    """Square each number in the list."""
    result = []
    for num in numbers:
        result.append(num ** 2)
    return result`
      },
      {
        id: "077",
        number: 5,
        description: "Create a function `filter_long_words` that takes a list of strings and a minimum length, returns only strings at least that long.",
        starterCode: `def filter_long_words(words: list, min_length: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_long_words(words: list, min_length: int) -> list:
    """Filter words by minimum length."""
    result = []
    for word in words:
        if len(word) >= min_length:
            result.append(word)
    return result`
      },
      {
        id: "078",
        number: 6,
        description: "Create a function `remove_duplicates` that takes a list and returns a new list with duplicates removed, preserving order.",
        starterCode: `def remove_duplicates(items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def remove_duplicates(items: list) -> list:
    """Remove duplicates while preserving order."""
    seen = []
    result = []
    for item in items:
        if item not in seen:
            seen.append(item)
            result.append(item)
    return result`
      },
      {
        id: "079",
        number: 7,
        description: "Create a function `uppercase_all` that takes a list of strings and returns a new list with all strings in uppercase.",
        starterCode: `def uppercase_all(words: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def uppercase_all(words: list) -> list:
    """Convert all strings to uppercase."""
    result = []
    for word in words:
        result.append(word.upper())
    return result`
      },
      {
        id: "080",
        number: 8,
        description: "Create a function `get_lengths` that takes a list of strings and returns a list of their lengths.",
        starterCode: `def get_lengths(words: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def get_lengths(words: list) -> list:
    """Get length of each string in list."""
    result = []
    for word in words:
        result.append(len(word))
    return result`
      },
      {
        id: "081",
        number: 9,
        description: "Create a function `filter_by_index` that takes a list and returns only elements at even indices (0, 2, 4, ...).",
        starterCode: `def filter_by_index(items: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_by_index(items: list) -> list:
    """Return elements at even indices."""
    result = []
    for i in range(0, len(items), 2):
        result.append(items[i])
    return result`
      },
      {
        id: "082",
        number: 10,
        description: "Create a function `running_sum` that takes a list of numbers and returns a new list where each element is the sum of all elements up to that point. [1,2,3] → [1,3,6]",
        starterCode: `def running_sum(numbers: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def running_sum(numbers: list) -> list:
    """Calculate running sum of list."""
    result = []
    total = 0
    for num in numbers:
        total += num
        result.append(total)
    return result`
      },
    ],
  },
  {
    id: "dictionaries",
    title: "Dictionaries",
    description: "Key-Value Data Structures",
    explanation: `
      <p class="mb-4">Dictionaries store data as key-value pairs, allowing fast lookup by key.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Dictionaries</h4>
      <p class="mb-2"><code>person = {"name": "Alice", "age": 30}</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Values</h4>
      <p class="mb-2"><code>d[key]</code> raises error if missing, <code>d.get(key, default)</code> returns default if missing</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating</h4>
      <p class="mb-2"><code>for key in d:</code> or <code>for key, value in d.items():</code></p>
    `,
    exampleCode: `def count_chars(text: str) -> dict:
    """Count occurrences of each character."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts

def get_values(data: dict, keys: list) -> list:
    """Return list of values for given keys."""
    result = []
    for key in keys:
        if key in data:
            result.append(data[key])
    return result`,
    challenges: [
      {
        id: "083",
        number: 1,
        description: "Create a function `count_chars` that takes a string and returns a dictionary with each character as a key and its count as the value.",
        starterCode: `def count_chars(text: str) -> dict:
    # Your code here
    pass`,
        solutionCode: `def count_chars(text: str) -> dict:
    """Count character frequencies."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts`
      },
      {
        id: "084",
        number: 2,
        description: "Create a function `count_words` that takes a sentence and returns a dictionary counting each word. Convert to lowercase first.",
        starterCode: `def count_words(sentence: str) -> dict:
    # Your code here
    pass`,
        solutionCode: `def count_words(sentence: str) -> dict:
    """Count word frequencies in a sentence."""
    counts = {}
    words = sentence.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts`
      },
      {
        id: "085",
        number: 3,
        description: "Create a function `invert_dict` that takes a dictionary and returns a new dictionary with keys and values swapped.",
        starterCode: `def invert_dict(d: dict) -> dict:
    # Your code here
    pass`,
        solutionCode: `def invert_dict(d: dict) -> dict:
    """Swap keys and values in dictionary."""
    result = {}
    for key, value in d.items():
        result[value] = key
    return result`
      },
      {
        id: "086",
        number: 4,
        description: "Create a function `merge_dicts` that takes two dictionaries and returns a new one containing all key-value pairs. If a key exists in both, use the value from the second dictionary.",
        starterCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    # Your code here
    pass`,
        solutionCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    """Merge two dictionaries, second takes precedence."""
    result = {}
    for key, value in d1.items():
        result[key] = value
    for key, value in d2.items():
        result[key] = value
    return result`
      },
      {
        id: "087",
        number: 5,
        description: "Create a function `dict_from_lists` that takes a list of keys and a list of values and returns a dictionary pairing them up.",
        starterCode: `def dict_from_lists(keys: list, values: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def dict_from_lists(keys: list, values: list) -> dict:
    """Create dictionary from parallel lists."""
    result = {}
    for i in range(len(keys)):
        result[keys[i]] = values[i]
    return result`
      },
      {
        id: "088",
        number: 6,
        description: "Create a function `filter_dict` that takes a dictionary and a minimum value, returns a new dictionary with only entries where value >= minimum.",
        starterCode: `def filter_dict(d: dict, min_value: float) -> dict:
    # Your code here
    pass`,
        solutionCode: `def filter_dict(d: dict, min_value: float) -> dict:
    """Filter dictionary by minimum value."""
    result = {}
    for key, value in d.items():
        if value >= min_value:
            result[key] = value
    return result`
      },
      {
        id: "089",
        number: 7,
        description: "Create a function `get_value_safely` that takes a dictionary, a key, and a default. Return the value for the key if it exists, otherwise return the default.",
        starterCode: `def get_value_safely(d: dict, key: str, default):
    # Your code here
    pass`,
        solutionCode: `def get_value_safely(d: dict, key: str, default):
    """Get value with fallback default."""
    if key in d:
        return d[key]
    return default`
      },
      {
        id: "090",
        number: 8,
        description: "Create a function `group_by_length` that takes a list of strings and returns a dictionary where keys are lengths and values are lists of strings with that length.",
        starterCode: `def group_by_length(words: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def group_by_length(words: list) -> dict:
    """Group words by their length."""
    result = {}
    for word in words:
        length = len(word)
        if length not in result:
            result[length] = []
        result[length].append(word)
    return result`
      },
      {
        id: "091",
        number: 9,
        description: "Create a function `most_common` that takes a string and returns the most frequently occurring character.",
        starterCode: `def most_common(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def most_common(text: str) -> str:
    """Find most common character in text."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    
    max_char = text[0]
    max_count = counts[max_char]
    for char, count in counts.items():
        if count > max_count:
            max_char = char
            max_count = count
    return max_char`
      },
      {
        id: "092",
        number: 10,
        description: "Create a function `sum_values` that takes a dictionary with numeric values and returns the sum of all values.",
        starterCode: `def sum_values(d: dict) -> float:
    # Your code here
    pass`,
        solutionCode: `def sum_values(d: dict) -> float:
    """Sum all values in a dictionary."""
    total = 0
    for value in d.values():
        total += value
    return total`
      },
    ],
  },
  {
    id: "string_mastery",
    title: "String Mastery",
    description: "Advanced String Operations",
    explanation: `
      <p class="mb-4">Mastering strings means combining multiple operations and handling edge cases.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>s[start:end]</code>, <code>s[:end]</code>, <code>s[start:]</code>, <code>s[::-1]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Methods</h4>
      <p class="mb-2"><code>.startswith()</code>, <code>.endswith()</code>, <code>.isalpha()</code>, <code>.isdigit()</code>, <code>.join()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Building Strings</h4>
      <p class="mb-2">Concatenate with <code>+</code> or join a list of strings.</p>
    `,
    exampleCode: `def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome (ignoring case and spaces)."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

def extract_numbers(text: str) -> str:
    """Extract only the digits from a string."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,
    challenges: [
      {
        id: "093",
        number: 1,
        description: "Create a function `is_palindrome` that returns `True` if a string is a palindrome. Ignore case and spaces.",
        starterCode: `def is_palindrome(text: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]`
      },
      {
        id: "094",
        number: 2,
        description: "Create a function `remove_vowels` that takes a string and returns it with all vowels removed.",
        starterCode: `def remove_vowels(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def remove_vowels(text: str) -> str:
    """Remove all vowels from text."""
    vowels = "aeiouAEIOU"
    result = ""
    for char in text:
        if char not in vowels:
            result += char
    return result`
      },
      {
        id: "095",
        number: 3,
        description: "Create a function `capitalize_words` that takes a sentence and returns it with each word capitalized.",
        starterCode: `def capitalize_words(sentence: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def capitalize_words(sentence: str) -> str:
    """Capitalize first letter of each word."""
    words = sentence.split()
    result = []
    for word in words:
        result.append(word.capitalize())
    return " ".join(result)`
      },
      {
        id: "096",
        number: 4,
        description: "Create a function `extract_digits` that takes a string and returns a string containing only the digit characters.",
        starterCode: `def extract_digits(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def extract_digits(text: str) -> str:
    """Extract only digits from text."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`
      },
      {
        id: "097",
        number: 5,
        description: "Create a function `mask_string` that takes a string and returns it with all but the last 4 characters replaced with '*'. If 4 or fewer chars, return all '*'.",
        starterCode: `def mask_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def mask_string(text: str) -> str:
    """Mask all but last 4 characters."""
    if len(text) <= 4:
        return "*" * len(text)
    return "*" * (len(text) - 4) + text[-4:]`
      },
      {
        id: "098",
        number: 6,
        description: "Create a function `is_anagram` that takes two strings and returns `True` if they are anagrams (contain same letters in different order). Ignore case and spaces.",
        starterCode: `def is_anagram(s1: str, s2: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_anagram(s1: str, s2: str) -> bool:
    """Check if two strings are anagrams."""
    clean1 = s1.lower().replace(" ", "")
    clean2 = s2.lower().replace(" ", "")
    return sorted(clean1) == sorted(clean2)`
      },
      {
        id: "099",
        number: 7,
        description: "Create a function `longest_word` that takes a sentence and returns the longest word. If there's a tie, return the first one.",
        starterCode: `def longest_word(sentence: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def longest_word(sentence: str) -> str:
    """Find the longest word in a sentence."""
    words = sentence.split()
    if not words:
        return ""
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest`
      },
      {
        id: "100",
        number: 8,
        description: "Create a function `compress_string` that takes a string and returns a compressed version. 'aabbbcccc' → 'a2b3c4'. If compression isn't shorter, return original.",
        starterCode: `def compress_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def compress_string(text: str) -> str:
    """Compress string using run-length encoding."""
    if not text:
        return text
    
    result = ""
    current = text[0]
    count = 1
    
    for i in range(1, len(text)):
        if text[i] == current:
            count += 1
        else:
            result += current + str(count)
            current = text[i]
            count = 1
    result += current + str(count)
    
    if len(result) < len(text):
        return result
    return text`
      },
    ],
  },
  {
    id: "combining_structures",
    title: "Combining Data Structures",
    description: "Lists of Dicts, Nested Data",
    explanation: `
      <p class="mb-4">Real-world data often involves nested structures - lists containing dictionaries, dictionaries containing lists, etc.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">List of Dictionaries</h4>
      <p class="mb-2">Common pattern for tabular data like records or rows.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Nested Access</h4>
      <p class="mb-2"><code>data[0]["name"]</code> - first item's name field</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Processing Nested Data</h4>
      <p class="mb-2">Often requires nested loops or multiple steps.</p>
    `,
    exampleCode: `def get_names(people: list) -> list:
    """Extract all names from list of person dictionaries."""
    names = []
    for person in people:
        names.append(person["name"])
    return names

def total_price(cart: list) -> float:
    """Calculate total from shopping cart items."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,
    challenges: [
      {
        id: "101",
        number: 1,
        description: "Create a function `get_names` that takes a list of dictionaries (each with a 'name' key) and returns a list of all names.",
        starterCode: `def get_names(people: list) -> list:
    # Example: [{'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}]
    # Your code here
    pass`,
        solutionCode: `def get_names(people: list) -> list:
    """Extract names from list of person dicts."""
    names = []
    for person in people:
        names.append(person["name"])
    return names`
      },
      {
        id: "102",
        number: 2,
        description: "Create a function `filter_by_key` that takes a list of dicts, a key, and a value. Return only dicts where that key equals that value.",
        starterCode: `def filter_by_key(items: list, key: str, value) -> list:
    # Your code here
    pass`,
        solutionCode: `def filter_by_key(items: list, key: str, value) -> list:
    """Filter list of dicts by key-value match."""
    result = []
    for item in items:
        if item.get(key) == value:
            result.append(item)
    return result`
      },
      {
        id: "103",
        number: 3,
        description: "Create a function `cart_total` that takes a list of items with 'price' and 'quantity' keys. Return the total cost.",
        starterCode: `def cart_total(cart: list) -> float:
    # Example: [{'name': 'Apple', 'price': 1.50, 'quantity': 3}]
    # Your code here
    pass`,
        solutionCode: `def cart_total(cart: list) -> float:
    """Calculate total cost of shopping cart."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`
      },
      {
        id: "104",
        number: 4,
        description: "Create a function `average_by_key` that takes a list of dicts and a key. Return the average of all values for that key.",
        starterCode: `def average_by_key(items: list, key: str) -> float:
    # Your code here
    pass`,
        solutionCode: `def average_by_key(items: list, key: str) -> float:
    """Calculate average of a specific key across dicts."""
    if not items:
        return 0
    total = 0
    for item in items:
        total += item[key]
    return total / len(items)`
      },
      {
        id: "105",
        number: 5,
        description: "Create a function `find_by_id` that takes a list of dicts (each with an 'id' key) and an id value. Return the matching dict or None.",
        starterCode: `def find_by_id(items: list, target_id: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `def find_by_id(items: list, target_id: int) -> dict:
    """Find dict by id value."""
    for item in items:
        if item.get("id") == target_id:
            return item
    return None`
      },
      {
        id: "106",
        number: 6,
        description: "Create a function `group_by_key` that takes a list of dicts and a key name. Return a dict grouping items by their value for that key.",
        starterCode: `def group_by_key(items: list, key: str) -> dict:
    # Your code here
    pass`,
        solutionCode: `def group_by_key(items: list, key: str) -> dict:
    """Group items by the value of a specific key."""
    result = {}
    for item in items:
        value = item.get(key)
        if value not in result:
            result[value] = []
        result[value].append(item)
    return result`
      },
      {
        id: "107",
        number: 7,
        description: "Create a function `flatten` that takes a list of lists and returns a single flat list containing all elements.",
        starterCode: `def flatten(nested: list) -> list:
    # Example: [[1, 2], [3, 4, 5]] -> [1, 2, 3, 4, 5]
    # Your code here
    pass`,
        solutionCode: `def flatten(nested: list) -> list:
    """Flatten a list of lists."""
    result = []
    for sublist in nested:
        for item in sublist:
            result.append(item)
    return result`
      },
      {
        id: "108",
        number: 8,
        description: "Create a function `sort_by_key` that takes a list of dicts and a key name. Return the list sorted by that key's value.",
        starterCode: `def sort_by_key(items: list, key: str) -> list:
    # Your code here
    pass`,
        solutionCode: `def sort_by_key(items: list, key: str) -> list:
    """Sort list of dicts by a specific key."""
    # Simple bubble sort implementation
    result = items.copy()
    n = len(result)
    for i in range(n):
        for j in range(0, n - i - 1):
            if result[j][key] > result[j + 1][key]:
                result[j], result[j + 1] = result[j + 1], result[j]
    return result`
      },
    ],
  },
  {
    id: "capstone",
    title: "Capstone Challenges",
    description: "Put Everything Together",
    explanation: `
      <p class="mb-4">These challenges combine everything you've learned. They require functions, loops, conditionals, lists, dictionaries, and string manipulation.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Problem-Solving Approach</h4>
      <p class="mb-2">1. Understand the problem fully<br>2. Work through examples by hand<br>3. Plan your approach<br>4. Code it step by step<br>5. Test with edge cases</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Tips</h4>
      <p class="mb-2">Break complex problems into smaller functions. Test each piece before combining.</p>
    `,
    exampleCode: `def validate_password(password: str) -> dict:
    """Check password strength and return validation results."""
    results = {
        "valid": True,
        "errors": []
    }
    
    if len(password) < 8:
        results["errors"].append("Must be at least 8 characters")
        results["valid"] = False
    
    has_upper = False
    for char in password:
        if char.isupper():
            has_upper = True
            break
    
    if not has_upper:
        results["errors"].append("Must contain uppercase letter")
        results["valid"] = False
    
    return results`,
    challenges: [
      {
        id: "109",
        number: 1,
        description: "Create a function `validate_password` that takes a password string. Return a dict with 'valid' (bool) and 'errors' (list). Check: min 8 chars, has uppercase, has lowercase, has digit.",
        starterCode: `def validate_password(password: str) -> dict:
    # Your code here
    pass`,
        solutionCode: `def validate_password(password: str) -> dict:
    """Validate password strength."""
    errors = []
    
    if len(password) < 8:
        errors.append("Must be at least 8 characters")
    
    has_upper = False
    has_lower = False
    has_digit = False
    
    for char in password:
        if char.isupper():
            has_upper = True
        if char.islower():
            has_lower = True
        if char.isdigit():
            has_digit = True
    
    if not has_upper:
        errors.append("Must contain uppercase letter")
    if not has_lower:
        errors.append("Must contain lowercase letter")
    if not has_digit:
        errors.append("Must contain a digit")
    
    return {"valid": len(errors) == 0, "errors": errors}`
      },
      {
        id: "110",
        number: 2,
        description: "Create a function `format_duration` that takes seconds and returns a human-readable string like '2 hours, 3 minutes, 45 seconds'. Omit zero values.",
        starterCode: `def format_duration(seconds: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_duration(seconds: int) -> str:
    """Format seconds as human-readable duration."""
    if seconds == 0:
        return "0 seconds"
    
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    
    parts = []
    if hours > 0:
        parts.append(f"{hours} hour" + ("s" if hours > 1 else ""))
    if minutes > 0:
        parts.append(f"{minutes} minute" + ("s" if minutes > 1 else ""))
    if secs > 0:
        parts.append(f"{secs} second" + ("s" if secs > 1 else ""))
    
    return ", ".join(parts)`
      },
      {
        id: "111",
        number: 3,
        description: "Create a function `calculate_grade_stats` that takes a list of student dicts with 'name' and 'score'. Return a dict with 'average', 'highest', 'lowest', 'passing' (score >= 60 count).",
        starterCode: `def calculate_grade_stats(students: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def calculate_grade_stats(students: list) -> dict:
    """Calculate statistics from student grades."""
    if not students:
        return {"average": 0, "highest": 0, "lowest": 0, "passing": 0}
    
    scores = [s["score"] for s in students]
    
    total = 0
    highest = scores[0]
    lowest = scores[0]
    passing = 0
    
    for score in scores:
        total += score
        if score > highest:
            highest = score
        if score < lowest:
            lowest = score
        if score >= 60:
            passing += 1
    
    return {
        "average": total / len(scores),
        "highest": highest,
        "lowest": lowest,
        "passing": passing
    }`
      },
      {
        id: "112",
        number: 4,
        description: "Create a function `word_frequency` that takes a text string and returns the top 5 most common words (lowercase) as a list of tuples (word, count).",
        starterCode: `def word_frequency(text: str) -> list:
    # Your code here
    pass`,
        solutionCode: `def word_frequency(text: str) -> list:
    """Find top 5 most common words."""
    # Count words
    counts = {}
    words = text.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    
    # Convert to list of tuples and sort
    items = list(counts.items())
    
    # Simple bubble sort by count (descending)
    n = len(items)
    for i in range(n):
        for j in range(0, n - i - 1):
            if items[j][1] < items[j + 1][1]:
                items[j], items[j + 1] = items[j + 1], items[j]
    
    return items[:5]`
      },
      {
        id: "113",
        number: 5,
        description: "Create a function `valid_brackets` that takes a string containing only '()[]{}' and returns True if all brackets are properly matched and nested.",
        starterCode: `def valid_brackets(s: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def valid_brackets(s: str) -> bool:
    """Check if brackets are properly matched."""
    stack = []
    pairs = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack:
                return False
            if stack[-1] != pairs[char]:
                return False
            stack.pop()
    
    return len(stack) == 0`
      },
      {
        id: "114",
        number: 6,
        description: "Create a function `merge_sorted` that takes two sorted lists and returns a single sorted list containing all elements.",
        starterCode: `def merge_sorted(list1: list, list2: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def merge_sorted(list1: list, list2: list) -> list:
    """Merge two sorted lists into one sorted list."""
    result = []
    i = 0
    j = 0
    
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    
    # Add remaining elements
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1
    
    return result`
      },
      {
        id: "115",
        number: 7,
        description: "Create a function `caesar_cipher` that takes a string and a shift amount. Shift each letter by that amount in the alphabet. Wrap around (z + 1 = a). Keep non-letters unchanged.",
        starterCode: `def caesar_cipher(text: str, shift: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def caesar_cipher(text: str, shift: int) -> str:
    """Apply Caesar cipher to text."""
    result = ""
    for char in text:
        if char.isalpha():
            # Determine base (a or A)
            base = ord('a') if char.islower() else ord('A')
            # Shift and wrap around
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result`
      },
      {
        id: "116",
        number: 8,
        description: "Create a function `calculate_invoice` that takes a list of line items with 'quantity', 'unit_price', and optional 'discount' (percentage). Return subtotal, total_discount, and grand_total.",
        starterCode: `def calculate_invoice(items: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def calculate_invoice(items: list) -> dict:
    """Calculate invoice totals with discounts."""
    subtotal = 0
    total_discount = 0
    
    for item in items:
        line_total = item["quantity"] * item["unit_price"]
        subtotal += line_total
        
        if "discount" in item:
            discount = line_total * (item["discount"] / 100)
            total_discount += discount
    
    grand_total = subtotal - total_discount
    
    return {
        "subtotal": round(subtotal, 2),
        "total_discount": round(total_discount, 2),
        "grand_total": round(grand_total, 2)
    }`
      },
    ],
  },
];
