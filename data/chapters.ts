import { Chapter } from "../types";
import { homeworkByChapter } from "./homework";

const basics_challenges = [
    {
        id: "001",
        number: 1,
        title: "Hello Name",
        description: "Create a function `hello_name` that takes a `first_name` and returns 'Hello [first_name]'.",
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
        description: "Create a function `hello_full_name` that takes `first_name` and `surname` and returns 'Hello [first_name] [surname]'.",
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
        description: "Create a function `joke` that returns 'What do you call a bear with no teeth?\\nA gummy bear!'",
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
        description: "Create a function `add_two` that takes two numbers and returns their sum.",
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
        description: "Create a function `add_and_multiply` that takes three numbers. Add the first two, then multiply by the third.",
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
        description: "Create a function `pizza_left` that takes `started` (slices) and `eaten`, and returns only the message 'You have [x] slices remaining'.",
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
        description: "Create a function `birthday_message` that takes `name` and `age`, adds 1 to age, and returns '[name] next birthday you will be [new_age]'.",
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
        description: "Create a function `split_bill` that takes `total_price` and `diners`. Return the price per person.",
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
        description: "Create a function `days_seconds` that takes `days` and returns 'In [days] days there are [hours] hours, [minutes] minutes and [seconds] seconds'.",
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
        description: "Create a function `kg_to_pounds` that takes `kg` and returns the weight in pounds (1kg = 2.204 lbs).",
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
        description: "Create `division_info(large, small)`. Return '[small] goes into [large] [result] times'. Use integer division.",
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
        description: "Create `order_numbers(num1, num2)`. If num1 > num2 return '[num2] [num1]'. Else return '[num1] [num2]'.",
        starterCode: `def order_numbers(num1: int, num2: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def order_numbers(num1: int, num2: int) -> str:
    if num1 > num2:
        return f"{num2} {num1}"
    return f"{num1} {num2}"`,
        testCases: [
            { input: "order_numbers(10, 5)", expected: "'5 10'" },
            { input: "order_numbers(5, 10)", expected: "'5 10'" }
        ]
    },
    {
        id: "013",
        number: 13,
        title: "Check Under 20",
        description: "Create `check_under_20(num)`. If num >= 20 return 'Too high', else return 'Thank you'.",
        starterCode: `def check_under_20(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_under_20(num: int) -> str:
    if num >= 20:
        return "Too high"
    return "Thank you"`,
        testCases: [
            { input: "check_under_20(25)", expected: "'Too high'" },
            { input: "check_under_20(10)", expected: "'Thank you'" }
        ]
    },
    {
        id: "014",
        number: 14,
        title: "Check Range",
        description: "Create `check_range(num)`. If num is between 10 and 20 (inclusive) return 'Thank you', else 'Incorrect answer'.",
        starterCode: `def check_range(num: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_range(num: int) -> str:
    if 10 <= num <= 20:
        return "Thank you"
    return "Incorrect answer"`,
        testCases: [
            { input: "check_range(15)", expected: "'Thank you'" },
            { input: "check_range(21)", expected: "'Incorrect answer'" }
        ]
    },
    {
        id: "015",
        number: 15,
        title: "Favourite Colour",
        description: "Create `check_colour(colour)`. If colour is 'red', 'RED' or 'Red' return 'I like red too'. Else 'I don't like [colour], I prefer red'.",
        starterCode: `def check_colour(colour: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_colour(colour: str) -> str:
    if colour.lower() == "red":
        return "I like red too"
    return f"I don't like {colour}, I prefer red"`,
        testCases: [
            { input: "check_colour('Red')", expected: "'I like red too'" },
            { input: "check_colour('Blue')", expected: "'I don\\'t like Blue, I prefer red'" }
        ]
    },
    {
        id: "016",
        number: 16,
        title: "Weather Check",
        description: "Create `check_weather(is_raining, is_windy)`. Both inputs are strings ('yes'/'no'). If raining is 'yes': if windy is 'yes' return 'It is too windy for an umbrella', else 'Take an umbrella'. If raining 'no', return 'Enjoy your day'. (Case insensitive)",
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
            { input: "check_weather('no', 'yes')", expected: "'Enjoy your day'" }
        ]
    },
    {
        id: "017",
        number: 17,
        title: "Voting Age",
        description: "Create `check_age(age)`. >=18: 'You can vote'. 17: 'You can learn to drive'. 16: 'You can buy a lottery ticket'. <16: 'You can go Trick-or-Treating'.",
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
            { input: "check_age(15)", expected: "'You can go Trick-or-Treating'" }
        ]
    },
    {
        id: "018",
        number: 18,
        title: "Basic Range",
        description: "Create `check_number(num)`. <10: 'Too low'. 10-20: 'Correct'. >20: 'Too high'.",
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
            { input: "check_number(25)", expected: "'Too high'" }
        ]
    },
    {
        id: "019",
        number: 19,
        title: "Selection",
        description: "Create `check_selection(num)`. 1: 'Thank you'. 2: 'Well done'. 3: 'Correct'. Other: 'Error message'.",
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
            { input: "check_selection(5)", expected: "'Error message'" }
        ]
    }
];

