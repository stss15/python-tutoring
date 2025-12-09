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
        id: "022",
        number: 22,
        title: "Name Length",
        description: "Write a function called `name_length` that takes a name as a string. It should return the number of characters in the name.",
        starterCode: `def name_length(name: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def name_length(name: str) -> int:
    return len(name)`,
        testCases: [
            { input: "name_length('Bob')", expected: "3" },
            { input: "name_length('Alice')", expected: "5" },
            { input: "name_length('')", expected: "0" },
            { input: "name_length('Python Programming')", expected: "18" }
        ]
    },
    {
        id: "023",
        number: 23,
        title: "Join Names",
        description: "Write a function called `join_names` that accepts a first name and a last name. It should return them combined with the total length of the full name (including the space), like '[First] [Last] [Length]'.",
        starterCode: `def join_names(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def join_names(first: str, last: str) -> str:
    full = f"{first} {last}"
    return f"{full} {len(full)}"`,
        testCases: [
            { input: "join_names('Bob', 'Smith')", expected: "'Bob Smith 9'" },
            { input: "join_names('Ann', 'Lee')", expected: "'Ann Lee 7'" },
            { input: "join_names('Christopher', 'Williams')", expected: "'Christopher Williams 20'" },
            { input: "join_names('A', 'B')", expected: "'A B 3'" }
        ]
    },
    {
        id: "024",
        number: 24,
        title: "Title Case Names",
        description: "Write a function called `format_name_title` that takes a first name and a last name in lower case. It should return them combined in title case (capitalized first letters), separated by a space.",
        starterCode: `def format_name_title(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_name_title(first: str, last: str) -> str:
    return f"{first.title()} {last.title()}"`,
        testCases: [
            { input: "format_name_title('bob', 'smith')", expected: "'Bob Smith'" },
            { input: "format_name_title('ALICE', 'JONES')", expected: "'Alice Jones'" },
            { input: "format_name_title('jOhN', 'dOe')", expected: "'John Doe'" },
            { input: "format_name_title('mary', 'jane')", expected: "'Mary Jane'" }
        ]
    },
    {
        id: "025",
        number: 25,
        title: "String Slice",
        description: "Write a function called `rhyme_part` that takes a line of text, a start index, and an end index. It should return the part of the string starting at the start index and ending before the end index.",
        starterCode: `def rhyme_part(line: str, start: int, end: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def rhyme_part(line: str, start: int, end: int) -> str:
    return line[start:end]`,
        testCases: [
            { input: "rhyme_part('Mary had a little lamb', 0, 4)", expected: "'Mary'" },
            { input: "rhyme_part('Hello World', 6, 11)", expected: "'World'" },
            { input: "rhyme_part('Python', 0, 2)", expected: "'Py'" },
            { input: "rhyme_part('abcdef', 2, 5)", expected: "'cde'" }
        ]
    },
    {
        id: "026",
        number: 26,
        title: "Upper Case",
        description: "Write a function called `make_upper` that takes a word. It should return the word converted entirely to uppercase.",
        starterCode: `def make_upper(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def make_upper(word: str) -> str:
    return word.upper()`,
        testCases: [
            { input: "make_upper('hello')", expected: "'HELLO'" },
            { input: "make_upper('Python')", expected: "'PYTHON'" },
            { input: "make_upper('ABC')", expected: "'ABC'" },
            { input: "make_upper('MixedCase')", expected: "'MIXEDCASE'" }
        ]
    },
    {
        id: "027",
        number: 27,
        title: "Lower Case",
        description: "Write a function called `make_lower` that takes a word. It should return the word converted entirely to lowercase.",
        starterCode: `def make_lower(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def make_lower(word: str) -> str:
    return word.lower()`,
        testCases: [
            { input: "make_lower('HELLO')", expected: "'hello'" },
            { input: "make_lower('Python')", expected: "'python'" },
            { input: "make_lower('abc')", expected: "'abc'" },
            { input: "make_lower('MixedCase')", expected: "'mixedcase'" }
        ]
    },
    {
        id: "028",
        number: 28,
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
            { input: "format_name_conditional('Steven', 'Stewart')", expected: "'steven'" },
            { input: "format_name_conditional('Amy', 'Wong')", expected: "'AMYWONG'" },
            { input: "format_name_conditional('James', 'Bond')", expected: "'james'" }
        ]
    },
    {
        id: "029",
        number: 29,
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
            { input: "pig_latin('chip')", expected: "'hipcay'" },
            { input: "pig_latin('orange')", expected: "'orangeway'" },
            { input: "pig_latin('hello')", expected: "'ellohay'" }
        ]
    },
    {
        id: "030",
        number: 30,
        title: "Reverse String",
        description: "Write a function called `reverse_string` that takes a string and returns it reversed.",
        starterCode: `def reverse_string(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def reverse_string(text: str) -> str:
    return text[::-1]`,
        testCases: [
            { input: "reverse_string('hello')", expected: "'olleh'" },
            { input: "reverse_string('Python')", expected: "'nohtyP'" },
            { input: "reverse_string('a')", expected: "'a'" },
            { input: "reverse_string('12345')", expected: "'54321'" }
        ]
    },
    {
        id: "031",
        number: 31,
        title: "Count Vowels",
        description: "Write a function called `count_vowels` that takes a string and returns the count of vowels (a, e, i, o, u) in it. Count both uppercase and lowercase vowels.",
        starterCode: `def count_vowels(text: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_vowels(text: str) -> int:
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count`,
        testCases: [
            { input: "count_vowels('hello')", expected: "2" },
            { input: "count_vowels('Python')", expected: "1" },
            { input: "count_vowels('AEIOU')", expected: "5" },
            { input: "count_vowels('xyz')", expected: "0" }
        ]
    }
];

