import { Chapter } from "../types";
import { homeworkByChapter } from "./homework";

const basics_challenges = [
    {
        id: "001",
        number: 1,
        title: "Hello Name",
        description: "Write a function called `hello_name` that accepts a first name. It should return a string in the format 'Hello [first_name]'.",
        hint: "Use f-string: f'Hello {first_name}'",
        starterCode: `def hello_name(first_name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def hello_name(first_name: str) -> str:
    return f"Hello {first_name}"`,
        testCases: [
            { input: "hello_name('Bob')", expected: "'Hello Bob'" },
            { input: "hello_name('Alice')", expected: "'Hello Alice'" }
        ]
    },
    {
        id: "002",
        number: 2,
        title: "Hello Full Name",
        description: "Write a function called `hello_full_name` that accepts a first name and a surname. It should return a greeting including both names, like 'Hello [first_name] [surname]'.",
        hint: "Use f-string",
        starterCode: `def hello_full_name(first_name: str, surname: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def hello_full_name(first_name: str, surname: str) -> str:
    return f"Hello {first_name} {surname}"`,
        testCases: [
            { input: "hello_full_name('Bob', 'Smith')", expected: "'Hello Bob Smith'" }
        ]
    },
    {
        id: "003",
        number: 3,
        title: "Joke",
        description: "Write a function called `joke` that takes no arguments. It should return this specific joke: 'What do you call a bear with no teeth?\\nA gummy bear!'.",
        starterCode: `def joke() -> str:
    # Your code here
    pass`,
        solutionCode: `def joke() -> str:
    return "What do you call a bear with no teeth?\\nA gummy bear!"`,
        testCases: [
            { input: "joke()", expected: "'What do you call a bear with no teeth?\\nA gummy bear!'" }
        ]
    },
    {
        id: "004",
        number: 4,
        title: "Add Two Numbers",
        description: "Write a function called `add_two` that accepts two integers. It should return the sum of these two numbers.",
        starterCode: `def add_two(num1: int, num2: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def add_two(num1: int, num2: int) -> int:
    return num1 + num2`,
        testCases: [
            { input: "add_two(2, 3)", expected: "5" },
            { input: "add_two(10, -5)", expected: "5" }
        ]
    },
    {
        id: "005",
        number: 5,
        title: "Add and Multiply",
        description: "Write a function called `add_and_multiply` that accepts three numbers. It should add the first two numbers together, then multiply the result by the third number, returning the final answer.",
        starterCode: `def add_and_multiply(num1: int, num2: int, num3: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def add_and_multiply(num1: int, num2: int, num3: int) -> int:
    return (num1 + num2) * num3`,
        testCases: [
            { input: "add_and_multiply(2, 3, 4)", expected: "20" }
        ]
    },
    {
        id: "006",
        number: 6,
        title: "Pizza Slices",
        description: "Write a function called `pizza_left` that accepts the number of slices started with and the number eaten. It should return the message 'You have [x] slices remaining'.",
        starterCode: `def pizza_left(started: int, eaten: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def pizza_left(started: int, eaten: int) -> str:
    return f"You have {started - eaten} slices remaining"`,
        testCases: [
            { input: "pizza_left(8, 3)", expected: "'You have 5 slices remaining'" }
        ]
    },
    {
        id: "007",
        number: 7,
        title: "Next Birthday",
        description: "Write a function called `birthday_message` that takes a name and current age. It should add 1 to the age and return the message '[Name] next birthday you will be [new_age]'.",
        starterCode: `def birthday_message(name: str, age: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def birthday_message(name: str, age: int) -> str:
    return f"{name} next birthday you will be {age + 1}"`,
        testCases: [
            { input: "birthday_message('Bob', 20)", expected: "'Bob next birthday you will be 21'" }
        ]
    },
    {
        id: "008",
        number: 8,
        title: "Bill Splitter",
        description: "Write a function called `split_bill` that accepts the total price of a bill and the number of diners. It should divide the bill equally and return the cost per person.",
        starterCode: `def split_bill(total_price: float, diners: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def split_bill(total_price: float, diners: int) -> float:
    return total_price / diners`,
        testCases: [
            { input: "split_bill(100, 4)", expected: "25.0" }
        ]
    },
    {
        id: "009",
        number: 9,
        title: "Days To Duration",
        description: "Write a function called `days_seconds` that accepts a number of days. It should calculate how many hours, minutes, and seconds are in that many days and return a string like 'In [days] days there are [hours] hours, [minutes] minutes and [seconds] seconds'.",
        starterCode: `def days_seconds(days: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def days_seconds(days: int) -> str:
    hours = days * 24
    minutes = hours * 60
    seconds = minutes * 60
    return f"In {days} days there are {hours} hours, {minutes} minutes and {seconds} seconds"`,
        testCases: [
            { input: "days_seconds(1)", expected: "'In 1 days there are 24 hours, 1440 minutes and 86400 seconds'" }
        ]
    },
    {
        id: "010",
        number: 10,
        title: "Weight Converter",
        description: "Write a function called `kg_to_pounds` that takes a weight in kilograms. It should convert this to pounds (multiplying by 2.204) and return the result.",
        starterCode: `def kg_to_pounds(kg: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def kg_to_pounds(kg: float) -> float:
    return kg * 2.204`,
        testCases: [
            { input: "kg_to_pounds(10)", expected: "22.04" }
        ]
    },
    {
        id: "011",
        number: 11,
        title: "Division Strings",
        description: "Write a function called `division_info` that accepts a large number and a small number. It should check how many whole times the small number fits into the large number and return the message '[small] goes into [large] [result] times'.",
        starterCode: `def division_info(large: int, small: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def division_info(large: int, small: int) -> str:
    result = large // small
    return f"{small} goes into {large} {result} times"`,
        testCases: [
            { input: "division_info(100, 10)", expected: "'10 goes into 100 10 times'" }
        ]
    }
];

