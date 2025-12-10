import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 8: LISTS AND DICTIONARIES
// Concepts: Lists, tuples, dictionaries, methods, operations
// Prerequisites: Chapters 1-7 (includes loops and conditionals)
// ============================================================

export const list_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic list operations
    {
        id: "085",
        number: 1,
        title: "List Statistics",
        description: "Write a function called `list_stats` that takes a list of numbers and returns a dictionary with 'sum', 'min', 'max', and 'avg' keys.",
        hint: "Use sum(), min(), max(), and calculate average",
        starterCode: `def list_stats(numbers: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def list_stats(numbers: list) -> dict:
    if len(numbers) == 0:
        return {'sum': 0, 'min': None, 'max': None, 'avg': None}
    return {
        'sum': sum(numbers),
        'min': min(numbers),
        'max': max(numbers),
        'avg': sum(numbers) / len(numbers)
    }`,
        testCases: [
            { input: "list_stats([1, 2, 3, 4, 5])", expected: "{'sum': 15, 'min': 1, 'max': 5, 'avg': 3.0}" },
            { input: "list_stats([10, 20, 30])", expected: "{'sum': 60, 'min': 10, 'max': 30, 'avg': 20.0}" },
            { input: "list_stats([5])", expected: "{'sum': 5, 'min': 5, 'max': 5, 'avg': 5.0}" }
        ]
    },
    {
        id: "086",
        number: 2,
        title: "List Modifier",
        description: "Write a function called `modify_list` that takes a list, an action ('add', 'remove', or 'sort'), and an optional value. Perform the action and return the modified list.",
        hint: "Use if/elif to check action, apply appropriate list method",
        starterCode: `def modify_list(items: list, action: str, value=None) -> list:
    # Your code here
    pass`,
        solutionCode: `def modify_list(items: list, action: str, value=None) -> list:
    if action == 'add' and value is not None:
        items.append(value)
    elif action == 'remove' and value in items:
        items.remove(value)
    elif action == 'sort':
        items.sort()
    return items`,
        testCases: [
            { input: "modify_list([1, 3, 2], 'sort')", expected: "[1, 2, 3]" },
            { input: "modify_list([1, 2], 'add', 3)", expected: "[1, 2, 3]" },
            { input: "modify_list([1, 2, 3], 'remove', 2)", expected: "[1, 3]" },
            { input: "modify_list([1, 2, 3], 'remove', 5)", expected: "[1, 2, 3]" }
        ]
    },

    // BUILDING (3-4): Dictionary operations
    {
        id: "087",
        number: 3,
        title: "Word Counter",
        description: "Write a function called `count_words` that takes a list of words and returns a dictionary with each unique word as a key and its count as the value.",
        hint: "Loop through words, increment count in dictionary for each word",
        starterCode: `def count_words(words: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def count_words(words: list) -> dict:
    counts = {}
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts`,
        testCases: [
            { input: "count_words(['a', 'b', 'a', 'c', 'b', 'a'])", expected: "{'a': 3, 'b': 2, 'c': 1}" },
            { input: "count_words(['hello', 'world'])", expected: "{'hello': 1, 'world': 1}" },
            { input: "count_words([])", expected: "{}" }
        ]
    },
    {
        id: "088",
        number: 4,
        title: "Grade Book",
        description: "Write a function called `class_average` that takes a dictionary of student names to scores and returns the class average rounded to 1 decimal.",
        hint: "Get list of values, calculate sum/length",
        starterCode: `def class_average(grades: dict) -> float:
    # Your code here
    pass`,
        solutionCode: `def class_average(grades: dict) -> float:
    if len(grades) == 0:
        return 0.0
    total = sum(grades.values())
    return round(total / len(grades), 1)`,
        testCases: [
            { input: "class_average({'Alice': 90, 'Bob': 80, 'Carol': 70})", expected: "80.0" },
            { input: "class_average({'Dan': 100})", expected: "100.0" },
            { input: "class_average({})", expected: "0.0" }
        ]
    },

    // APPLICATION (5-6): Real-world data structures
    {
        id: "089",
        number: 5,
        title: "Inventory Manager",
        description: "Write a function called `update_inventory` that takes an inventory dict {item: quantity}, an item name, and a change (positive or negative). Update the quantity and return the inventory. If quantity would go below 0, set it to 0.",
        hint: "Check if item exists, add/update quantity, clamp to minimum 0",
        starterCode: `def update_inventory(inventory: dict, item: str, change: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `def update_inventory(inventory: dict, item: str, change: int) -> dict:
    if item in inventory:
        inventory[item] += change
    else:
        inventory[item] = change
    
    if inventory[item] < 0:
        inventory[item] = 0
    
    return inventory`,
        testCases: [
            { input: "update_inventory({'apples': 5}, 'apples', 3)", expected: "{'apples': 8}" },
            { input: "update_inventory({'apples': 5}, 'apples', -10)", expected: "{'apples': 0}" },
            { input: "update_inventory({}, 'bananas', 5)", expected: "{'bananas': 5}" }
        ]
    },
    {
        id: "090",
        number: 6,
        title: "Contact Book",
        description: "Write a function called `find_contacts` that takes a contacts dict {name: phone} and a search term. Return a list of all names that contain the search term (case-insensitive).",
        hint: "Loop through dict keys, check if search.lower() in name.lower()",
        starterCode: `def find_contacts(contacts: dict, search: str) -> list:
    # Your code here
    pass`,
        solutionCode: `def find_contacts(contacts: dict, search: str) -> list:
    results = []
    for name in contacts:
        if search.lower() in name.lower():
            results.append(name)
    return results`,
        testCases: [
            { input: "find_contacts({'John Smith': '123', 'Jane Doe': '456', 'John Doe': '789'}, 'john')", expected: "['John Smith', 'John Doe']" },
            { input: "find_contacts({'Alice': '111', 'Bob': '222'}, 'xyz')", expected: "[]" },
            { input: "find_contacts({'Alice': '111'}, 'ALICE')", expected: "['Alice']" }
        ]
    },

    // PROBLEM SOLVING (7-8): Complex operations
    {
        id: "091",
        number: 7,
        title: "Merge Dictionaries",
        description: "Write a function called `merge_dicts` that takes two dictionaries and returns a merged dictionary. If a key exists in both, sum the values.",
        hint: "Create result from dict1, then add/update with dict2 values",
        starterCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    # Your code here
    pass`,
        solutionCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    result = dict(d1)
    for key in d2:
        if key in result:
            result[key] += d2[key]
        else:
            result[key] = d2[key]
    return result`,
        testCases: [
            { input: "merge_dicts({'a': 1, 'b': 2}, {'b': 3, 'c': 4})", expected: "{'a': 1, 'b': 5, 'c': 4}" },
            { input: "merge_dicts({}, {'x': 10})", expected: "{'x': 10}" },
            { input: "merge_dicts({'a': 5}, {})", expected: "{'a': 5}" }
        ]
    },
    {
        id: "092",
        number: 8,
        title: "Group By First Letter",
        description: "Write a function called `group_by_letter` that takes a list of words and returns a dictionary where keys are first letters (uppercase) and values are lists of words starting with that letter.",
        hint: "Get first letter of each word, use it as key, append word to that key's list",
        starterCode: `def group_by_letter(words: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def group_by_letter(words: list) -> dict:
    groups = {}
    for word in words:
        if len(word) == 0:
            continue
        letter = word[0].upper()
        if letter not in groups:
            groups[letter] = []
        groups[letter].append(word)
    return groups`,
        testCases: [
            { input: "group_by_letter(['apple', 'banana', 'avocado', 'blueberry'])", expected: "{'A': ['apple', 'avocado'], 'B': ['banana', 'blueberry']}" },
            { input: "group_by_letter(['cat', 'Car', 'dog'])", expected: "{'C': ['cat', 'Car'], 'D': ['dog']}" },
            { input: "group_by_letter([])", expected: "{}" }
        ]
    },

    // INTEGRATION (9-10): Complex data processing
    {
        id: "093",
        number: 9,
        title: "Top N Items",
        description: "Write a function called `top_n` that takes a dictionary of items to scores and n. Return a list of the top n items by score (highest first). If tied, order doesn't matter for those.",
        hint: "Convert to list of tuples, sort by score descending, take first n, extract just items",
        starterCode: `def top_n(scores: dict, n: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def top_n(scores: dict, n: int) -> list:
    # Convert to list of (item, score) and sort by score descending
    items = list(scores.items())
    # Simple bubble sort by score (descending)
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[j][1] > items[i][1]:
                items[i], items[j] = items[j], items[i]
    
    result = []
    for i in range(min(n, len(items))):
        result.append(items[i][0])
    return result`,
        testCases: [
            { input: "top_n({'a': 5, 'b': 10, 'c': 3}, 2)", expected: "['b', 'a']" },
            { input: "top_n({'x': 100, 'y': 50}, 1)", expected: "['x']" },
            { input: "top_n({}, 5)", expected: "[]" }
        ]
    },
    {
        id: "094",
        number: 10,
        title: "Invert Dictionary",
        description: "Write a function called `invert_dict` that takes a dictionary and returns a new dictionary with keys and values swapped. If multiple keys have the same value, collect them in a list.",
        hint: "Loop through items, use old values as new keys, collect old keys as new values",
        starterCode: `def invert_dict(d: dict) -> dict:
    # Your code here
    pass`,
        solutionCode: `def invert_dict(d: dict) -> dict:
    result = {}
    for key, value in d.items():
        if value in result:
            if isinstance(result[value], list):
                result[value].append(key)
            else:
                result[value] = [result[value], key]
        else:
            result[value] = key
    return result`,
        testCases: [
            { input: "invert_dict({'a': 1, 'b': 2, 'c': 1})", expected: "{1: ['a', 'c'], 2: 'b'}" },
            { input: "invert_dict({'x': 'hello', 'y': 'world'})", expected: "{'hello': 'x', 'world': 'y'}" }
        ]
    },

    // CAPSTONE (11-12): Complex data structure problems
    {
        id: "095",
        number: 11,
        title: "Shopping Cart",
        description: "Write a function called `calculate_cart` that takes a cart (list of {name, price, quantity} dicts) and returns the total cost.",
        hint: "Sum up price * quantity for each item",
        starterCode: `def calculate_cart(cart: list) -> float:
    # Your code here
    pass`,
        solutionCode: `def calculate_cart(cart: list) -> float:
    total = 0
    for item in cart:
        total += item['price'] * item['quantity']
    return total`,
        testCases: [
            { input: "calculate_cart([{'name': 'Apple', 'price': 1.5, 'quantity': 3}, {'name': 'Banana', 'price': 0.75, 'quantity': 4}])", expected: "7.5" },
            { input: "calculate_cart([])", expected: "0" },
            { input: "calculate_cart([{'name': 'Milk', 'price': 2.0, 'quantity': 1}])", expected: "2.0" }
        ]
    },
    {
        id: "096",
        number: 12,
        title: "Playlist Manager",
        description: "Write a function called `manage_playlist` that takes a playlist (list of song dicts with 'title' and 'duration_sec'), and returns a dict with 'count', 'total_duration' (in seconds), and 'avg_duration' (rounded to 1 decimal).",
        hint: "Count songs, sum durations, calculate average",
        starterCode: `def manage_playlist(playlist: list) -> dict:
    # Your code here
    pass`,
        solutionCode: `def manage_playlist(playlist: list) -> dict:
    if len(playlist) == 0:
        return {'count': 0, 'total_duration': 0, 'avg_duration': 0}
    
    total = 0
    for song in playlist:
        total += song['duration_sec']
    
    return {
        'count': len(playlist),
        'total_duration': total,
        'avg_duration': round(total / len(playlist), 1)
    }`,
        testCases: [
            { input: "manage_playlist([{'title': 'Song1', 'duration_sec': 180}, {'title': 'Song2', 'duration_sec': 240}])", expected: "{'count': 2, 'total_duration': 420, 'avg_duration': 210.0}" },
            { input: "manage_playlist([])", expected: "{'count': 0, 'total_duration': 0, 'avg_duration': 0}" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const listsExampleContent: ExampleContent = {
    intro: "Lists store multiple items in order. Dictionaries store items with named keys. Tuples are like lists but cannot be changed.",
    codeBlocks: [
        {
            code: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple
print(fruits[-1])  # cherry
print(len(fruits)) # 3`,
            explanation: "Lists use square brackets. Access items by index (starting at 0). Use -1 for the last item."
        },
        {
            code: `fruits = ["apple", "banana"]
fruits.append("cherry")
fruits.remove("banana")
print(fruits)  # ['apple', 'cherry']`,
            explanation: "append() adds to the end, remove() deletes by value. Lists are mutable (can be changed)."
        },
        {
            code: `person = {
    "name": "Alice",
    "age": 25,
    "city": "London"
}
print(person["name"])  # Alice`,
            explanation: "Dictionaries use curly braces with key:value pairs. Access values using the key in square brackets."
        },
        {
            code: `# Iterating through a dictionary
for key, value in person.items():
    print(f"{key}: {value}")`,
            explanation: "Use .items() to loop through key-value pairs, .keys() for just keys, .values() for just values."
        }
    ],
    tips: [
        "Lists: ordered, changeable, allow duplicates",
        "Dictionaries: key-value pairs, changeable, no duplicate keys",
        "Tuples: ordered, unchangeable, allow duplicates",
        "Use 'in' to check membership: if 'apple' in fruits:"
    ],
    runnable: `# Try it yourself!

# Working with lists
shopping = ["bread", "milk", "eggs"]
print("Shopping list:", shopping)

shopping.append("butter")
print("After adding butter:", shopping)

shopping.remove("milk")
print("After removing milk:", shopping)

# Working with dictionaries
student = {
    "name": "Bob",
    "grade": "A",
    "score": 95
}
print(f"{student['name']} got a {student['grade']}")

# Loop through dictionary
for key, value in student.items():
    print(f"  {key}: {value}")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter08_lists_dicts: Chapter = {
    id: "08_lists_dicts",
    title: "Tuples, Lists and Dicts",
    description: "Data Structures",
    explanation: "Store multiple values in tuples, lists, and dictionaries.",
    exampleCode: "x = [1, 2, 3]\\nprint(x[0])",
    exampleContent: listsExampleContent,
    challenges: list_challenges,
    homework: homeworkByChapter["08_lists_dicts"]
};