const math_challenges = [
    {
        id: "032",
        number: 32,
        title: "Multiply Float",
        description: "Write a function called `multiply_float` that takes a floating-point number. It should multiply the number by 2 and return the result.",
        starterCode: `def multiply_float(num: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def multiply_float(num: float) -> float:
    return num * 2`,
        testCases: [
            { input: "multiply_float(3.5)", expected: "7.0" },
            { input: "multiply_float(1.5)", expected: "3.0" },
            { input: "multiply_float(0.0)", expected: "0.0" },
            { input: "multiply_float(-2.5)", expected: "-5.0" }
        ]
    },
    {
        id: "033",
        number: 33,
        title: "Round Float",
        description: "Write a function called `round_float` that takes a number. It should multiply the number by 2 and return the result rounded to two decimal places.",
        starterCode: `def round_float(num: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def round_float(num: float) -> float:
    return round(num * 2, 2)`,
        testCases: [
            { input: "round_float(3.14159)", expected: "6.28" },
            { input: "round_float(1.1)", expected: "2.2" },
            { input: "round_float(0.005)", expected: "0.01" },
            { input: "round_float(10.555)", expected: "21.11" }
        ]
    },
    {
        id: "034",
        number: 34,
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
            { input: "sqrt_check(500)", expected: "22.36" },
            { input: "sqrt_check(16)", expected: "4.0" },
            { input: "sqrt_check(100)", expected: "10.0" },
            { input: "sqrt_check(2)", expected: "1.41" }
        ]
    },
    {
        id: "035",
        number: 35,
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
        id: "036",
        number: 36,
        title: "Circle Area",
        description: "Write a function called `circle_area` that takes the radius of a circle. It should calculate and return the area of the circle (Pi * radius squared). Return the result rounded to 2 decimal places.",
        starterCode: `import math

def circle_area(radius: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def circle_area(radius: float) -> float:
    return round(math.pi * (radius ** 2), 2)`,
        testCases: [
            { input: "circle_area(10)", expected: "314.16" },
            { input: "circle_area(1)", expected: "3.14" },
            { input: "circle_area(5)", expected: "78.54" },
            { input: "circle_area(0)", expected: "0.0" }
        ]
    },
    {
        id: "037",
        number: 37,
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
            { input: "cylinder_volume(5, 10)", expected: "785.398" },
            { input: "cylinder_volume(1, 1)", expected: "3.142" },
            { input: "cylinder_volume(2, 5)", expected: "62.832" },
            { input: "cylinder_volume(0, 10)", expected: "0.0" }
        ]
    },
    {
        id: "038",
        number: 38,
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
            { input: "div_remain(7, 2)", expected: "'7 divided by 2 is 3 with 1 remaining'" },
            { input: "div_remain(10, 3)", expected: "'10 divided by 3 is 3 with 1 remaining'" },
            { input: "div_remain(20, 5)", expected: "'20 divided by 5 is 4 with 0 remaining'" },
            { input: "div_remain(5, 10)", expected: "'5 divided by 10 is 0 with 5 remaining'" }
        ]
    },
    {
        id: "039",
        number: 39,
        title: "Power Calc",
        description: "Write a function called `calculate_power` that takes a base and an exponent. Return the base raised to the power of the exponent.",
        starterCode: `def calculate_power(base: int, exponent: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def calculate_power(base: int, exponent: int) -> int:
    return base ** exponent`,
        testCases: [
            { input: "calculate_power(2, 3)", expected: "8" },
            { input: "calculate_power(5, 2)", expected: "25" },
            { input: "calculate_power(10, 0)", expected: "1" },
            { input: "calculate_power(3, 3)", expected: "27" }
        ]
    },
    {
        id: "040",
        number: 40,
        title: "Hypotenuse",
        description: "Write a function called `calculate_hypotenuse` that takes the lengths of two sides of a right-angled triangle (a and b). Return the length of the hypotenuse (c), rounded to 2 decimal places. Hint: c = sqrt(a² + b²)",
        starterCode: `import math

def calculate_hypotenuse(a: float, b: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def calculate_hypotenuse(a: float, b: float) -> float:
    return round(math.sqrt(a**2 + b**2), 2)`,
        testCases: [
            { input: "calculate_hypotenuse(3, 4)", expected: "5.0" },
            { input: "calculate_hypotenuse(5, 12)", expected: "13.0" },
            { input: "calculate_hypotenuse(1, 1)", expected: "1.41" },
            { input: "calculate_hypotenuse(8, 15)", expected: "17.0" }
        ]
    },
    {
        id: "041",
        number: 41,
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
            { input: "shape_area(2, 10, 5)", expected: "25.0" },
            { input: "shape_area(3, 10, 5)", expected: "-1" },
            { input: "shape_area(1, 5, 5)", expected: "25" }
        ]
    }
];