const if_challenges = [
    {
        id: "012",
        number: 12,
        title: "Order Numbers",
        description: "Write a function called `order_numbers` that accepts two numbers. It should determine which is smaller and return them as a single string, with the smaller number first and the larger number second, separated by a space (e.g., '5 10').",
        starterCode: `def order_numbers(num1: int, num2: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def order_numbers(num1: int, num2: int) -> str:
    if num1 > num2:
        return f"{num2} {num1}"
    return f"{num1} {num2}"`,
        testCases: [
            { input: "order_numbers(10, 5)", expected: "'5 10'" },
            { input: "order_numbers(5, 10)", expected: "'5 10'" },
            { input: "order_numbers(3, 3)", expected: "'3 3'" },
            { input: "order_numbers(-5, 2)", expected: "'-5 2'" },
            { input: "order_numbers(100, 1)", expected: "'1 100'" }
        ]
    },
    {
        id: "013",
        number: 13,
        title: "Check Under 20",
        description: "Write a function called `check_under_20` that takes a number. If the number is 20 or higher, return 'Too high'. If it is under 20, return 'Thank you'.",
        starterCode: `def check_under_20(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_under_20(num: int) -> str:
    if num >= 20:
        return "Too high"
    return "Thank you"`,
        testCases: [
            { input: "check_under_20(25)", expected: "'Too high'" },
            { input: "check_under_20(10)", expected: "'Thank you'" },
            { input: "check_under_20(20)", expected: "'Too high'" },
            { input: "check_under_20(19)", expected: "'Thank you'" },
            { input: "check_under_20(0)", expected: "'Thank you'" }
        ]
    },
    {
        id: "014",
        number: 14,
        title: "Check Range",
        description: "Write a function called `check_range` that accepts a number. If the number is between 10 and 20 (inclusive), return 'Thank you'. Otherwise, return 'Incorrect answer'.",
        starterCode: `def check_range(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_range(num: int) -> str:
    if 10 <= num <= 20:
        return "Thank you"
    return "Incorrect answer"`,
        testCases: [
            { input: "check_range(15)", expected: "'Thank you'" },
            { input: "check_range(21)", expected: "'Incorrect answer'" },
            { input: "check_range(10)", expected: "'Thank you'" },
            { input: "check_range(20)", expected: "'Thank you'" },
            { input: "check_range(9)", expected: "'Incorrect answer'" }
        ]
    },
    {
        id: "015",
        number: 15,
        title: "Favourite Colour",
        description: "Write a function called `check_colour` that takes a colour name. If the colour is 'red' (checking valid variations like 'RED' or 'Red'), return 'I like red too'. Otherwise, return 'I don't like [colour], I prefer red'.",
        starterCode: `def check_colour(colour: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_colour(colour: str) -> str:
    if colour.lower() == "red":
        return "I like red too"
    return f"I don't like {colour}, I prefer red"`,
        testCases: [
            { input: "check_colour('Red')", expected: "'I like red too'" },
            { input: "check_colour('RED')", expected: "'I like red too'" },
            { input: "check_colour('red')", expected: "'I like red too'" },
            { input: "check_colour('Blue')", expected: "'I don\\'t like Blue, I prefer red'" },
            { input: "check_colour('green')", expected: "'I don\\'t like green, I prefer red'" }
        ]
    },
    {
        id: "016",
        number: 16,
        title: "Weather Check",
        description: "Write a function called `check_weather` that takes two string arguments: `is_raining` and `is_windy` (values 'yes' or 'no'). If it is raining, check if it is windy. If it is windy, return 'It is too windy for an umbrella'. If it is not windy, return 'Take an umbrella'. If it is not raining, return 'Enjoy your day'.",
        starterCode: `def check_weather(is_raining: str, is_windy: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_weather(is_raining: str, is_windy: str) -> str:
    if is_raining.lower() == "yes":
        if is_windy.lower() == "yes":
            return "It is too windy for an umbrella"
        return "Take an umbrella"
    return "Enjoy your day"`,
        testCases: [
            { input: "check_weather('yes', 'No')", expected: "'Take an umbrella'" },
            { input: "check_weather('Yes', 'YES')", expected: "'It is too windy for an umbrella'" },
            { input: "check_weather('no', 'yes')", expected: "'Enjoy your day'" },
            { input: "check_weather('NO', 'no')", expected: "'Enjoy your day'" },
            { input: "check_weather('yes', 'no')", expected: "'Take an umbrella'" }
        ]
    },
    {
        id: "017",
        number: 17,
        title: "Voting Age",
        description: "Write a function called `check_age` that takes an age. Return 'You can vote' if age is 18+, 'You can learn to drive' if 17, 'You can buy a lottery ticket' if 16, or 'You can go Trick-or-Treating' if under 16.",
        starterCode: `def check_age(age: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_age(age: int) -> str:
    if age >= 18:
        return "You can vote"
    if age == 17:
        return "You can learn to drive"
    if age == 16:
        return "You can buy a lottery ticket"
    return "You can go Trick-or-Treating"`,
        testCases: [
            { input: "check_age(18)", expected: "'You can vote'" },
            { input: "check_age(15)", expected: "'You can go Trick-or-Treating'" },
            { input: "check_age(17)", expected: "'You can learn to drive'" },
            { input: "check_age(16)", expected: "'You can buy a lottery ticket'" },
            { input: "check_age(25)", expected: "'You can vote'" }
        ]
    },
    {
        id: "018",
        number: 18,
        title: "Basic Range",
        description: "Write a function called `check_number` that takes a number. If it is under 10, return 'Too low'. If it is between 10 and 20 (inclusive), return 'Correct'. If it is over 20, return 'Too high'.",
        starterCode: `def check_number(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_number(num: int) -> str:
    if num < 10:
        return "Too low"
    if num <= 20:
        return "Correct"
    return "Too high"`,
        testCases: [
            { input: "check_number(5)", expected: "'Too low'" },
            { input: "check_number(15)", expected: "'Correct'" },
            { input: "check_number(25)", expected: "'Too high'" },
            { input: "check_number(10)", expected: "'Correct'" },
            { input: "check_number(20)", expected: "'Correct'" }
        ]
    },
    {
        id: "019",
        number: 19,
        title: "Selection",
        description: "Write a function called `check_selection` that takes a number (1, 2, or 3). If 1 return 'Thank you', if 2 return 'Well done', if 3 return 'Correct'. For any other number, return 'Error message'.",
        starterCode: `def check_selection(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_selection(num: int) -> str:
    if num == 1:
        return "Thank you"
    if num == 2:
        return "Well done"
    if num == 3:
        return "Correct"
    return "Error message"`,
        testCases: [
            { input: "check_selection(1)", expected: "'Thank you'" },
            { input: "check_selection(2)", expected: "'Well done'" },
            { input: "check_selection(3)", expected: "'Correct'" },
            { input: "check_selection(5)", expected: "'Error message'" },
            { input: "check_selection(0)", expected: "'Error message'" }
        ]
    },
    {
        id: "020",
        number: 20,
        title: "Grade Calculator",
        description: "Write a function called `get_grade` that takes a score (0-100). Return 'A' for 90+, 'B' for 80-89, 'C' for 70-79, 'D' for 60-69, and 'F' for below 60.",
        starterCode: `def get_grade(score: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_grade(score: int) -> str:
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"`,
        testCases: [
            { input: "get_grade(95)", expected: "'A'" },
            { input: "get_grade(85)", expected: "'B'" },
            { input: "get_grade(75)", expected: "'C'" },
            { input: "get_grade(65)", expected: "'D'" },
            { input: "get_grade(55)", expected: "'F'" }
        ]
    },
    {
        id: "021",
        number: 21,
        title: "Password Strength",
        description: "Write a function called `check_password` that takes a password string. Return 'Weak' if it has fewer than 6 characters, 'Medium' if 6-9 characters, and 'Strong' if 10 or more characters.",
        starterCode: `def check_password(password: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_password(password: str) -> str:
    if len(password) < 6:
        return "Weak"
    if len(password) < 10:
        return "Medium"
    return "Strong"`,
        testCases: [
            { input: "check_password('abc')", expected: "'Weak'" },
            { input: "check_password('abcdef')", expected: "'Medium'" },
            { input: "check_password('abcdefghij')", expected: "'Strong'" },
            { input: "check_password('12345')", expected: "'Weak'" },
            { input: "check_password('password1')", expected: "'Medium'" }
        ]
    }
];

