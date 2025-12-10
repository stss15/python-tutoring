import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 9: MORE STRINGS
// Concepts: Advanced string methods, split, join, formatting
// Prerequisites: All previous chapters including loops
// ============================================================

export const string_more_challenges: Challenge[] = [
    {
        id: "097",
        number: 1,
        title: "Word Splitter",
        description: "Write a function called `split_words` that takes a sentence and returns a list of words (split by spaces).",
        starterCode: `def split_words(sentence: str) -> list:
    # Your code here
    pass`,
        solutionCode: `def split_words(sentence: str) -> list:
    return sentence.split()`,
        testCases: [
            { input: "split_words('Hello World')", expected: "['Hello', 'World']" },
            { input: "split_words('one two three')", expected: "['one', 'two', 'three']" },
            { input: "split_words('')", expected: "[]" }
        ]
    },
    {
        id: "098",
        number: 2,
        title: "Word Joiner",
        description: "Write a function called `join_words` that takes a list of words and a separator, and returns them joined as a single string.",
        starterCode: `def join_words(words: list, separator: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def join_words(words: list, separator: str) -> str:
    return separator.join(words)`,
        testCases: [
            { input: "join_words(['Hello', 'World'], '-')", expected: "'Hello-World'" },
            { input: "join_words(['a', 'b', 'c'], ', ')", expected: "'a, b, c'" },
            { input: "join_words([], '-')", expected: "''" }
        ]
    },
    {
        id: "099",
        number: 3,
        title: "Title to Slug",
        description: "Write a function called `to_slug` that converts a title to a URL slug: lowercase, spaces become hyphens.",
        starterCode: `def to_slug(title: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def to_slug(title: str) -> str:
    return title.lower().replace(' ', '-')`,
        testCases: [
            { input: "to_slug('Hello World')", expected: "'hello-world'" },
            { input: "to_slug('Python Programming')", expected: "'python-programming'" },
            { input: "to_slug('Test')", expected: "'test'" }
        ]
    },
    {
        id: "100",
        number: 4,
        title: "Palindrome Checker",
        description: "Write a function called `is_palindrome` that checks if a word reads the same forwards and backwards (case-insensitive).",
        starterCode: `def is_palindrome(word: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def is_palindrome(word: str) -> bool:
    clean = word.lower()
    return clean == clean[::-1]`,
        testCases: [
            { input: "is_palindrome('Racecar')", expected: "True" },
            { input: "is_palindrome('hello')", expected: "False" },
            { input: "is_palindrome('A')", expected: "True" }
        ]
    },
    {
        id: "101",
        number: 5,
        title: "Vowel Remover",
        description: "Write a function called `remove_vowels` that removes all vowels (a, e, i, o, u) from a string (case-insensitive removal).",
        starterCode: `def remove_vowels(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def remove_vowels(text: str) -> str:
    vowels = 'aeiouAEIOU'
    result = ''
    for char in text:
        if char not in vowels:
            result += char
    return result`,
        testCases: [
            { input: "remove_vowels('Hello World')", expected: "'Hll Wrld'" },
            { input: "remove_vowels('AEIOU')", expected: "''" },
            { input: "remove_vowels('Python')", expected: "'Pythn'" }
        ]
    },
    {
        id: "102",
        number: 6,
        title: "Word Reverser",
        description: "Write a function called `reverse_words` that reverses the order of words in a sentence (not the letters).",
        starterCode: `def reverse_words(sentence: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def reverse_words(sentence: str) -> str:
    words = sentence.split()
    words.reverse()
    return ' '.join(words)`,
        testCases: [
            { input: "reverse_words('Hello World')", expected: "'World Hello'" },
            { input: "reverse_words('one two three')", expected: "'three two one'" },
            { input: "reverse_words('Python')", expected: "'Python'" }
        ]
    },
    {
        id: "103",
        number: 7,
        title: "Character Frequency",
        description: "Write a function called `char_frequency` that returns a dictionary of character counts in a string (case-insensitive, excluding spaces).",
        starterCode: `def char_frequency(text: str) -> dict:
    # Your code here
    pass`,
        solutionCode: `def char_frequency(text: str) -> dict:
    freq = {}
    for char in text.lower():
        if char != ' ':
            if char in freq:
                freq[char] += 1
            else:
                freq[char] = 1
    return freq`,
        testCases: [
            { input: "char_frequency('hello')", expected: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}" },
            { input: "char_frequency('A A A')", expected: "{'a': 3}" },
            { input: "char_frequency('')", expected: "{}" }
        ]
    },
    {
        id: "104",
        number: 8,
        title: "Anagram Checker",
        description: "Write a function called `are_anagrams` that checks if two words are anagrams (same letters, different order). Case-insensitive.",
        starterCode: `def are_anagrams(word1: str, word2: str) -> bool:
    # Your code here
    pass`,
        solutionCode: `def are_anagrams(word1: str, word2: str) -> bool:
    # Sort both words and compare
    sorted1 = sorted(word1.lower())
    sorted2 = sorted(word2.lower())
    return sorted1 == sorted2`,
        testCases: [
            { input: "are_anagrams('listen', 'silent')", expected: "True" },
            { input: "are_anagrams('hello', 'world')", expected: "False" },
            { input: "are_anagrams('Astronomer', 'MoonStarer')", expected: "True" }
        ]
    },
    {
        id: "105",
        number: 9,
        title: "Run Length Encode",
        description: "Write a function called `run_length_encode` that compresses a string by replacing consecutive repeated characters with the character and count. E.g., 'aaabbc' → 'a3b2c1'.",
        starterCode: `def run_length_encode(text: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def run_length_encode(text: str) -> str:
    if len(text) == 0:
        return ''
    result = ''
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
    return result`,
        testCases: [
            { input: "run_length_encode('aaabbc')", expected: "'a3b2c1'" },
            { input: "run_length_encode('hello')", expected: "'h1e1l2o1'" },
            { input: "run_length_encode('')", expected: "''" }
        ]
    },
    {
        id: "106",
        number: 10,
        title: "Caesar Cipher",
        description: "Write a function called `caesar_cipher` that shifts each letter in the text by n positions (wrap around z). Keep case, leave non-letters unchanged.",
        starterCode: `def caesar_cipher(text: str, shift: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def caesar_cipher(text: str, shift: int) -> str:
    result = ''
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result`,
        testCases: [
            { input: "caesar_cipher('abc', 1)", expected: "'bcd'" },
            { input: "caesar_cipher('xyz', 3)", expected: "'abc'" },
            { input: "caesar_cipher('Hello!', 5)", expected: "'Mjqqt!'" }
        ]
    },
    {
        id: "107",
        number: 11,
        title: "Longest Word",
        description: "Write a function called `longest_word` that takes a sentence and returns the longest word. If there's a tie, return the first one.",
        starterCode: `def longest_word(sentence: str) -> str:
    # Your code here
    pass`,
        solutionCode: `def longest_word(sentence: str) -> str:
    words = sentence.split()
    if len(words) == 0:
        return ''
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest`,
        testCases: [
            { input: "longest_word('The quick brown fox')", expected: "'quick'" },
            { input: "longest_word('a ab abc')", expected: "'abc'" },
            { input: "longest_word('')", expected: "''" }
        ]
    },
    {
        id: "108",
        number: 12,
        title: "Text Formatter",
        description: "Write a function called `format_text` that takes text and a max line width. Return the text wrapped so no line exceeds max width, splitting at spaces.",
        starterCode: `def format_text(text: str, max_width: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def format_text(text: str, max_width: int) -> str:
    words = text.split()
    if len(words) == 0:
        return ''
    
    lines = []
    current_line = words[0]
    
    for word in words[1:]:
        if len(current_line) + 1 + len(word) <= max_width:
            current_line += ' ' + word
        else:
            lines.append(current_line)
            current_line = word
    
    lines.append(current_line)
    return '\\n'.join(lines)`,
        testCases: [
            { input: "format_text('Hello World', 20)", expected: "'Hello World'" },
            { input: "format_text('Hello World', 6)", expected: "'Hello\\nWorld'" },
            { input: "format_text('a b c d e', 5)", expected: "'a b c\\nd e'" }
        ]
    }
];

export const moreStringsExampleContent: ExampleContent = {
    intro: "Advanced string operations for text processing, encoding, and formatting.",
    codeBlocks: [
        {
            code: `text = "Hello World"
words = text.split()  # ['Hello', 'World']
joined = '-'.join(words)  # 'Hello-World'`,
            explanation: "split() breaks string into list, join() combines list into string."
        },
        {
            code: `text = "Python"
print(text[::-1])  # 'nohtyP' (reversed)`,
            explanation: "Slice with step -1 reverses the string."
        }
    ],
    tips: [
        "Use split() to break strings into lists",
        "Use join() to combine lists into strings",
        "sorted() works on strings (returns list of chars)"
    ],
    runnable: `# String operations
text = "Hello World"
words = text.split()
print("Words:", words)
print("Reversed:", ' '.join(reversed(words)))`
};

export const chapter09_more_strings: Chapter = {
    id: "09_more_strings",
    title: "More Strings",
    description: "Advanced Strings",
    explanation: "String formatting and advanced manipulation.",
    exampleCode: "print('Hello'.isupper())",
    exampleContent: moreStringsExampleContent,
    challenges: string_more_challenges,
    homework: homeworkByChapter["09_more_strings"]
};