const string_challenges = [
    {
        id: "020",
        number: 20,
        title: "Name Length",
        description: "Create `name_length(name)`. Return length of name.",
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
        description: "Create `join_names(first, last)`. Return '[first] [last] [length]' (length of whole name including space).",
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
        description: "Create `format_name_title(first, last)`. Return '[First] [Last]' in title case.",
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
        description: "Create `rhyme_part(line, start, end)`. Return the slice `line[start:end]`.",
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
        description: "Create `make_upper(word)`. Return word in uppercase.",
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
        description: "Create `format_name_check(first)`. If len(first) < 5, return 'Empty'. (Wait, book says if < 5 ask for surname and join). Adapted: Create `format_name_conditional(first, last)`. If first < 5 chars, return '[first][last]' (uppercased). If >= 5, return '[first]' (lowercased).",
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
        description: "Create `pig_latin(word)`. If starts with vowel (aeiou): add 'way' to end. Else: move start consonant to end and add 'ay'. (e.g. 'chip' -> 'ipchay' (wait, all consonants? Book says 'first letter'). Book says 026: 'If it begins with a vowel...'. 'If it begins with a consonant, move that letter to the end...'. So just first letter.",
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
        description: "Create `multiply_float(num)`. Return `num * 2`.",
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
        description: "Create `round_float(num)`. Return num * 2 rounded to 2 decimal places.",
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
        description: "Create `sqrt_check(num)`. Calculate sqrt of num. Return formatted string rounded to 2dp.",
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
        description: "Create `get_pi()`. Return pi to 5 decimal places.",
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
        description: "Create `circle_area(radius)`. Return area (pi * r^2).",
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
        description: "Create `cylinder_volume(radius, depth)`. Return volume rounded to 3 decimal places.",
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
        description: "Create `div_remain(num1, num2)`. Return '[num1] divided by [num2] is [whole] with [remain] remaining'.",
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
        description: "Create `shape_area(choice, value)`. If choice is 1 (square), value is length -> area. If choice is 2 (triangle), value is base (assume height=base? Book says 'ask for base and height'. Adapted: `shape_area(choice, val1, val2)`. If square: area = val1^2 (ignore val2). If triangle: area = 0.5 * val1 * val2. If neither: 'Invalid'.",
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
        description: "Create `name_repeat(name)`. Return name 3 times, separated by newlines.",
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
        description: "Create `name_count(name, count)`. Return name `count` times, separated by newlines.",
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
        description: "Create `name_chars(name)`. Return a string with each character on a new line.",
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
        description: "Create `name_chars_count(name, count)`. Repeat displaying each character of the name `count` times. Separate by newlines.",
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
        description: "Create `times_table(num)`. Return the times table for `num` from 1 to 10. Format: '1 x [num] = [ans]\\n...'",
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
        description: "Create `count_down_50(num)`. Return a list of numbers from 50 down to `num` (inclusive).",
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
        description: "Create `name_loop_conditional(name, count)`. If count < 10: return name `count` times. Else: return 'Too high' 3 times.",
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
        description: "Create `sum_list(nums: list)`. Return total of numbers in list.",
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
        description: "Create `count_direction(direction, num)`. If direction is 'up': return list 1 to num. If 'down': return list 20 down to num. Else return empty list.",
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
        description: "Create `invite_guests(guests: list)`. If len(guests) < 10: return string '[name] has been invited' for each. Else return 'Too many people'.",
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
        description: "Create `sum_until_50(nums: list)`. Iterate through nums, adding to total. If total > 50, stop and return the total at that point (including the one that went over).",
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
        description: "Create `validate_5(nums: list)`. Return the first number in the list that is > 5.",
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
        description: "Create `sum_sequence(nums: list)`. Return sum of all numbers.",
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
        description: "Create `count_invites(responses: list)`. Responses are 'yes' or 'no'. Count how many 'yes'.",
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
        description: "Create `bottles_lyrics(start)`. Returns full song lyrics counting down from start to 0.",
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
        description: "Create `get_random_int()`. Return random integer between 1 and 100.",
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
        description: "Create `get_random_fruit()`. Pick from ['apple', 'banana', 'cherry', 'date', 'elderberry'].",
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
        description: "Create `coin_toss(user_choice)`. User choice 'h' or 't'. Randomly pick 'h' or 't'. If match return 'You win', else 'Bad luck'.",
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
        description: "Create `random_feedback(guess)`. Random 1-5. If guess matches random: 'Well done'. If guess > random: 'Too high'. If guess < random: 'Too low'.",
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
        description: "Create `math_quiz_check(num1, num2, answer)`. Return True if correct.",
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
        description: "Create `check_colour_guess(guess)`. Random choice from ['red', 'blue', 'green', 'white', 'pink']. Match? If match 'Well done'. Else 'Wrong'.",
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
        description: "Create `get_tuple_item(countries: tuple, name: str) -> int`. Return index of name in tuple.",
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
        description: "Create `get_tuple_choice(countries: tuple, index: int) -> str`. Return item at index.",
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
        description: "Create `add_sport(sports: list, sport: str) -> list`. Append sport to list and return sorted list.",
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
        description: "Create `remove_subject(subjects: list, subject: str) -> list`. Remove subject from list and return list.",
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
        description: "Create `remove_food(foods: dict, key: int) -> dict`. Remove item with given key from dictionary and return dict.",
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
        description: "Create `colour_range(colours: list, start: int, end: int) -> list`. Return list slice from start to end (inclusive/exclusive? Python slicing is exclusive. Book says 'between start and end numbers'. Let's stick to Python standard slice `[start:end]`).",
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
        description: "Create `check_list_num(nums: list, guess: int) -> str`. If guess in list return index (as string), else return 'Not in list'.",
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
        description: "Create `invite_count_guests(names: list) -> int`. Logic: If user says 'no' stop? This is interactive. Adapted: `count_guests(names: list)`. Return len.",
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
        description: "Create `invite_manage(names: list, check_name: str, keep: bool) -> list`. If check_name in list: if keep is False, remove it. Return list.",
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
        description: "Create `tv_insert(shows: list, show: str, idx: int) -> list`. Insert show at idx. Return list.",
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
        description: "Create `nums_keep(nums: list, keep_last: bool) -> list`. If keep_last is False, remove last item. Return list.",
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
        description: "Create `name_stats(first: str, last: str) -> str`. Return 'First: [len], Last: [len], Full: [full name]'.",
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
        description: "Create `subject_dash(subject: str) -> str`. Return subject chars joined by '-'.",
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
        description: "Create `poem_slice(line: str, start: int, end: int) -> str`. Return slice.",
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
        description: "Create `check_upper(word: str) -> bool`. Return True if word is all uppercase.",
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
        description: "Create `postcode_prefix(postcode: str) -> str`. Return first 2 characters in uppercase.",
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
        description: "Create `vowel_count(word: str) -> int`. Count vowels (aeiou), case insensitive.",
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
        description: "Create `password_match(p1: str, p2: str) -> str`. If match: 'Match'. Else: 'No match'.",
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
        description: "Create `reverse_string(word: str) -> str`. Return word in reverse.",
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
        description: "Create `array_reverse(nums: list) -> list`. Sort and then reverse the list.",
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
        description: "Create `array_random(nums: list) -> list`. Actually book says 'print on separate lines'. Adapted: `array_get_items(nums)`. Return valid list.",
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
        description: "Create `array_filter_10(nums: list) -> list`. Return list of numbers < 10.",
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
        description: "Create `array_count_target(nums: list, target: int) -> int`. Count occurrences.",
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
        description: "Create `array_merge(arr1: list, arr2: list) -> list`. Join arrays and sort.",
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
        description: "Create `array_remove_val(nums: list, val: int) -> list`. Remove val from list.",
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
        description: "Create `array_indices_select(nums: list, indices: list) -> list`. Return items at indices.",
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
        description: "Create `array_div(nums: list, divisor: float) -> list`. Return list with each number divided by divisor (rounded 2dp).",
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
        description: "Create `get_simple_grid() -> list`. Return the list `[[2, 5, 8], [3, 7, 4], [1, 6, 9], [4, 2, 0]]`.",
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
        description: "Create `get_grid_item(grid: list, row: int, col: int) -> int`. Return item at row, col.",
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
        description: "Create `update_grid_item(grid: list, row: int, col: int, val: int) -> list`. Update item and return grid.",
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
        description: "Create `get_row(grid: list, row: int) -> list`. Return the row.",
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
        description: "Create `get_sales(data: dict, name: str, region: str) -> int`. Data is `{name: {'N': 1, 'S': 2...}}`. Return val.",
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
        description: "Create `update_sales(data: dict, name: str, region: str, val: int) -> dict`. Update and return data.",
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
        description: "Create `add_person(data: dict, name: str, age: int, shoe: int) -> dict`. Add/Update `data[name] = {'Age': age, 'Shoe': shoe}`.",
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
        description: "Create `get_person_info(data: dict, name: str) -> str`. Return 'Age: [age], Shoe: [shoe]'.",
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
        description: "Create `ask_num() -> int`. Ask user? No, simply return an int. Adapted: `get_num()`. Return 7 (arbitrary). No, 'define a function ask_value that asks user for a number'. We pass input as arg. `ask_num(val: int) -> int`.",
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
        description: "Create `calc(choice: int, a: int, b: int) -> str`. 1: Add, 2: Sub. Return result string e.g. '5 + 2 = 7'.",
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
        description: "Create `manage_names(names: list, choice: int, val: str, idx: int = 0) -> list`. 1: Add val, 2: Change val at idx, 3: Delete val, 4: View (return list).",
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