const string_challenges = [
    {
        id: "020",
        number: 20,
        title: "Name Length",
        description: "Write a function called `name_length` that takes a name as a string. It should return the number of characters in the name.",
        starterCode: `def name_length(name: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def name_length(name: str) -> int:
    return len(name)`,
        testCases: [
            { input: "name_length('Bob')", expected: "3" }
        ]
    },
    {
        id: "021",
        number: 21,
        title: "Join Names",
        description: "Write a function called `join_names` that accepts a first name and a last name. It should return them combined with the total length of the full name (including the space), like '[First] [Last] [Length]'.",
        starterCode: `def join_names(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def join_names(first: str, last: str) -> str:
    full = f"{first} {last}"
    return f"{full} {len(full)}"`,
        testCases: [
            { input: "join_names('Bob', 'Smith')", expected: "'Bob Smith 9'" }
        ]
    },
    {
        id: "022",
        number: 22,
        title: "Title Case Names",
        description: "Write a function called `format_name_title` that takes a first name and a last name in lower case. It should return them combined in title case (capitalized first letters), separated by a space.",
        starterCode: `def format_name_title(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_name_title(first: str, last: str) -> str:
    return f"{first.title()} {last.title()}"`,
        testCases: [
            { input: "format_name_title('bob', 'smith')", expected: "'Bob Smith'" }
        ]
    },
    {
        id: "023",
        number: 23,
        title: "Nursery Rhyme Segment",
        description: "Write a function called `rhyme_part` that takes a line of a nursery rhyme, a start index, and an end index. It should return the part of the string starting at the start index and ending before the end index.",
        starterCode: `def rhyme_part(line: str, start: int, end: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def rhyme_part(line: str, start: int, end: int) -> str:
    return line[start:end]`,
        testCases: [
            { input: "rhyme_part('Mary had a little lamb', 0, 4)", expected: "'Mary'" }
        ]
    },
    {
        id: "024",
        number: 24,
        title: "Upper Case",
        description: "Write a function called `make_upper` that takes a word. It should return the word converted entirely to uppercase.",
        starterCode: `def make_upper(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def make_upper(word: str) -> str:
    return word.upper()`,
        testCases: [
            { input: "make_upper('hello')", expected: "'HELLO'" }
        ]
    },
    {
        id: "025",
        number: 25,
        title: "Name Formatting",
        description: "Write a function called `format_name_conditional` that takes a first name and a last name. If the first name has fewer than 5 characters, join them together and return the result in uppercase. If the first name is 5 characters or longer, return just the first name in lowercase.",
        starterCode: `def format_name_conditional(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_name_conditional(first: str, last: str) -> str:
    if len(first) < 5:
        return f"{first}{last}".upper()
    return first.lower()`,
        testCases: [
            { input: "format_name_conditional('Bob', 'Smith')", expected: "'BOBSMITH'" },
            { input: "format_name_conditional('Steven', 'Stewart')", expected: "'steven'" }
        ]
    },
    {
        id: "026",
        number: 26,
        title: "Pig Latin",
        description: "Write a function called `pig_latin` that takes a word. If it begins with a vowel (a, e, i, o, u), add 'way' to the end. If it begins with a consonant, move the first letter to the end and add 'ay'.",
        starterCode: `def pig_latin(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def pig_latin(word: str) -> str:
    vowels = "aeiou"
    word = word.lower()
    if word[0] in vowels:
        return word + "way"
    return word[1:] + word[0] + "ay"`,
        testCases: [
            { input: "pig_latin('apple')", expected: "'appleway'" },
            { input: "pig_latin('chip')", expected: "'hipcay'" }
        ]
    }
];

const math_challenges = [
    {
        id: "027",
        number: 27,
        title: "Multiply Float",
        description: "Write a function called `multiply_float` that takes a floating-point number. It should multiply the number by 2 and return the result.",
        starterCode: `def multiply_float(num: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def multiply_float(num: float) -> float:
    return num * 2`,
        testCases: [
            { input: "multiply_float(3.5)", expected: "7.0" }
        ]
    },
    {
        id: "028",
        number: 28,
        title: "Round Float",
        description: "Write a function called `round_float` that takes a number. It should multiply the number by 2 and return the result rounded to two decimal places.",
        starterCode: `def round_float(num: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def round_float(num: float) -> float:
    return round(num * 2, 2)`,
        testCases: [
            { input: "round_float(3.14159)", expected: "6.28" }
        ]
    },
    {
        id: "029",
        number: 29,
        title: "Sqrt Over 500",
        description: "Write a function called `sqrt_check` that takes a number. Calculate the square root of that number and return it rounded to two decimal places.",
        hint: "Use `math.sqrt()`. Remember `import math`.",
        starterCode: `import math

def sqrt_check(num: int) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def sqrt_check(num: int) -> float:
    return round(math.sqrt(num), 2)`,
        testCases: [
            { input: "sqrt_check(500)", expected: "22.36" }
        ]
    },
    {
        id: "030",
        number: 30,
        title: "Pi",
        description: "Write a function called `get_pi` that takes no arguments. It should return the value of Pi (from the math library) rounded to 5 decimal places.",
        starterCode: `import math

def get_pi() -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def get_pi() -> float:
    return round(math.pi, 5)`,
        testCases: [
            { input: "get_pi()", expected: "3.14159" }
        ]
    },
    {
        id: "031",
        number: 31,
        title: "Circle Area",
        description: "Write a function called `circle_area` that takes the radius of a circle. It should calculate and return the area of the circle (Pi * radius squared).",
        starterCode: `import math

def circle_area(radius: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def circle_area(radius: float) -> float:
    return math.pi * (radius ** 2)`,
        testCases: [
            { input: "round(circle_area(10), 2)", expected: "314.16" }
        ]
    },
    {
        id: "032",
        number: 32,
        title: "Cylinder Volume",
        description: "Write a function called `cylinder_volume` that takes a radius and a depth. It should calculate the volume of the cylinder (area of circle * depth) and return it rounded to 3 decimal places.",
        starterCode: `import math

def cylinder_volume(radius: float, depth: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def cylinder_volume(radius: float, depth: float) -> float:
    area = math.pi * (radius ** 2)
    return round(area * depth, 3)`,
        testCases: [
            { input: "cylinder_volume(5, 10)", expected: "785.398" }
        ]
    },
    {
        id: "033",
        number: 33,
        title: "Integer Division",
        description: "Write a function called `div_remain` that accepts two numbers. It should return a string showing the result of integer division and the remainder, formatted as '[num1] divided by [num2] is [whole_part] with [remainder] remaining'.",
        starterCode: `def div_remain(num1: int, num2: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def div_remain(num1: int, num2: int) -> str:
    whole = num1 // num2
    remain = num1 % num2
    return f"{num1} divided by {num2} is {whole} with {remain} remaining"`,
        testCases: [
            { input: "div_remain(7, 2)", expected: "'7 divided by 2 is 3 with 1 remaining'" }
        ]
    },
    {
        id: "034",
        number: 34,
        title: "Shape Area",
        description: "Write a function called `shape_area` that takes a choice (1 or 2) and two values. If choice is 1, calculate the area of a square using the first value as the length of a side. If choice is 2, calculate the area of a triangle using the first value as the base and the second as the height. If the choice is anything else, return -1.",
        starterCode: `def shape_area(choice: int, val1: int, val2: int) -> float:
    # Your code here
    pass`,
        solutionCode: `def shape_area(choice: int, val1: int, val2: int) -> float:
    if choice == 1:
        return val1 ** 2
    if choice == 2:
        return 0.5 * val1 * val2
    return -1`,
        testCases: [
            { input: "shape_area(1, 10, 0)", expected: "100" },
            { input: "shape_area(2, 10, 5)", expected: "25.0" }
        ]
    }
];