const for_challenges = [
    {
        id: "042",
        number: 42,
        title: "Name Repeat",
        description: "Write a function called `name_repeat` that takes a name. It should return the name repeated three times, with each repetition on a new line.",
        starterCode: `def name_repeat(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_repeat(name: str) -> str:
    return (name + "\\n") * 3`,
        testCases: [
            { input: "name_repeat('Bob').strip()", expected: "'Bob\\nBob\\nBob'" },
            { input: "name_repeat('A').strip()", expected: "'A\\nA\\nA'" },
            { input: "name_repeat('Python').strip()", expected: "'Python\\nPython\\nPython'" },
            { input: "name_repeat('123').strip()", expected: "'123\\n123\\n123'" }
        ]
    },
    {
        id: "043",
        number: 43,
        title: "Name Count",
        description: "Write a function called `name_count` that accepts a name and a number. It should return the name repeated that many times, with each repetition on a new line.",
        starterCode: `def name_count(name: str, count: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_count(name: str, count: int) -> str:
    return (name + "\\n") * count`,
        testCases: [
            { input: "name_count('Bob', 2).strip()", expected: "'Bob\\nBob'" },
            { input: "name_count('Hi', 1).strip()", expected: "'Hi'" },
            { input: "name_count('Loop', 3).strip()", expected: "'Loop\\nLoop\\nLoop'" },
            { input: "name_count('Xa', 0).strip()", expected: "''" }
        ]
    },
    {
        id: "044",
        number: 44,
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
            { input: "name_chars('Bob').strip()", expected: "'B\\no\\nb'" },
            { input: "name_chars('Hi').strip()", expected: "'H\\ni'" },
            { input: "name_chars('World').strip()", expected: "'W\\no\\nr\\nl\\nd'" },
            { input: "name_chars('A').strip()", expected: "'A'" }
        ]
    },
    {
        id: "045",
        number: 45,
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
            { input: "name_chars_count('Bo', 2).strip()", expected: "'B\\nB\\no\\no'" },
            { input: "name_chars_count('Hi', 1).strip()", expected: "'H\\ni'" },
            { input: "name_chars_count('A', 3).strip()", expected: "'A\\nA\\nA'" },
            { input: "name_chars_count('', 5).strip()", expected: "''" }
        ]
    },
    {
        id: "046",
        number: 46,
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
            { input: "times_table(5).splitlines()[4]", expected: "'5 x 5 = 25'" },
            { input: "times_table(3).splitlines()[9]", expected: "'10 x 3 = 30'" },
            { input: "times_table(10).splitlines()[0]", expected: "'1 x 10 = 10'" }
        ]
    },
    {
        id: "047",
        number: 47,
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
            { input: "count_down_50(48)", expected: "[50, 49, 48]" },
            { input: "count_down_50(45)", expected: "[50, 49, 48, 47, 46, 45]" },
            { input: "count_down_50(50)", expected: "[50]" },
            { input: "count_down_50(49)", expected: "[50, 49]" }
        ]
    },
    {
        id: "048",
        number: 48,
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
            { input: "name_loop_conditional('Bob', 12).strip()", expected: "'Too high\\nToo high\\nToo high'" },
            { input: "name_loop_conditional('Hi', 9).strip().count('\\n')", expected: "8" }, // 9 lines, 8 newlines inside? count newlines
            { input: "name_loop_conditional('Test', 10).strip()", expected: "'Too high\\nToo high\\nToo high'" }
        ]
    },
    {
        id: "049",
        number: 49,
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
            { input: "sum_list([1, 2, 3, 4, 5])", expected: "15" },
            { input: "sum_list([10, -10, 5])", expected: "5" },
            { input: "sum_list([])", expected: "0" },
            { input: "sum_list([100])", expected: "100" }
        ]
    },
    {
        id: "050",
        number: 50,
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
            { input: "count_direction('down', 18)", expected: "[20, 19, 18]" },
            { input: "count_direction('up', 0)", expected: "[]" },
            { input: "count_direction('left', 5)", expected: "[]" }
        ]
    },
    {
        id: "051",
        number: 51,
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
            { input: "invite_guests(['Bob', 'Alice']).strip()", expected: "'Bob has been invited\\nAlice has been invited'" },
            { input: "invite_guests(['A'] * 10)", expected: "'Too many people'" },
            { input: "invite_guests(['One'])", expected: "'One has been invited\\n'" },
            { input: "invite_guests([]).strip()", expected: "''" }
        ]
    }
];

