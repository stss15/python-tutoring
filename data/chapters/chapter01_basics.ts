import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 1: THE BASICS
// Concepts: Variables, print(), f-strings, basic arithmetic
// Prerequisites: None
// ============================================================

export const basics_challenges: Challenge[] = [
    // FOUNDATION (1-2): Introduce variables and print
    {
        id: "001",
        number: 1,
        title: "Hello Name",
        description: "Write a function called `hello_name` that takes a first name and returns a greeting string in the format 'Hello, [name]!'.",
        hint: "Use an f-string: f'Hello, {name}!'",
        starterCode: `def hello_name(first_name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def hello_name(first_name: str) -> str:
    return f"Hello, {first_name}!"`,
        testCases: [
            { input: "hello_name('Alice')", expected: "'Hello, Alice!'" },
            { input: "hello_name('Bob')", expected: "'Hello, Bob!'" },
            { input: "hello_name('Dr. Smith')", expected: "'Hello, Dr. Smith!'" },
            { input: "hello_name('')", expected: "'Hello, !'" },
            { input: "hello_name('X')", expected: "'Hello, X!'" }
        ]
    },
    {
        id: "002",
        number: 2,
        title: "Full Name Formatter",
        description: "Write a function called `format_full_name` that takes a first name and last name. Return them combined as 'Last, First' (surname first, then a comma and space, then first name).",
        hint: "Use f-string to combine: f'{last}, {first}'",
        starterCode: `def format_full_name(first_name: str, last_name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_full_name(first_name: str, last_name: str) -> str:
    return f"{last_name}, {first_name}"`,
        testCases: [
            { input: "format_full_name('John', 'Smith')", expected: "'Smith, John'" },
            { input: "format_full_name('Ada', 'Lovelace')", expected: "'Lovelace, Ada'" },
            { input: "format_full_name('Alan', 'Turing')", expected: "'Turing, Alan'" },
            { input: "format_full_name('Grace', 'Hopper')", expected: "'Hopper, Grace'" },
            { input: "format_full_name('A', 'B')", expected: "'B, A'" }
        ]
    },

    // BUILDING (3-4): Combine strings with calculations
    {
        id: "003",
        number: 3,
        title: "Age in Days",
        description: "Write a function called `age_in_days` that takes a person's age in years. Calculate how many days old they are (assume 365 days per year) and return a string: '[age] years is approximately [days] days'.",
        hint: "Multiply age by 365, then use f-string to format the output.",
        starterCode: `def age_in_days(age_years: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def age_in_days(age_years: int) -> str:
    days = age_years * 365
    return f"{age_years} years is approximately {days} days"`,
        testCases: [
            { input: "age_in_days(1)", expected: "'1 years is approximately 365 days'" },
            { input: "age_in_days(10)", expected: "'10 years is approximately 3650 days'" },
            { input: "age_in_days(25)", expected: "'25 years is approximately 9125 days'" },
            { input: "age_in_days(0)", expected: "'0 years is approximately 0 days'" },
            { input: "age_in_days(100)", expected: "'100 years is approximately 36500 days'" }
        ]
    },
    {
        id: "004",
        number: 4,
        title: "Rectangle Info",
        description: "Write a function called `rectangle_info` that takes width and height of a rectangle. Calculate both the area (width × height) and perimeter (2 × width + 2 × height). Return: 'Area: [area], Perimeter: [perimeter]'.",
        hint: "Calculate area = width * height and perimeter = 2 * width + 2 * height",
        starterCode: `def rectangle_info(width: int, height: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def rectangle_info(width: int, height: int) -> str:
    area = width * height
    perimeter = 2 * width + 2 * height
    return f"Area: {area}, Perimeter: {perimeter}"`,
        testCases: [
            { input: "rectangle_info(5, 3)", expected: "'Area: 15, Perimeter: 16'" },
            { input: "rectangle_info(10, 10)", expected: "'Area: 100, Perimeter: 40'" },
            { input: "rectangle_info(1, 1)", expected: "'Area: 1, Perimeter: 4'" },
            { input: "rectangle_info(7, 2)", expected: "'Area: 14, Perimeter: 18'" },
            { input: "rectangle_info(100, 50)", expected: "'Area: 5000, Perimeter: 300'" }
        ]
    },

    // APPLICATION (5-6): Real-world scenarios
    {
        id: "005",
        number: 5,
        title: "Trip Cost Calculator",
        description: "Write a function called `trip_cost` that takes distance in miles and fuel efficiency (miles per gallon). Calculate gallons needed (distance ÷ efficiency) and total cost assuming $3.50 per gallon. Return: 'Gallons: [gallons], Cost: $[cost]'. Round both to 2 decimal places.",
        hint: "gallons = distance / efficiency, cost = gallons * 3.50. Use round(value, 2)",
        starterCode: `def trip_cost(distance: float, mpg: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def trip_cost(distance: float, mpg: float) -> str:
    gallons = round(distance / mpg, 2)
    cost = round(gallons * 3.50, 2)
    return f"Gallons: {gallons}, Cost: \${cost}"`,
        testCases: [
            { input: "trip_cost(100, 25)", expected: "'Gallons: 4.0, Cost: $14.0'" },
            { input: "trip_cost(300, 30)", expected: "'Gallons: 10.0, Cost: $35.0'" },
            { input: "trip_cost(150, 20)", expected: "'Gallons: 7.5, Cost: $26.25'" },
            { input: "trip_cost(50, 40)", expected: "'Gallons: 1.25, Cost: $4.38'" },
            { input: "trip_cost(1000, 50)", expected: "'Gallons: 20.0, Cost: $70.0'" }
        ]
    },
    {
        id: "006",
        number: 6,
        title: "Study Time Breakdown",
        description: "Write a function called `study_breakdown` that takes total study minutes. Convert to hours and remaining minutes. Return: '[hours] hours and [minutes] minutes'. Use integer division (//) and modulo (%).",
        hint: "hours = total // 60, remaining_minutes = total % 60",
        starterCode: `def study_breakdown(total_minutes: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def study_breakdown(total_minutes: int) -> str:
    hours = total_minutes // 60
    minutes = total_minutes % 60
    return f"{hours} hours and {minutes} minutes"`,
        testCases: [
            { input: "study_breakdown(90)", expected: "'1 hours and 30 minutes'" },
            { input: "study_breakdown(60)", expected: "'1 hours and 0 minutes'" },
            { input: "study_breakdown(125)", expected: "'2 hours and 5 minutes'" },
            { input: "study_breakdown(45)", expected: "'0 hours and 45 minutes'" },
            { input: "study_breakdown(180)", expected: "'3 hours and 0 minutes'" },
            { input: "study_breakdown(0)", expected: "'0 hours and 0 minutes'" }
        ]
    },

    // PROBLEM SOLVING (7-8): Multi-step reasoning
    {
        id: "007",
        number: 7,
        title: "Pizza Party Planner",
        description: "Write a function called `pizza_order` that takes the number of guests and slices per person. Each pizza has 8 slices. Calculate total slices needed and pizzas to order (round up using integer division trick: (total + 7) // 8). Return: 'Order [pizzas] pizzas for [guests] guests'.",
        hint: "total_slices = guests * slices_per_person. To round up division: (total + divisor - 1) // divisor",
        starterCode: `def pizza_order(guests: int, slices_per_person: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def pizza_order(guests: int, slices_per_person: int) -> str:
    total_slices = guests * slices_per_person
    pizzas = (total_slices + 7) // 8
    return f"Order {pizzas} pizzas for {guests} guests"`,
        testCases: [
            { input: "pizza_order(10, 2)", expected: "'Order 3 pizzas for 10 guests'" },
            { input: "pizza_order(8, 1)", expected: "'Order 1 pizzas for 8 guests'" },
            { input: "pizza_order(5, 3)", expected: "'Order 2 pizzas for 5 guests'" },
            { input: "pizza_order(1, 1)", expected: "'Order 1 pizzas for 1 guests'" },
            { input: "pizza_order(20, 2)", expected: "'Order 5 pizzas for 20 guests'" },
            { input: "pizza_order(7, 4)", expected: "'Order 4 pizzas for 7 guests'" }
        ]
    },
    {
        id: "008",
        number: 8,
        title: "Currency Exchange",
        description: "Write a function called `exchange_money` that takes an amount in USD, the exchange rate, and a transaction fee percentage. Calculate the converted amount, subtract the fee, and return: 'USD [usd] = [result] (after [fee]% fee)'. Round result to 2 decimals.",
        hint: "converted = usd * rate, fee_amount = converted * (fee/100), result = converted - fee_amount",
        starterCode: `def exchange_money(usd: float, rate: float, fee_percent: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def exchange_money(usd: float, rate: float, fee_percent: float) -> str:
    converted = usd * rate
    fee_amount = converted * (fee_percent / 100)
    result = round(converted - fee_amount, 2)
    return f"USD {usd} = {result} (after {fee_percent}% fee)"`,
        testCases: [
            { input: "exchange_money(100, 0.85, 2)", expected: "'USD 100 = 83.3 (after 2% fee)'" },
            { input: "exchange_money(500, 1.2, 1)", expected: "'USD 500 = 594.0 (after 1% fee)'" },
            { input: "exchange_money(1000, 0.9, 0)", expected: "'USD 1000 = 900.0 (after 0% fee)'" },
            { input: "exchange_money(250, 1.1, 5)", expected: "'USD 250 = 261.25 (after 5% fee)'" },
            { input: "exchange_money(50, 0.75, 3)", expected: "'USD 50 = 36.38 (after 3% fee)'" }
        ]
    },

    // INTEGRATION (9-10): Combine multiple concepts
    {
        id: "009",
        number: 9,
        title: "Employee Pay Slip",
        description: "Write a function called `pay_slip` that takes employee name, hourly rate, and hours worked. Calculate gross pay (rate × hours), tax at 20%, and net pay. Return a multi-line string: 'Employee: [name]\\nGross: $[gross]\\nTax: $[tax]\\nNet: $[net]'. Round all money to 2 decimals.",
        hint: "gross = rate * hours, tax = gross * 0.20, net = gross - tax. Use \\n for newlines.",
        starterCode: `def pay_slip(name: str, hourly_rate: float, hours: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def pay_slip(name: str, hourly_rate: float, hours: float) -> str:
    gross = round(hourly_rate * hours, 2)
    tax = round(gross * 0.20, 2)
    net = round(gross - tax, 2)
    return f"Employee: {name}\\nGross: \${gross}\\nTax: \${tax}\\nNet: \${net}"`,
        testCases: [
            { input: "pay_slip('Alice', 25.0, 40)", expected: "'Employee: Alice\\nGross: $1000.0\\nTax: $200.0\\nNet: $800.0'" },
            { input: "pay_slip('Bob', 15.5, 35)", expected: "'Employee: Bob\\nGross: $542.5\\nTax: $108.5\\nNet: $434.0'" },
            { input: "pay_slip('Carol', 50.0, 10)", expected: "'Employee: Carol\\nGross: $500.0\\nTax: $100.0\\nNet: $400.0'" },
            { input: "pay_slip('Dan', 20.0, 0)", expected: "'Employee: Dan\\nGross: $0.0\\nTax: $0.0\\nNet: $0.0'" },
            { input: "pay_slip('Eve', 12.75, 20)", expected: "'Employee: Eve\\nGross: $255.0\\nTax: $51.0\\nNet: $204.0'" }
        ]
    },
    {
        id: "010",
        number: 10,
        title: "BMI Calculator",
        description: "Write a function called `calculate_bmi` that takes a person's name, weight in kg, and height in meters. Calculate BMI (weight ÷ height²). Return: '[name]: BMI is [bmi] ([weight]kg, [height]m)'. Round BMI to 1 decimal.",
        hint: "bmi = weight / (height ** 2). Use round(bmi, 1) for 1 decimal place.",
        starterCode: `def calculate_bmi(name: str, weight_kg: float, height_m: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def calculate_bmi(name: str, weight_kg: float, height_m: float) -> str:
    bmi = round(weight_kg / (height_m ** 2), 1)
    return f"{name}: BMI is {bmi} ({weight_kg}kg, {height_m}m)"`,
        testCases: [
            { input: "calculate_bmi('Alice', 70, 1.75)", expected: "'Alice: BMI is 22.9 (70kg, 1.75m)'" },
            { input: "calculate_bmi('Bob', 85, 1.80)", expected: "'Bob: BMI is 26.2 (85kg, 1.8m)'" },
            { input: "calculate_bmi('Carol', 55, 1.60)", expected: "'Carol: BMI is 21.5 (55kg, 1.6m)'" },
            { input: "calculate_bmi('Dan', 100, 2.0)", expected: "'Dan: BMI is 25.0 (100kg, 2.0m)'" },
            { input: "calculate_bmi('Eve', 60, 1.65)", expected: "'Eve: BMI is 22.0 (60kg, 1.65m)'" }
        ]
    },

    // CAPSTONE (11-12): Mini-project requiring computational thinking
    {
        id: "011",
        number: 11,
        title: "Savings Goal Tracker",
        description: "Write a function called `savings_tracker` that takes current_savings, monthly_deposit, and goal_amount. Calculate months needed to reach goal: (goal - current) ÷ monthly (round up using the +divisor-1 trick). Calculate the final total (current + months × monthly). Return: 'Goal: $[goal] | Current: $[current] | Monthly: $[monthly] | Months needed: [months] | Final: $[final]'.",
        hint: "months = (goal - current + monthly - 1) // monthly. Handle case where already at goal (0 months).",
        starterCode: `def savings_tracker(current: float, monthly: float, goal: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def savings_tracker(current: float, monthly: float, goal: float) -> str:
    remaining = goal - current
    if remaining <= 0:
        months = 0
        final = current
    else:
        months = int((remaining + monthly - 1) // monthly)
        final = current + months * monthly
    return f"Goal: \${goal} | Current: \${current} | Monthly: \${monthly} | Months needed: {months} | Final: \${final}"`,
        testCases: [
            { input: "savings_tracker(1000, 200, 2000)", expected: "'Goal: $2000 | Current: $1000 | Monthly: $200 | Months needed: 5 | Final: $2000'" },
            { input: "savings_tracker(0, 500, 1500)", expected: "'Goal: $1500 | Current: $0 | Monthly: $500 | Months needed: 3 | Final: $1500'" },
            { input: "savings_tracker(5000, 100, 5000)", expected: "'Goal: $5000 | Current: $5000 | Monthly: $100 | Months needed: 0 | Final: $5000'" },
            { input: "savings_tracker(100, 50, 275)", expected: "'Goal: $275 | Current: $100 | Monthly: $50 | Months needed: 4 | Final: $300'" },
            { input: "savings_tracker(2500, 250, 5000)", expected: "'Goal: $5000 | Current: $2500 | Monthly: $250 | Months needed: 10 | Final: $5000'" }
        ]
    },
    {
        id: "012",
        number: 12,
        title: "Event Ticket Receipt",
        description: "Write a function called `ticket_receipt` that generates a complete receipt. Takes: event_name, ticket_price, quantity, discount_percent. Calculate subtotal (price × quantity), discount amount, and total. Return a formatted receipt string with each line separated by '\\n':\n'=== RECEIPT ===\\nEvent: [name]\\nTickets: [qty] x $[price]\\nSubtotal: $[subtotal]\\nDiscount ([percent]%): -$[discount]\\nTOTAL: $[total]\\n==============='",
        hint: "subtotal = price * qty, discount = subtotal * (percent/100), total = subtotal - discount. Use \\n for new lines.",
        starterCode: `def ticket_receipt(event: str, price: float, qty: int, discount: float) -> str:
    # Your code here
    pass`,
        solutionCode: `def ticket_receipt(event: str, price: float, qty: int, discount: float) -> str:
    subtotal = price * qty
    discount_amt = round(subtotal * (discount / 100), 2)
    total = round(subtotal - discount_amt, 2)
    return f"=== RECEIPT ===\\nEvent: {event}\\nTickets: {qty} x \${price}\\nSubtotal: \${subtotal}\\nDiscount ({discount}%): -\${discount_amt}\\nTOTAL: \${total}\\n==============="`,
        testCases: [
            { input: "ticket_receipt('Concert', 50.0, 2, 10)", expected: "'=== RECEIPT ===\\nEvent: Concert\\nTickets: 2 x $50.0\\nSubtotal: $100.0\\nDiscount (10%): -$10.0\\nTOTAL: $90.0\\n==============='" },
            { input: "ticket_receipt('Movie', 12.5, 4, 0)", expected: "'=== RECEIPT ===\\nEvent: Movie\\nTickets: 4 x $12.5\\nSubtotal: $50.0\\nDiscount (0%): -$0.0\\nTOTAL: $50.0\\n==============='" },
            { input: "ticket_receipt('Play', 75.0, 1, 25)", expected: "'=== RECEIPT ===\\nEvent: Play\\nTickets: 1 x $75.0\\nSubtotal: $75.0\\nDiscount (25%): -$18.75\\nTOTAL: $56.25\\n==============='" },
            { input: "ticket_receipt('Game', 100.0, 3, 5)", expected: "'=== RECEIPT ===\\nEvent: Game\\nTickets: 3 x $100.0\\nSubtotal: $300.0\\nDiscount (5%): -$15.0\\nTOTAL: $285.0\\n==============='" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const basicsExampleContent: ExampleContent = {
    intro: "Python is a powerful programming language. Let's learn the fundamentals: displaying output, storing data in variables, and combining them together.",
    codeBlocks: [
        {
            code: `print("Hello World")`,
            explanation: "The print() function displays text on the screen. Text (called strings) must be wrapped in quotes."
        },
        {
            code: `name = "Alice"
print(name)`,
            explanation: "Variables store data. Here we store the text 'Alice' in a variable called 'name', then print it."
        },
        {
            code: `age = 25
print("I am", age, "years old")`,
            explanation: "Variables can store numbers too. You can print multiple items separated by commas."
        },
        {
            code: `first = "Bob"
last = "Smith"
print(f"Hello {first} {last}")`,
            explanation: "F-strings (formatted strings) let you embed variables directly in text using {curly braces}. Start the string with 'f' before the quote."
        },
        {
            code: `# Arithmetic operators
total = 10 + 5      # Addition: 15
diff = 10 - 3       # Subtraction: 7
product = 4 * 5     # Multiplication: 20
quotient = 20 / 4   # Division: 5.0
remainder = 17 % 5  # Modulo (remainder): 2
whole = 17 // 5     # Integer division: 3`,
            explanation: "Python supports all standard arithmetic operations. Note that / always gives a decimal, while // gives a whole number."
        }
    ],
    tips: [
        "Variable names should be descriptive (e.g., 'user_age' not 'x')",
        "Python is case-sensitive: 'Name' and 'name' are different variables",
        "Use f-strings for cleaner code when combining text and variables",
        "Use // for integer division (no decimals) and % for remainders"
    ],
    runnable: `# Try it yourself!
# Create variables and print them

name = "Your Name"
age = 16
subject = "Computer Science"

print(f"Hello, my name is {name}")
print(f"I am {age} years old")
print(f"I love {subject}!")

# Math examples
hours = 90
print(f"{hours} minutes = {hours // 60} hours and {hours % 60} minutes")

# Experiment: Change the values above and run again!`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter01_basics: Chapter = {
    id: "01_basics",
    title: "The Basics",
    description: "Input, Output and Variables",
    explanation: "Learn to display text, handle user input, and use variables.",
    exampleCode: "print('Hello World')",
    exampleContent: basicsExampleContent,
    challenges: basics_challenges,
    homework: homeworkByChapter["01_basics"]
};