const for_challenges = [
    {
        id: "035",
        number: 35,
        title: "Name Repeat",
        description: "Write a function called `name_repeat` that takes a name. It should return the name repeated three times, with each repetition on a new line.",
        starterCode: `def name_repeat(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_repeat(name: str) -> str:
    return (name + "\\n") * 3`,
        testCases: [
            { input: "name_repeat('Bob').strip()", expected: "'Bob\\nBob\\nBob'" }
        ]
    },
    {
        id: "036",
        number: 36,
        title: "Name Count",
        description: "Write a function called `name_count` that accepts a name and a number. It should return the name repeated that many times, with each repetition on a new line.",
        starterCode: `def name_count(name: str, count: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_count(name: str, count: int) -> str:
    return (name + "\\n") * count`,
        testCases: [
            { input: "name_count('Bob', 2).strip()", expected: "'Bob\\nBob'" }
        ]
    },
    {
        id: "037",
        number: 37,
        title: "Name Chars",
        description: "Write a function called `name_chars` that takes a name. It should return a string where every character of the name is on a new line.",
        starterCode: `def name_chars(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_chars(name: str) -> str:
    output = ""
    for char in name:
        output += char + "\\n"
    return output`,
        testCases: [
            { input: "name_chars('Bob').strip()", expected: "'B\\no\\nb'" }
        ]
    },
    {
        id: "038",
        number: 38,
        title: "Name Chars Count",
        description: "Write a function called `name_chars_count` that takes a name and a number. It should iterate through each character of the name and display it that many times, with each repetition on a new line.",
        starterCode: `def name_chars_count(name: str, count: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_chars_count(name: str, count: int) -> str:
    output = ""
    for x in name:
        for i in range(count):
            output += x + "\\n"
    return output`,
        testCases: [
            { input: "name_chars_count('Bo', 2).strip()", expected: "'B\\nB\\no\\no'" }
        ]
    },
    {
        id: "039",
        number: 39,
        title: "Times Table",
        description: "Write a function called `times_table` that takes a number. It should return a string containing the times table for that number from 1 to 10, formatted as '1 x [num] = [result]', '2 x [num] = [result]', etc., each on a new line.",
        starterCode: `def times_table(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def times_table(num: int) -> str:
    output = ""
    for i in range(1, 11):
        output += f"{i} x {num} = {i * num}\\n"
    return output`,
        testCases: [
            { input: "times_table(5).splitlines()[0]", expected: "'1 x 5 = 5'" },
            { input: "times_table(5).splitlines()[4]", expected: "'5 x 5 = 25'" }
        ]
    },
    {
        id: "040",
        number: 40,
        title: "Count Down",
        description: "Write a function called `count_down_50` that takes a number (below 50). It should return a list of numbers counting down from 50 to that number (inclusive).",
        starterCode: `def count_down_50(num: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def count_down_50(num: int) -> list:
    output = []
    for i in range(50, num - 1, -1):
        output.append(i)
    return output`,
        testCases: [
            { input: "count_down_50(48)", expected: "[50, 49, 48]" }
        ]
    },
    {
        id: "041",
        number: 41,
        title: "Name Conditional Loop",
        description: "Write a function called `name_loop_conditional` that takes a name and a number. If the number is less than 10, return the name repeated that many times. If the number is 10 or higher, return the message 'Too high' three times.",
        starterCode: `def name_loop_conditional(name: str, count: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_loop_conditional(name: str, count: int) -> str:
    if count < 10:
        return (name + "\\n") * count
    return ("Too high\\n") * 3`,
        testCases: [
            { input: "name_loop_conditional('Bob', 2).strip()", expected: "'Bob\\nBob'" },
            { input: "name_loop_conditional('Bob', 12).strip()", expected: "'Too high\\nToo high\\nToo high'" }
        ]
    },
    {
        id: "042",
        number: 42,
        title: "Sum List",
        description: "Write a function called `sum_list` that accepts a list of numbers. It should calculate and return the total sum of all the numbers in the list.",
        starterCode: `def sum_list(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_list(nums: list) -> int:
    total = 0
    for i in nums:
        total += i
    return total`,
        testCases: [
            { input: "sum_list([1, 2, 3, 4, 5])", expected: "15" }
        ]
    },
    {
        id: "043",
        number: 43,
        title: "Count Direction",
        description: "Write a function called `count_direction` that takes a direction ('up' or 'down') and a number. If 'up', return a list of numbers from 1 to that number. If 'down', return a list of numbers from 20 down to that number. Otherwise, return an empty list.",
        starterCode: `def count_direction(direction: str, num: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def count_direction(direction: str, num: int) -> list:
    output = []
    if direction == "up":
        for i in range(1, num + 1):
            output.append(i)
    elif direction == "down":
        for i in range(20, num - 1, -1):
            output.append(i)
    return output`,
        testCases: [
            { input: "count_direction('up', 3)", expected: "[1, 2, 3]" },
            { input: "count_direction('down', 18)", expected: "[20, 19, 18]" }
        ]
    },
    {
        id: "044",
        number: 44,
        title: "Invite Guests",
        description: "Write a function called `invite_guests` that accepts a list of guest names. If there look to be fewer than 10 guests, return a string saying '[Name] has been invited' for each one. If there are 10 or more, return 'Too many people'.",
        starterCode: `def invite_guests(guests: list) -> str:
    # Your code here
    pass`,
        solutionCode: `def invite_guests(guests: list) -> str:
    if len(guests) < 10:
        output = ""
        for name in guests:
            output += f"{name} has been invited\\n"
        return output
    return "Too many people"`,
        testCases: [
            { input: "invite_guests(['Bob', 'Alice']).strip()", expected: "'Bob has been invited\\nAlice has been invited'" }
        ]
    }
];

const while_challenges = [
    {
        id: "045",
        number: 45,
        title: "Sum To 50",
        description: "Write a function called `sum_until_50` that takes a list of numbers. Iterate through the list, adding each number to a running total. If the total becomes greater than 50, stop immediately and return that total (including the number that pushed it over 50).",
        starterCode: `def sum_until_50(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_until_50(nums: list) -> int:
    total = 0
    for num in nums:
        total += num
        if total > 50:
            break
    return total`,
        testCases: [
            { input: "sum_until_50([10, 20, 30])", expected: "60" }
        ]
    },
    {
        id: "046",
        number: 46,
        title: "Validate Input 5",
        description: "Write a function called `validate_5` that takes a list of numbers. It should iterate through the list and return the first number found that is greater than 5. If no such number involves, return 0.",
        starterCode: `def validate_5(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def validate_5(nums: list) -> int:
    for num in nums:
        if num > 5:
            return num
    return 0`,
        testCases: [
            { input: "validate_5([1, 2, 6])", expected: "6" }
        ]
    },
    {
        id: "047",
        number: 47,
        title: "Sum Sequence",
        description: "Write a function called `sum_sequence` that accepts a list of numbers. It should calculate and return the sum of all the numbers in the list (using a loop).",
        starterCode: `def sum_sequence(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_sequence(nums: list) -> int:
    total = 0
    for num in nums:
        total += num
    return total`,
        testCases: [
            { input: "sum_sequence([1, 2, 3])", expected: "6" }
        ]
    },
    {
        id: "048",
        number: 48,
        title: "Party Invite Count",
        description: "Write a function called `count_invited` that takes a list of names. It should iterate through the list and verify if a guest is invited. Return a count of how many people were valid guests (basically, just count the items in the list to simulate checking).",
        starterCode: `def count_invites(responses: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_invites(responses: list) -> int:
    count = 0
    for res in responses:
        if res == "yes":
            count += 1
    return count`,
        testCases: [
            { input: "count_invites(['yes', 'no', 'yes'])", expected: "2" }
        ]
    },
    {
        id: "049",
        number: 49,
        title: "Guess Loop-Attempts", // Clarified loop purpose
        description: "Create `guess_attempts(target, guesses: list)`. Return number of attempts to find target in guesses (return index + 1). If not found return -1.",
        starterCode: `def guess_attempts(target: int, guesses: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def guess_attempts(target: int, guesses: list) -> int:
    attempts = 0
    for guess in guesses:
        attempts += 1
        if guess == target:
            return attempts
    return -1`,
        testCases: [
            { input: "guess_attempts(5, [1, 2, 5, 8])", expected: "3" }
        ]
    },
    {
        id: "050",
        number: 50,
        title: "Range Validation",
        description: "Create `validate_range_loop(inputs: list)`. Return first value between 10 and 20 (inclusive).",
        starterCode: `def validate_range_loop(inputs: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def validate_range_loop(inputs: list) -> int:
    for x in inputs:
        if 10 <= x <= 20:
            return x
    return 0`,
        testCases: [
            { input: "validate_range_loop([5, 25, 15, 30])", expected: "15" }
        ]
    },
    {
        id: "051",
        number: 51,
        title: "Green Bottles",
        description: "Write a function called `green_bottles` that takes a number `num`. It should return the message 'There are [num] green bottles hanging on the wall'. If `num` is 0, return 'There are no more green bottles hanging on the wall'.",
        starterCode: `def bottles_lyrics(start: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def bottles_lyrics(start: int) -> str:
    lyrics = ""
    num = start
    while num > 0:
        lyrics += f"There are {num} green bottles hanging on the wall\\n"
        lyrics += f"And if one green bottle should accidentally fall\\n"
        num -= 1
        lyrics += f"There will be {num} green bottles hanging on the wall\\n"
    return lyrics`,
        testCases: [
            { input: "bottles_lyrics(2).count('hanging on the wall')", expected: "4" }
        ]
    }
];

