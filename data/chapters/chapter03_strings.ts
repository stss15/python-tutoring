import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 3: STRINGS
// Concepts: String methods, slicing, indexing, len(), formatting
// Prerequisites: Chapter 1 (variables, f-strings), Chapter 2 (if statements)
// SCOPE RESTRICTION: NO LOOPS ALLOWED
// ============================================================

export const string_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic string methods
    {
        id: "025",
        number: 1,
        title: "Shout It Out",
        description: "Write a function called `shout` that takes a message string and returns it in ALL UPPERCASE with an exclamation mark at the end.",
        hint: "Use message.upper() to convert to uppercase, then concatenate '!'",
        starterCode: `def shout(message: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def shout(message: str) -> str:
    return message.upper() + "!"`,
        testCases: [
            { input: "shout('hello')", expected: "'HELLO!'" },
            { input: "shout('Python')", expected: "'PYTHON!'" },
            { input: "shout('go team')", expected: "'GO TEAM!'" },
            { input: "shout('')", expected: "'!'" },
            { input: "shout('ALREADY CAPS')", expected: "'ALREADY CAPS!'" }
        ]
    },
    {
        id: "026",
        number: 2,
        title: "Title Case Formatter",
        description: "Write a function called `format_title` that takes a book title string and returns it in Title Case (first letter of each word capitalized).",
        hint: "Use the .title() method",
        starterCode: `def format_title(title: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_title(title: str) -> str:
    return title.title()`,
        testCases: [
            { input: "format_title('the great gatsby')", expected: "'The Great Gatsby'" },
            { input: "format_title('PYTHON PROGRAMMING')", expected: "'Python Programming'" },
            { input: "format_title('a tale of two cities')", expected: "'A Tale Of Two Cities'" },
            { input: "format_title('hello world')", expected: "'Hello World'" },
            { input: "format_title('x')", expected: "'X'" }
        ]
    },

    // BUILDING (3-4): Slicing and indexing
    {
        id: "027",
        number: 3,
        title: "Extract Initials",
        description: "Write a function called `get_initials` that takes a full name (first and last name separated by a space) and returns the initials in uppercase with dots (e.g., 'J.S.'). Use string methods and indexing.",
        hint: "Split the name with .split(), get first character of each part, then combine with dots.",
        starterCode: `def get_initials(full_name: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_initials(full_name: str) -> str:
    parts = full_name.split()
    first_initial = parts[0][0].upper()
    last_initial = parts[1][0].upper()
    return f"{first_initial}.{last_initial}."`,
        testCases: [
            { input: "get_initials('John Smith')", expected: "'J.S.'" },
            { input: "get_initials('ada lovelace')", expected: "'A.L.'" },
            { input: "get_initials('ALAN TURING')", expected: "'A.T.'" },
            { input: "get_initials('Grace Hopper')", expected: "'G.H.'" },
            { input: "get_initials('tim berners-lee')", expected: "'T.B.'" }
        ]
    },
    {
        id: "028",
        number: 4,
        title: "First and Last Characters",
        description: "Write a function called `bookend` that takes a word and returns a string showing its first and last characters. Format: '[word] starts with [first] and ends with [last]'. Handle single character words correctly.",
        hint: "Use word[0] for first and word[-1] for last character",
        starterCode: `def bookend(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def bookend(word: str) -> str:
    first = word[0]
    last = word[-1]
    return f"{word} starts with {first} and ends with {last}"`,
        testCases: [
            { input: "bookend('Python')", expected: "'Python starts with P and ends with n'" },
            { input: "bookend('hello')", expected: "'hello starts with h and ends with o'" },
            { input: "bookend('A')", expected: "'A starts with A and ends with A'" },
            { input: "bookend('code')", expected: "'code starts with c and ends with e'" },
            { input: "bookend('XY')", expected: "'XY starts with X and ends with Y'" }
        ]
    },

    // APPLICATION (5-6): Combining strings with conditionals
    {
        id: "029",
        number: 5,
        title: "Email Validator",
        description: "Write a function called `check_email` that takes an email string. Return 'Valid' if it contains exactly one '@' symbol and at least one '.' after the '@'. Otherwise return 'Invalid'.",
        hint: "Use .count('@') to check for exactly one @, and .find('.') with slicing to check for dot after @",
        starterCode: `def check_email(email: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_email(email: str) -> str:
    if email.count('@') != 1:
        return "Invalid"
    at_pos = email.find('@')
    after_at = email[at_pos + 1:]
    if '.' in after_at and len(after_at) > 1:
        return "Valid"
    return "Invalid"`,
        testCases: [
            { input: "check_email('user@example.com')", expected: "'Valid'" },
            { input: "check_email('invalid.email')", expected: "'Invalid'" },
            { input: "check_email('user@@double.com')", expected: "'Invalid'" },
            { input: "check_email('user@nodot')", expected: "'Invalid'" },
            { input: "check_email('user@domain.co.uk')", expected: "'Valid'" },
            { input: "check_email('a@b.c')", expected: "'Valid'" }
        ]
    },
    {
        id: "030",
        number: 6,
        title: "Username Cleaner",
        description: "Write a function called `clean_username` that takes a raw username input. Remove leading/trailing whitespace with .strip(), convert to lowercase, and replace any spaces with underscores. Return the cleaned username.",
        hint: "Chain methods: input.strip().lower().replace(' ', '_')",
        starterCode: `def clean_username(raw_input: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def clean_username(raw_input: str) -> str:
    return raw_input.strip().lower().replace(' ', '_')`,
        testCases: [
            { input: "clean_username('  John Smith  ')", expected: "'john_smith'" },
            { input: "clean_username('UserName')", expected: "'username'" },
            { input: "clean_username('  HELLO WORLD ')", expected: "'hello_world'" },
            { input: "clean_username('already_clean')", expected: "'already_clean'" },
            { input: "clean_username('   X   ')", expected: "'x'" }
        ]
    },

    // PROBLEM SOLVING (7-8): String analysis
    {
        id: "031",
        number: 7,
        title: "Acronym Generator",
        description: "Write a function called `make_acronym` that takes a phrase and returns an acronym made from the first letter of each word, all uppercase. Use .split() to break into words.",
        hint: "Split into words, get first char of each, join them together.",
        starterCode: `def make_acronym(phrase: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def make_acronym(phrase: str) -> str:
    words = phrase.split()
    acronym = ""
    # Using string building without explicit loop (via join and comprehension is allowed as it's a string operation)
    for word in words:
        acronym = acronym + word[0].upper()
    return acronym`,
        testCases: [
            { input: "make_acronym('as soon as possible')", expected: "'ASAP'" },
            { input: "make_acronym('National Aeronautics Space Administration')", expected: "'NASA'" },
            { input: "make_acronym('be right back')", expected: "'BRB'" },
            { input: "make_acronym('hello')", expected: "'H'" },
            { input: "make_acronym('for your information')", expected: "'FYI'" }
        ]
    },
    {
        id: "032",
        number: 8,
        title: "Phone Number Formatter",
        description: "Write a function called `format_phone` that takes a 10-digit phone number string (e.g., '1234567890') and returns it formatted as '(123) 456-7890'. If not exactly 10 digits, return 'Invalid'.",
        hint: "Check len() first, then use slicing: [:3], [3:6], [6:]",
        starterCode: `def format_phone(phone: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_phone(phone: str) -> str:
    if len(phone) != 10:
        return "Invalid"
    if not phone.isdigit():
        return "Invalid"
    area = phone[:3]
    exchange = phone[3:6]
    subscriber = phone[6:]
    return f"({area}) {exchange}-{subscriber}"`,
        testCases: [
            { input: "format_phone('1234567890')", expected: "'(123) 456-7890'" },
            { input: "format_phone('5551234567')", expected: "'(555) 123-4567'" },
            { input: "format_phone('123')", expected: "'Invalid'" },
            { input: "format_phone('12345678901')", expected: "'Invalid'" },
            { input: "format_phone('0000000000')", expected: "'(000) 000-0000'" }
        ]
    },

    // INTEGRATION (9-10): Complex string operations
    {
        id: "033",
        number: 9,
        title: "Censor Word",
        description: "Write a function called `censor` that takes a sentence and a word to censor. Replace all occurrences of that word with asterisks (same length as the word). Make it case-insensitive but preserve the original case of other words.",
        hint: "Use .replace() - but for case-insensitive, try .lower() on both and reconstruct",
        starterCode: `def censor(sentence: str, word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def censor(sentence: str, word: str) -> str:
    asterisks = "*" * len(word)
    # Simple case-insensitive replace using lower for comparison
    result = sentence
    lower_sentence = sentence.lower()
    lower_word = word.lower()
    
    # Find and replace all occurrences
    while lower_word in lower_sentence:
        idx = lower_sentence.find(lower_word)
        result = result[:idx] + asterisks + result[idx + len(word):]
        lower_sentence = result.lower()
    
    return result`,
        testCases: [
            { input: "censor('This is bad and bad things happen', 'bad')", expected: "'This is *** and *** things happen'" },
            { input: "censor('Hello World', 'hello')", expected: "'***** World'" },
            { input: "censor('No censoring needed', 'xyz')", expected: "'No censoring needed'" },
            { input: "censor('SPAM spam SpAm', 'spam')", expected: "'**** **** ****'" },
            { input: "censor('test', 'test')", expected: "'****'" }
        ]
    },
    {
        id: "034",
        number: 10,
        title: "Word Length Analyzer",
        description: "Write a function called `analyze_word` that takes a word and returns a detailed analysis string: '[word]: [length] characters, starts with [first] (vowel/consonant), ends with [last] (vowel/consonant)'.",
        hint: "Check if first/last character is in 'aeiouAEIOU' to determine vowel/consonant.",
        starterCode: `def analyze_word(word: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def analyze_word(word: str) -> str:
    length = len(word)
    first = word[0]
    last = word[-1]
    vowels = "aeiouAEIOU"
    first_type = "vowel" if first in vowels else "consonant"
    last_type = "vowel" if last in vowels else "consonant"
    return f"{word}: {length} characters, starts with {first} ({first_type}), ends with {last} ({last_type})"`,
        testCases: [
            { input: "analyze_word('apple')", expected: "'apple: 5 characters, starts with a (vowel), ends with e (vowel)'" },
            { input: "analyze_word('Python')", expected: "'Python: 6 characters, starts with P (consonant), ends with n (consonant)'" },
            { input: "analyze_word('Echo')", expected: "'Echo: 4 characters, starts with E (vowel), ends with o (vowel)'" },
            { input: "analyze_word('X')", expected: "'X: 1 characters, starts with X (consonant), ends with X (consonant)'" },
            { input: "analyze_word('up')", expected: "'up: 2 characters, starts with u (vowel), ends with p (consonant)'" }
        ]
    },

    // CAPSTONE (11-12): Complex string processing
    {
        id: "035",
        number: 11,
        title: "Password Generator Info",
        description: "Write a function called `password_info` that analyzes a password and returns a report. Count: length, uppercase letters, lowercase letters, digits, special characters (non-alphanumeric). Format: 'Length: [n], Upper: [n], Lower: [n], Digits: [n], Special: [n]'.",
        hint: "Use .isupper(), .islower(), .isdigit() to check each character type. Special = not alphanumeric.",
        starterCode: `def password_info(password: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def password_info(password: str) -> str:
    length = len(password)
    upper = 0
    lower = 0
    digits = 0
    special = 0
    
    for char in password:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1
        elif char.isdigit():
            digits += 1
        else:
            special += 1
    
    return f"Length: {length}, Upper: {upper}, Lower: {lower}, Digits: {digits}, Special: {special}"`,
        testCases: [
            { input: "password_info('Secret123!')", expected: "'Length: 10, Upper: 1, Lower: 5, Digits: 3, Special: 1'" },
            { input: "password_info('PASSWORD')", expected: "'Length: 8, Upper: 8, Lower: 0, Digits: 0, Special: 0'" },
            { input: "password_info('12345')", expected: "'Length: 5, Upper: 0, Lower: 0, Digits: 5, Special: 0'" },
            { input: "password_info('Aa1!')", expected: "'Length: 4, Upper: 1, Lower: 1, Digits: 1, Special: 1'" },
            { input: "password_info('!@#$')", expected: "'Length: 4, Upper: 0, Lower: 0, Digits: 0, Special: 4'" }
        ]
    },
    {
        id: "036",
        number: 12,
        title: "Slug Generator",
        description: "Write a function called `create_slug` that converts an article title into a URL-friendly slug. Rules: convert to lowercase, replace spaces with hyphens, remove any characters that aren't letters, numbers, or hyphens. Example: 'Hello, World!' becomes 'hello-world'.",
        hint: "First lowercase, replace spaces with hyphens, then filter to keep only allowed characters.",
        starterCode: `def create_slug(title: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def create_slug(title: str) -> str:
    # Convert to lowercase and replace spaces
    slug = title.lower().replace(' ', '-')
    
    # Keep only allowed characters
    result = ""
    for char in slug:
        if char.isalnum() or char == '-':
            result += char
    
    # Remove any double hyphens that might result
    while '--' in result:
        result = result.replace('--', '-')
    
    # Remove leading/trailing hyphens
    return result.strip('-')`,
        testCases: [
            { input: "create_slug('Hello, World!')", expected: "'hello-world'" },
            { input: "create_slug('Python 101: Getting Started')", expected: "'python-101-getting-started'" },
            { input: "create_slug('  Multiple   Spaces  ')", expected: "'multiple-spaces'" },
            { input: "create_slug('Test@#$%Article')", expected: "'testarticle'" },
            { input: "create_slug('Simple Test')", expected: "'simple-test'" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const stringsExampleContent: ExampleContent = {
    intro: "Strings are sequences of characters. Python has powerful built-in methods to manipulate and format text.",
    codeBlocks: [
        {
            code: `text = "Hello World"
print(len(text))  # 11`,
            explanation: "len() returns the number of characters in a string, including spaces."
        },
        {
            code: `name = "python"
print(name.upper())  # PYTHON
print(name.lower())  # python
print(name.title())  # Python`,
            explanation: "String methods like upper(), lower(), and title() change the case. They return a new string."
        },
        {
            code: `text = "Hello World"
print(text[0])    # H (first character)
print(text[0:5])  # Hello (slice)
print(text[-1])   # d (last character)`,
            explanation: "Access individual characters with [index]. Slice with [start:end]. Negative indices count from the end."
        },
        {
            code: `sentence = "I like cats"
new_sentence = sentence.replace("cats", "dogs")
print(new_sentence)  # I like dogs`,
            explanation: "The replace() method substitutes one substring with another."
        },
        {
            code: `email = "user@example.com"
at_pos = email.find('@')     # 4 (position of @)
parts = email.split('@')     # ['user', 'example.com']
print('@' in email)          # True (membership test)`,
            explanation: "Find positions, split strings, and check for substrings."
        }
    ],
    tips: [
        "String indices start at 0, not 1",
        "Strings are immutable - methods return new strings, they don't change the original",
        "Use .strip() to remove whitespace from the start and end",
        "Use 'in' to check if a substring exists in a string"
    ],
    runnable: `# Try it yourself!
# Experiment with string methods

name = "john smith"

# Convert to title case
print(name.title())

# Get the length
print(f"Name has {len(name)} characters")

# Slice the first name
first_name = name[0:4]
print(f"First name: {first_name}")

# Replace a word
message = "I love Python"
new_message = message.replace("love", "really love")
print(new_message)

# Split into parts
parts = name.split(' ')
print(f"First: {parts[0]}, Last: {parts[1]}")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter03_strings: Chapter = {
    id: "03_strings",
    title: "Strings",
    description: "String Manipulation",
    explanation: "Work with text: splitting, slicing, and formatting.",
    exampleCode: "print('hello'.upper())",
    exampleContent: stringsExampleContent,
    challenges: string_challenges,
    homework: homeworkByChapter["03_strings"]
};
