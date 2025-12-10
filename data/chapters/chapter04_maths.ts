import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 4: MATHS
// Concepts: arithmetic, math module, rounding, floor/ceil, formulas
// Prerequisites: Chapter 1-2 (variables, arithmetic, if statements)
// SCOPE RESTRICTION: NO LOOPS ALLOWED
// ============================================================

export const math_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic math operations
    {
        id: "037",
        number: 1,
        title: "Circle Calculations",
        description: "Write a function called `circle_stats` that takes a radius and returns a string with the circumference and area. Formula: circumference = 2 × π × r, area = π × r². Use math.pi and round both to 2 decimals. Format: 'Circumference: [c], Area: [a]'.",
        hint: "import math, then use math.pi. Round with round(value, 2)",
        starterCode: `import math

def circle_stats(radius: float) -> str:
    # Your code here
    pass`,
        solutionCode: `import math

def circle_stats(radius: float) -> str:
    circumference = round(2 * math.pi * radius, 2)
    area = round(math.pi * radius ** 2, 2)
    return f"Circumference: {circumference}, Area: {area}"`,
        testCases: [
            { input: "circle_stats(1)", expected: "'Circumference: 6.28, Area: 3.14'" },
            { input: "circle_stats(5)", expected: "'Circumference: 31.42, Area: 78.54'" },
            { input: "circle_stats(10)", expected: "'Circumference: 62.83, Area: 314.16'" },
            { input: "circle_stats(2.5)", expected: "'Circumference: 15.71, Area: 19.63'" },
            { input: "circle_stats(0)", expected: "'Circumference: 0.0, Area: 0.0'" }
        ]
    },
    {
        id: "038",
        number: 2,
        title: "Temperature Converter",
        description: "Write a function called `convert_temp` that takes a temperature and a unit ('C' or 'F'). Convert Celsius to Fahrenheit (F = C × 9/5 + 32) or Fahrenheit to Celsius (C = (F - 32) × 5/9). Return the converted value rounded to 1 decimal.",
        hint: "Use if to check the unit, apply the appropriate formula",
        starterCode: `def convert_temp(temp: float, unit: str) -> float:
    # Your code here
    pass`,
        solutionCode: `def convert_temp(temp: float, unit: str) -> float:
    if unit == 'C':
        return round(temp * 9/5 + 32, 1)
    else:
        return round((temp - 32) * 5/9, 1)`,
        testCases: [
            { input: "convert_temp(0, 'C')", expected: "32.0" },
            { input: "convert_temp(100, 'C')", expected: "212.0" },
            { input: "convert_temp(32, 'F')", expected: "0.0" },
            { input: "convert_temp(98.6, 'F')", expected: "37.0" },
            { input: "convert_temp(20, 'C')", expected: "68.0" }
        ]
    },

    // BUILDING (3-4): Integer division and modulo
    {
        id: "039",
        number: 3,
        title: "Time Converter",
        description: "Write a function called `seconds_to_time` that takes a number of seconds and converts it to hours, minutes, and remaining seconds. Return: '[h] hours, [m] minutes, [s] seconds'. Use integer division (//) and modulo (%).",
        hint: "hours = total // 3600, remaining = total % 3600, minutes = remaining // 60, seconds = remaining % 60",
        starterCode: `def seconds_to_time(total_seconds: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def seconds_to_time(total_seconds: int) -> str:
    hours = total_seconds // 3600
    remaining = total_seconds % 3600
    minutes = remaining // 60
    seconds = remaining % 60
    return f"{hours} hours, {minutes} minutes, {seconds} seconds"`,
        testCases: [
            { input: "seconds_to_time(3661)", expected: "'1 hours, 1 minutes, 1 seconds'" },
            { input: "seconds_to_time(7200)", expected: "'2 hours, 0 minutes, 0 seconds'" },
            { input: "seconds_to_time(90)", expected: "'0 hours, 1 minutes, 30 seconds'" },
            { input: "seconds_to_time(0)", expected: "'0 hours, 0 minutes, 0 seconds'" },
            { input: "seconds_to_time(86399)", expected: "'23 hours, 59 minutes, 59 seconds'" }
        ]
    },
    {
        id: "040",
        number: 4,
        title: "Change Calculator",
        description: "Write a function called `make_change` that takes an amount in cents. Return the minimum number of coins needed using denominations: 25¢ (quarters), 10¢ (dimes), 5¢ (nickels), 1¢ (pennies). Format: 'Q:[q], D:[d], N:[n], P:[p]'.",
        hint: "Use integer division and modulo for each coin type, starting with the largest",
        starterCode: `def make_change(cents: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def make_change(cents: int) -> str:
    quarters = cents // 25
    cents = cents % 25
    dimes = cents // 10
    cents = cents % 10
    nickels = cents // 5
    pennies = cents % 5
    return f"Q:{quarters}, D:{dimes}, N:{nickels}, P:{pennies}"`,
        testCases: [
            { input: "make_change(99)", expected: "'Q:3, D:2, N:0, P:4'" },
            { input: "make_change(25)", expected: "'Q:1, D:0, N:0, P:0'" },
            { input: "make_change(67)", expected: "'Q:2, D:1, N:1, P:2'" },
            { input: "make_change(1)", expected: "'Q:0, D:0, N:0, P:1'" },
            { input: "make_change(0)", expected: "'Q:0, D:0, N:0, P:0'" }
        ]
    },

    // APPLICATION (5-6): Real-world formulas
    {
        id: "041",
        number: 5,
        title: "Compound Interest",
        description: "Write a function called `compound_interest` that calculates the future value of an investment. Takes principal, annual rate (as percentage), and years. Formula: A = P × (1 + r/100)^n. Return the result rounded to 2 decimals.",
        hint: "Use ** for exponent. Remember to divide rate by 100 to convert from percentage.",
        starterCode: `def compound_interest(principal: float, rate: float, years: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def compound_interest(principal: float, rate: float, years: int) -> float:
    return round(principal * (1 + rate/100) ** years, 2)`,
        testCases: [
            { input: "compound_interest(1000, 5, 10)", expected: "1628.89" },
            { input: "compound_interest(1000, 10, 1)", expected: "1100.0" },
            { input: "compound_interest(500, 7, 5)", expected: "701.28" },
            { input: "compound_interest(10000, 3, 20)", expected: "18061.11" },
            { input: "compound_interest(100, 0, 10)", expected: "100.0" }
        ]
    },
    {
        id: "042",
        number: 6,
        title: "Pythagorean Distance",
        description: "Write a function called `distance` that calculates the distance between two points (x1, y1) and (x2, y2). Formula: d = √((x2-x1)² + (y2-y1)²). Return rounded to 2 decimals.",
        hint: "Use math.sqrt() for square root, ** 2 for squaring",
        starterCode: `import math

def distance(x1: float, y1: float, x2: float, y2: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def distance(x1: float, y1: float, x2: float, y2: float) -> float:
    return round(math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2), 2)`,
        testCases: [
            { input: "distance(0, 0, 3, 4)", expected: "5.0" },
            { input: "distance(1, 1, 4, 5)", expected: "5.0" },
            { input: "distance(0, 0, 1, 1)", expected: "1.41" },
            { input: "distance(-3, -4, 0, 0)", expected: "5.0" },
            { input: "distance(2, 3, 2, 3)", expected: "0.0" }
        ]
    },

    // PROBLEM SOLVING (7-8): Multi-step calculations
    {
        id: "043",
        number: 7,
        title: "Loan Payment Calculator",
        description: "Write a function called `monthly_payment` that calculates the monthly payment for a loan. Takes principal, annual interest rate (percentage), and term in years. Formula: M = P × [r(1+r)^n] / [(1+r)^n - 1] where r = annual_rate/100/12 (monthly rate), n = years × 12 (months). Return rounded to 2 decimals. If rate is 0, return principal / (years * 12).",
        hint: "Convert rate to monthly decimal first. Handle 0% rate as special case.",
        starterCode: `def monthly_payment(principal: float, annual_rate: float, years: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def monthly_payment(principal: float, annual_rate: float, years: int) -> float:
    if annual_rate == 0:
        return round(principal / (years * 12), 2)
    
    r = annual_rate / 100 / 12  # Monthly interest rate
    n = years * 12  # Number of payments
    
    payment = principal * (r * (1 + r) ** n) / ((1 + r) ** n - 1)
    return round(payment, 2)`,
        testCases: [
            { input: "monthly_payment(10000, 5, 3)", expected: "299.71" },
            { input: "monthly_payment(25000, 7, 5)", expected: "495.03" },
            { input: "monthly_payment(1200, 0, 1)", expected: "100.0" },
            { input: "monthly_payment(100000, 4, 30)", expected: "477.42" },
            { input: "monthly_payment(5000, 10, 2)", expected: "230.72" }
        ]
    },
    {
        id: "044",
        number: 8,
        title: "Grade Point Average",
        description: "Write a function called `calculate_gpa` that takes four letter grades (A, B, C, D, F as strings) and returns the GPA. Point values: A=4.0, B=3.0, C=2.0, D=1.0, F=0.0. Return the average rounded to 2 decimals.",
        hint: "Use if/elif to convert each grade to points, then calculate average",
        starterCode: `def calculate_gpa(g1: str, g2: str, g3: str, g4: str) -> float:
    # Your code here
    pass`,
        solutionCode: `def calculate_gpa(g1: str, g2: str, g3: str, g4: str) -> float:
    def grade_to_points(grade):
        if grade == 'A':
            return 4.0
        elif grade == 'B':
            return 3.0
        elif grade == 'C':
            return 2.0
        elif grade == 'D':
            return 1.0
        return 0.0
    
    total = grade_to_points(g1) + grade_to_points(g2) + grade_to_points(g3) + grade_to_points(g4)
    return round(total / 4, 2)`,
        testCases: [
            { input: "calculate_gpa('A', 'A', 'A', 'A')", expected: "4.0" },
            { input: "calculate_gpa('A', 'B', 'C', 'D')", expected: "2.5" },
            { input: "calculate_gpa('B', 'B', 'B', 'B')", expected: "3.0" },
            { input: "calculate_gpa('A', 'A', 'B', 'B')", expected: "3.5" },
            { input: "calculate_gpa('F', 'F', 'F', 'F')", expected: "0.0" }
        ]
    },

    // INTEGRATION (9-10): Complex calculations with conditionals
    {
        id: "045",
        number: 9,
        title: "Quadratic Solver",
        description: "Write a function called `quadratic_roots` that solves ax² + bx + c = 0 using the quadratic formula. Calculate the discriminant (b² - 4ac). If negative, return 'No real roots'. If zero, return 'One root: [x]'. If positive, return 'Two roots: [x1] and [x2]' (smaller first). Round roots to 2 decimals.",
        hint: "discriminant = b**2 - 4*a*c. Use math.sqrt(). x = (-b ± √discriminant) / (2a)",
        starterCode: `import math

def quadratic_roots(a: float, b: float, c: float) -> str:
    # Your code here
    pass`,
        solutionCode: `import math

def quadratic_roots(a: float, b: float, c: float) -> str:
    discriminant = b ** 2 - 4 * a * c
    
    if discriminant < 0:
        return "No real roots"
    elif discriminant == 0:
        x = round(-b / (2 * a), 2)
        return f"One root: {x}"
    else:
        sqrt_d = math.sqrt(discriminant)
        x1 = round((-b - sqrt_d) / (2 * a), 2)
        x2 = round((-b + sqrt_d) / (2 * a), 2)
        smaller = min(x1, x2)
        larger = max(x1, x2)
        return f"Two roots: {smaller} and {larger}"`,
        testCases: [
            { input: "quadratic_roots(1, -5, 6)", expected: "'Two roots: 2.0 and 3.0'" },
            { input: "quadratic_roots(1, -2, 1)", expected: "'One root: 1.0'" },
            { input: "quadratic_roots(1, 1, 1)", expected: "'No real roots'" },
            { input: "quadratic_roots(1, 0, -4)", expected: "'Two roots: -2.0 and 2.0'" },
            { input: "quadratic_roots(2, -8, 6)", expected: "'Two roots: 1.0 and 3.0'" }
        ]
    },
    {
        id: "046",
        number: 10,
        title: "Triangle Area Calculator",
        description: "Write a function called `triangle_area` that calculates the area of a triangle given three side lengths using Heron's formula. First check if triangle is valid (sum of any two sides > third). If invalid, return -1. Formula: s = (a+b+c)/2, area = √(s(s-a)(s-b)(s-c)). Round to 2 decimals.",
        hint: "Check validity first, then calculate semi-perimeter s, then apply Heron's formula",
        starterCode: `import math

def triangle_area(a: float, b: float, c: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def triangle_area(a: float, b: float, c: float) -> float:
    # Check validity
    if a + b <= c or a + c <= b or b + c <= a:
        return -1
    
    # Heron's formula
    s = (a + b + c) / 2
    area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    return round(area, 2)`,
        testCases: [
            { input: "triangle_area(3, 4, 5)", expected: "6.0" },
            { input: "triangle_area(5, 5, 5)", expected: "10.83" },
            { input: "triangle_area(7, 8, 9)", expected: "26.83" },
            { input: "triangle_area(1, 1, 10)", expected: "-1" },
            { input: "triangle_area(6, 8, 10)", expected: "24.0" }
        ]
    },

    // CAPSTONE (11-12): Complex multi-formula problems
    {
        id: "047",
        number: 11,
        title: "Projectile Motion",
        description: "Write a function called `projectile_stats` that calculates projectile motion given initial velocity (m/s) and launch angle (degrees). Calculate: max height = (v²sin²θ)/(2g), range = (v²sin2θ)/g, flight time = (2v×sinθ)/g. Use g = 9.81. Return: 'Height: [h]m, Range: [r]m, Time: [t]s'. Round all to 2 decimals.",
        hint: "Convert angle to radians with math.radians(). Use math.sin() and math.cos().",
        starterCode: `import math

def projectile_stats(velocity: float, angle_degrees: float) -> str:
    # Your code here
    pass`,
        solutionCode: `import math

def projectile_stats(velocity: float, angle_degrees: float) -> str:
    g = 9.81
    angle_rad = math.radians(angle_degrees)
    
    max_height = (velocity ** 2 * math.sin(angle_rad) ** 2) / (2 * g)
    proj_range = (velocity ** 2 * math.sin(2 * angle_rad)) / g
    flight_time = (2 * velocity * math.sin(angle_rad)) / g
    
    return f"Height: {round(max_height, 2)}m, Range: {round(proj_range, 2)}m, Time: {round(flight_time, 2)}s"`,
        testCases: [
            { input: "projectile_stats(20, 45)", expected: "'Height: 10.19m, Range: 40.77m, Time: 2.88s'" },
            { input: "projectile_stats(10, 30)", expected: "'Height: 1.27m, Range: 8.83m, Time: 1.02s'" },
            { input: "projectile_stats(15, 60)", expected: "'Height: 8.6m, Range: 19.88m, Time: 2.65s'" },
            { input: "projectile_stats(25, 90)", expected: "'Height: 31.86m, Range: 0.0m, Time: 5.1s'" },
            { input: "projectile_stats(30, 0)", expected: "'Height: 0.0m, Range: 0.0m, Time: 0.0s'" }
        ]
    },
    {
        id: "048",
        number: 12,
        title: "Statistics Calculator",
        description: "Write a function called `basic_stats` that takes exactly 5 numbers and returns statistical measures. Calculate: mean (average), variance (avg of squared differences from mean), standard deviation (√variance), range (max - min). Return: 'Mean: [m], Variance: [v], StdDev: [s], Range: [r]'. Round all to 2 decimals.",
        hint: "Calculate mean first, then variance as average of (x - mean)² for each value. StdDev = √variance.",
        starterCode: `import math

def basic_stats(a: float, b: float, c: float, d: float, e: float) -> str:
    # Your code here
    pass`,
        solutionCode: `import math

def basic_stats(a: float, b: float, c: float, d: float, e: float) -> str:
    # Mean
    mean = (a + b + c + d + e) / 5
    
    # Variance (average of squared differences)
    variance = ((a - mean)**2 + (b - mean)**2 + (c - mean)**2 + (d - mean)**2 + (e - mean)**2) / 5
    
    # Standard deviation
    std_dev = math.sqrt(variance)
    
    # Range
    minimum = min(a, b, c, d, e)
    maximum = max(a, b, c, d, e)
    value_range = maximum - minimum
    
    return f"Mean: {round(mean, 2)}, Variance: {round(variance, 2)}, StdDev: {round(std_dev, 2)}, Range: {round(value_range, 2)}"`,
        testCases: [
            { input: "basic_stats(2, 4, 6, 8, 10)", expected: "'Mean: 6.0, Variance: 8.0, StdDev: 2.83, Range: 8.0'" },
            { input: "basic_stats(5, 5, 5, 5, 5)", expected: "'Mean: 5.0, Variance: 0.0, StdDev: 0.0, Range: 0.0'" },
            { input: "basic_stats(1, 2, 3, 4, 5)", expected: "'Mean: 3.0, Variance: 2.0, StdDev: 1.41, Range: 4.0'" },
            { input: "basic_stats(10, 20, 30, 40, 50)", expected: "'Mean: 30.0, Variance: 200.0, StdDev: 14.14, Range: 40.0'" },
            { input: "basic_stats(-5, 0, 5, 10, 15)", expected: "'Mean: 5.0, Variance: 50.0, StdDev: 7.07, Range: 20.0'" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const mathsExampleContent: ExampleContent = {
    intro: "Python can perform calculations from simple arithmetic to complex mathematical operations using the math library.",
    codeBlocks: [
        {
            code: `a = 10
b = 3
print(a + b)   # 13 (addition)
print(a - b)   # 7 (subtraction)
print(a * b)   # 30 (multiplication)
print(a / b)   # 3.333... (division)`,
            explanation: "Basic arithmetic operators work as expected. Division always returns a float."
        },
        {
            code: `print(10 // 3)  # 3 (floor division)
print(10 % 3)   # 1 (remainder/modulo)
print(2 ** 4)   # 16 (power)`,
            explanation: "// gives whole number division, % gives the remainder, ** raises to a power."
        },
        {
            code: `import math

print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.14159...
print(round(3.7))       # 4`,
            explanation: "Import the math library for advanced functions. sqrt() for square root, pi for π, round() for rounding."
        },
        {
            code: `radius = 5
area = math.pi * radius ** 2
print(round(area, 2))  # 78.54`,
            explanation: "Combine operators and math functions. round(x, 2) rounds to 2 decimal places."
        },
        {
            code: `# Trigonometry (angles in radians!)
angle_deg = 45
angle_rad = math.radians(angle_deg)
print(math.sin(angle_rad))  # 0.707...
print(math.cos(angle_rad))  # 0.707...`,
            explanation: "Trig functions use radians. Convert degrees with math.radians()."
        }
    ],
    tips: [
        "Use parentheses to control order of operations",
        "Integer division // always rounds down",
        "Import math at the top of your file",
        "Use round(value, n) to round to n decimal places"
    ],
    runnable: `# Try it yourself!
import math

# Basic calculations
length = 10
width = 5
area = length * width
print(f"Area: {area}")

# Circle calculations
radius = 7
circle_area = math.pi * radius ** 2
print(f"Circle area: {round(circle_area, 2)}")

# Time conversion
total_seconds = 3725
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"{total_seconds}s = {hours}h {minutes}m {seconds}s")

# Try modulo (remainder) - useful for checking odd/even
number = 17
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter04_maths: Chapter = {
    id: "04_maths",
    title: "Maths",
    description: "Math Operations",
    explanation: "Perform calculations using Python's math library.",
    exampleCode: "import math\\nprint(math.sqrt(16))",
    exampleContent: mathsExampleContent,
    challenges: math_challenges,
    homework: homeworkByChapter["04_maths"]
};