const random_challenges = [
    {
        id: "052",
        number: 52,
        title: "Random Int",
        description: "Write a function called `random_int`. It should generate and return a random integer between 1 and 100 (inclusive).",
        starterCode: `import random
def get_random_int() -> int:
    # Your code here
    pass`,
        solutionCode: `import random
def get_random_int() -> int:
    return random.randint(1, 100)`,
        testCases: [
            { input: "import random; random.seed(1); get_random_int()", expected: "18" }
        ]
    },
    {
        id: "053",
        number: 53,
        title: "Random Fruit",
        description: "Write a function called `random_fruit` that takes no arguments. It should pick a random fruit from the list ['apple', 'banana', 'cherry', 'date', 'elderberry'] and return it.",
        starterCode: `import random
def get_random_fruit() -> str:
    # Your code here
    pass`,
        solutionCode: `import random
def get_random_fruit() -> str:
    fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
    return random.choice(fruits)`,
        testCases: [
            { input: "import random; random.seed(1); get_random_fruit()", expected: "'banana'" }
        ]
    },
    {
        id: "054",
        number: 54,
        title: "Coin Toss",
        description: "Write a function called `guess_number` that takes a `guess` and a `comp_num` (target). If the guess is lower than the target, return 'Too low'. If it is higher, return 'Too high'. If it is the same, return 'Correct'.",
        starterCode: `import random
def coin_toss(user_choice: str) -> str:
    # Your code here
    pass`,
        solutionCode: `import random
def coin_toss(user_choice: str) -> str:
    flip = random.choice(['h', 't'])
    if user_choice == flip:
        return "You win"
    return "Bad luck"`,
        testCases: [
            { input: "import random; random.seed(1); coin_toss('h')", expected: "'Bad luck'" }
        ]
    },
    {
        id: "055",
        number: 55,
        title: "Random Guess Feedback",
        description: "Write a function called `pick_number`. It should check if a random number between 1 and 5 is equal to the user's choice. If it matches, return 'Well done'. If the user's choice is too high, return 'Too high'. If too low, return 'Too low'.",
        starterCode: `import random
def random_feedback(guess: int) -> str:
    # Your code here
    pass`,
        solutionCode: `import random
def random_feedback(guess: int) -> str:
    num = random.randint(1, 5)
    if guess == num:
        return "Well done"
    if guess > num:
        return "Too high"
    return "Too low"`,
        testCases: [
            { input: "import random; random.seed(1); random_feedback(2)", expected: "'Too low'" }
        ]
    },
    {
        id: "056",
        number: 56,
        title: "Random Loop",
        description: "Create `random_loop(guesses: list)`. Random 1-10. Iterate guesses. Return 'Correct' if found. Return 'Not found' if list ends.",
        starterCode: `import random
def random_loop(guesses: list) -> str:
    # Your code here
    pass`,
        solutionCode: `import random
def random_loop(guesses: list) -> str:
    num = random.randint(1, 10)
    for g in guesses:
        if g == num:
            return "Correct"
    return "Not found"`,
        testCases: [
            { input: "import random; random.seed(1); random_loop([1, 2, 3, 10])", expected: "'Correct'" }
        ]
    },
    {
        id: "057",
        number: 57,
        title: "Random Loop Feedback",
        description: "Create `random_loop_feedback(guesses: list)`. Random 1-10. Iterate guesses. If match: return 'Correct'. Else return 'Too high' or 'Too low' for each guess? Returns last message? 'Update program... tells user too high/low before pick again'. Adapted: Return list of feedback strings. e.g. ['Too high', 'Too low', 'Correct'].",
        starterCode: `import random
def random_loop_feedback(guesses: list) -> list:
    # Your code here
    pass`,
        solutionCode: `import random
def random_loop_feedback(guesses: list) -> list:
    num = random.randint(1, 10)
    feedback = []
    for g in guesses:
        if g == num:
            feedback.append("Correct")
            break
        elif g > num:
            feedback.append("Too high")
        else:
            feedback.append("Too low")
    return feedback`,
        testCases: [
            { input: "import random; random.seed(1); random_loop_feedback([10, 1, 2])", expected: "['Too high', 'Too low', 'Correct']" }
        ]
    },
    {
        id: "058",
        number: 58,
        title: "Math Quiz",
        description: "Write a function called `math_quiz_check` that takes two numbers and the user's answer. It should check if the two numbers added together equal the user's answer. Return True if correct, False otherwise.",
        starterCode: `def math_quiz_check(num1: int, num2: int, answer: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def math_quiz_check(num1: int, num2: int, answer: int) -> bool:
    return (num1 + num2) == answer`,
        testCases: [
            { input: "math_quiz_check(1, 2, 3)", expected: "True" }
        ]
    },
    {
        id: "059",
        number: 59,
        title: "Colour Guess",
        description: "Write a function called `check_colour_guess` that takes a guess. It should pick a random colour from ['red', 'blue', 'green', 'white', 'pink']. If the guess matches the random choice, return 'Well done'. Otherwise, return 'Wrong'.",
        starterCode: `import random
def check_colour_guess(guess: str) -> str:
    # Your code here
    pass`,
        solutionCode: `import random
def check_colour_guess(guess: str) -> str:
    colour = random.choice(['red', 'blue', 'green', 'white', 'pink'])
    if guess == colour:
        return "Well done"
    return "Wrong"`,
        testCases: []
    }
];


