import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 2: IF STATEMENTS
// Concepts: if, elif, else, comparison operators, logical operators
// Prerequisites: Chapter 1 (variables, arithmetic, f-strings)
// SCOPE RESTRICTION: NO LOOPS ALLOWED
// ============================================================

export const if_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic if/else
    {
        id: "013",
        number: 1,
        title: "Pass or Fail",
        description: "Write a function called `pass_fail` that takes a score (0-100). Return 'Pass' if the score is 50 or above, otherwise return 'Fail'.",
        hint: "Use if score >= 50: return 'Pass' else: return 'Fail'",
        starterCode: `def pass_fail(score: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def pass_fail(score: int) -> str:
    if score >= 50:
        return "Pass"
    return "Fail"`,
        testCases: [
            { input: "pass_fail(75)", expected: "'Pass'" },
            { input: "pass_fail(50)", expected: "'Pass'" },
            { input: "pass_fail(49)", expected: "'Fail'" },
            { input: "pass_fail(0)", expected: "'Fail'" },
            { input: "pass_fail(100)", expected: "'Pass'" },
            { input: "pass_fail(25)", expected: "'Fail'" }
        ]
    },
    {
        id: "014",
        number: 2,
        title: "Absolute Value",
        description: "Write a function called `absolute_value` that takes a number. If it's negative, return the positive version. If it's already positive or zero, return it unchanged.",
        hint: "If num < 0, multiply by -1 (or return -num)",
        starterCode: `def absolute_value(num: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def absolute_value(num: int) -> int:
    if num < 0:
        return -num
    return num`,
        testCases: [
            { input: "absolute_value(-5)", expected: "5" },
            { input: "absolute_value(5)", expected: "5" },
            { input: "absolute_value(0)", expected: "0" },
            { input: "absolute_value(-100)", expected: "100" },
            { input: "absolute_value(42)", expected: "42" },
            { input: "absolute_value(-1)", expected: "1" }
        ]
    },

    // BUILDING (3-4): elif chains
    {
        id: "015",
        number: 3,
        title: "Grade Calculator",
        description: "Write a function called `get_grade` that takes a score (0-100) and returns a letter grade. A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60.",
        hint: "Check from highest to lowest: if >= 90, elif >= 80, etc.",
        starterCode: `def get_grade(score: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_grade(score: int) -> str:
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    return "F"`,
        testCases: [
            { input: "get_grade(95)", expected: "'A'" },
            { input: "get_grade(90)", expected: "'A'" },
            { input: "get_grade(85)", expected: "'B'" },
            { input: "get_grade(75)", expected: "'C'" },
            { input: "get_grade(65)", expected: "'D'" },
            { input: "get_grade(55)", expected: "'F'" },
            { input: "get_grade(0)", expected: "'F'" }
        ]
    },
    {
        id: "016",
        number: 4,
        title: "Temperature Classifier",
        description: "Write a function called `classify_temp` that takes a temperature in Celsius. Return: 'Freezing' if below 0, 'Cold' if 0-14, 'Comfortable' if 15-24, 'Warm' if 25-34, 'Hot' if 35 or above.",
        hint: "Use elif chain checking ranges from lowest to highest (or highest to lowest)",
        starterCode: `def classify_temp(celsius: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def classify_temp(celsius: int) -> str:
    if celsius < 0:
        return "Freezing"
    elif celsius < 15:
        return "Cold"
    elif celsius < 25:
        return "Comfortable"
    elif celsius < 35:
        return "Warm"
    return "Hot"`,
        testCases: [
            { input: "classify_temp(-10)", expected: "'Freezing'" },
            { input: "classify_temp(0)", expected: "'Cold'" },
            { input: "classify_temp(14)", expected: "'Cold'" },
            { input: "classify_temp(20)", expected: "'Comfortable'" },
            { input: "classify_temp(30)", expected: "'Warm'" },
            { input: "classify_temp(40)", expected: "'Hot'" }
        ]
    },

    // APPLICATION (5-6): Real-world with AND/OR
    {
        id: "017",
        number: 5,
        title: "Leap Year Checker",
        description: "Write a function called `is_leap_year` that takes a year. A year is a leap year if: divisible by 4 AND (not divisible by 100 OR divisible by 400). Return True or False.",
        hint: "Use modulo: year % 4 == 0 means divisible by 4. Combine with and/or.",
        starterCode: `def is_leap_year(year: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_leap_year(year: int) -> bool:
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        return True
    return False`,
        testCases: [
            { input: "is_leap_year(2024)", expected: "True" },
            { input: "is_leap_year(2023)", expected: "False" },
            { input: "is_leap_year(2000)", expected: "True" },
            { input: "is_leap_year(1900)", expected: "False" },
            { input: "is_leap_year(2100)", expected: "False" },
            { input: "is_leap_year(2400)", expected: "True" }
        ]
    },
    {
        id: "018",
        number: 6,
        title: "Triangle Type",
        description: "Write a function called `triangle_type` that takes three side lengths. Return 'Equilateral' if all sides equal, 'Isosceles' if exactly two sides equal, 'Scalene' if all different. First check if it's a valid triangle (sum of any two sides > third side), return 'Invalid' if not.",
        hint: "Check validity first: a + b > c and a + c > b and b + c > a",
        starterCode: `def triangle_type(a: int, b: int, c: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def triangle_type(a: int, b: int, c: int) -> str:
    if a + b <= c or a + c <= b or b + c <= a:
        return "Invalid"
    if a == b == c:
        return "Equilateral"
    if a == b or b == c or a == c:
        return "Isosceles"
    return "Scalene"`,
        testCases: [
            { input: "triangle_type(5, 5, 5)", expected: "'Equilateral'" },
            { input: "triangle_type(5, 5, 3)", expected: "'Isosceles'" },
            { input: "triangle_type(3, 4, 5)", expected: "'Scalene'" },
            { input: "triangle_type(1, 1, 10)", expected: "'Invalid'" },
            { input: "triangle_type(7, 7, 7)", expected: "'Equilateral'" },
            { input: "triangle_type(3, 3, 5)", expected: "'Isosceles'" }
        ]
    },

    // PROBLEM SOLVING (7-8): Multi-step conditional logic
    {
        id: "019",
        number: 7,
        title: "Shipping Cost Calculator",
        description: "Write a function called `shipping_cost` that takes weight_kg and is_express (boolean). Base rates: up to 2kg = $5, 2-5kg = $10, over 5kg = $15. Express delivery adds 50% to the base cost. Return the total cost as a float.",
        hint: "First determine base cost, then apply express multiplier if needed.",
        starterCode: `def shipping_cost(weight_kg: float, is_express: bool) -> float:
    # Your code here
    pass`,
        solutionCode: `def shipping_cost(weight_kg: float, is_express: bool) -> float:
    if weight_kg <= 2:
        base = 5
    elif weight_kg <= 5:
        base = 10
    else:
        base = 15
    
    if is_express:
        return base * 1.5
    return float(base)`,
        testCases: [
            { input: "shipping_cost(1.5, False)", expected: "5.0" },
            { input: "shipping_cost(1.5, True)", expected: "7.5" },
            { input: "shipping_cost(3, False)", expected: "10.0" },
            { input: "shipping_cost(3, True)", expected: "15.0" },
            { input: "shipping_cost(10, False)", expected: "15.0" },
            { input: "shipping_cost(10, True)", expected: "22.5" }
        ]
    },
    {
        id: "020",
        number: 8,
        title: "Cinema Ticket Pricing",
        description: "Write a function called `ticket_price` that takes age and is_matinee (boolean). Prices: Children (under 12) = $8, Seniors (65+) = $10, Adults = $15. Matinee showings get 20% off. Return the final price.",
        hint: "First determine base price by age, then apply matinee discount if needed.",
        starterCode: `def ticket_price(age: int, is_matinee: bool) -> float:
    # Your code here
    pass`,
        solutionCode: `def ticket_price(age: int, is_matinee: bool) -> float:
    if age < 12:
        base = 8
    elif age >= 65:
        base = 10
    else:
        base = 15
    
    if is_matinee:
        return base * 0.8
    return float(base)`,
        testCases: [
            { input: "ticket_price(10, False)", expected: "8.0" },
            { input: "ticket_price(10, True)", expected: "6.4" },
            { input: "ticket_price(30, False)", expected: "15.0" },
            { input: "ticket_price(30, True)", expected: "12.0" },
            { input: "ticket_price(70, False)", expected: "10.0" },
            { input: "ticket_price(70, True)", expected: "8.0" }
        ]
    },

    // INTEGRATION (9-10): Complex multi-condition problems
    {
        id: "021",
        number: 9,
        title: "Password Validator",
        description: "Write a function called `validate_password` that takes a password string. Check these rules: must be at least 8 characters long, must contain at least one digit, must contain at least one uppercase letter. Return 'Valid' if all rules pass, otherwise return which rule failed first: 'Too short', 'No digit', or 'No uppercase'. (Use: any(c.isdigit() for c in pwd), any(c.isupper() for c in pwd))",
        hint: "Check length first, then digit, then uppercase. Return immediately when you find a failure.",
        starterCode: `def validate_password(password: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def validate_password(password: str) -> str:
    if len(password) < 8:
        return "Too short"
    if not any(c.isdigit() for c in password):
        return "No digit"
    if not any(c.isupper() for c in password):
        return "No uppercase"
    return "Valid"`,
        testCases: [
            { input: "validate_password('Secret1!')", expected: "'Valid'" },
            { input: "validate_password('short')", expected: "'Too short'" },
            { input: "validate_password('longenough')", expected: "'No digit'" },
            { input: "validate_password('longenough1')", expected: "'No uppercase'" },
            { input: "validate_password('12345678A')", expected: "'Valid'" },
            { input: "validate_password('Ab1')", expected: "'Too short'" }
        ]
    },
    {
        id: "022",
        number: 10,
        title: "Quadrant Finder",
        description: "Write a function called `find_quadrant` that takes x and y coordinates. Return which quadrant the point is in: 'Quadrant 1' (x>0, y>0), 'Quadrant 2' (x<0, y>0), 'Quadrant 3' (x<0, y<0), 'Quadrant 4' (x>0, y<0). If on an axis: 'Origin' (both 0), 'X-axis' (y=0, x≠0), 'Y-axis' (x=0, y≠0).",
        hint: "Check for special cases (Origin, axes) first, then determine quadrant.",
        starterCode: `def find_quadrant(x: int, y: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def find_quadrant(x: int, y: int) -> str:
    if x == 0 and y == 0:
        return "Origin"
    if y == 0:
        return "X-axis"
    if x == 0:
        return "Y-axis"
    if x > 0 and y > 0:
        return "Quadrant 1"
    if x < 0 and y > 0:
        return "Quadrant 2"
    if x < 0 and y < 0:
        return "Quadrant 3"
    return "Quadrant 4"`,
        testCases: [
            { input: "find_quadrant(5, 5)", expected: "'Quadrant 1'" },
            { input: "find_quadrant(-5, 5)", expected: "'Quadrant 2'" },
            { input: "find_quadrant(-5, -5)", expected: "'Quadrant 3'" },
            { input: "find_quadrant(5, -5)", expected: "'Quadrant 4'" },
            { input: "find_quadrant(0, 0)", expected: "'Origin'" },
            { input: "find_quadrant(5, 0)", expected: "'X-axis'" },
            { input: "find_quadrant(0, 5)", expected: "'Y-axis'" }
        ]
    },

    // CAPSTONE (11-12): Complex scenarios requiring computational thinking
    {
        id: "023",
        number: 11,
        title: "Tax Bracket Calculator",
        description: "Write a function called `calculate_tax` that takes annual income and returns the tax owed using progressive brackets: $0-10,000 = 0%, $10,001-40,000 = 10% on amount over $10k, $40,001-100,000 = 20% on amount over $40k (plus previous), over $100,000 = 30% on amount over $100k (plus previous). Return tax rounded to 2 decimals.",
        hint: "Calculate tax in tiers. E.g., income of $50k pays: $0 on first $10k, $3000 (10% of $30k) on next tier, $2000 (20% of $10k) on final tier = $5000 total.",
        starterCode: `def calculate_tax(income: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def calculate_tax(income: float) -> float:
    tax = 0.0
    if income > 100000:
        tax += (income - 100000) * 0.30
        income = 100000
    if income > 40000:
        tax += (income - 40000) * 0.20
        income = 40000
    if income > 10000:
        tax += (income - 10000) * 0.10
    return round(tax, 2)`,
        testCases: [
            { input: "calculate_tax(5000)", expected: "0.0" },
            { input: "calculate_tax(10000)", expected: "0.0" },
            { input: "calculate_tax(25000)", expected: "1500.0" },
            { input: "calculate_tax(40000)", expected: "3000.0" },
            { input: "calculate_tax(60000)", expected: "7000.0" },
            { input: "calculate_tax(100000)", expected: "15000.0" },
            { input: "calculate_tax(150000)", expected: "30000.0" }
        ]
    },
    {
        id: "024",
        number: 12,
        title: "Blood Pressure Classifier",
        description: "Write a function called `bp_diagnosis` that takes systolic and diastolic readings and returns a diagnosis. Categories (check in this order): 'Hypertensive Crisis' if systolic > 180 OR diastolic > 120. 'High Stage 2' if systolic >= 140 OR diastolic >= 90. 'High Stage 1' if systolic >= 130 OR diastolic >= 80. 'Elevated' if systolic 120-129 AND diastolic < 80. 'Normal' if systolic < 120 AND diastolic < 80.",
        hint: "Order matters! Check most severe conditions first. Use and/or carefully.",
        starterCode: `def bp_diagnosis(systolic: int, diastolic: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def bp_diagnosis(systolic: int, diastolic: int) -> str:
    if systolic > 180 or diastolic > 120:
        return "Hypertensive Crisis"
    if systolic >= 140 or diastolic >= 90:
        return "High Stage 2"
    if systolic >= 130 or diastolic >= 80:
        return "High Stage 1"
    if systolic >= 120 and diastolic < 80:
        return "Elevated"
    return "Normal"`,
        testCases: [
            { input: "bp_diagnosis(115, 75)", expected: "'Normal'" },
            { input: "bp_diagnosis(125, 78)", expected: "'Elevated'" },
            { input: "bp_diagnosis(135, 82)", expected: "'High Stage 1'" },
            { input: "bp_diagnosis(145, 92)", expected: "'High Stage 2'" },
            { input: "bp_diagnosis(185, 100)", expected: "'Hypertensive Crisis'" },
            { input: "bp_diagnosis(160, 125)", expected: "'Hypertensive Crisis'" },
            { input: "bp_diagnosis(119, 79)", expected: "'Normal'" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const ifExampleContent: ExampleContent = {
    intro: "If statements let your program make decisions. The code inside an if block only runs when the condition is True.",
    codeBlocks: [
        {
            code: `age = 18
if age >= 18:
    print("You can vote!")`,
            explanation: "The if statement checks if age is 18 or more. If True, the indented code runs. If False, it's skipped."
        },
        {
            code: `temperature = 15
if temperature > 20:
    print("It's warm")
else:
    print("It's cold")`,
            explanation: "The else block runs when the if condition is False. You always get one or the other."
        },
        {
            code: `score = 75
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("D")`,
            explanation: "Use elif (else if) to check multiple conditions. Python checks each one in order and runs the first that's True."
        },
        {
            code: `x = 5
if x > 0 and x < 10:
    print("x is between 0 and 10")
    
if x < 0 or x > 100:
    print("x is out of normal range")`,
            explanation: "Use 'and' when BOTH conditions must be True. Use 'or' when EITHER condition can be True."
        },
        {
            code: `# Comparison operators
# ==  Equal to
# !=  Not equal to
# >   Greater than
# <   Less than
# >=  Greater than or equal to
# <=  Less than or equal to`,
            explanation: "These operators return True or False and are used in conditions."
        }
    ],
    tips: [
        "Comparison operators: == (equal), != (not equal), <, >, <=, >=",
        "Indentation matters! Code inside if/else must be indented",
        "Use 'and', 'or', 'not' to combine conditions",
        "Check conditions in order from most specific to least specific"
    ],
    runnable: `# Try it yourself!
# Change the values and see what happens

age = 17
has_permission = True

if age >= 18:
    print("You're an adult")
elif age >= 13:
    print("You're a teenager")
else:
    print("You're a child")

# Try using 'and' / 'or'
if age >= 16 and has_permission:
    print("You can learn to drive!")
else:
    print("Not yet eligible to drive")

# Experiment with different age values!`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter02_if_statements: Chapter = {
    id: "02_if_statements",
    title: "If Statements",
    description: "Control Flow and Conditionals",
    explanation: "Use if, elif, and else to make decisions.",
    exampleCode: "if True:\\n    print('Yes')",
    exampleContent: ifExampleContent,
    challenges: if_challenges,
    homework: homeworkByChapter["02_if_statements"]
};
