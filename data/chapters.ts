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
                title: "Health Calculator",
                description: "Create a function `calculate_health` that takes `current_health` and `damage`. Return the remaining health.",
                hint: "Subtract damage from current_health.",
                starterCode: `def calculate_health(current_health: int, damage: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def calculate_health(current_health: int, damage: int) -> int:
    """Calculate remaining health."""
    return current_health - damage`,
                testCases: [
                    { input: "calculate_health(100, 25)", expected: "75" },
                    { input: "calculate_health(50, 50)", expected: "0" },
                    { input: "calculate_health(100, 0)", expected: "100" },
                    { input: "calculate_health(75, 30)", expected: "45" },
                    { input: "calculate_health(200, 150)", expected: "50" }
                ]
            },
            {
                id: "002",
                number: 2,
                title: "Double XP",
                description: "Create a function `double_xp` that takes `base_xp` and returns it multiplied by 2.",
                hint: "Return base_xp * 2.",
                starterCode: `def double_xp(base_xp: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def double_xp(base_xp: int) -> int:
    """Double the XP."""
    return base_xp * 2`,
                testCases: [
                    { input: "double_xp(50)", expected: "100" },
                    { input: "double_xp(0)", expected: "0" },
                    { input: "double_xp(125)", expected: "250" },
                    { input: "double_xp(1)", expected: "2" },
                    { input: "double_xp(999)", expected: "1998" }
                ]
            },
            {
                id: "003",
                number: 3,
                title: "Welcome Message",
                description: "Create a function `welcome_user` that takes a `username` (string) and returns the message \"Welcome back, {username}!\".",
                hint: "Use an f-string: f\"Welcome back, {username}!\"",
                starterCode: `def welcome_user(username: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def welcome_user(username: str) -> str:
    """Return a welcome message."""
    return f"Welcome back, {username}!"`,
                testCases: [
                    { input: "welcome_user('Sarah')", expected: "'Welcome back, Sarah!'" },
                    { input: "welcome_user('Player1')", expected: "'Welcome back, Player1!'" },
                    { input: "welcome_user('Dr. Python')", expected: "'Welcome back, Dr. Python!'" },
                    { input: "welcome_user('Ada')", expected: "'Welcome back, Ada!'" },
                    { input: "welcome_user('NeuralNinja')", expected: "'Welcome back, NeuralNinja!'" }
                ]
            },
            {
                id: "004",
                number: 4,
                title: "Total Score",
                description: "Create a function `total_trials` that takes three scores (`trial1`, `trial2`, `trial3`) and returns their sum.",
                hint: "Add all three numbers: trial1 + trial2 + trial3",
                starterCode: `def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    """Sum three numbers."""
    return trial1 + trial2 + trial3`,
                testCases: [
                    { input: "total_trials(85, 90, 88)", expected: "263" },
                    { input: "total_trials(100, 100, 100)", expected: "300" },
                    { input: "total_trials(0, 0, 0)", expected: "0" },
                    { input: "total_trials(50, 75, 25)", expected: "150" },
                    { input: "total_trials(33, 33, 34)", expected: "100" }
                ]
            },
            {
                id: "005",
                number: 5,
                title: "Format Name",
                description: "Create a function `format_author` that takes `first_name` and `last_name` and returns them as \"Last, First\".",
                hint: "Use an f-string: f\"{last_name}, {first_name}\"",
                starterCode: `def format_author(first_name: str, last_name: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def format_author(first_name: str, last_name: str) -> str:
    """Format name as Last, First."""
    return f"{last_name}, {first_name}"`,
                testCases: [
                    { input: "format_author('Ada', 'Lovelace')", expected: "'Lovelace, Ada'" },
                    { input: "format_author('Alan', 'Turing')", expected: "'Turing, Alan'" },
                    { input: "format_author('Marie', 'Curie')", expected: "'Curie, Marie'" },
                    { input: "format_author('Santiago', 'Cajal')", expected: "'Cajal, Santiago'" },
                    { input: "format_author('Rosalind', 'Franklin')", expected: "'Franklin, Rosalind'" }
                ]
            },
            {
                id: "006",
                number: 6,
                title: "Total Pixels",
                description: "Create a function `total_pixels` that takes `width` and `height` and returns the total number of pixels (width multiplied by height).",
                hint: "Multiply width * height.",
                starterCode: `def total_pixels(width: int, height: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def total_pixels(width: int, height: int) -> int:
    """Calculate width * height."""
    return width * height`,
                testCases: [
                    { input: "total_pixels(1920, 1080)", expected: "2073600" },
                    { input: "total_pixels(100, 100)", expected: "10000" },
                    { input: "total_pixels(640, 480)", expected: "307200" },
                    { input: "total_pixels(1, 1)", expected: "1" },
                    { input: "total_pixels(3840, 2160)", expected: "8294400" }
                ]
            },
            {
                id: "007",
                number: 7,
                title: "Average Duration",
                description: "Create a function `average_duration` that takes `song1` and `song2` (seconds) and returns the average duration as a float.",
                hint: "Add song1 + song2, then divide by 2.",
                starterCode: `def average_duration(song1: int, song2: int) -> float:
    # Your code here
    pass`,
                solutionCode: `def average_duration(song1: int, song2: int) -> float:
    """Calculate average of two numbers."""
    return (song1 + song2) / 2`,
                testCases: [
                    { input: "average_duration(180, 240)", expected: "210.0" },
                    { input: "average_duration(200, 200)", expected: "200.0" },
                    { input: "average_duration(300, 100)", expected: "200.0" },
                    { input: "average_duration(0, 120)", expected: "60.0" },
                    { input: "average_duration(185, 215)", expected: "200.0" }
                ]
            },
            {
                id: "008",
                number: 8,
                title: "Cube Number",
                description: "Create a function `cube` that takes a number `n` and returns `n` cubed (n to the power of 3).",
                hint: "Use n ** 3 or n * n * n.",
                starterCode: `def cube(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def cube(n: int) -> int:
    """Calculate n cubed."""
    return n ** 3`,
                testCases: [
                    { input: "cube(4)", expected: "64" },
                    { input: "cube(2)", expected: "8" },
                    { input: "cube(10)", expected: "1000" },
                    { input: "cube(1)", expected: "1" },
                    { input: "cube(5)", expected: "125" }
                ]
            },
            {
                id: "009",
                number: 9,
                title: "Log Entry",
                description: "Create a function `log_entry` that takes a `name` and a `day` number. Return a message: \"Day {day}: Logged by {name}\".",
                hint: "Use an f-string: f\"Day {day}: Logged by {name}\".",
                starterCode: `def log_entry(name: str, day: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def log_entry(name: str, day: int) -> str:
    """Format a log entry."""
    return f"Day {day}: Logged by {name}"`,
                testCases: [
                    { input: "log_entry('Chen', 5)", expected: "'Day 5: Logged by Chen'" },
                    { input: "log_entry('Sarah', 1)", expected: "'Day 1: Logged by Sarah'" },
                    { input: "log_entry('Team', 100)", expected: "'Day 100: Logged by Team'" },
                    { input: "log_entry('AI', 42)", expected: "'Day 42: Logged by AI'" },
                    { input: "log_entry('Prof', 365)", expected: "'Day 365: Logged by Prof'" }
                ]
            },
            {
                id: "010",
                number: 10,
                title: "Calculate Percentage",
                description: "Create a function `accuracy_rate` that takes `correct` and `total` samples. Return the percentage (correct / total * 100).",
                hint: "(correct / total) * 100.",
                starterCode: `def accuracy_rate(correct: int, total: int) -> float:
    # Your code here
    pass`,
                solutionCode: `def accuracy_rate(correct: int, total: int) -> float:
    """Calculate percentage."""
    return (correct / total) * 100`,
                testCases: [
                    { input: "accuracy_rate(45, 50)", expected: "90.0" },
                    { input: "accuracy_rate(100, 100)", expected: "100.0" },
                    { input: "accuracy_rate(75, 100)", expected: "75.0" },
                    { input: "accuracy_rate(1, 4)", expected: "25.0" },
                    { input: "accuracy_rate(88, 100)", expected: "88.0" }
                ]
            },
            {
                id: "011-assessment",
                number: 11,
                title: "Unit Conversion Report",
                description: "Create a function `convert_and_report` that takes `km` (distance) and `celsius` (temperature). Convert them to miles (km * 0.621) and Fahrenheit ((c * 9/5) + 32). Return a string: 'Distance: X miles | Temp: Y F'. Round values to 1 decimal place.",
                hint: "Perform conversions. Use `round()`. Return combined string.",
                starterCode: `def convert_and_report(km: float, celsius: float) -> str:
    # Your code here
    pass`,
                solutionCode: `def convert_and_report(km: float, celsius: float) -> str:
    """Convert units and return report."""
    miles = round(km * 0.621, 1)
    fahrenheit = round((celsius * 9/5) + 32, 1)
    return f"Distance: {miles} miles | Temp: {fahrenheit} F"`,
                testCases: [
                    { input: "convert_and_report(100, 0)", expected: "'Distance: 62.1 miles | Temp: 32.0 F'" },
                    { input: "convert_and_report(10, 100)", expected: "'Distance: 6.2 miles | Temp: 212.0 F'" },
                    { input: "convert_and_report(5, 20)", expected: "'Distance: 3.1 miles | Temp: 68.0 F'" },
                    { input: "convert_and_report(0, -40)", expected: "'Distance: 0.0 miles | Temp: -40.0 F'" },
                    { input: "convert_and_report(42.195, 25)", expected: "'Distance: 26.2 miles | Temp: 77.0 F'" }
                ]
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
                title: "Temp Converter",
                description: "Create a function `celsius_to_fahrenheit` that converts Celsius to Fahrenheit using the formula: (celsius * 9/5) + 32.",
                hint: "Multiply by 9, divide by 5, then add 32.",
                starterCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32`,
                testCases: [
                    { input: "celsius_to_fahrenheit(0)", expected: "32.0" },
                    { input: "celsius_to_fahrenheit(100)", expected: "212.0" },
                    { input: "celsius_to_fahrenheit(-40)", expected: "-40.0" },
                    { input: "celsius_to_fahrenheit(37)", expected: "98.6" },
                    { input: "celsius_to_fahrenheit(25)", expected: "77.0" }
                ]
            },
            {
                id: "012",
                number: 2,
                title: "Reverse Converter",
                description: "Create a function `fahrenheit_to_celsius` that converts Fahrenheit to Celsius using formula: (fahrenheit - 32) * 5/9.",
                hint: "Subtract 32 first, then multiply by 5/9.",
                starterCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9`,
                testCases: [
                    { input: "fahrenheit_to_celsius(32)", expected: "0.0" },
                    { input: "fahrenheit_to_celsius(212)", expected: "100.0" },
                    { input: "fahrenheit_to_celsius(-40)", expected: "-40.0" },
                    { input: "fahrenheit_to_celsius(98.6)", expected: "37.0" },
                    { input: "fahrenheit_to_celsius(68)", expected: "20.0" }
                ]
            },
            {
                id: "013",
                number: 3,
                title: "Split Bill",
                description: "Create a function `split_bill` that takes `total` and `num_people`. Return each person's share rounded to 2 decimal places.",
                hint: "Divide total by num_people. Use round(result, 2).",
                starterCode: `def split_bill(total: float, num_people: int) -> float:
    # Your code here
    pass`,
                solutionCode: `def split_bill(total: float, num_people: int) -> float:
    """Split a bill evenly among people."""
    return round(total / num_people, 2)`,
                testCases: [
                    { input: "split_bill(100, 2)", expected: "50.0" },
                    { input: "split_bill(47.50, 4)", expected: "11.88" },
                    { input: "split_bill(10, 3)", expected: "3.33" },
                    { input: "split_bill(123.45, 5)", expected: "24.69" },
                    { input: "split_bill(75, 6)", expected: "12.5" }
                ]
            },
            {
                id: "014",
                number: 4,
                title: "Tip Calculator",
                description: "Create a function `calculate_tip` that takes `bill` and `tip_percent`. Return the tip amount rounded to 2 decimal places.",
                hint: "Tip = bill * (percent / 100). Round result to 2 decimals.",
                starterCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    # Your code here
    pass`,
                solutionCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount from bill and percentage."""
    return round(bill * (tip_percent / 100), 2)`,
                testCases: [
                    { input: "calculate_tip(100, 20)", expected: "20.0" },
                    { input: "calculate_tip(85.50, 20)", expected: "17.1" },
                    { input: "calculate_tip(50, 15)", expected: "7.5" },
                    { input: "calculate_tip(42.50, 18)", expected: "7.65" },
                    { input: "calculate_tip(100, 0)", expected: "0.0" }
                ]
            },
            {
                id: "015",
                number: 5,
                title: "Unit Converter",
                description: "Create a function `grams_to_ounces` that converts grams to ounces (1 gram = 0.03527 oz). Round to 2 decimal places.",
                hint: "Multiply grams by 0.03527. Round to 2 decimals.",
                starterCode: `def grams_to_ounces(grams: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def grams_to_ounces(grams: float) -> float:
    """Convert grams to ounces."""
    return round(grams * 0.03527, 2)`,
                testCases: [
                    { input: "grams_to_ounces(25)", expected: "0.88" },
                    { input: "grams_to_ounces(100)", expected: "3.53" },
                    { input: "grams_to_ounces(0)", expected: "0.0" },
                    { input: "grams_to_ounces(500)", expected: "17.64" },
                    { input: "grams_to_ounces(28.35)", expected: "1.0" }
                ]
            },
            {
                id: "016",
                number: 6,
                title: "Time Converter",
                description: "Create a function `minutes_to_seconds` that takes `minutes` and returns the number of seconds.",
                hint: "Multiply minutes by 60.",
                starterCode: `def minutes_to_seconds(minutes: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def minutes_to_seconds(minutes: int) -> int:
    """Convert minutes to seconds."""
    return minutes * 60`,
                testCases: [
                    { input: "minutes_to_seconds(1)", expected: "60" },
                    { input: "minutes_to_seconds(90)", expected: "5400" },
                    { input: "minutes_to_seconds(0)", expected: "0" },
                    { input: "minutes_to_seconds(45)", expected: "2700" },
                    { input: "minutes_to_seconds(120)", expected: "7200" }
                ]
            },
            {
                id: "017",
                number: 7,
                title: "Leftovers",
                description: "Create a function `remaining_samples` that takes `total` and `num_dishes`. Return how many samples are left over after even distribution.",
                hint: "Use the modulo operator: total % num_dishes.",
                starterCode: `def remaining_samples(total: int, num_dishes: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def remaining_samples(total: int, num_dishes: int) -> int:
    """Return leftover samples."""
    return total % num_dishes`,
                testCases: [
                    { input: "remaining_samples(17, 5)", expected: "2" },
                    { input: "remaining_samples(20, 5)", expected: "0" },
                    { input: "remaining_samples(100, 7)", expected: "2" },
                    { input: "remaining_samples(7, 10)", expected: "7" },
                    { input: "remaining_samples(15, 15)", expected: "0" }
                ]
            },
            {
                id: "018",
                number: 8,
                title: "Samples Per Dish",
                description: "Create a function `samples_per_dish` that takes `total` and `num_dishes`. Return how many full samples fit in each dish (integer division).",
                hint: "Use floor division: total // num_dishes.",
                starterCode: `def samples_per_dish(total: int, num_dishes: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def samples_per_dish(total: int, num_dishes: int) -> int:
    """Return whole samples per dish."""
    return total // num_dishes`,
                testCases: [
                    { input: "samples_per_dish(17, 5)", expected: "3" },
                    { input: "samples_per_dish(20, 5)", expected: "4" },
                    { input: "samples_per_dish(100, 7)", expected: "14" },
                    { input: "samples_per_dish(5, 10)", expected: "0" },
                    { input: "samples_per_dish(25, 5)", expected: "5" }
                ]
            },
            {
                id: "019",
                number: 9,
                title: "Circle Area",
                description: "Create a function `circular_area` that takes a `radius` and returns the area (pi * r^2). Use pi = 3.14159. Round to 2 decimal places.",
                hint: "Area = 3.14159 * (radius ** 2). Round carefully.",
                starterCode: `def circular_area(radius: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def circular_area(radius: float) -> float:
    """Calculate area of a circle."""
    pi = 3.14159
    return round(pi * radius ** 2, 2)`,
                testCases: [
                    { input: "circular_area(5)", expected: "78.54" },
                    { input: "circular_area(1)", expected: "3.14" },
                    { input: "circular_area(10)", expected: "314.16" },
                    { input: "circular_area(0)", expected: "0.0" },
                    { input: "circular_area(2.5)", expected: "19.63" }
                ]
            },
            {
                id: "020",
                number: 10,
                title: "Compound Interest",
                description: "Create a function `grant_growth` that calculates compound interest: principal * (1 + rate)^years. Round the result to 2 decimal places. `rate` is a decimal (e.g. 0.05).",
                hint: "Equation: principal * (1 + rate) ** years.",
                starterCode: `def grant_growth(principal: float, rate: float, years: int) -> float:
    # Your code here
    pass`,
                solutionCode: `def grant_growth(principal: float, rate: float, years: int) -> float:
    """Calculate compound growth."""
    return round(principal * (1 + rate) ** years, 2)`,
                testCases: [
                    { input: "grant_growth(100000, 0.05, 5)", expected: "127628.16" },
                    { input: "grant_growth(50000, 0.03, 10)", expected: "67195.82" },
                    { input: "grant_growth(10000, 0.1, 2)", expected: "12100.0" },
                    { input: "grant_growth(25000, 0, 5)", expected: "25000.0" },
                    { input: "grant_growth(10000, 0.07, 3)", expected: "12250.43" }
                ]
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
                title: "Check Positive",
                description: "Create a function `signal_detected` that takes `strength` and returns True if it is greater than 0.",
                hint: "Return strength > 0.",
                starterCode: `def signal_detected(strength: float) -> bool:
    # Your code here
    pass`,
                solutionCode: `def signal_detected(strength: float) -> bool:
    """Check if positive."""
    return strength > 0`,
                testCases: [
                    { input: "signal_detected(0.5)", expected: "True" },
                    { input: "signal_detected(-0.3)", expected: "False" },
                    { input: "signal_detected(0)", expected: "False" },
                    { input: "signal_detected(100)", expected: "True" },
                    { input: "signal_detected(-50)", expected: "False" }
                ]
            },
            {
                id: "022",
                number: 2,
                title: "Is Even",
                description: "Create a function `has_boss` that returns True if `level` is even. Use the modulo operator.",
                hint: "Even means level % 2 == 0.",
                starterCode: `def has_boss(level: int) -> bool:
    # Your code here
    pass`,
                solutionCode: `def has_boss(level: int) -> bool:
    """Check if level is even."""
    return level % 2 == 0`,
                testCases: [
                    { input: "has_boss(4)", expected: "True" },
                    { input: "has_boss(7)", expected: "False" },
                    { input: "has_boss(0)", expected: "True" },
                    { input: "has_boss(100)", expected: "True" },
                    { input: "has_boss(1)", expected: "False" }
                ]
            },
            {
                id: "023",
                number: 3,
                title: "Absolute Value",
                description: "Create a function `magnitude` that returns the absolute value of `n` without using abs(). If n is negative, return -n.",
                hint: "If n < 0, return -n. Else return n.",
                starterCode: `def magnitude(n: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def magnitude(n: float) -> float:
    """Return absolute value manually."""
    if n < 0:
        return -n
    return n`,
                testCases: [
                    { input: "magnitude(-5)", expected: "5" },
                    { input: "magnitude(10)", expected: "10" },
                    { input: "magnitude(0)", expected: "0" },
                    { input: "magnitude(-100.5)", expected: "100.5" },
                    { input: "magnitude(42)", expected: "42" }
                ]
            },
            {
                id: "024",
                number: 4,
                title: "Higher Score",
                description: "Create a function `higher_score` that takes `score_a` and `score_b`. Return the higher score.",
                hint: "If score_a > score_b, return score_a. Else return score_b.",
                starterCode: `def higher_score(score_a: int, score_b: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def higher_score(score_a: int, score_b: int) -> int:
    """Return the higher score."""
    if score_a > score_b:
        return score_a
    return score_b`,
                testCases: [
                    { input: "higher_score(100, 50)", expected: "100" },
                    { input: "higher_score(25, 75)", expected: "75" },
                    { input: "higher_score(50, 50)", expected: "50" },
                    { input: "higher_score(0, 100)", expected: "100" },
                    { input: "higher_score(999, 1)", expected: "999" }
                ]
            },
            {
                id: "025",
                number: 5,
                title: "Best of Three",
                description: "Create a function `best_of_three` that takes three trial results and returns the highest value.",
                hint: "Use `if` statements to find the maximum.",
                starterCode: `def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    # Your code here
    pass`,
                solutionCode: `def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    """Return the highest of three."""
    best = trial1
    if trial2 > best:
        best = trial2
    if trial3 > best:
        best = trial3
    return best`,
                testCases: [
                    { input: "best_of_three(85, 90, 88)", expected: "90" },
                    { input: "best_of_three(100, 50, 75)", expected: "100" },
                    { input: "best_of_three(10, 20, 30)", expected: "30" },
                    { input: "best_of_three(50, 50, 50)", expected: "50" },
                    { input: "best_of_three(-5, -10, -1)", expected: "-1" }
                ]
            },
            {
                id: "026",
                number: 6,
                title: "Grade Converter",
                description: "Create a function `result_rating` that returns 'Excellent' (>=90), 'Good' (>=75), 'Acceptable' (>=60), or 'Poor' (<60).",
                hint: "Check scores from highest to lowest: >= 90, then >= 75, etc.",
                starterCode: `def result_rating(score: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def result_rating(score: int) -> str:
    """Convert score to rating."""
    if score >= 90:
        return "Excellent"
    if score >= 75:
        return "Good"
    if score >= 60:
        return "Acceptable"
    return "Poor"`,
                testCases: [
                    { input: "result_rating(95)", expected: "'Excellent'" },
                    { input: "result_rating(82)", expected: "'Good'" },
                    { input: "result_rating(68)", expected: "'Acceptable'" },
                    { input: "result_rating(45)", expected: "'Poor'" },
                    { input: "result_rating(90)", expected: "'Excellent'" }
                ]
            },
            {
                id: "027",
                number: 7,
                title: "Divisibility Check",
                description: "Create a function `protocol_status`. If `count` is divisible by 3 and 5: 'Optimal'. By 3 only: 'Valid'. By 5 only: 'Calibration Needed'. Otherwise: 'Standard'.",
                hint: "Check 'count % 3 == 0 and count % 5 == 0' first.",
                starterCode: `def protocol_status(sample_count: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def protocol_status(sample_count: int) -> str:
    """Determine status based on divisibility."""
    if sample_count % 3 == 0 and sample_count % 5 == 0:
        return "Optimal"
    if sample_count % 3 == 0:
        return "Valid"
    if sample_count % 5 == 0:
        return "Calibration Needed"
    return "Standard"`,
                testCases: [
                    { input: "protocol_status(15)", expected: "'Optimal'" },
                    { input: "protocol_status(9)", expected: "'Valid'" },
                    { input: "protocol_status(10)", expected: "'Calibration Needed'" },
                    { input: "protocol_status(7)", expected: "'Standard'" },
                    { input: "protocol_status(30)", expected: "'Optimal'" }
                ]
            },
            {
                id: "028",
                number: 8,
                title: "Registration Fee",
                description: "Create `registration_fee(type)`. 'student': 50, 'academic': 150, 'industry': 300. Any other type: 200.",
                hint: "Use if/elif/else to check the type string.",
                starterCode: `def registration_fee(attendee_type: str) -> int:
    # Your code here
    pass`,
                solutionCode: `def registration_fee(attendee_type: str) -> int:
    """Return registration fee."""
    if attendee_type == "student":
        return 50
    if attendee_type == "academic":
        return 150
    if attendee_type == "industry":
        return 300
    return 200`,
                testCases: [
                    { input: "registration_fee('student')", expected: "50" },
                    { input: "registration_fee('academic')", expected: "150" },
                    { input: "registration_fee('industry')", expected: "300" },
                    { input: "registration_fee('other')", expected: "200" },
                    { input: "registration_fee('guest')", expected: "200" }
                ]
            },
            {
                id: "029",
                number: 9,
                title: "In Range",
                description: "Create a function `is_normal` that returns True if `value` is between `low` and `high` (inclusive).",
                hint: "Use chained comparison: low <= value <= high.",
                starterCode: `def is_normal(value: float, low: float, high: float) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_normal(value: float, low: float, high: float) -> bool:
    """Check if value is within range."""
    return low <= value <= high`,
                testCases: [
                    { input: "is_normal(5, 1, 10)", expected: "True" },
                    { input: "is_normal(0, 1, 10)", expected: "False" },
                    { input: "is_normal(1, 1, 10)", expected: "True" },
                    { input: "is_normal(10, 1, 10)", expected: "True" },
                    { input: "is_normal(15, 1, 10)", expected: "False" }
                ]
            },
            {
                id: "030",
                number: 10,
                title: "Smart Dosage",
                description: "Create `calculate_dosage(weight, age)`. If weight < 10, return 'Consult specialist'. Otherwise base dose is weight * 5. If age < 12 or > 65, reduce base dose by 25%. Return formatted string 'Xmg' (1 decimal).",
                hint: "Handle weight < 10 first. Then calc base. Then check age modifiers. Finally return f-string.",
                starterCode: `def calculate_dosage(weight_kg: float, age: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def calculate_dosage(weight_kg: float, age: int) -> str:
    """Calculate dosage with age adjustment."""
    if weight_kg < 10:
        return "Consult specialist"
    
    dose = weight_kg * 5
    
    if age < 12 or age > 65:
        dose = dose * 0.75
    
    return f"{round(dose, 1)}mg"`,
                testCases: [
                    { input: "calculate_dosage(70, 30)", expected: "'350.0mg'" },
                    { input: "calculate_dosage(70, 10)", expected: "'262.5mg'" },
                    { input: "calculate_dosage(70, 70)", expected: "'262.5mg'" },
                    { input: "calculate_dosage(8, 5)", expected: "'Consult specialist'" },
                    { input: "calculate_dosage(50, 40)", expected: "'250.0mg'" }
                ]
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
                title: "Uppercase Converter",
                description: "Create a function `alert_message` that takes a `message` string and returns it in all uppercase letters.",
                hint: "Use `message.upper()`.",
                starterCode: `def alert_message(message: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def alert_message(message: str) -> str:
    """Convert message to uppercase."""
    return message.upper()`,
                testCases: [
                    { input: "alert_message('warning')", expected: "'WARNING'" },
                    { input: "alert_message('System Error')", expected: "'SYSTEM ERROR'" },
                    { input: "alert_message('check results')", expected: "'CHECK RESULTS'" },
                    { input: "alert_message('a')", expected: "'A'" },
                    { input: "alert_message('')", expected: "''" }
                ]
            },
            {
                id: "034",
                number: 2,
                title: "Lowercase Converter",
                description: "Create a function `normalize_username` that takes a `username` string and returns it in all lowercase letters.",
                hint: "Use `username.lower()`.",
                starterCode: `def normalize_username(username: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def normalize_username(username: str) -> str:
    """Convert username to lowercase."""
    return username.lower()`,
                testCases: [
                    { input: "normalize_username('DrNeural')", expected: "'drneural'" },
                    { input: "normalize_username('ADMIN')", expected: "'admin'" },
                    { input: "normalize_username('User123')", expected: "'user123'" },
                    { input: "normalize_username('test')", expected: "'test'" },
                    { input: "normalize_username('ABC')", expected: "'abc'" }
                ]
            },
            {
                id: "035",
                number: 3,
                title: "String Length",
                description: "Create a function `password_length` that returns the number of characters in a `password` string.",
                hint: "Use `len(password)`.",
                starterCode: `def password_length(password: str) -> int:
    # Your code here
    pass`,
                solutionCode: `def password_length(password: str) -> int:
    """Return the length of a password."""
    return len(password)`,
                testCases: [
                    { input: "password_length('secret123')", expected: "9" },
                    { input: "password_length('')", expected: "0" },
                    { input: "password_length('a')", expected: "1" },
                    { input: "password_length('MySecureP@ss!')", expected: "13" },
                    { input: "password_length('12345678')", expected: "8" }
                ]
            },
            {
                id: "036",
                number: 4,
                title: "First Letter",
                description: "Create a function `first_initial` that returns the first character of `name`.",
                hint: "Access index 0: `name[0]`.",
                starterCode: `def first_initial(name: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def first_initial(name: str) -> str:
    """Return the first character of a name."""
    return name[0]`,
                testCases: [
                    { input: "first_initial('Alice')", expected: "'A'" },
                    { input: "first_initial('bob')", expected: "'b'" },
                    { input: "first_initial('Neuroscience')", expected: "'N'" },
                    { input: "first_initial('123')", expected: "'1'" },
                    { input: "first_initial('X')", expected: "'X'" }
                ]
            },
            {
                id: "037",
                number: 5,
                title: "Last Letter",
                description: "Create a function `last_character` that returns the last character of `text`.",
                hint: "Use negative indexing: `text[-1]`.",
                starterCode: `def last_character(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def last_character(text: str) -> str:
    """Return the last character of text."""
    return text[-1]`,
                testCases: [
                    { input: "last_character('data.csv')", expected: "'v'" },
                    { input: "last_character('report')", expected: "'t'" },
                    { input: "last_character('x')", expected: "'x'" },
                    { input: "last_character('test123')", expected: "'3'" },
                    { input: "last_character('Hello!')", expected: "'!'" }
                ]
            },
            {
                id: "038",
                number: 6,
                title: "Contains Keyword",
                description: "Create a function `contains_keyword` that takes `text` and `keyword`. Return True if the keyword is found inside the text.",
                hint: "Use the `in` operator: `keyword in text`.",
                starterCode: `def contains_keyword(text: str, keyword: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def contains_keyword(text: str, keyword: str) -> bool:
    """Check if keyword is in text."""
    return keyword in text`,
                testCases: [
                    { input: "contains_keyword('neural networks are powerful', 'neural')", expected: "True" },
                    { input: "contains_keyword('machine learning', 'deep')", expected: "False" },
                    { input: "contains_keyword('data science', 'data')", expected: "True" },
                    { input: "contains_keyword('Python programming', 'python')", expected: "False" },
                    { input: "contains_keyword('AI research', 'AI')", expected: "True" }
                ]
            },
            {
                id: "039",
                number: 7,
                title: "Clean Input",
                description: "Create a function `clean_input` that strips whitespace from `text` and converts it to lowercase.",
                hint: "Use `.strip()` then `.lower()`.",
                starterCode: `def clean_input(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def clean_input(text: str) -> str:
    """Strip whitespace and convert to lowercase."""
    return text.strip().lower()`,
                testCases: [
                    { input: "clean_input('  Hello  ')", expected: "'hello'" },
                    { input: "clean_input('  EXPERIMENT  ')", expected: "'experiment'" },
                    { input: "clean_input('Data')", expected: "'data'" },
                    { input: "clean_input('   test   ')", expected: "'test'" },
                    { input: "clean_input('already clean')", expected: "'already clean'" }
                ]
            },
            {
                id: "040",
                number: 8,
                title: "Repeat String",
                description: "Create a function `amplify_sequence` that repeats a `sequence` string `cycles` times.",
                hint: "Mulitply the string by the number: `sequence * cycles`.",
                starterCode: `def amplify_sequence(sequence: str, cycles: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def amplify_sequence(sequence: str, cycles: int) -> str:
    """Repeat a DNA sequence multiple times."""
    return sequence * cycles`,
                testCases: [
                    { input: "amplify_sequence('ATG', 3)", expected: "'ATGATGATG'" },
                    { input: "amplify_sequence('GC', 4)", expected: "'GCGCGCGC'" },
                    { input: "amplify_sequence('A', 5)", expected: "'AAAAA'" },
                    { input: "amplify_sequence('TATA', 0)", expected: "''" },
                    { input: "amplify_sequence('CAT', 2)", expected: "'CATCAT'" }
                ]
            },
            {
                id: "041",
                number: 9,
                title: "Replace Spaces",
                description: "Create a function `sanitize_filename` that replaces all spaces in `filename` with underscores.",
                hint: "Use `filename.replace(' ', '_')`.",
                starterCode: `def sanitize_filename(filename: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def sanitize_filename(filename: str) -> str:
    """Replace spaces with underscores in filenames."""
    return filename.replace(" ", "_")`,
                testCases: [
                    { input: "sanitize_filename('my file name')", expected: "'my_file_name'" },
                    { input: "sanitize_filename('brain scan 001')", expected: "'brain_scan_001'" },
                    { input: "sanitize_filename('noSpaces')", expected: "'noSpaces'" },
                    { input: "sanitize_filename('a b c d')", expected: "'a_b_c_d'" },
                    { input: "sanitize_filename(' leading')", expected: "'_leading'" }
                ]
            },
            {
                id: "042",
                number: 10,
                title: "Generate User ID",
                description: "Create a function `generate_user_id` that takes `first_name`, `last_name`, and `year`. Return a string in the format 'FIRST_LAST_YEAR'. Ensure names are uppercase and spaces are stripped.",
                hint: "Use `strip()`, `upper()`, and f-string formatting.",
                starterCode: `def generate_user_id(first_name: str, last_name: str, year: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def generate_user_id(first_name: str, last_name: str, year: int) -> str:
    """Generate standardized user ID."""
    first = first_name.strip().upper()
    last = last_name.strip().upper()
    return f"{first}_{last}_{year}"`,
                testCases: [
                    { input: "generate_user_id('John', 'Doe', 2024)", expected: "'JOHN_DOE_2024'" },
                    { input: "generate_user_id('  Sarah ', 'Smith', 1999)", expected: "'SARAH_SMITH_1999'" },
                    { input: "generate_user_id('alice', 'jones', 2000)", expected: "'ALICE_JONES_2000'" },
                    { input: "generate_user_id('dr', 'who', 1963)", expected: "'DR_WHO_1963'" },
                    { input: "generate_user_id(' Ai ', ' Bot ', 2050)", expected: "'AI_BOT_2050'" }
                ]
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
                title: "Sum N",
                description: "Create a function `total_score` that returns the sum of all integers from 1 to `n`.",
                hint: "Loop from 1 to n+1 and add to a total.",
                starterCode: `def total_score(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def total_score(n: int) -> int:
    """Sum all integers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`,
                testCases: [
                    { input: "total_score(5)", expected: "15" },
                    { input: "total_score(1)", expected: "1" },
                    { input: "total_score(10)", expected: "55" },
                    { input: "total_score(100)", expected: "5050" },
                    { input: "total_score(3)", expected: "6" }
                ]
            },
            {
                id: "044",
                number: 2,
                title: "Factorial",
                description: "Create a function `factorial` that returns `n!`. If n is 0, return 1.",
                hint: "Start with result = 1. Loop and multiply.",
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
    return result`,
                testCases: [
                    { input: "factorial(5)", expected: "120" },
                    { input: "factorial(3)", expected: "6" },
                    { input: "factorial(0)", expected: "1" },
                    { input: "factorial(1)", expected: "1" },
                    { input: "factorial(7)", expected: "5040" }
                ]
            },
            {
                id: "045",
                number: 3,
                title: "Count Char",
                description: "Create a function `count_base` that counts the occurrences of `base` in `sequence`.",
                hint: "Loop through sequence and check if char == base.",
                starterCode: `def count_base(sequence: str, base: str) -> int:
    # Your code here
    pass`,
                solutionCode: `def count_base(sequence: str, base: str) -> int:
    """Count occurrences of base in DNA sequence."""
    count = 0
    for nucleotide in sequence:
        if nucleotide == base:
            count += 1
    return count`,
                testCases: [
                    { input: "count_base('ATGCATGC', 'A')", expected: "2" },
                    { input: "count_base('GGGGGG', 'G')", expected: "6" },
                    { input: "count_base('ATCG', 'T')", expected: "1" },
                    { input: "count_base('CCCC', 'A')", expected: "0" },
                    { input: "count_base('AAAAAA', 'A')", expected: "6" }
                ]
            },
            {
                id: "046",
                number: 4,
                title: "Count Vowels",
                description: "Create a function `count_vowels` that counts vowels ('aeiou') in `text` (case-insensitive).",
                hint: "Check if `char` in 'aeiouAEIOU'.",
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
    return count`,
                testCases: [
                    { input: "count_vowels('neuroscience')", expected: "6" },
                    { input: "count_vowels('AEIOU')", expected: "5" },
                    { input: "count_vowels('xyz')", expected: "0" },
                    { input: "count_vowels('Python')", expected: "1" },
                    { input: "count_vowels('')", expected: "0" }
                ]
            },
            {
                id: "047",
                number: 5,
                title: "Power Loop",
                description: "Create a function `exponential` that calculates `base`^`exponent` using a loop (no `**` operator).",
                hint: "Initialize `result = 1` and multiply by `base` `exponent` times.",
                starterCode: `def exponential(base: int, exponent: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def exponential(base: int, exponent: int) -> int:
    """Calculate base to the power of exponent using a loop."""
    result = 1
    for _ in range(exponent):
        result *= base
    return result`,
                testCases: [
                    { input: "exponential(2, 10)", expected: "1024" },
                    { input: "exponential(3, 4)", expected: "81" },
                    { input: "exponential(5, 0)", expected: "1" },
                    { input: "exponential(10, 3)", expected: "1000" },
                    { input: "exponential(2, 8)", expected: "256" }
                ]
            },
            {
                id: "048",
                number: 6,
                title: "Reverse Loop",
                description: "Create a function `reverse_sequence` that returns the reversed string using a loop.",
                hint: "Prepend chars: `result = char + result`.",
                starterCode: `def reverse_sequence(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def reverse_sequence(text: str) -> str:
    """Reverse a string using a loop."""
    result = ""
    for char in text:
        result = char + result
    return result`,
                testCases: [
                    { input: "reverse_sequence('ATGC')", expected: "'CGTA'" },
                    { input: "reverse_sequence('neural')", expected: "'laruen'" },
                    { input: "reverse_sequence('a')", expected: "'a'" },
                    { input: "reverse_sequence('12345')", expected: "'54321'" },
                    { input: "reverse_sequence('')", expected: "''" }
                ]
            },
            {
                id: "049",
                number: 7,
                title: "Sum Evens",
                description: "Create a function `sum_even_samples` that sums even numbers from 2 to `n` (inclusive).",
                hint: "Use `range(2, n + 1, 2)`.",
                starterCode: `def sum_even_samples(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def sum_even_samples(n: int) -> int:
    """Sum all even numbers from 2 to n."""
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total`,
                testCases: [
                    { input: "sum_even_samples(10)", expected: "30" },
                    { input: "sum_even_samples(6)", expected: "12" },
                    { input: "sum_even_samples(2)", expected: "2" },
                    { input: "sum_even_samples(100)", expected: "2550" },
                    { input: "sum_even_samples(1)", expected: "0" }
                ]
            },
            {
                id: "050",
                number: 8,
                title: "Digit Product",
                description: "Create a function `digit_product` that returns the product of all digits in `n`.",
                hint: "Convert `n` to string, loop through digits, convert back to int and multiply.",
                starterCode: `def digit_product(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def digit_product(n: int) -> int:
    """Multiply all digits of a number."""
    result = 1
    for digit in str(n):
        result *= int(digit)
    return result`,
                testCases: [
                    { input: "digit_product(234)", expected: "24" },
                    { input: "digit_product(111)", expected: "1" },
                    { input: "digit_product(502)", expected: "0" },
                    { input: "digit_product(99)", expected: "81" },
                    { input: "digit_product(5)", expected: "5" }
                ]
            },
            {
                id: "051",
                number: 9,
                title: "Word Count",
                description: "Create a function `word_count` that returns the number of words in `sentence`.",
                hint: "Use `sentence.split()`.",
                starterCode: `def word_count(sentence: str) -> int:
    # Your code here
    pass`,
                solutionCode: `def word_count(sentence: str) -> int:
    """Count words in a sentence."""
    if not sentence.strip():
        return 0
    return len(sentence.split())`,
                testCases: [
                    { input: "word_count('neural network analysis')", expected: "3" },
                    { input: "word_count('hello')", expected: "1" },
                    { input: "word_count('')", expected: "0" },
                    { input: "word_count('one two three four five')", expected: "5" },
                    { input: "word_count('   ')", expected: "0" }
                ]
            },
            {
                id: "052",
                number: 10,
                title: "Pattern Generator",
                description: "Create a function `pattern_generator` that returns a string containing `character` repeated `n` times, then `n-1` times, down to 1 time, separated by newlines.",
                hint: "Loop range(n, 0, -1). Accumulate `character * i` + '\\n'. Strip trailing newline.",
                starterCode: `def pattern_generator(character: str, n: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def pattern_generator(character: str, n: int) -> str:
    """Generate a descending pattern."""
    result = ""
    for i in range(n, 0, -1):
        result += (character * i)
        if i > 1:
            result += "\\n"
    return result`,
                testCases: [
                    { input: "pattern_generator('*', 3)", expected: "'***\\n**\\n*'" },
                    { input: "pattern_generator('#', 1)", expected: "'#'" },
                    { input: "pattern_generator('A', 4)", expected: "'AAAA\\nAAA\\nAA\\nA'" },
                    { input: "pattern_generator('!', 2)", expected: "'!!\\n!'" },
                    { input: "pattern_generator('x', 5)", expected: "'xxxxx\\nxxxx\\nxxx\\nxx\\nx'" }
                ]
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
                title: "Count Digits",
                description: "Create a function `digit_count` that returns the number of digits in `n`.",
                hint: "While `n > 0`, divide `n` by 10 and increment count. If `n` is 0, count is 1.",
                starterCode: `def digit_count(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def digit_count(n: int) -> int:
    """Count digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count`,
                testCases: [
                    { input: "digit_count(12345)", expected: "5" },
                    { input: "digit_count(7)", expected: "1" },
                    { input: "digit_count(0)", expected: "1" },
                    { input: "digit_count(1000)", expected: "4" },
                    { input: "digit_count(99)", expected: "2" }
                ]
            },
            {
                id: "054",
                number: 2,
                title: "Sum Digits",
                description: "Create a function `digit_sum` that returns the sum of all digits in `n`.",
                hint: "Use `n % 10` to get the last digit and `n //= 10` to remove it.",
                starterCode: `def digit_sum(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def digit_sum(n: int) -> int:
    """Sum all digits of a number."""
    total = 0
    n = abs(n)
    while n > 0:
        total += n % 10
        n //= 10
    return total`,
                testCases: [
                    { input: "digit_sum(123)", expected: "6" },
                    { input: "digit_sum(9999)", expected: "36" },
                    { input: "digit_sum(101)", expected: "2" },
                    { input: "digit_sum(5)", expected: "5" },
                    { input: "digit_sum(0)", expected: "0" }
                ]
            },
            {
                id: "055",
                number: 3,
                title: "Reverse Number",
                description: "Create a function `reverse_number` that returns `n` with its digits reversed.",
                hint: "Multiply result by 10 and add the last digit of n.",
                starterCode: `def reverse_number(n: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def reverse_number(n: int) -> int:
    """Reverse the digits of a number."""
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return reversed_n`,
                testCases: [
                    { input: "reverse_number(1234)", expected: "4321" },
                    { input: "reverse_number(100)", expected: "1" },
                    { input: "reverse_number(5)", expected: "5" },
                    { input: "reverse_number(9876)", expected: "6789" },
                    { input: "reverse_number(12)", expected: "21" }
                ]
            },
            {
                id: "056",
                number: 4,
                title: "Palindrome Number",
                description: "Create a function `is_palindrome` that returns True if the integer `n` is a palindrome (reads same forwards and backwards).",
                hint: "Compare `n` with its reversed version.",
                starterCode: `def is_palindrome(n: int) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_palindrome(n: int) -> bool:
    """Check if number is a palindrome."""
    original = n
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return original == reversed_n`,
                testCases: [
                    { input: "is_palindrome(12321)", expected: "True" },
                    { input: "is_palindrome(12345)", expected: "False" },
                    { input: "is_palindrome(7)", expected: "True" },
                    { input: "is_palindrome(11)", expected: "True" },
                    { input: "is_palindrome(10)", expected: "False" }
                ]
            },
            {
                id: "057",
                number: 5,
                title: "GCD",
                description: "Create a function `find_gcd` that returns the Greatest Common Divisor of `a` and `b`.",
                hint: "Use Euclid's algorithm: while b != 0, (a, b) = (b, a % b).",
                starterCode: `def find_gcd(a: int, b: int) -> int:
    # Your code here
    pass`,
                solutionCode: `def find_gcd(a: int, b: int) -> int:
    """Find GCD using Euclid's algorithm."""
    while b != 0:
        a, b = b, a % b
    return a`,
                testCases: [
                    { input: "find_gcd(48, 18)", expected: "6" },
                    { input: "find_gcd(100, 25)", expected: "25" },
                    { input: "find_gcd(17, 13)", expected: "1" },
                    { input: "find_gcd(24, 36)", expected: "12" },
                    { input: "find_gcd(7, 7)", expected: "7" }
                ]
            },
            {
                id: "058",
                number: 6,
                title: "Collatz Steps",
                description: "Create a function `collatz_steps` that returns the number of steps to reach 1. (If even, divide by 2; if odd, 3n+1).",
                hint: "While n != 1, update n and increment steps.",
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
    return steps`,
                testCases: [
                    { input: "collatz_steps(1)", expected: "0" },
                    { input: "collatz_steps(2)", expected: "1" },
                    { input: "collatz_steps(10)", expected: "6" },
                    { input: "collatz_steps(27)", expected: "111" },
                    { input: "collatz_steps(6)", expected: "8" }
                ]
            },
            {
                id: "059",
                number: 7,
                title: "Is Prime",
                description: "Create a function `is_prime` that returns True if `n` is a prime number (divisible only by 1 and itself).",
                hint: "Check divisibility from 2 up to sqrt(n).",
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
    return True`,
                testCases: [
                    { input: "is_prime(17)", expected: "True" },
                    { input: "is_prime(4)", expected: "False" },
                    { input: "is_prime(2)", expected: "True" },
                    { input: "is_prime(1)", expected: "False" },
                    { input: "is_prime(97)", expected: "True" }
                ]
            },
            {
                id: "060",
                number: 8,
                title: "Next Prime",
                description: "Create a function `next_prime` that returns the smallest prime number greater than `n`.",
                hint: "Start at n+1 and increment until you find a prime.",
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
    return candidate`,
                testCases: [
                    { input: "next_prime(10)", expected: "11" },
                    { input: "next_prime(2)", expected: "3" },
                    { input: "next_prime(13)", expected: "17" },
                    { input: "next_prime(100)", expected: "101" },
                    { input: "next_prime(0)", expected: "2" }
                ]
            },
            {
                id: "061",
                number: 9,
                title: "Digital Root",
                description: "Create a function `digital_root` that repeatedly sums the digits of `n` until a single digit remains.",
                hint: "Use nested loops: while n >= 10, sum its digits.",
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
    return n`,
                testCases: [
                    { input: "digital_root(9875)", expected: "2" },
                    { input: "digital_root(16)", expected: "7" },
                    { input: "digital_root(9)", expected: "9" },
                    { input: "digital_root(12345)", expected: "6" },
                    { input: "digital_root(999)", expected: "9" }
                ]
            },
            {
                id: "062",
                number: 10,
                title: "Decimal to Binary",
                description: "Create a function `to_binary` that converts a positive integer `n` to its binary string representation (without using `bin()`).",
                hint: "While n > 0: `bit = n % 2`, `result = str(bit) + result`, `n //= 2`. Handle n=0 case.",
                starterCode: `def to_binary(n: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def to_binary(n: int) -> str:
    """Convert integer to binary string."""
    if n == 0:
        return "0"
    result = ""
    while n > 0:
        bit = n % 2
        result = str(bit) + result
        n //= 2
    return result`,
                testCases: [
                    { input: "to_binary(10)", expected: "'1010'" },
                    { input: "to_binary(0)", expected: "'0'" },
                    { input: "to_binary(255)", expected: "'11111111'" },
                    { input: "to_binary(1)", expected: "'1'" },
                    { input: "to_binary(16)", expected: "'10000'" }
                ]
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
                title: "Sum List",
                description: "Create a function `sum_list` that returns the sum of all numbers in the list (without using `sum()`).",
                hint: "Initialize `total = 0`. Loop and add each number.",
                starterCode: `def sum_list(numbers: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def sum_list(numbers: list) -> float:
    """Sum all numbers in a list."""
    total = 0
    for num in numbers:
        total += num
    return total`,
                testCases: [
                    { input: "sum_list([1, 2, 3])", expected: "6" },
                    { input: "sum_list([10, 20])", expected: "30" },
                    { input: "sum_list([])", expected: "0" },
                    { input: "sum_list([5])", expected: "5" },
                    { input: "sum_list([-1, 1])", expected: "0" }
                ]
            },
            {
                id: "064",
                number: 2,
                title: "Average",
                description: "Create a function `average` that returns the arithmetic mean of numbers in the list. Check for empty list.",
                hint: "Sum divided by length. Return 0 if empty.",
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
    return total / len(numbers)`,
                testCases: [
                    { input: "average([1, 2, 3])", expected: "2.0" },
                    { input: "average([10, 20])", expected: "15.0" },
                    { input: "average([])", expected: "0" },
                    { input: "average([5, 5, 5, 5])", expected: "5.0" },
                    { input: "average([0, 10])", expected: "5.0" }
                ]
            },
            {
                id: "065",
                number: 3,
                title: "Find Max",
                description: "Create a function `find_max` that returns the largest number in the list (without using `max()`).",
                hint: "Initialize `largest` with first element, loop and update if larger found.",
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
    return largest`,
                testCases: [
                    { input: "find_max([1, 5, 3])", expected: "5" },
                    { input: "find_max([10, 2, 8])", expected: "10" },
                    { input: "find_max([-5, -1, -10])", expected: "-1" },
                    { input: "find_max([7, 7, 7])", expected: "7" },
                    { input: "find_max([42])", expected: "42" }
                ]
            },
            {
                id: "066",
                number: 4,
                title: "Find Min",
                description: "Create a function `find_min` that returns the smallest number in the list (without using `min()`).",
                hint: "Initialize `smallest` with first element, loop and update if smaller found.",
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
    return smallest`,
                testCases: [
                    { input: "find_min([1, 5, 3])", expected: "1" },
                    { input: "find_min([10, 2, 8])", expected: "2" },
                    { input: "find_min([-5, -1, -10])", expected: "-10" },
                    { input: "find_min([7, 7, 7])", expected: "7" },
                    { input: "find_min([42])", expected: "42" }
                ]
            },
            {
                id: "067",
                number: 5,
                title: "Count Occurrences",
                description: "Create a function `count_item` that returns how many times `target` appears in `items`.",
                hint: "Loop and increment counter when match found.",
                starterCode: `def count_item(items: list, target) -> int:
    # Your code here
    pass`,
                solutionCode: `def count_item(items: list, target) -> int:
    """Count occurrences of target in list."""
    count = 0
    for item in items:
        if item == target:
            count += 1
    return count`,
                testCases: [
                    { input: "count_item([1, 2, 2, 3], 2)", expected: "2" },
                    { input: "count_item(['a', 'b', 'a'], 'a')", expected: "2" },
                    { input: "count_item([1, 2, 3], 4)", expected: "0" },
                    { input: "count_item([], 5)", expected: "0" },
                    { input: "count_item([7, 7, 7, 7], 7)", expected: "4" }
                ]
            },
            {
                id: "068",
                number: 6,
                title: "First and Last",
                description: "Create a function `first_and_last` that returns a list containing only the first and last elements.",
                hint: "Return `[items[0], items[-1]]`.",
                starterCode: `def first_and_last(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def first_and_last(items: list) -> list:
    """Return first and last elements of a list."""
    if len(items) < 2:
        return items.copy()
    return [items[0], items[-1]]`,
                testCases: [
                    { input: "first_and_last([1, 2, 3, 4])", expected: "[1, 4]" },
                    { input: "first_and_last([1])", expected: "[1]" },
                    { input: "first_and_last(['a', 'b'])", expected: "['a', 'b']" },
                    { input: "first_and_last([])", expected: "[]" },
                    { input: "first_and_last([5, 10, 15])", expected: "[5, 15]" }
                ]
            },
            {
                id: "069",
                number: 7,
                title: "Reverse List",
                description: "Create a function `reverse_list` that returns a new list with elements in reverse order (without using `.reverse()` or `[::-1]`).",
                hint: "Iterate backwards from `len(items)-1` to 0.",
                starterCode: `def reverse_list(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def reverse_list(items: list) -> list:
    """Reverse a list without built-in methods."""
    result = []
    for i in range(len(items) - 1, -1, -1):
        result.append(items[i])
    return result`,
                testCases: [
                    { input: "reverse_list([1, 2, 3])", expected: "[3, 2, 1]" },
                    { input: "reverse_list(['a', 'b'])", expected: "['b', 'a']" },
                    { input: "reverse_list([])", expected: "[]" },
                    { input: "reverse_list([42])", expected: "[42]" },
                    { input: "reverse_list([1, 2, 3, 4, 5])", expected: "[5, 4, 3, 2, 1]" }
                ]
            },
            {
                id: "070",
                number: 8,
                title: "Contains",
                description: "Create a function `contains` that returns True if `target` is in `items` (without using `in`).",
                hint: "Loop and return True if match found.",
                starterCode: `def contains(items: list, target) -> bool:
    # Your code here
    pass`,
                solutionCode: `def contains(items: list, target) -> bool:
    """Check if target is in list without using 'in'."""
    for item in items:
        if item == target:
            return True
    return False`,
                testCases: [
                    { input: "contains([1, 2, 3], 2)", expected: "True" },
                    { input: "contains(['a', 'b'], 'z')", expected: "False" },
                    { input: "contains([], 1)", expected: "False" },
                    { input: "contains([5, 5, 5], 5)", expected: "True" },
                    { input: "contains(['hello', 'world'], 'world')", expected: "True" }
                ]
            },
            {
                id: "071",
                number: 9,
                title: "Find Index",
                description: "Create a function `find_index` that returns the index of the first occurrence of `target` (or -1 if not found).",
                hint: "Use `range(len(items))`.",
                starterCode: `def find_index(items: list, target) -> int:
    # Your code here
    pass`,
                solutionCode: `def find_index(items: list, target) -> int:
    """Find index of first occurrence of target."""
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1`,
                testCases: [
                    { input: "find_index([10, 20, 30], 20)", expected: "1" },
                    { input: "find_index(['a', 'b', 'c'], 'c')", expected: "2" },
                    { input: "find_index([1, 2], 3)", expected: "-1" },
                    { input: "find_index([5, 5, 5], 5)", expected: "0" },
                    { input: "find_index([], 1)", expected: "-1" }
                ]
            },
            {
                id: "072",
                number: 10,
                title: "All Positive",
                description: "Create a function `all_positive` that returns True if all numbers in the list are positive (> 0). Empty list returns True.",
                hint: "If list is empty, return True. Return False if any number is <= 0.",
                starterCode: `def all_positive(numbers: list) -> bool:
    # Your code here
    pass`,
                solutionCode: `def all_positive(numbers: list) -> bool:
    """Check if all numbers are positive."""
    for num in numbers:
        if num <= 0:
            return False
    return True`,
                testCases: [
                    { input: "all_positive([1, 2, 3])", expected: "True" },
                    { input: "all_positive([1, -2, 3])", expected: "False" },
                    { input: "all_positive([])", expected: "True" },
                    { input: "all_positive([0])", expected: "False" },
                    { input: "all_positive([0.001, 0.002])", expected: "True" }
                ]
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
                title: "Filter Positive",
                description: "Create a function `filter_positive` that returns a new list containing only the positive numbers (greater than 0) from the input list.",
                hint: "Create result list. Loop through numbers, if num > 0, append to result.",
                starterCode: `def filter_positive(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_positive(numbers: list) -> list:
    """Filter to only positive numbers."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result`,
                testCases: [
                    { input: "filter_positive([1, -1, 2, -2])", expected: "[1, 2]" },
                    { input: "filter_positive([-1, -2, -3])", expected: "[]" },
                    { input: "filter_positive([])", expected: "[]" },
                    { input: "filter_positive([0, 1, 2])", expected: "[1, 2]" },
                    { input: "filter_positive([5])", expected: "[5]" }
                ]
            },
            {
                id: "074",
                number: 2,
                title: "Filter Even",
                description: "Create a function `filter_even` that returns a new list containing only the even numbers from the input list.",
                hint: "If `num % 2 == 0`, append to result.",
                starterCode: `def filter_even(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_even(numbers: list) -> list:
    """Filter to only even numbers."""
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result`,
                testCases: [
                    { input: "filter_even([1, 2, 3, 4])", expected: "[2, 4]" },
                    { input: "filter_even([1, 3, 5])", expected: "[]" },
                    { input: "filter_even([])", expected: "[]" },
                    { input: "filter_even([0, 2, 4])", expected: "[0, 2, 4]" },
                    { input: "filter_even([-2, -1, 0, 1, 2])", expected: "[-2, 0, 2]" }
                ]
            },
            {
                id: "075",
                number: 3,
                title: "Double All",
                description: "Create a function `double_all` that returns a new list where each number from the input list is multiplied by 2.",
                hint: "Loop through numbers, append `num * 2` to result.",
                starterCode: `def double_all(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def double_all(numbers: list) -> list:
    """Double each number in the list."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,
                testCases: [
                    { input: "double_all([1, 2, 3])", expected: "[2, 4, 6]" },
                    { input: "double_all([0, -1])", expected: "[0, -2]" },
                    { input: "double_all([])", expected: "[]" },
                    { input: "double_all([0.5])", expected: "[1.0]" },
                    { input: "double_all([10, 20, 30])", expected: "[20, 40, 60]" }
                ]
            },
            {
                id: "076",
                number: 4,
                title: "Square All",
                description: "Create a function `square_all` that returns a new list where each number from the input list is squared.",
                hint: "Append `num ** 2` to result.",
                starterCode: `def square_all(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def square_all(numbers: list) -> list:
    """Square each number in the list."""
    result = []
    for num in numbers:
        result.append(num ** 2)
    return result`,
                testCases: [
                    { input: "square_all([2, 3, 4])", expected: "[4, 9, 16]" },
                    { input: "square_all([-2, 0])", expected: "[4, 0]" },
                    { input: "square_all([])", expected: "[]" },
                    { input: "square_all([1, 1, 1])", expected: "[1, 1, 1]" },
                    { input: "square_all([10])", expected: "[100]" }
                ]
            },
            {
                id: "077",
                number: 5,
                title: "Filter Long Words",
                description: "Create a function `filter_long_words` that returns a list of words from the input that are at least `min_length` characters long.",
                hint: "If `len(word) >= min_length`, keep it.",
                starterCode: `def filter_long_words(words: list, min_length: int) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_long_words(words: list, min_length: int) -> list:
    """Filter words by minimum length."""
    result = []
    for word in words:
        if len(word) >= min_length:
            result.append(word)
    return result`,
                testCases: [
                    { input: "filter_long_words(['a', 'big', 'word'], 3)", expected: "['big', 'word']" },
                    { input: "filter_long_words(['hi', 'no'], 3)", expected: "[]" },
                    { input: "filter_long_words([], 1)", expected: "[]" },
                    { input: "filter_long_words(['neuroscience', 'brain'], 5)", expected: "['neuroscience', 'brain']" },
                    { input: "filter_long_words(['cat', 'dog', 'elephant'], 4)", expected: "['elephant']" }
                ]
            },
            {
                id: "078",
                number: 6,
                title: "Remove Duplicates",
                description: "Create a function `remove_duplicates` that returns a new list with duplicate items removed, while preserving the original order.",
                hint: "Use a `seen` list. If item not in seen, append to seen and result.",
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
    return result`,
                testCases: [
                    { input: "remove_duplicates([1, 2, 2, 3, 1])", expected: "[1, 2, 3]" },
                    { input: "remove_duplicates(['a', 'a', 'b'])", expected: "['a', 'b']" },
                    { input: "remove_duplicates([])", expected: "[]" },
                    { input: "remove_duplicates([5, 5, 5, 5])", expected: "[5]" },
                    { input: "remove_duplicates([1, 2, 3])", expected: "[1, 2, 3]" }
                ]
            },
            {
                id: "079",
                number: 7,
                title: "Uppercase All",
                description: "Create a function `uppercase_all` that returns a new list with all strings converted to uppercase.",
                hint: "Append `word.upper()` to result.",
                starterCode: `def uppercase_all(words: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def uppercase_all(words: list) -> list:
    """Convert all strings to uppercase."""
    result = []
    for word in words:
        result.append(word.upper())
    return result`,
                testCases: [
                    { input: "uppercase_all(['hello', 'world'])", expected: "['HELLO', 'WORLD']" },
                    { input: "uppercase_all(['a', 'B'])", expected: "['A', 'B']" },
                    { input: "uppercase_all([])", expected: "[]" },
                    { input: "uppercase_all(['MiXeD', 'CaSe'])", expected: "['MIXED', 'CASE']" },
                    { input: "uppercase_all(['123'])", expected: "['123']" }
                ]
            },
            {
                id: "080",
                number: 8,
                title: "Get Lengths",
                description: "Create a function `get_lengths` that returns a new list containing the length of each string in the input list.",
                hint: "Append `len(word)` to result.",
                starterCode: `def get_lengths(words: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def get_lengths(words: list) -> list:
    """Get length of each string in list."""
    result = []
    for word in words:
        result.append(len(word))
    return result`,
                testCases: [
                    { input: "get_lengths(['a', 'bb', 'ccc'])", expected: "[1, 2, 3]" },
                    { input: "get_lengths([])", expected: "[]" },
                    { input: "get_lengths([''])", expected: "[0]" },
                    { input: "get_lengths(['hello', 'world'])", expected: "[5, 5]" },
                    { input: "get_lengths(['neuroscience'])", expected: "[12]" }
                ]
            },
            {
                id: "081",
                number: 9,
                title: "Filter by Index",
                description: "Create a function `filter_by_index` that returns a new list containing only elements at even indices (0, 2, 4...).",
                hint: "Use `range(0, len(items), 2)`.",
                starterCode: `def filter_by_index(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_by_index(items: list) -> list:
    """Return elements at even indices."""
    result = []
    for i in range(0, len(items), 2):
        result.append(items[i])
    return result`,
                testCases: [
                    { input: "filter_by_index([0, 1, 2, 3, 4])", expected: "[0, 2, 4]" },
                    { input: "filter_by_index(['a', 'b'])", expected: "['a']" },
                    { input: "filter_by_index([])", expected: "[]" },
                    { input: "filter_by_index([10])", expected: "[10]" },
                    { input: "filter_by_index(['w', 'x', 'y', 'z'])", expected: "['w', 'y']" }
                ]
            },
            {
                id: "082",
                number: 10,
                title: "Running Sum",
                description: "Create a function `running_sum` that returns a new list where each element is the cumulative sum of numbers up to that point.",
                hint: "Maintain a `total` variable. For each number, add to `total` and append `total` to result.",
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
    return result`,
                testCases: [
                    { input: "running_sum([1, 2, 3])", expected: "[1, 3, 6]" },
                    { input: "running_sum([1, -1, 1])", expected: "[1, 0, 1]" },
                    { input: "running_sum([])", expected: "[]" },
                    { input: "running_sum([5])", expected: "[5]" },
                    { input: "running_sum([10, 10, 10, 10])", expected: "[10, 20, 30, 40]" }
                ]
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
                title: "Count Characters",
                description: "Create a function `count_chars` that returns a dictionary counting the frequency of each character in `text`.",
                hint: "Loop through chars. If char in dict, increment count; otherwise set to 1.",
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
    return counts`,
                testCases: [
                    { input: "count_chars('hello')", expected: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}" },
                    { input: "count_chars('aa a')", expected: "{'a': 3, ' ': 1}" },
                    { input: "count_chars('')", expected: "{}" },
                    { input: "count_chars('aaa')", expected: "{'a': 3}" },
                    { input: "count_chars('abc')", expected: "{'a': 1, 'b': 1, 'c': 1}" }
                ]
            },
            {
                id: "084",
                number: 2,
                title: "Count Words",
                description: "Create a function `count_words` that returns a dictionary counting the frequency of each word in `sentence` (case-insensitive).",
                hint: "Lowercase and split sentence. Count words.",
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
    return counts`,
                testCases: [
                    { input: "count_words('Hello world hello')", expected: "{'hello': 2, 'world': 1}" },
                    { input: "count_words('a a a')", expected: "{'a': 3}" },
                    { input: "count_words('')", expected: "{}" },
                    { input: "count_words('python')", expected: "{'python': 1}" },
                    { input: "count_words('The the THE')", expected: "{'the': 3}" }
                ]
            },
            {
                id: "085",
                number: 3,
                title: "Invert Dictionary",
                description: "Create a function `invert_dict` that returns a new dictionary where keys and values are swapped.",
                hint: "Loop through `d.items()`, set `result[value] = key`.",
                starterCode: `def invert_dict(d: dict) -> dict:
    # Your code here
    pass`,
                solutionCode: `def invert_dict(d: dict) -> dict:
    """Swap keys and values in dictionary."""
    result = {}
    for key, value in d.items():
        result[value] = key
    return result`,
                testCases: [
                    { input: "invert_dict({'a': 1, 'b': 2})", expected: "{1: 'a', 2: 'b'}" },
                    { input: "invert_dict({})", expected: "{}" },
                    { input: "invert_dict({'k': 'v'})", expected: "{'v': 'k'}" },
                    { input: "invert_dict({'x': 10})", expected: "{10: 'x'}" },
                    { input: "invert_dict({1: 'one', 2: 'two'})", expected: "{'one': 1, 'two': 2}" }
                ]
            },
            {
                id: "086",
                number: 4,
                title: "Merge Dictionaries",
                description: "Create a function `merge_dicts` that returns a new dictionary merging `d1` and `d2`, with `d2` values taking precedence.",
                hint: "Copy `d1` then update with `d2`.",
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
    return result`,
                testCases: [
                    { input: "merge_dicts({'a': 1}, {'b': 2})", expected: "{'a': 1, 'b': 2}" },
                    { input: "merge_dicts({'a': 1}, {'a': 2})", expected: "{'a': 2}" },
                    { input: "merge_dicts({}, {'a': 1})", expected: "{'a': 1}" },
                    { input: "merge_dicts({'x': 1, 'y': 2}, {'y': 3, 'z': 4})", expected: "{'x': 1, 'y': 3, 'z': 4}" },
                    { input: "merge_dicts({}, {})", expected: "{}" }
                ]
            },
            {
                id: "087",
                number: 5,
                title: "Dict from Lists",
                description: "Create a function `dict_from_lists` that returns a dictionary where keys come from `keys` list and values from `values` list.",
                hint: "Loop by index, pair `keys[i]` with `values[i]`.",
                starterCode: `def dict_from_lists(keys: list, values: list) -> dict:
    # Your code here
    pass`,
                solutionCode: `def dict_from_lists(keys: list, values: list) -> dict:
    """Create dictionary from parallel lists."""
    result = {}
    for i in range(len(keys)):
        result[keys[i]] = values[i]
    return result`,
                testCases: [
                    { input: "dict_from_lists(['a', 'b'], [1, 2])", expected: "{'a': 1, 'b': 2}" },
                    { input: "dict_from_lists([], [])", expected: "{}" },
                    { input: "dict_from_lists(['name'], ['Alice'])", expected: "{'name': 'Alice'}" },
                    { input: "dict_from_lists(['x', 'y', 'z'], [10, 20, 30])", expected: "{'x': 10, 'y': 20, 'z': 30}" },
                    { input: "dict_from_lists(['key'], [None])", expected: "{'key': None}" }
                ]
            },
            {
                id: "088",
                number: 6,
                title: "Filter Dictionary",
                description: "Create a function `filter_dict` that returns a new dictionary containing only entries where the value is at least `min_value`.",
                hint: "If `value >= min_value`, add to result.",
                starterCode: `def filter_dict(d: dict, min_value: float) -> dict:
    # Your code here
    pass`,
                solutionCode: `def filter_dict(d: dict, min_value: float) -> dict:
    """Filter dictionary by minimum value."""
    result = {}
    for key, value in d.items():
        if value >= min_value:
            result[key] = value
    return result`,
                testCases: [
                    { input: "filter_dict({'a': 1, 'b': 2, 'c': 3}, 2)", expected: "{'b': 2, 'c': 3}" },
                    { input: "filter_dict({'a': 1}, 5)", expected: "{}" },
                    { input: "filter_dict({}, 0)", expected: "{}" },
                    { input: "filter_dict({'x': 10, 'y': 20}, 10)", expected: "{'x': 10, 'y': 20}" },
                    { input: "filter_dict({'a': -5, 'b': 5}, 0)", expected: "{'b': 5}" }
                ]
            },
            {
                id: "089",
                number: 7,
                title: "Safe Value Access",
                description: "Create a function `get_value_safely` that returns the value for `key` in `d`, or `default` if the key is missing.",
                hint: "If `key` in `d`, return `d[key]`, else return `default`.",
                starterCode: `def get_value_safely(d: dict, key: str, default):
    # Your code here
    pass`,
                solutionCode: `def get_value_safely(d: dict, key: str, default):
    """Get value with fallback default."""
    if key in d:
        return d[key]
    return default`,
                testCases: [
                    { input: "get_value_safely({'a': 1}, 'a', 0)", expected: "1" },
                    { input: "get_value_safely({'a': 1}, 'b', 0)", expected: "0" },
                    { input: "get_value_safely({}, 'x', 'none')", expected: "'none'" },
                    { input: "get_value_safely({'key': 'value'}, 'key', 'default')", expected: "'value'" },
                    { input: "get_value_safely({'num': 42}, 'missing', -1)", expected: "-1" }
                ]
            },
            {
                id: "090",
                number: 8,
                title: "Group by Length",
                description: "Create a function `group_by_length` that returns a dictionary grouping words by their length (len -> [words]).",
                hint: "Initialize list if key missing, then append word.",
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
    return result`,
                testCases: [
                    { input: "group_by_length(['a', 'bb', 'c'])", expected: "{1: ['a', 'c'], 2: ['bb']}" },
                    { input: "group_by_length(['hi', 'no'])", expected: "{2: ['hi', 'no']}" },
                    { input: "group_by_length([])", expected: "{}" },
                    { input: "group_by_length(['one', 'two', 'six'])", expected: "{3: ['one', 'two', 'six']}" },
                    { input: "group_by_length(['a'])", expected: "{1: ['a']}" }
                ]
            },
            {
                id: "091",
                number: 9,
                title: "Most Common Character",
                description: "Create a function `most_common` that returns the character with the highest frequency in `text`.",
                hint: "Count chars, then find key with max value.",
                starterCode: `def most_common(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def most_common(text: str) -> str:
    """Find the most frequently occurring character."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    max_char = ''
    max_count = 0
    for char, count in counts.items():
        if count > max_count:
            max_char = char
            max_count = count
    return max_char`,
                testCases: [
                    { input: "most_common('banana')", expected: "'a'" },
                    { input: "most_common('aaabb')", expected: "'a'" },
                    { input: "most_common('x')", expected: "'x'" },
                    { input: "most_common('aabb')", expected: "'a'" },
                    { input: "most_common('hello')", expected: "'l'" }
                ]
            },
            {
                id: "092",
                number: 10,
                title: "Sum Values",
                description: "Create a function `sum_values` that returns the sum of all values in the dictionary.",
                hint: "Iterate `d.values()` and sum them.",
                starterCode: `def sum_values(d: dict) -> float:
    # Your code here
    pass`,
                solutionCode: `def sum_values(d: dict) -> float:
    """Sum all values in a dictionary."""
    total = 0
    for value in d.values():
        total += value
    return total`,
                testCases: [
                    { input: "sum_values({'a': 10, 'b': 20})", expected: "30" },
                    { input: "sum_values({'a': -5, 'b': 5})", expected: "0" },
                    { input: "sum_values({})", expected: "0" },
                    { input: "sum_values({'score': 100})", expected: "100" },
                    { input: "sum_values({'x': 1, 'y': 2, 'z': 3})", expected: "6" }
                ]
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
                title: "Palindrome Detector",
                description: "Create a function `is_palindrome` that returns `True` if `text` is a palindrome (reading the same forwards and backwards), ignoring case and spaces.",
                hint: "Clean string (lower case, remove spaces), then compare with its reverse.",
                starterCode: `def is_palindrome(text: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]`,
                testCases: [
                    { input: "is_palindrome('Racecar')", expected: "True" },
                    { input: "is_palindrome('Hello')", expected: "False" },
                    { input: "is_palindrome('A man a plan a canal Panama')", expected: "True" },
                    { input: "is_palindrome('Level')", expected: "True" },
                    { input: "is_palindrome('Python')", expected: "False" }
                ]
            },
            {
                id: "094",
                number: 2,
                title: "Remove Vowels",
                description: "Create a function `remove_vowels` that returns a new string with all vowels (a, e, i, o, u) removed from `text`.",
                hint: "Iterate chars, append to result if not a vowel.",
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
    return result`,
                testCases: [
                    { input: "remove_vowels('Hello')", expected: "'Hll'" },
                    { input: "remove_vowels('AEIOU')", expected: "''" },
                    { input: "remove_vowels('BCDFGH')", expected: "'BCDFGH'" },
                    { input: "remove_vowels('Python Programming')", expected: "'Pythn Prgrmmng'" },
                    { input: "remove_vowels('')", expected: "''" }
                ]
            },
            {
                id: "095",
                number: 3,
                title: "Title Case",
                description: "Create a function `capitalize_words` that returns `sentence` with the first letter of each word capitalized.",
                hint: "Split words, capitalize each, then join.",
                starterCode: `def capitalize_words(sentence: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def capitalize_words(sentence: str) -> str:
    """Capitalize first letter of each word."""
    words = sentence.split()
    result = []
    for word in words:
        result.append(word.capitalize())
    return " ".join(result)`,
                testCases: [
                    { input: "capitalize_words('hello world')", expected: "'Hello World'" },
                    { input: "capitalize_words('this is python')", expected: "'This Is Python'" },
                    { input: "capitalize_words('ALREADY CAPS')", expected: "'Already Caps'" },
                    { input: "capitalize_words('')", expected: "''" },
                    { input: "capitalize_words('a')", expected: "'A'" }
                ]
            },
            {
                id: "096",
                number: 4,
                title: "Extract Digits",
                description: "Create a function `extract_digits` that returns a string containing only the numeric digits from `text`.",
                hint: "If `char.isdigit()`, append to result.",
                starterCode: `def extract_digits(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def extract_digits(text: str) -> str:
    """Extract only digits from text."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,
                testCases: [
                    { input: "extract_digits('abc123def456')", expected: "'123456'" },
                    { input: "extract_digits('Price: $19.99')", expected: "'1999'" },
                    { input: "extract_digits('No digits')", expected: "''" },
                    { input: "extract_digits('2024-12-09')", expected: "'20241209'" },
                    { input: "extract_digits('123')", expected: "'123'" }
                ]
            },
            {
                id: "097",
                number: 5,
                title: "Mask String",
                description: "Create a function `mask_string` that masks all but the last 4 characters of `text` with '*', unless length <= 4 (then mask all).",
                hint: "Use string slicing and multiplication.",
                starterCode: `def mask_string(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def mask_string(text: str) -> str:
    """Mask all but last 4 characters."""
    if len(text) <= 4:
        return "*" * len(text)
    return "*" * (len(text) - 4) + text[-4:]`,
                testCases: [
                    { input: "mask_string('1234567890')", expected: "'******7890'" },
                    { input: "mask_string('123')", expected: "'***'" },
                    { input: "mask_string('1234')", expected: "'****'" },
                    { input: "mask_string('password12345')", expected: "'*********2345'" },
                    { input: "mask_string('')", expected: "''" }
                ]
            },
            {
                id: "098",
                number: 6,
                title: "Anagram Checker",
                description: "Create a function `is_anagram` that returns `True` if `s1` and `s2` are anagrams (contain same letters), ignoring case and spaces.",
                hint: "Clean strings, then compare sorted characters.",
                starterCode: `def is_anagram(s1: str, s2: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_anagram(s1: str, s2: str) -> bool:
    """Check if two strings are anagrams."""
    clean1 = s1.lower().replace(" ", "")
    clean2 = s2.lower().replace(" ", "")
    return sorted(clean1) == sorted(clean2)`,
                testCases: [
                    { input: "is_anagram('Listen', 'Silent')", expected: "True" },
                    { input: "is_anagram('hello', 'world')", expected: "False" },
                    { input: "is_anagram('rail safety', 'fairy tales')", expected: "True" },
                    { input: "is_anagram('Python', 'typhon')", expected: "True" },
                    { input: "is_anagram('abc', 'abcd')", expected: "False" }
                ]
            },
            {
                id: "099",
                number: 7,
                title: "Longest Word",
                description: "Create a function `longest_word` that returns the longest word in `sentence`.",
                hint: "Split sentence. Track longest word found so far.",
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
    return longest`,
                testCases: [
                    { input: "longest_word('This is a test')", expected: "'test'" },
                    { input: "longest_word('Python is amazing')", expected: "'amazing'" },
                    { input: "longest_word('')", expected: "''" },
                    { input: "longest_word('I love programming')", expected: "'programming'" },
                    { input: "longest_word('cat hat bat')", expected: "'cat'" }
                ]
            },
            {
                id: "100",
                number: 8,
                title: "Run-Length Encoding",
                description: "Create a function `compress_string` that returns a compressed string using run-length encoding (e.g., 'a2b3'), but only if shorter than original.",
                hint: "Iterate chars, counting consecutive runs. Append char+count.",
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
    return text`,
                testCases: [
                    { input: "compress_string('aabcccccaaa')", expected: "'a2b1c5a3'" },
                    { input: "compress_string('abcdef')", expected: "'abcdef'" },
                    { input: "compress_string('aaaa')", expected: "'a4'" },
                    { input: "compress_string('')", expected: "''" },
                    { input: "compress_string('aabbcc')", expected: "'aabbcc'" }
                ]
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
                title: "Get Names",
                description: "Create a function `get_names` that returns a list of 'name' values from a list of dictionaries.",
                hint: "Loop through people, append `person['name']` to list.",
                starterCode: `def get_names(people: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def get_names(people: list) -> list:
    """Extract names from list of person dicts."""
    names = []
    for person in people:
        names.append(person["name"])
    return names`,
                testCases: [
                    { input: "get_names([{'name': 'Alice'}, {'name': 'Bob'}])", expected: "['Alice', 'Bob']" },
                    { input: "get_names([])", expected: "[]" },
                    { input: "get_names([{'name': 'Solo'}])", expected: "['Solo']" },
                    { input: "get_names([{'name': 'A', 'age': 20}, {'name': 'B', 'age': 30}])", expected: "['A', 'B']" },
                    { input: "get_names([{'name': ''}])", expected: "['']" }
                ]
            },
            {
                id: "102",
                number: 2,
                title: "Filter by Key",
                description: "Create a function `filter_by_key` that returns a new list containing only items where `item[key]` equals `value`.",
                hint: "Loop items. If `item.get(key) == value`, add to result.",
                starterCode: `def filter_by_key(items: list, key: str, value) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_by_key(items: list, key: str, value) -> list:
    """Filter list of dicts by key-value match."""
    result = []
    for item in items:
        if item.get(key) == value:
            result.append(item)
    return result`,
                testCases: [
                    { input: "filter_by_key([{'id': 1, 'type': 'A'}, {'id': 2, 'type': 'B'}, {'id': 3, 'type': 'A'}], 'type', 'A')", expected: "[{'id': 1, 'type': 'A'}, {'id': 3, 'type': 'A'}]" },
                    { input: "filter_by_key([], 'type', 'A')", expected: "[]" },
                    { input: "filter_by_key([{'x': 1}], 'x', 1)", expected: "[{'x': 1}]" },
                    { input: "filter_by_key([{'x': 1}], 'y', 1)", expected: "[]" },
                    { input: "filter_by_key([{'a': None}], 'a', None)", expected: "[{'a': None}]" }
                ]
            },
            {
                id: "103",
                number: 3,
                title: "Cart Total",
                description: "Create a function `cart_total` that returns the total cost (price * quantity) of all items in `cart`.",
                hint: "Sum `item['price'] * item['quantity']` for each item.",
                starterCode: `def cart_total(cart: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def cart_total(cart: list) -> float:
    """Calculate total cost of shopping cart."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,
                testCases: [
                    { input: "cart_total([{'price': 10, 'quantity': 2}, {'price': 5, 'quantity': 1}])", expected: "25" },
                    { input: "cart_total([])", expected: "0" },
                    { input: "cart_total([{'price': 99.99, 'quantity': 1}])", expected: "99.99" },
                    { input: "cart_total([{'price': 0, 'quantity': 100}])", expected: "0" },
                    { input: "cart_total([{'price': 1, 'quantity': 1}, {'price': 1, 'quantity': 1}])", expected: "2" }
                ]
            },
            {
                id: "104",
                number: 4,
                title: "Average by Key",
                description: "Create a function `average_by_key` that returns the average value of `key` across all items (return 0 if empty).",
                hint: "Sum `item[key]` for all items, divide by count.",
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
    return total / len(items)`,
                testCases: [
                    { input: "average_by_key([{'score': 10}, {'score': 20}], 'score')", expected: "15.0" },
                    { input: "average_by_key([], 'score')", expected: "0" },
                    { input: "average_by_key([{'val': 100}], 'val')", expected: "100.0" },
                    { input: "average_by_key([{'x': 1}, {'x': 2}, {'x': 3}], 'x')", expected: "2.0" },
                    { input: "average_by_key([{'n': 0}, {'n': 0}], 'n')", expected: "0.0" }
                ]
            },
            {
                id: "105",
                number: 5,
                title: "Find by ID",
                description: "Create a function `find_by_id` that returns the dictionary with the matching `id`, or `None` if not found.",
                hint: "Loop items. If `item['id'] == target_id`, return item.",
                starterCode: `def find_by_id(items: list, target_id: int) -> dict:
    # Your code here
    pass`,
                solutionCode: `def find_by_id(items: list, target_id: int) -> dict:
    """Find dict by id value."""
    for item in items:
        if item.get("id") == target_id:
            return item
    return None`,
                testCases: [
                    { input: "find_by_id([{'id': 1, 'name': 'A'}, {'id': 2, 'name': 'B'}], 2)", expected: "{'id': 2, 'name': 'B'}" },
                    { input: "find_by_id([{'id': 1}], 3)", expected: "None" },
                    { input: "find_by_id([], 1)", expected: "None" },
                    { input: "find_by_id([{'id': 0}], 0)", expected: "{'id': 0}" },
                    { input: "find_by_id([{'id': 1}, {'id': 1}], 1)", expected: "{'id': 1}" }
                ]
            },
            {
                id: "106",
                number: 6,
                title: "Group by Key",
                description: "Create a function `group_by_key` that returns a dictionary where keys are values of the specified `key` and dictionary values are lists of matching items.",
                hint: "Initialize list if value not in result, then append item.",
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
    return result`,
                testCases: [
                    { input: "group_by_key([{'type': 'A', 'val': 1}, {'type': 'B', 'val': 2}, {'type': 'A', 'val': 3}], 'type')", expected: "{'A': [{'type': 'A', 'val': 1}, {'type': 'A', 'val': 3}], 'B': [{'type': 'B', 'val': 2}]}" },
                    { input: "group_by_key([], 'type')", expected: "{}" },
                    { input: "group_by_key([{'x': 1}], 'x')", expected: "{1: [{'x': 1}]}" },
                    { input: "group_by_key([{'a': 1}, {'a': 1}], 'a')", expected: "{1: [{'a': 1}, {'a': 1}]}" },
                    { input: "group_by_key([{'k': 'v'}], 'missing')", expected: "{None: [{'k': 'v'}]}" }
                ]
            },
            {
                id: "107",
                number: 7,
                title: "Flatten List",
                description: "Create a function `flatten` that returns a single list containing all elements from the nested list of lists.",
                hint: "Loop sublists, then loop items in sublist and append to result.",
                starterCode: `def flatten(nested: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def flatten(nested: list) -> list:
    """Flatten a list of lists."""
    result = []
    for sublist in nested:
        for item in sublist:
            result.append(item)
    return result`,
                testCases: [
                    { input: "flatten([[1, 2], [3, 4]])", expected: "[1, 2, 3, 4]" },
                    { input: "flatten([[], [1]])", expected: "[1]" },
                    { input: "flatten([])", expected: "[]" },
                    { input: "flatten([[1], [2], [3]])", expected: "[1, 2, 3]" },
                    { input: "flatten([['a', 'b'], ['c']])", expected: "['a', 'b', 'c']" }
                ]
            },
            {
                id: "108",
                number: 8,
                title: "Sort by Key",
                description: "Create a function `sort_by_key` that returns a new list of items sorted by `key` (ascending). Implement your own sort.",
                hint: "Use Bubble Sort. Compare `items[j][key]` and `items[j+1][key]`.",
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
    return result`,
                testCases: [
                    { input: "sort_by_key([{'val': 3}, {'val': 1}, {'val': 2}], 'val')", expected: "[{'val': 1}, {'val': 2}, {'val': 3}]" },
                    { input: "sort_by_key([], 'val')", expected: "[]" },
                    { input: "sort_by_key([{'x': 5}], 'x')", expected: "[{'x': 5}]" },
                    { input: "sort_by_key([{'n': 2}, {'n': 2}], 'n')", expected: "[{'n': 2}, {'n': 2}]" },
                    { input: "sort_by_key([{'a': 1}, {'a': 0}], 'a')", expected: "[{'a': 0}, {'a': 1}]" }
                ]
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
                title: "Password Strength",
                description: "Create a function `validate_password` that returns a dictionary checking if `password` meets strength rules (length >= 8, uppercase, lowercase, digit).",
                hint: "Check rules individually. Append errors to list if rules fail.",
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
    
    return {"valid": len(errors) == 0, "errors": errors}`,
                testCases: [
                    { input: "validate_password('ValidPass1')", expected: "{'valid': True, 'errors': []}" },
                    { input: "validate_password('short')", expected: "{'valid': False, 'errors': ['Must be at least 8 characters', 'Must contain uppercase letter', 'Must contain a digit']}" },
                    { input: "validate_password('alllowercase1')", expected: "{'valid': False, 'errors': ['Must contain uppercase letter']}" },
                    { input: "validate_password('ALLUPPERCASE1')", expected: "{'valid': False, 'errors': ['Must contain lowercase letter']}" },
                    { input: "validate_password('NoDigitsHere')", expected: "{'valid': False, 'errors': ['Must contain a digit']}" }
                ]
            },
            {
                id: "110",
                number: 2,
                title: "Format Duration",
                description: "Create a function `format_duration` that returns a human-readable string (e.g., '1 hour, 5 minutes') from a number of `seconds`.",
                hint: "Calculate hours, minutes, seconds. Join non-zero parts with ', '.",
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
    
    return ", ".join(parts)`,
                testCases: [
                    { input: "format_duration(3665)", expected: "'1 hour, 1 minute, 5 seconds'" },
                    { input: "format_duration(62)", expected: "'1 minute, 2 seconds'" },
                    { input: "format_duration(0)", expected: "'0 seconds'" },
                    { input: "format_duration(3600)", expected: "'1 hour'" },
                    { input: "format_duration(7201)", expected: "'2 hours, 1 second'" }
                ]
            },
            {
                id: "111",
                number: 3,
                title: "Grade Statistics",
                description: "Create a function `calculate_grade_stats` that returns a dictionary with 'average', 'highest', 'lowest', and 'passing' stats from a list of student records.",
                hint: "Iterate records to find min, max, sum, and count passing.",
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
    }`,
                testCases: [
                    { input: "calculate_grade_stats([{'name': 'A', 'score': 80}, {'name': 'B', 'score': 60}, {'name': 'C', 'score': 40}])", expected: "{'average': 60.0, 'highest': 80, 'lowest': 40, 'passing': 2}" },
                    { input: "calculate_grade_stats([])", expected: "{'average': 0, 'highest': 0, 'lowest': 0, 'passing': 0}" },
                    { input: "calculate_grade_stats([{'name': 'X', 'score': 100}])", expected: "{'average': 100.0, 'highest': 100, 'lowest': 100, 'passing': 1}" },
                    { input: "calculate_grade_stats([{'name': 'A', 'score': 59}, {'name': 'B', 'score': 60}])", expected: "{'average': 59.5, 'highest': 60, 'lowest': 59, 'passing': 1}" },
                    { input: "calculate_grade_stats([{'name': 'Z', 'score': 0}])", expected: "{'average': 0.0, 'highest': 0, 'lowest': 0, 'passing': 0}" }
                ]
            },
            {
                id: "112",
                number: 4,
                title: "Word Frequency",
                description: "Create a function `word_frequency` that returns a list of the top 5 most common words in `text` as `[word, count]` pairs.",
                hint: "Count words in dictionary, convert to list, sort descending, return top 5.",
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
    
    return items[:5]`,
                testCases: [
                    { input: "word_frequency('a b a c b a')", expected: "[['a', 3], ['b', 2], ['c', 1]]" },
                    { input: "word_frequency('')", expected: "[]" },
                    { input: "word_frequency('one one two')", expected: "[['one', 2], ['two', 1]]" },
                    { input: "word_frequency('word')", expected: "[['word', 1]]" },
                    { input: "word_frequency('a a a a a b b b c c')", expected: "[['a', 5], ['b', 3], ['c', 2]]" }
                ]
            },
            {
                id: "113",
                number: 5,
                title: "Valid Brackets",
                description: "Create a function `valid_brackets` that returns `True` if the brackets in string `s` are properly matched and nested.",
                hint: "Use a stack. Push opening brackets, pop matching closing brackets.",
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
    
    return len(stack) == 0`,
                testCases: [
                    { input: "valid_brackets('()[]{}')", expected: "True" },
                    { input: "valid_brackets('([)]')", expected: "False" },
                    { input: "valid_brackets('[')", expected: "False" },
                    { input: "valid_brackets('')", expected: "True" },
                    { input: "valid_brackets('((()))')", expected: "True" }
                ]
            },
            {
                id: "114",
                number: 6,
                title: "Merge Sorted Lists",
                description: "Create a function `merge_sorted` that returns a single sorted list by merging two already sorted lists `list1` and `list2`.",
                hint: "Use pointers. Compare items from both lists, append smaller item to result.",
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
    
    return result`,
                testCases: [
                    { input: "merge_sorted([1, 3, 5], [2, 4, 6])", expected: "[1, 2, 3, 4, 5, 6]" },
                    { input: "merge_sorted([1, 2], [])", expected: "[1, 2]" },
                    { input: "merge_sorted([], [])", expected: "[]" },
                    { input: "merge_sorted([1], [2])", expected: "[1, 2]" },
                    { input: "merge_sorted([1, 1], [1, 1])", expected: "[1, 1, 1, 1]" }
                ]
            },
            {
                id: "115",
                number: 7,
                title: "Caesar Cipher",
                description: "Create a function `caesar_cipher` that returns `text` encrypted by shifting each letter by `shift` positions.",
                hint: "Shift char code: `(ord(c) - base + shift) % 26 + base`.",
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
    return result`,
                testCases: [
                    { input: "caesar_cipher('abc', 1)", expected: "'bcd'" },
                    { input: "caesar_cipher('xyz', 1)", expected: "'yza'" },
                    { input: "caesar_cipher('Hello, World!', 1)", expected: "'Ifmmp, Xpsme!'" },
                    { input: "caesar_cipher('abc', 0)", expected: "'abc'" },
                    { input: "caesar_cipher('a', 26)", expected: "'a'" }
                ]
            },
            {
                id: "116",
                number: 8,
                title: "Calculate Invoice",
                description: "Create a function `calculate_invoice` that returns a dictionary with 'subtotal', 'total_discount', and 'grand_total' from a list of items.",
                hint: "Iterate items. Add to subtotal. If discount info present, add to total discount.",
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
    }`,
                testCases: [
                    { input: "calculate_invoice([{'quantity': 2, 'unit_price': 10}, {'quantity': 1, 'unit_price': 20, 'discount': 10}])", expected: "{'subtotal': 40.0, 'total_discount': 2.0, 'grand_total': 38.0}" },
                    { input: "calculate_invoice([])", expected: "{'subtotal': 0, 'total_discount': 0, 'grand_total': 0}" },
                    { input: "calculate_invoice([{'quantity': 1, 'unit_price': 100, 'discount': 50}])", expected: "{'subtotal': 100.0, 'total_discount': 50.0, 'grand_total': 50.0}" },
                    { input: "calculate_invoice([{'quantity': 5, 'unit_price': 10}])", expected: "{'subtotal': 50.0, 'total_discount': 0, 'grand_total': 50.0}" },
                    { input: "calculate_invoice([{'quantity': 3, 'unit_price': 33.33}])", expected: "{'subtotal': 99.99, 'total_discount': 0, 'grand_total': 99.99}" }
                ]
            },
        ],
    },
];