const list_challenges = [
    {
        id: "069",
        number: 69,
        title: "Tuple Index",
        description: "Write a function called `get_tuple_item` that takes a tuple of countries and a country name. It should return the index number of that country in the tuple.",
        starterCode: `def get_tuple_item(countries: tuple, name: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def get_tuple_item(countries: tuple, name: str) -> int:
    return countries.index(name)`,
        testCases: [
            { input: "get_tuple_item(('UK', 'US', 'France'), 'US')", expected: "1" }
        ]
    },
    {
        id: "070",
        number: 70,
        title: "Tuple Choice",
        description: "Write a function called `get_tuple_choice` that takes a tuple of countries and an index number. It should return the country name at that index position.",
        starterCode: `def get_tuple_choice(countries: tuple, index: int) -> str:
    # Your code here
pass`,
        solutionCode: `def get_tuple_choice(countries: tuple, index: int) -> str:
return countries[index]`,
        testCases: [
            { input: "get_tuple_choice(('UK', 'US'), 0)", expected: "'UK'" }
        ]
    },
    {
        id: "071",
        number: 71,
        title: "Sport List",
        description: "Write a function called `add_sport` that takes a list of sports and a new sport name. It should append the new sport to the list, sort the list alphabetically, and then return the updated list.",
        starterCode: `def add_sport(sports: list, sport: str) -> list:
    # Your code here
pass`,
        solutionCode: `def add_sport(sports: list, sport: str) -> list:
sports.append(sport)
sports.sort()
return sports`,
        testCases: [
            { input: "add_sport(['Tennis', 'Football'], 'Rugby')", expected: "['Football', 'Rugby', 'Tennis']" }
        ]
    },
    {
        id: "072",
        number: 72,
        title: "Delete Subject",
        description: "Write a function called `remove_subject` that takes a list of subjects and a specific subject name. If the subject exists in the list, remove it. Return the modified list.",
        starterCode: `def remove_subject(subjects: list, subject: str) -> list:
    # Your code here
pass`,
        solutionCode: `def remove_subject(subjects: list, subject: str) -> list:
if subject in subjects:
    subjects.remove(subject)
return subjects`,
        testCases: [
            { input: "remove_subject(['Maths', 'English'], 'Maths')", expected: "['English']" }
        ]
    },
    {
        id: "073",
        number: 73,
        title: "Food Dictionary",
        description: "Write a function called `remove_food` that takes a dictionary of ID-Food pairs and an ID key. It should remove the entry associated with that key and return the updated dictionary.",
        starterCode: `def remove_food(foods: dict, key: int) -> dict:
    # Your code here
pass`,
        solutionCode: `def remove_food(foods: dict, key: int) -> dict:
if key in foods:
        del foods[key]
return foods`,
        testCases: [
            { input: "remove_food({1: 'Pizza', 2: 'Curry'}, 1)", expected: "{2: 'Curry'}" } // JSON string repr
        ]
    },
    {
        id: "074",
        number: 74,
        title: "Colour Range",
        description: "Write a function called `colour_range` that accepts a list of colours, a start index, and an end index. It should return a new list containing the colours between those indices (using Python list slicing).",
        starterCode: `def colour_range(colours: list, start: int, end: int) -> list:
    # Your code here
pass`,
        solutionCode: `def colour_range(colours: list, start: int, end: int) -> list:
return colours[start:end]`,
        testCases: [
            { input: "colour_range(['red', 'blue', 'green', 'white'], 1, 3)", expected: "['blue', 'green']" }
        ]
    },
    {
        id: "075",
        number: 75,
        title: "Check List Number",
        description: "Write a function called `check_list_num` that takes a list of numbers and a guess. If the guess is in the list, return its index (as a string). If it is not, return the string 'Not in list'.",
        starterCode: `def check_list_num(nums: list, guess: int) -> str:
    # Your code here
pass`,
        solutionCode: `def check_list_num(nums: list, guess: int) -> str:
if guess in nums:
    return str(nums.index(guess))
return "Not in list"`,
        testCases: [
            { input: "check_list_num([123, 456, 789], 456)", expected: "'1'" },
            { input: "check_list_num([123], 999)", expected: "'Not in list'" }
        ]
    },
    {
        id: "076",
        number: 76,
        title: "Invite List Count",
        description: "Write a function called `count_guests` that accepts a list of guest names. It should simply return the total number of guests in the list.",
        starterCode: `def count_guests(names: list) -> int:
    # Your code here
pass`,
        solutionCode: `def count_guests(names: list) -> int:
return len(names)`,
        testCases: [
            { input: "count_guests(['Bob', 'Alice'])", expected: "2" }
        ]
    },
    {
        id: "077",
        number: 77,
        title: "Invite Check",
        description: "Write a function called `invite_manage` that takes a list of names, a specific name to check, and a boolean `keep`. If the name exists in the list and `keep` is False, remove that name from the list. Return the updated list.",
        starterCode: `def invite_manage(names: list, check_name: str, keep: bool) -> list:
    # Your code here
pass`,
        solutionCode: `def invite_manage(names: list, check_name: str, keep: bool) -> list:
if check_name in names and not keep:
names.remove(check_name)
return names`,
        testCases: [
            { input: "invite_manage(['Bob'], 'Bob', False)", expected: "[]" }
        ]
    },
    {
        id: "078",
        number: 78,
        title: "TV Show Insert",
        description: "Write a function called `tv_insert` that takes a list of TV shows, a new show name, and an index. It should insert the new show into the list at the specified index and return the updated list.",
        starterCode: `def tv_insert(shows: list, show: str, idx: int) -> list:
    # Your code here
pass`,
        solutionCode: `def tv_insert(shows: list, show: str, idx: int) -> list:
shows.insert(idx, show)
return shows`,
        testCases: [
            { input: "tv_insert(['News', 'Movie'], 'Sport', 1)", expected: "['News', 'Sport', 'Movie']" }
        ]
    },
    {
        id: "079",
        number: 79,
        title: "Nums Keep Last",
        description: "Write a function called `nums_keep` that accepts a list of numbers and a boolean `keep_last`. If `keep_last` is False, remove the last item from the list. Return the list.",
        starterCode: `def nums_keep(nums: list, keep_last: bool) -> list:
    # Your code here
pass`,
        solutionCode: `def nums_keep(nums: list, keep_last: bool) -> list:
if not keep_last and nums:
nums.pop()
return nums`,
        testCases: [
            { input: "nums_keep([1, 2, 3], False)", expected: "[1, 2]" }
        ]
    }
];

const string_more_challenges = [
    {
        id: "080",
        number: 80,
        title: "Name Stats",
        description: "Write a function called `name_stats` that takes a first name and a last name. It should return a summary string in the format 'First: [len], Last: [len], Full: [full_name]'.",
        starterCode: `def name_stats(first: str, last: str) -> str:
    # Your code here
pass`,
        solutionCode: `def name_stats(first: str, last: str) -> str:
full = f"{first} {last}"
return f"First: {len(first)}, Last: {len(last)}, Full: {full}"`,
        testCases: [
            { input: "name_stats('Bob', 'Smith')", expected: "'First: 3, Last: 5, Full: Bob Smith'" }
        ]
    },
    {
        id: "081",
        number: 81,
        title: "Subject Dash",
        description: "Write a function called `subject_dash` that takes a subject word. It should return the word with a dash ('-') inserted after every character (except possibly the last one, or just join them). Example: 'Maths' becomes 'M-a-t-h-s'.",
        starterCode: `def subject_dash(subject: str) -> str:
    # Your code here
pass`,
        solutionCode: `def subject_dash(subject: str) -> str:
output = ""
for char in subject:
    output += char + "-"
return output[: -1]`, // or "-".join(subject)
        testCases: [
            { input: "subject_dash('Maths')", expected: "'M-a-t-h-s'" }
        ]
    },
    {
        id: "082",
        number: 82,
        title: "Poem Slice",
        description: "Write a function called `poem_slice` that takes a line of text, a start index, and an end index. Return the substring defined by those indices.",
        starterCode: `def poem_slice(line: str, start: int, end: int) -> str:
    # Your code here
pass`,
        solutionCode: `def poem_slice(line: str, start: int, end: int) -> str:
return line[start:end]`,
        testCases: [
            { input: "poem_slice('Hello World', 0, 5)", expected: "'Hello'" }
        ]
    },
    {
        id: "083",
        number: 83,
        title: "Check Upper",
        description: "Write a function called `check_upper` that takes a word. Return True if the word is entirely uppercase, and False otherwise.",
        starterCode: `def check_upper(word: str) -> bool:
    # Your code here
pass`,
        solutionCode: `def check_upper(word: str) -> bool:
return word.isupper()`,
        testCases: [
            { input: "check_upper('HELLO')", expected: "True" },
            { input: "check_upper('Hello')", expected: "False" }
        ]
    },
    {
        id: "084",
        number: 84,
        title: "Postcode Prefix",
        description: "Write a function called `postcode_prefix` that accepts a postcode string. It should return the first two characters of the postcode in uppercase.",
        starterCode: `def postcode_prefix(postcode: str) -> str:
    # Your code here
pass`,
        solutionCode: `def postcode_prefix(postcode: str) -> str:
return postcode[: 2].upper()`,
        testCases: [
            { input: "postcode_prefix('ab12 3cd')", expected: "'AB'" }
        ]
    },
    {
        id: "085",
        number: 85,
        title: "Vowel Count",
        description: "Write a function called `vowel_count` that takes a word. It should count and return the number of vowels (a, e, i, o, u) in the word, regardless of case.",
        starterCode: `def vowel_count(word: str) -> int:
    # Your code here
pass`,
        solutionCode: `def vowel_count(word: str) -> int:
count = 0
vowels = "aeiou"
for char in word.lower():
    if char in vowels:
        count += 1
return count`,
        testCases: [
            { input: "vowel_count('Hello')", expected: "2" }
        ]
    },
    {
        id: "086",
        number: 86,
        title: "Password Match",
        description: "Write a function called `check_password` that takes a password attempt. If the password is 'secret', return 'Access granted'. Otherwise, return 'Try again'.",
        starterCode: `def password_match(p1: str, p2: str) -> str:
    # Your code here
pass`,
        solutionCode: `def password_match(p1: str, p2: str) -> str:
if p1 == p2:
    return "Match"
return "No match"`,
        testCases: [
            { input: "password_match('abc', 'abc')", expected: "'Match'" }
        ]
    },
    {
        id: "087",
        number: 87,
        title: "Reverse String",
        description: "Write a function called `reverse_string` that takes a word. It should return the word reversed.",
        starterCode: `def reverse_string(word: str) -> str:
    # Your code here
pass`,
        solutionCode: `def reverse_string(word: str) -> str:
return word[:: -1]`,
        testCases: [
            { input: "reverse_string('Hello')", expected: "'olleH'" }
        ]
    }
];