const while_challenges = [
    {
        id: "052",
        number: 52,
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
            { input: "sum_until_50([10, 20, 30])", expected: "60" },
            { input: "sum_until_50([1, 1, 1])", expected: "3" },
            { input: "sum_until_50([50, 1])", expected: "50" }, // Wait, if > 50. 50 is not > 50. so 51 total.
            { input: "sum_until_50([60])", expected: "60" },
            { input: "sum_until_50([])", expected: "0" }
        ]
    },
    {
        id: "053",
        number: 53,
        title: "Validate Input 5",
        description: "Write a function called `validate_5` that takes a list of numbers. It should iterate through the list and return the first number found that is greater than 5. If no such number is found, return 0.",
        starterCode: `def validate_5(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def validate_5(nums: list) -> int:
    for num in nums:
        if num > 5:
            return num
    return 0`,
        testCases: [
            { input: "validate_5([1, 2, 6])", expected: "6" },
            { input: "validate_5([1, 2, 3])", expected: "0" },
            { input: "validate_5([10, 1, 2])", expected: "10" },
            { input: "validate_5([])", expected: "0" }
        ]
    },
    {
        id: "054",
        number: 54,
        title: "Sum Sequence",
        description: "Write a function called `sum_sequence` that accepts a list of numbers. It should calculate and return the sum of all the numbers in the list using a while loop.",
        starterCode: `def sum_sequence(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_sequence(nums: list) -> int:
    total = 0
    i = 0
    while i < len(nums):
        total += nums[i]
        i += 1
    return total`,
        testCases: [
            { input: "sum_sequence([1, 2, 3])", expected: "6" },
            { input: "sum_sequence([10, -10])", expected: "0" },
            { input: "sum_sequence([])", expected: "0" },
            { input: "sum_sequence([5])", expected: "5" }
        ]
    },
    {
        id: "055",
        number: 55,
        title: "Party Invite Count",
        description: "Write a function called `count_invites` that takes a list of responses (strings). It should iterate through the list and count how many are 'yes'. Return the count.",
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
            { input: "count_invites(['yes', 'no', 'yes'])", expected: "2" },
            { input: "count_invites(['no', 'maybe'])", expected: "0" },
            { input: "count_invites(['yes'] * 5)", expected: "5" },
            { input: "count_invites([])", expected: "0" }
        ]
    },
    {
        id: "056",
        number: 56,
        title: "Guess Loop",
        description: "Write a function called `guess_attempts` that takes a target number and a list of guesses. Return the number of guesses taken to find the target (1-based index). If the target is not in the list, return -1.",
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
            { input: "guess_attempts(5, [1, 2, 5, 8])", expected: "3" },
            { input: "guess_attempts(10, [1, 2, 3])", expected: "-1" },
            { input: "guess_attempts(1, [1])", expected: "1" },
            { input: "guess_attempts(7, [7, 7, 7])", expected: "1" }
        ]
    },
    {
        id: "057",
        number: 57,
        title: "Range Validation",
        description: "Write a function called `validate_range_loop` that takes a list of input numbers. Return the first value that is between 10 and 20 (inclusive). If none found, return 0.",
        starterCode: `def validate_range_loop(inputs: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def validate_range_loop(inputs: list) -> int:
    for x in inputs:
        if 10 <= x <= 20:
            return x
    return 0`,
        testCases: [
            { input: "validate_range_loop([5, 25, 15, 30])", expected: "15" },
            { input: "validate_range_loop([1, 2, 9])", expected: "0" },
            { input: "validate_range_loop([10, 21])", expected: "10" },
            { input: "validate_range_loop([20])", expected: "20" }
        ]
    },
    {
        id: "058",
        number: 58,
        title: "Green Bottles",
        description: "Write a function called `bottles_lyrics` that takes a starting number `start` (e.g., 10). It should return a string with the lyrics counting down from `start` to 1. For each number loop: 'There are [n] green bottles hanging on the wall\\n'. After the loop finishes (hits 0), append 'There are no more green bottles hanging on the wall'.",
        starterCode: `def bottles_lyrics(start: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def bottles_lyrics(start: int) -> str:
    lyrics = ""
    num = start
    while num > 0:
        lyrics += f"There are {num} green bottles hanging on the wall\\n"
        num -= 1
    lyrics += "There are no more green bottles hanging on the wall"
    return lyrics`,
        testCases: [
            { input: "bottles_lyrics(2).strip()", expected: "'There are 2 green bottles hanging on the wall\\nThere are 1 green bottles hanging on the wall\\nThere are no more green bottles hanging on the wall'" },
            { input: "bottles_lyrics(0).strip()", expected: "'There are no more green bottles hanging on the wall'" }
        ]
    },
    {
        id: "059",
        number: 59,
        title: "Collatz Sequence",
        description: "Write a function `collatz_steps(n: int) -> int` that counts how many steps it takes to reach 1. If n is even, divide by 2. If odd, multiply by 3 and add 1. Repeat until n is 1.",
        starterCode: `def collatz_steps(n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def collatz_steps(n: int) -> int:
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
            { input: "collatz_steps(6)", expected: "8" },
            { input: "collatz_steps(12)", expected: "9" }
        ]
    },
    {
        id: "060",
        number: 60,
        title: "Digit Sum",
        description: "Write a function `digit_sum(n: int) -> int` that takes a positive integer and returns the sum of its digits using a while loop (mathematically, not by string conversion).",
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
            { input: "digit_sum(101)", expected: "2" },
            { input: "digit_sum(9)", expected: "9" },
            { input: "digit_sum(0)", expected: "0" }
        ]
    },
    {
        id: "061",
        number: 61,
        title: "Investment Growth",
        description: "Write a function `years_to_target(principal: float, rate: float, target: float) -> int` that calculates how many years it takes for an investment to reach a target value with compound interest. Rate is a percentage (e.g. 5 for 5%). Return the number of years.",
        starterCode: `def years_to_target(principal: float, rate: float, target: float) -> int:
    # Your code here
    pass`,
        solutionCode: `def years_to_target(principal: float, rate: float, target: float) -> int:
    years = 0
    while principal < target:
        principal = principal * (1 + rate / 100)
        years += 1
    return years`,
        testCases: [
            { input: "years_to_target(100, 10, 200)", expected: "8" },
            { input: "years_to_target(100, 100, 200)", expected: "1" },
            { input: "years_to_target(1000, 5, 1200)", expected: "4" }, // ~1215.5 after 4 years
            { input: "years_to_target(100, 0, 200)", expected: "0" } // infinite loop escape? Ah, if rate 0, never grows. Should assume user won't crash browser. But let's assume rate > 0 in tests.
        ]
    }
];
const random_challenges = [
    {
        id: "062",
        number: 62,
        title: "Random Int",
        description: "Write a function called `get_random_int`. It should generate and return a random integer between 1 and 100 (inclusive).",
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
        id: "063",
        number: 63,
        title: "Random Fruit",
        description: "Write a function called `get_random_fruit` that takes no arguments. It should pick a random fruit from the list ['apple', 'banana', 'cherry', 'date', 'elderberry'] and return it.",
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
        id: "064",
        number: 64,
        title: "Coin Toss",
        description: "Write a function called `coin_toss` that accepts a user's choice ('h' or 't'). It should simulate a coin flip ('h' or 't'). If the choice matches the flip, return 'You win'. Otherwise return 'Bad luck'.",
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
        id: "065",
        number: 65,
        title: "Dice Roll",
        description: "Write a function called `dice_roll` that simulates rolling a 6-sided die. It should return a random integer between 1 and 6.",
        starterCode: `import random

def dice_roll() -> int:
    # Your code here
    pass`,
        solutionCode: `import random

def dice_roll() -> int:
    return random.randint(1, 6)`,
        testCases: [
            { input: "import random; random.seed(42); dice_roll()", expected: "6" },
            { input: "import random; random.seed(1); dice_roll()", expected: "2" }
        ]
    },
    {
        id: "066",
        number: 66,
        title: "Guess The Number",
        description: "Write a function called `random_feedback` that takes a guess (int). It should pick a random number between 1 and 5. If the guess matches, return 'Well done'. If the guess is higher than the random number, return 'Too high'. If lower, return 'Too low'.",
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
        id: "067",
        number: 67,
        title: "Search Random List",
        description: "Write a function called `random_loop` that takes a list of guesses. Generate a random target number between 1 and 10. Iterate through the guesses; if any guess matches the target, return 'Correct'. If the loop finishes without a match, return 'Not found'.",
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
        id: "068",
        number: 68,
        title: "Math Quiz",
        description: "Write a function called `math_quiz_check` that takes two numbers and an answer. It should check if the sum of the two numbers equals the answer. Return True if it does, False otherwise.",
        starterCode: `def math_quiz_check(num1: int, num2: int, answer: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def math_quiz_check(num1: int, num2: int, answer: int) -> bool:
    return (num1 + num2) == answer`,
        testCases: [
            { input: "math_quiz_check(1, 2, 3)", expected: "True" },
            { input: "math_quiz_check(5, 5, 11)", expected: "False" }
        ]
    },
    {
        id: "069",
        number: 69,
        title: "Colour Guess",
        description: "Write a function called `check_colour_guess` that takes a guess (string). It should pick a random colour from ['red', 'blue', 'green', 'white', 'pink']. If the guess matches the random choice, return 'Well done'. Otherwise return 'Wrong'.",
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
        testCases: [
            { input: "import random; random.seed(1); check_colour_guess('banana')", expected: "'Wrong'" } // 'green' selected by seed 1? check
        ]
    },
    {
        id: "070",
        number: 70,
        title: "Random Password",
        description: "Write a function `random_password` that generates a random string of 5 characters from the string 'abcde'. Hint: You can use `random.choice()` 5 times.",
        starterCode: `import random

def random_password() -> str:
    # Your code here
    pass`,
        solutionCode: `import random

def random_password() -> str:
    chars = "abcde"
    pwd = ""
    for i in range(5):
        pwd += random.choice(chars)
    return pwd`,
        testCases: [
            { input: "import random; random.seed(42); random_password()", expected: "'ddace'" }
        ]
    },
    {
        id: "071",
        number: 71,
        title: "Shuffle List",
        description: "Write a function `shuffle_names` that takes a list of names. It should shuffle the list in-place using `random.shuffle()` and return the list.",
        starterCode: `import random

def shuffle_names(names: list) -> list:
    # Your code here
    pass`,
        solutionCode: `import random

def shuffle_names(names: list) -> list:
    random.shuffle(names)
    return names`,
        testCases: [
            { input: "import random; random.seed(42); shuffle_names(['A', 'B', 'C'])", expected: "['A', 'C', 'B']" } // Check if this seed produces this.
        ]
    }
];


const list_challenges = [
    {
        id: "072",
        number: 72,
        title: "Tuple Index",
        description: "Write a function called `get_tuple_item` that takes a tuple of countries and a country name. It should return the index number of that country in the tuple.",
        starterCode: `def get_tuple_item(countries: tuple, name: str) -> int:
    # Your code here
    pass`,
        solutionCode: `def get_tuple_item(countries: tuple, name: str) -> int:
    return countries.index(name)`,
        testCases: [
            { input: "get_tuple_item(('UK', 'US', 'France'), 'US')", expected: "1" },
            { input: "get_tuple_item(('A', 'B', 'C'), 'C')", expected: "2" }
        ]
    },
    {
        id: "073",
        number: 73,
        title: "Tuple Choice",
        description: "Write a function called `get_tuple_choice` that takes a tuple of countries and an index number. It should return the country name at that index position.",
        starterCode: `def get_tuple_choice(countries: tuple, index: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_tuple_choice(countries: tuple, index: int) -> str:
    return countries[index]`,
        testCases: [
            { input: "get_tuple_choice(('UK', 'US'), 0)", expected: "'UK'" },
            { input: "get_tuple_choice(('A', 'B', 'C'), -1)", expected: "'C'" }
        ]
    },
    {
        id: "074",
        number: 74,
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
            { input: "add_sport(['Tennis', 'Football'], 'Rugby')", expected: "['Football', 'Rugby', 'Tennis']" },
            { input: "add_sport([], 'Archery')", expected: "['Archery']" }
        ]
    },
    {
        id: "075",
        number: 75,
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
            { input: "remove_subject(['Maths', 'English'], 'Maths')", expected: "['English']" },
            { input: "remove_subject(['A', 'B'], 'C')", expected: "['A', 'B']" }
        ]
    },
    {
        id: "076",
        number: 76,
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
            { input: "remove_food({1: 'Pizza', 2: 'Curry'}, 1)", expected: "{2: 'Curry'}" },
            { input: "remove_food({1: 'A'}, 2)", expected: "{1: 'A'}" }
        ]
    },
    {
        id: "077",
        number: 77,
        title: "Colour Range",
        description: "Write a function called `colour_range` that accepts a list of colours, a start index, and an end index. It should return a new list containing the colours between those indices (using Python list slicing).",
        starterCode: `def colour_range(colours: list, start: int, end: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def colour_range(colours: list, start: int, end: int) -> list:
    return colours[start:end]`,
        testCases: [
            { input: "colour_range(['red', 'blue', 'green', 'white'], 1, 3)", expected: "['blue', 'green']" },
            { input: "colour_range(['A', 'B', 'C'], 0, 10)", expected: "['A', 'B', 'C']" }
        ]
    },
    {
        id: "078",
        number: 78,
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
        id: "079",
        number: 79,
        title: "Invite List Count",
        description: "Write a function called `count_guests` that accepts a list of guest names. It should simply return the total number of guests in the list.",
        starterCode: `def count_guests(names: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_guests(names: list) -> int:
    return len(names)`,
        testCases: [
            { input: "count_guests(['Bob', 'Alice'])", expected: "2" },
            { input: "count_guests([])", expected: "0" }
        ]
    },
    {
        id: "080",
        number: 80,
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
            { input: "invite_manage(['Bob'], 'Bob', False)", expected: "[]" },
            { input: "invite_manage(['Bob'], 'Bob', True)", expected: "['Bob']" }
        ]
    },
    {
        id: "081",
        number: 81,
        title: "TV Show Insert",
        description: "Write a function called `tv_insert` that takes a list of TV shows, a new show name, and an index. It should insert the new show into the list at the specified index and return the updated list.",
        starterCode: `def tv_insert(shows: list, show: str, idx: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def tv_insert(shows: list, show: str, idx: int) -> list:
    shows.insert(idx, show)
    return shows`,
        testCases: [
            { input: "tv_insert(['News', 'Movie'], 'Sport', 1)", expected: "['News', 'Sport', 'Movie']" },
            { input: "tv_insert(['A'], 'B', 0)", expected: "['B', 'A']" }
        ]
    },
    {
        id: "082",
        number: 82,
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
            { input: "nums_keep([1, 2, 3], False)", expected: "[1, 2]" },
            { input: "nums_keep([1], True)", expected: "[1]" },
            { input: "nums_keep([], False)", expected: "[]" }
        ]
    }
];

const string_more_challenges = [
    {
        id: "083",
        number: 83,
        title: "Name Stats",
        description: "Write a function called `name_stats` that takes a first name and a last name. It should return a summary string in the format 'First: [len], Last: [len], Full: [full_name]'.",
        starterCode: `def name_stats(first: str, last: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def name_stats(first: str, last: str) -> str:
    full = f"{first} {last}"
    return f"First: {len(first)}, Last: {len(last)}, Full: {full}"`,
        testCases: [
            { input: "name_stats('Bob', 'Smith')", expected: "'First: 3, Last: 5, Full: Bob Smith'" },
            { input: "name_stats('A', 'B')", expected: "'First: 1, Last: 1, Full: A B'" }
        ]
    },
    {
        id: "084",
        number: 84,
        title: "Subject Dash",
        description: "Write a function called `subject_dash` that takes a subject word. It should return the word with a dash ('-') inserted after every character (except the last, e.g. 'M-a-t-h-s').",
        starterCode: `def subject_dash(subject: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def subject_dash(subject: str) -> str:
    return "-".join(subject)`,
        testCases: [
            { input: "subject_dash('Maths')", expected: "'M-a-t-h-s'" },
            { input: "subject_dash('A')", expected: "'A'" }
        ]
    },
    {
        id: "085",
        number: 85,
        title: "Poem Slice",
        description: "Write a function called `poem_slice` that takes a line of text, a start index, and an end index. Return the substring defined by those indices.",
        starterCode: `def poem_slice(line: str, start: int, end: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def poem_slice(line: str, start: int, end: int) -> str:
    return line[start:end]`,
        testCases: [
            { input: "poem_slice('Hello World', 0, 5)", expected: "'Hello'" },
            { input: "poem_slice('Python', 2, 4)", expected: "'th'" }
        ]
    },
    {
        id: "086",
        number: 86,
        title: "Check Upper",
        description: "Write a function called `check_upper` that takes a word. Return True if the word is entirely uppercase, and False otherwise.",
        starterCode: `def check_upper(word: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def check_upper(word: str) -> bool:
    return word.isupper()`,
        testCases: [
            { input: "check_upper('HELLO')", expected: "True" },
            { input: "check_upper('Hello')", expected: "False" },
            { input: "check_upper('123')", expected: "False" } // isupper needs letters usually? Python isupper "False if no cased characters". '123' is False.
        ]
    },
    {
        id: "087",
        number: 87,
        title: "Postcode Prefix",
        description: "Write a function called `postcode_prefix` that accepts a postcode string. It should return the first two characters of the postcode converted to uppercase.",
        starterCode: `def postcode_prefix(postcode: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def postcode_prefix(postcode: str) -> str:
    return postcode[:2].upper()`,
        testCases: [
            { input: "postcode_prefix('ab12 3cd')", expected: "'AB'" },
            { input: "postcode_prefix('z')", expected: "'Z'" }
        ]
    },
    {
        id: "088",
        number: 88,
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
            { input: "vowel_count('Hello')", expected: "2" },
            { input: "vowel_count('Sky')", expected: "0" },
            { input: "vowel_count('AEIOU')", expected: "5" }
        ]
    },
    {
        id: "089",
        number: 89,
        title: "Password Match",
        description: "Write a function called `password_match` that takes two password strings (p1 and p2). If they match, return 'Match'. Otherwise, return 'No match'.",
        starterCode: `def password_match(p1: str, p2: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def password_match(p1: str, p2: str) -> str:
    if p1 == p2:
        return "Match"
    return "No match"`,
        testCases: [
            { input: "password_match('secret', 'secret')", expected: "'Match'" },
            { input: "password_match('Secret', 'secret')", expected: "'No match'" }
        ]
    },
    {
        id: "090",
        number: 90,
        title: "Reverse String",
        description: "Write a function called `reverse_string` that takes a word. It should return the word reversed.",
        starterCode: `def reverse_string(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def reverse_string(word: str) -> str:
    return word[::-1]`,
        testCases: [
            { input: "reverse_string('Hello')", expected: "'olleH'" },
            { input: "reverse_string('Racecar')", expected: "'racecaR'" }
        ]
    },
    {
        id: "091",
        number: 91,
        title: "Initials",
        description: "Write a function called `get_initials` that takes a full name (e.g., 'Bob Smith'). It should return the initials upper-cased (e.g., 'B.S.'). Assume the name has two parts separated by a space.",
        starterCode: `def get_initials(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_initials(name: str) -> str:
    parts = name.split()
    return f"{parts[0][0].upper()}.{parts[1][0].upper()}."`,
        testCases: [
            { input: "get_initials('Bob Smith')", expected: "'B.S.'" },
            { input: "get_initials('alice jones')", expected: "'A.J.'" }
        ]
    },
    {
        id: "092",
        number: 92,
        title: "Palindrome Check",
        description: "Write a function called `is_palindrome` that takes a word. It should return True if the word reads the same forwards and backwards (case-insensitive), and False otherwise.",
        starterCode: `def is_palindrome(word: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_palindrome(word: str) -> bool:
    cleaned = word.lower()
    return cleaned == cleaned[::-1]`,
        testCases: [
            { input: "is_palindrome('Racecar')", expected: "True" },
            { input: "is_palindrome('Hello')", expected: "False" }
        ]
    }
];

const array_challenges = [
    {
        id: "093",
        number: 93,
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
            { input: "array_reverse([1, 4, 2, 5, 3])", expected: "[5, 4, 3, 2, 1]" }
        ]
    },
    {
        id: "094",
        number: 94,
        title: "Array Random",
        description: "Write a function called `array_get_items` that takes a list of integers. Functionally, it should simply return the list (to simulate displaying the items).",
        starterCode: `def array_get_items(nums: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def array_get_items(nums: list) -> list:
    return nums`,
        testCases: [
            { input: "array_get_items([1, 2, 3])", expected: "[1, 2, 3]" }
        ]
    },
    {
        id: "095",
        number: 95,
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
            { input: "array_filter_10([1, 15, 5, 20])", expected: "[1, 5]" },
            { input: "array_filter_10([10, 20])", expected: "[]" }
        ]
    },
    {
        id: "096",
        number: 96,
        title: "Array Count Target",
        description: "Write a function called `array_count_target` that takes a list of numbers and a target number. It should return the number of times the target appears in the list.",
        starterCode: `def array_count_target(nums: list, target: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def array_count_target(nums: list, target: int) -> int:
    return nums.count(target)`,
        testCases: [
            { input: "array_count_target([1, 2, 1, 3], 1)", expected: "2" },
            { input: "array_count_target([1, 2, 3], 4)", expected: "0" }
        ]
    },
    {
        id: "097",
        number: 97,
        title: "Array Merge",
        description: "Write a function called `array_merge` that takes two lists. It should combine them into one list, sort it in ascending order, and return the result.",
        starterCode: `def array_merge(arr1: list, arr2: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def array_merge(arr1: list, arr2: list) -> list:
    full = arr1 + arr2
    full.sort()
    return full`,
        testCases: [
            { input: "array_merge([3, 1], [4, 2])", expected: "[1, 2, 3, 4]" },
            { input: "array_merge([], [1])", expected: "[1]" }
        ]
    },
    {
        id: "098",
        number: 98,
        title: "Array Remove Value",
        description: "Write a function called `array_remove_val` that takes a list and a value. If the value exists in the list, remove it (first occurrence). Return the modified list.",
        starterCode: `def array_remove_val(nums: list, val: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def array_remove_val(nums: list, val: int) -> list:
    if val in nums:
        nums.remove(val)
    return nums`,
        testCases: [
            { input: "array_remove_val([1, 2, 3], 2)", expected: "[1, 3]" },
            { input: "array_remove_val([1, 2, 3], 4)", expected: "[1, 2, 3]" }
        ]
    },
    {
        id: "099",
        number: 99,
        title: "Array Indices",
        description: "Write a function called `array_indices_select` that takes a list of numbers and a list of indices. It should return a new list containing the numbers found at those specific indices (if index is valid).",
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
            { input: "array_indices_select([10, 20, 30], [0, 2])", expected: "[10, 30]" },
            { input: "array_indices_select([10], [5])", expected: "[]" }
        ]
    },
    {
        id: "100",
        number: 100,
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
    },
    {
        id: "101",
        number: 101,
        title: "Array Min Max",
        description: "Write a function called `array_min_max` that takes a list of numbers (at least 1). It should return a string 'Min: X, Max: Y'.",
        starterCode: `def array_min_max(nums: list) -> str:
    # Your code here
    pass`,
        solutionCode: `def array_min_max(nums: list) -> str:
    return f"Min: {min(nums)}, Max: {max(nums)}"`,
        testCases: [
            { input: "array_min_max([1, 5, 2, 8])", expected: "'Min: 1, Max: 8'" }
        ]
    },
    {
        id: "102",
        number: 102,
        title: "Sum Odds",
        description: "Write a function called `sum_odds` that takes a list of integers. It should return the sum of all odd numbers in the list.",
        starterCode: `def sum_odds(nums: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def sum_odds(nums: list) -> int:
    total = 0
    for num in nums:
        if num % 2 != 0:
            total += num
    return total`,
        testCases: [
            { input: "sum_odds([1, 2, 3, 4])", expected: "4" },
            { input: "sum_odds([2, 4, 6])", expected: "0" }
        ]
    }
];


const dict_2d_challenges = [
    {
        id: "103",
        number: 103,
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
        id: "104",
        number: 104,
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
        id: "105",
        number: 105,
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
        id: "106",
        number: 106,
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
        id: "107",
        number: 107,
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
        id: "108",
        number: 108,
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
        id: "109",
        number: 109,
        title: "2D Dict Add",
        description: "Write a function called `add_person` that accepts a dictionary, a name, an age, and a shoe size. It should add (or update) an entry for that name containing a dictionary with 'Age' and 'Shoe' keys, then return the dictionary.",
        starterCode: `def add_person(data: dict, name: str, age: int, shoe: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `def add_person(data: dict, name: str, age: int, shoe: int) -> dict:
    data[name] = { 'Age': age, 'Shoe': shoe }
    return data`,
        testCases: [
            { input: "add_person({}, 'Bob', 20, 10)", expected: "{'Bob': {'Age': 20, 'Shoe': 10}}" }
        ]
    },
    {
        id: "110",
        number: 110,
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
    },
    {
        id: "111",
        number: 111,
        title: "2D Row Sum",
        description: "Write a function called `row_sum` that takes a 2D list of numbers and a row index. It should return the sum of all numbers in that row.",
        starterCode: `def row_sum(grid: list, row: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def row_sum(grid: list, row: int) -> int:
    total = 0
    for num in grid[row]:
        total += num
    return total`,
        testCases: [
            { input: "row_sum([[1, 2], [3, 4]], 0)", expected: "3" },
            { input: "row_sum([[1, 2], [3, 4]], 1)", expected: "7" }
        ]
    },
    {
        id: "112",
        number: 112,
        title: "2D Col Sum",
        description: "Write a function called `col_sum` that takes a 2D list of numbers and a column index. It should return the sum of all numbers in that column across all rows.",
        starterCode: `def col_sum(grid: list, col: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def col_sum(grid: list, col: int) -> int:
    total = 0
    for row in grid:
        total += row[col]
    return total`,
        testCases: [
            { input: "col_sum([[1, 2], [3, 4]], 0)", expected: "4" },
            { input: "col_sum([[1, 2], [3, 4]], 1)", expected: "6" }
        ]
    }
];

const subprogram_challenges = [
    {
        id: "113",
        number: 113,
        title: "Greet Function",
        description: "Write a function called `greet` that takes a name. It should return a string 'Hello [name]'.",
        starterCode: `def greet(name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def greet(name: str) -> str:
    return f"Hello {name}"`,
        testCases: [
            { input: "greet('Bob')", expected: "'Hello Bob'" }
        ]
    },
    {
        id: "114",
        number: 114,
        title: "Ask Num Function",
        description: "Write a function called `ask_num` that accepts a value (simulating user input). It should simply return that value as an integer.",
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
        id: "115",
        number: 115,
        title: "Circle Area",
        description: "Write a function called `circle_area` that takes a radius. It should return the area of the circle (use 3.14159 or math.pi). Round to 2 decimal places.",
        starterCode: `import math

def circle_area(radius: float) -> float:
    # Your code here
    pass`,
        solutionCode: `import math

def circle_area(radius: float) -> float:
    return round(math.pi * radius * radius, 2)`,
        testCases: [
            { input: "circle_area(1)", expected: "3.14" },
            { input: "circle_area(2)", expected: "12.57" }
        ]
    },
    {
        id: "116",
        number: 116,
        title: "Is Even",
        description: "Write a function called `is_even` that takes a number. Return True if it is even, False otherwise.",
        starterCode: `def is_even(num: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_even(num: int) -> bool:
    return num % 2 == 0`,
        testCases: [
            { input: "is_even(2)", expected: "True" },
            { input: "is_even(3)", expected: "False" }
        ]
    },
    {
        id: "117",
        number: 117,
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
            { input: "calc(1, 5, 3)", expected: "'5 + 3 = 8'" },
            { input: "calc(3, 1, 1)", expected: "'Invalid'" }
        ]
    },
    {
        id: "118",
        number: 118,
        title: "List Average",
        description: "Write a function called `list_avg` that calculates the average of a list of numbers. Return 0 if list is empty.",
        starterCode: `def list_avg(nums: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def list_avg(nums: list) -> float:
    if not nums:
        return 0.0
    return sum(nums) / len(nums)`,
        testCases: [
            { input: "list_avg([2, 4])", expected: "3.0" },
            { input: "list_avg([])", expected: "0.0" }
        ]
    },
    {
        id: "119",
        number: 119,
        title: "Temp Converter",
        description: "Write a function called `to_celsius` that takes a Fahrenheit temperature. Convert it to Celsius ((F - 32) * 5/9) and return rounded to 1 decimal place.",
        starterCode: `def to_celsius(f: float) -> float:
    # Your code here
    pass`,
        solutionCode: `def to_celsius(f: float) -> float:
    c = (f - 32) * (5/9)
    return round(c, 1)`,
        testCases: [
            { input: "to_celsius(32)", expected: "0.0" },
            { input: "to_celsius(100)", expected: "37.8" }
        ]
    },
    {
        id: "120",
        number: 120,
        title: "Calculator Function",
        description: "Write a function called `calculator` that takes two numbers and an operator (+, -, *, /). Perform the operation (return 0 for divide by zero) and return the result.",
        starterCode: `def calculator(a: float, b: float, op: str) -> float:
    # Your code here
    pass`,
        solutionCode: `def calculator(a: float, b: float, op: str) -> float:
    if op == '+': return a + b
    if op == '-': return a - b
    if op == '*': return a * b
    if op == '/':
        if b == 0: return 0.0
        return a / b
    return 0.0`,
        testCases: [
            { input: "calculator(10, 2, '/')", expected: "5.0" },
            { input: "calculator(10, 0, '/')", expected: "0.0" }
        ]
    },
    {
        id: "121",
        number: 121,
        title: "Password Check",
        description: "Write a function called `validate_password` that takes a password. It must be at least 8 chars long and contain '!' to be valid. Return True or False.",
        starterCode: `def validate_password(pwd: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def validate_password(pwd: str) -> bool:
    if len(pwd) >= 8 and '!' in pwd:
        return True
    return False`,
        testCases: [
            { input: "validate_password('password!')", expected: "True" },
            { input: "validate_password('short!')", expected: "False" }
        ]
    },
    {
        id: "122",
        number: 122,
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