const array_challenges = [
    {
        id: "088",
        number: 88,
        title: "Array Reverse",
        description: "Write a function called `array_reverse` that takes a list of 5 integers. It should sort the list in ascending order, then reverse it (so it is descending), and return the result.",
        starterCode: `def array_reverse(nums: list) -> list:
    # Your code here
pass`,
        solutionCode: `def array_reverse(nums: list) -> list:
nums.sort()
nums.reverse()
return nums`,
        testCases: [
            { input: "array_reverse([1, 4, 2, 5])", expected: "[5, 4, 2, 1]" }
        ]
    },
    {
        id: "089",
        number: 89,
        title: "Array Random",
        description: "Write a function called `array_get_items` that takes a list of integers. Functionally, it should simply return the list (to simulate displaying the items).",
        starterCode: `def array_get_items(nums: list) -> list:
    # Your code here
pass`,
        solutionCode: `def array_get_items(nums: list) -> list:
return nums`, // Trivial, but matches "display items"
        testCases: []
    },
    {
        id: "090",
        number: 90,
        title: "Array Filter",
        description: "Write a function called `array_filter_10` that takes a list of numbers. It should return a new list containing only the numbers that are less than 10.",
        starterCode: `def array_filter_10(nums: list) -> list:
    # Your code here
pass`,
        solutionCode: `def array_filter_10(nums: list) -> list:
output = []
for num in nums:
    if num < 10:
        output.append(num)
return output`,
        testCases: [
            { input: "array_filter_10([1, 15, 5, 20])", expected: "[1, 5]" }
        ]
    },
    {
        id: "091",
        number: 91,
        title: "Array Count Target",
        description: "Write a function called `array_count_target` that takes a list of numbers and a target number. It should return the number of times the target appears in the list.",
        starterCode: `def array_count_target(nums: list, target: int) -> int:
    # Your code here
pass`,
        solutionCode: `def array_count_target(nums: list, target: int) -> int:
return nums.count(target)`,
        testCases: [
            { input: "array_count_target([1, 2, 1, 3], 1)", expected: "2" }
        ]
    },
    {
        id: "092",
        number: 92,
        title: "Array Merge",
        description: "Write a function called `array_merge` that takes two lists. It should combine them into one list, sort it alphabetically/numerically, and return the result.",
        starterCode: `def array_merge(arr1: list, arr2: list) -> list:
    # Your code here
pass`,
        solutionCode: `def array_merge(arr1: list, arr2: list) -> list:
full = arr1 + arr2
full.sort()
return full`,
        testCases: [
            { input: "array_merge([3, 1], [4, 2])", expected: "[1, 2, 3, 4]" }
        ]
    },
    {
        id: "093",
        number: 93,
        title: "Array Remove Value",
        description: "Write a function called `array_remove_val` that takes a list and a value. If the value exists in the list, remove it. Return the modified list.",
        starterCode: `def array_remove_val(nums: list, val: int) -> list:
    # Your code here
pass`,
        solutionCode: `def array_remove_val(nums: list, val: int) -> list:
if val in nums:
    nums.remove(val)
return nums`,
        testCases: [
            { input: "array_remove_val([1, 2, 3], 2)", expected: "[1, 3]" }
        ]
    },
    {
        id: "094",
        number: 94,
        title: "Array Indices",
        description: "Write a function called `array_indices_select` that takes a list of numbers and a list of indices. It should return a new list containing the numbers found at those specific indices.",
        starterCode: `def array_indices_select(nums: list, indices: list) -> list:
    # Your code here
pass`,
        solutionCode: `def array_indices_select(nums: list, indices: list) -> list:
output = []
for i in indices:
    if 0 <= i < len(nums):
        output.append(nums[i])
return output`,
        testCases: [
            { input: "array_indices_select([10, 20, 30], [0, 2])", expected: "[10, 30]" }
        ]
    },
    {
        id: "095",
        number: 95,
        title: "Array Division",
        description: "Write a function called `array_div` that takes a list of numbers and a divisor. It should return a new list where each number has been divided by the divisor and rounded to 2 decimal places.",
        starterCode: `def array_div(nums: list, divisor: float) -> list:
    # Your code here
pass`,
        solutionCode: `def array_div(nums: list, divisor: float) -> list:
output = []
for num in nums:
    output.append(round(num / divisor, 2))
return output`,
        testCases: [
            { input: "array_div([10, 20], 2)", expected: "[5.0, 10.0]" }
        ]
    }
];


const dict_2d_challenges = [
    {
        id: "096",
        number: 96,
        title: "Simple 2D List",
        description: "Write a function called `get_simple_grid`. It should simply return the specific 2D list: `[[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]]`.",
        starterCode: `def get_simple_grid() -> list:
    # Your code here
    pass`,
        solutionCode: `def get_simple_grid() -> list:
    return [[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]]`,
        testCases: [
            { input: "get_simple_grid()[0]", expected: "[2, 5, 8]" }
        ]
    },
    {
        id: "097",
        number: 97,
        title: "Get 2D Item",
        description: "Write a function called `get_grid_item` that takes a 2D list (grid), a row index, and a column index. It should return the item located at that row and column.",
        starterCode: `def get_grid_item(grid: list, row: int, col: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def get_grid_item(grid: list, row: int, col: int) -> int:
    return grid[row][col]`,
        testCases: [
            { input: "get_grid_item([[1, 2], [3, 4]], 1, 0)", expected: "3" }
        ]
    },
    {
        id: "098",
        number: 98,
        title: "Update 2D Item",
        description: "Write a function called `update_grid_item` that takes a 2D list, a row, a column, and a new value. It should update the item at that position and return the modified grid.",
        starterCode: `def update_grid_item(grid: list, row: int, col: int, val: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def update_grid_item(grid: list, row: int, col: int, val: int) -> list:
    grid[row][col] = val
    return grid`,
        testCases: [
            { input: "update_grid_item([[1, 2], [3, 4]], 0, 0, 9)", expected: "[[9, 2], [3, 4]]" }
        ]
    },
    {
        id: "099",
        number: 99,
        title: "Get Row",
        description: "Write a function called `get_row` that takes a 2D list and a row index. It should return that entire row as a list.",
        starterCode: `def get_row(grid: list, row: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def get_row(grid: list, row: int) -> list:
    return grid[row]`,
        testCases: [
            { input: "get_row([[1, 2], [3, 4]], 1)", expected: "[3, 4]" }
        ]
    },
    {
        id: "100",
        number: 100,
        title: "2D Dict Access",
        description: "Write a function called `get_sales` that accept a dictionary of sales data, a name, and a region code (e.g., 'N', 'S'). It should return the sales number associated with that name and region.",
        starterCode: `def get_sales(data: dict, name: str, region: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def get_sales(data: dict, name: str, region: str) -> int:
    return data[name][region]`,
        testCases: [
            { input: "get_sales({'Bob': {'N': 10}}, 'Bob', 'N')", expected: "10" }
        ]
    },
    {
        id: "101",
        number: 101,
        title: "2D Dict Update",
        description: "Write a function called `update_sales` that takes a sales dictionary, a name, a region, and a new value. It should update the sales figure for that person and region, then return the dictionary.",
        starterCode: `def update_sales(data: dict, name: str, region: str, val: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `def update_sales(data: dict, name: str, region: str, val: int) -> dict:
    data[name][region] = val
    return data`,
        testCases: [
            { input: "update_sales({'Bob': {'N': 10}}, 'Bob', 'N', 20)", expected: "{'Bob': {'N': 20}}" }
        ]
    },
    {
        id: "102",
        number: 102,
        title: "2D Dict Add",
        description: "Write a function called `add_person` that accepts a dictionary, a name, an age, and a shoe size. It should add (or update) an entry for that name containing a dictionary with 'Age' and 'Shoe' keys, then return the dictionary.",
        starterCode: `def add_person(data: dict, name: str, age: int, shoe: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `def add_person(data: dict, name: str, age: int, shoe: int) -> dict:
    data[name] = {'Age': age, 'Shoe': shoe}
    return data`,
        testCases: [
            { input: "add_person({}, 'Bob', 20, 10)", expected: "{'Bob': {'Age': 20, 'Shoe': 10}}" }
        ]
    },
    {
        id: "103",
        number: 103, // Adapted significantly to function
        title: "2D Dict Print",
        description: "Write a function called `get_person_info` that takes the data dictionary and a name. If the person exists, return a string like 'Age: [age], Shoe: [shoe]'. If not, return 'Not found'.",
        starterCode: `def get_person_info(data: dict, name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_person_info(data: dict, name: str) -> str:
    if name in data:
        p = data[name]
        return f"Age: {p['Age']}, Shoe: {p['Shoe']}"
    return "Not found"`,
        testCases: [
            { input: "get_person_info({'Bob': {'Age': 20, 'Shoe': 10}}, 'Bob')", expected: "'Age: 20, Shoe: 10'" }
        ]
    }
];

const subprogram_challenges = [
    {
        id: "118",
        number: 118,
        title: "Ask Num Function",
        description: "Write a function called `ask_num` that accepts a value. It should simply return that value (simulating asking the user for input and returning it).",
        starterCode: `def ask_num(val: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def ask_num(val: int) -> int:
    return val`,
        testCases: [
            { input: "ask_num(5)", expected: "5" }
        ]
    },
    {
        id: "120",
        number: 120,
        title: "Menu Math",
        description: "Write a function called `calc` that takes a choice (1 or 2) and two numbers. If choice is 1, return a string showing sum: '[a] + [b] = [ans]'. If 2, return subtraction: '[a] - [b] = [ans]'. Otherwise return 'Invalid'.",
        starterCode: `def calc(choice: int, a: int, b: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def calc(choice: int, a: int, b: int) -> str:
    if choice == 1:
        return f"{a} + {b} = {a + b}"
    elif choice == 2:
        return f"{a} - {b} = {a - b}"
    return "Invalid"`,
        testCases: [
            { input: "calc(1, 5, 3)", expected: "'5 + 3 = 8'" }
        ]
    },
    {
        id: "121",
        number: 121,
        title: "Name List Manager",
        description: "Write a function called `manage_names` that takes a list of names, a menu choice (1-4), a value (for adding/removing), and an optional index. 1: Add name. 2: Change name at index. 3: Delete name. 4: Return list. Perform the action and return the list.",
        starterCode: `def manage_names(names: list, choice: int, val: str, idx: int = 0) -> list:
    # Your code here
    pass`,
        solutionCode: `def manage_names(names: list, choice: int, val: str, idx: int = 0) -> list:
    if choice == 1:
        names.append(val)
    elif choice == 2 and 0 <= idx < len(names):
        names[idx] = val
    elif choice == 3 and val in names:
        names.remove(val)
    return names`,
        testCases: [
            { input: "manage_names(['Bob'], 1, 'Alice')", expected: "['Bob', 'Alice']" },
            { input: "manage_names(['Bob'], 3, 'Bob')", expected: "[]" }
        ]
    }
];

// Placeholder for remaining chapters
export const chapters: Chapter[] = [
    {
        id: "01_basics",
        title: "The Basics",
        description: "Input, Output and Variables",
        explanation: "Learn to display text, handle user input, and use variables.",
        exampleCode: "print('Hello World')",
        challenges: basics_challenges,
        homework: homeworkByChapter["01_basics"]
    },
    {
        id: "02_if_statements",
        title: "If Statements",
        description: "Control Flow and Conditionals",
        explanation: "Use if, elif, and else to make decisions.",
        exampleCode: "if True:\\n    print('Yes')",
        challenges: if_challenges,
        homework: homeworkByChapter["02_if_statements"]
    },
    {
        id: "03_strings",
        title: "Strings",
        description: "String Manipulation",
        explanation: "Work with text: splitting, slicing, and formatting.",
        exampleCode: "print('hello'.upper())",
        challenges: string_challenges,
        homework: homeworkByChapter["03_strings"]
    },
    {
        id: "04_maths",
        title: "Maths",
        description: "Math Operations",
        explanation: "Perform calculations using Python's math library.",
        exampleCode: "import math\\nprint(math.sqrt(16))",
        challenges: math_challenges,
        homework: homeworkByChapter["04_maths"]
    },
    {
        id: "05_for_loops",
        title: "For Loops",
        description: "Iteration",
        explanation: "Repeat code a specific number of times.",
        exampleCode: "for i in range(5):\\n    print(i)",
        challenges: for_challenges,
        homework: homeworkByChapter["05_for_loops"]
    },
    {
        id: "06_while_loops",
        title: "Conditional Loops",
        description: "Conditional Loops",
        explanation: "Repeat code while a condition is true.",
        exampleCode: "while True:\\n    break",
        challenges: while_challenges,
        homework: homeworkByChapter["06_while_loops"]
    },
    {
        id: "07_random",
        title: "Random",
        description: "Random Numbers",
        explanation: "Generate random numbers and choices.",
        exampleCode: "import random\\nprint(random.randint(1, 10))",
        challenges: random_challenges,
        homework: homeworkByChapter["07_random"]
    },
    {
        id: "08_lists_dicts",
        title: "Tuples, Lists and Dicts",
        description: "Data Structures",
        explanation: "Store multiple values in tuples, lists, and dictionaries.",
        exampleCode: "x = [1, 2, 3]\\nprint(x[0])",
        challenges: list_challenges,
        homework: homeworkByChapter["08_lists_dicts"]
    },
    {
        id: "09_more_strings",
        title: "More Strings",
        description: "Advanced Strings",
        explanation: "String formatting and advanced manipulation.",
        exampleCode: "print('Hello'.isupper())",
        challenges: string_more_challenges,
        homework: homeworkByChapter["09_more_strings"]
    },
    {
        id: "10_arrays",
        title: "Numeric Arrays",
        description: "Working with Lists of Numbers",
        explanation: "Manipulating lists of numbers: sorting, deleting, calculating.",
        exampleCode: "x = [3, 1, 2]\\nx.sort()",
        challenges: array_challenges,
        homework: homeworkByChapter["10_arrays"]
    },
    {
        id: "11_2d_lists_dicts",
        title: "2D Lists and Dictionaries",
        description: "Complex Data Structures",
        explanation: "Working with 2D lists and nested dictionaries.",
        exampleCode: "x = [[1, 2], [3, 4]]",
        challenges: dict_2d_challenges,
        homework: homeworkByChapter["11_2d_lists_dicts"]
    },
    {
        id: "12_subprograms",
        title: "Subprograms",
        description: "Functions and Logic",
        explanation: "Define functions and manage program flow.",
        exampleCode: "def my_func():\\n    pass",
        challenges: subprogram_challenges,
        homework: homeworkByChapter["12_subprograms"]
    }
];
