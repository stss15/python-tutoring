import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 7: RANDOM
// Concepts: random module, randint, choice, shuffle, seed
// Prerequisites: Chapters 1-6 (includes loops and conditionals)
// ============================================================

export const random_challenges: Challenge[] = [
    // FOUNDATION (1-2): Basic random usage
    {
        id: "073",
        number: 1,
        title: "Dice Roll",
        description: "Write a function called `roll_dice` that takes the number of sides and returns a random integer from 1 to that number (inclusive).",
        hint: "Use random.randint(1, sides)",
        starterCode: `import random

def roll_dice(sides: int) -> int:
    # Your code here
    pass`,
        solutionCode: `import random

def roll_dice(sides: int) -> int:
    return random.randint(1, sides)`,
        testCases: [
            { input: "import random; random.seed(42); roll_dice(6)", expected: "6" },
            { input: "import random; random.seed(1); roll_dice(20)", expected: "4" },
            { input: "import random; random.seed(10); roll_dice(100)", expected: "74" }
        ]
    },
    {
        id: "074",
        number: 2,
        title: "Random Choice",
        description: "Write a function called `pick_random` that takes a list and returns a random element from it.",
        hint: "Use random.choice(items)",
        starterCode: `import random

def pick_random(items: list):
    # Your code here
    pass`,
        solutionCode: `import random

def pick_random(items: list):
    return random.choice(items)`,
        testCases: [
            { input: "import random; random.seed(42); pick_random(['a', 'b', 'c', 'd'])", expected: "'c'" },
            { input: "import random; random.seed(1); pick_random([10, 20, 30, 40, 50])", expected: "20" }
        ]
    },

    // BUILDING (3-4): Random with loops
    {
        id: "075",
        number: 3,
        title: "Roll Multiple Dice",
        description: "Write a function called `roll_multiple` that takes the number of dice and number of sides. Roll each die and return the list of results.",
        hint: "Loop num_dice times, append each roll to a list",
        starterCode: `import random

def roll_multiple(num_dice: int, sides: int) -> list:
    # Your code here
    pass`,
        solutionCode: `import random

def roll_multiple(num_dice: int, sides: int) -> list:
    rolls = []
    for i in range(num_dice):
        rolls.append(random.randint(1, sides))
    return rolls`,
        testCases: [
            { input: "import random; random.seed(42); roll_multiple(3, 6)", expected: "[6, 1, 1]" },
            { input: "import random; random.seed(1); roll_multiple(5, 6)", expected: "[2, 5, 1, 3, 1]" }
        ]
    },
    {
        id: "076",
        number: 4,
        title: "Random Password",
        description: "Write a function called `generate_password` that takes a length and returns a random password of that length using lowercase letters (a-z).",
        hint: "Create string of letters, use random.choice() in a loop",
        starterCode: `import random

def generate_password(length: int) -> str:
    # Your code here
    pass`,
        solutionCode: `import random

def generate_password(length: int) -> str:
    letters = 'abcdefghijklmnopqrstuvwxyz'
    password = ''
    for i in range(length):
        password += random.choice(letters)
    return password`,
        testCases: [
            { input: "import random; random.seed(42); generate_password(8)", expected: "'mxhimsjp'" },
            { input: "import random; random.seed(1); generate_password(5)", expected: "'flobm'" }
        ]
    },

    // APPLICATION (5-6): Games and simulations
    {
        id: "077",
        number: 5,
        title: "Coin Flip Simulation",
        description: "Write a function called `flip_coins` that takes the number of flips and returns a dictionary with counts of 'heads' and 'tails'.",
        hint: "Randomly choose 'heads' or 'tails' each flip, count results",
        starterCode: `import random

def flip_coins(num_flips: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `import random

def flip_coins(num_flips: int) -> dict:
    results = {'heads': 0, 'tails': 0}
    for i in range(num_flips):
        flip = random.choice(['heads', 'tails'])
        results[flip] += 1
    return results`,
        testCases: [
            { input: "import random; random.seed(42); flip_coins(10)", expected: "{'heads': 4, 'tails': 6}" },
            { input: "import random; random.seed(1); flip_coins(100)", expected: "{'heads': 52, 'tails': 48}" }
        ]
    },
    {
        id: "078",
        number: 6,
        title: "Guessing Game Judge",
        description: "Write a function called `check_guess` that takes a guess, a secret number, and returns 'Correct!', 'Too high', or 'Too low'.",
        hint: "Compare guess to secret with if/elif",
        starterCode: `def check_guess(guess: int, secret: int) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_guess(guess: int, secret: int) -> str:
    if guess == secret:
        return "Correct!"
    elif guess > secret:
        return "Too high"
    else:
        return "Too low"`,
        testCases: [
            { input: "check_guess(5, 5)", expected: "'Correct!'" },
            { input: "check_guess(7, 5)", expected: "'Too high'" },
            { input: "check_guess(3, 5)", expected: "'Too low'" },
            { input: "check_guess(50, 42)", expected: "'Too high'" },
            { input: "check_guess(10, 100)", expected: "'Too low'" }
        ]
    },

    // PROBLEM SOLVING (7-8): Random algorithms
    {
        id: "079",
        number: 7,
        title: "Monte Carlo Pi",
        description: "Write a function called `estimate_pi` that uses Monte Carlo simulation to estimate π. Generate n random points in a 1×1 square, count how many fall inside a quarter circle (distance from origin < 1), then calculate π ≈ 4 × (inside/total). Return rounded to 2 decimals.",
        hint: "For each point: x = random(), y = random(). If x²+y² < 1, it's inside.",
        starterCode: `import random
import math

def estimate_pi(n: int) -> float:
    # Your code here
    pass`,
        solutionCode: `import random
import math

def estimate_pi(n: int) -> float:
    inside = 0
    for i in range(n):
        x = random.random()
        y = random.random()
        if x*x + y*y < 1:
            inside += 1
    return round(4 * inside / n, 2)`,
        testCases: [
            { input: "import random; random.seed(42); estimate_pi(1000)", expected: "3.16" },
            { input: "import random; random.seed(1); estimate_pi(10000)", expected: "3.14" }
        ]
    },
    {
        id: "080",
        number: 8,
        title: "Shuffle Deck",
        description: "Write a function called `create_deck` that creates and shuffles a deck of 52 cards. Each card is a string like '2H' (2 of Hearts), 'AS' (Ace of Spades). Return the shuffled list.",
        hint: "Create all combinations of values and suits, then random.shuffle()",
        starterCode: `import random

def create_deck() -> list:
    # Your code here
    pass`,
        solutionCode: `import random

def create_deck() -> list:
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    suits = ['H', 'D', 'C', 'S']
    deck = []
    for suit in suits:
        for value in values:
            deck.append(value + suit)
    random.shuffle(deck)
    return deck`,
        testCases: [
            { input: "import random; random.seed(42); len(create_deck())", expected: "52" },
            { input: "import random; random.seed(42); create_deck()[0]", expected: "'JS'" }
        ]
    },

    // INTEGRATION (9-10): Complex random scenarios
    {
        id: "081",
        number: 9,
        title: "Random Walk",
        description: "Write a function called `random_walk` that simulates a 1D random walk. Start at position 0, take n steps. Each step is either +1 or -1 (random). Return the final position.",
        hint: "Loop n times, randomly add +1 or -1 to position",
        starterCode: `import random

def random_walk(steps: int) -> int:
    # Your code here
    pass`,
        solutionCode: `import random

def random_walk(steps: int) -> int:
    position = 0
    for i in range(steps):
        position += random.choice([-1, 1])
    return position`,
        testCases: [
            { input: "import random; random.seed(42); random_walk(100)", expected: "-8" },
            { input: "import random; random.seed(1); random_walk(1000)", expected: "36" }
        ]
    },
    {
        id: "082",
        number: 10,
        title: "Lottery Picker",
        description: "Write a function called `lottery_numbers` that generates n unique random numbers between 1 and max_num (inclusive). Return them sorted in ascending order.",
        hint: "Use a set or list to track picked numbers, keep picking until you have n unique ones",
        starterCode: `import random

def lottery_numbers(n: int, max_num: int) -> list:
    # Your code here
    pass`,
        solutionCode: `import random

def lottery_numbers(n: int, max_num: int) -> list:
    numbers = []
    while len(numbers) < n:
        num = random.randint(1, max_num)
        if num not in numbers:
            numbers.append(num)
    numbers.sort()
    return numbers`,
        testCases: [
            { input: "import random; random.seed(42); lottery_numbers(6, 49)", expected: "[3, 12, 19, 30, 44, 45]" },
            { input: "import random; random.seed(1); lottery_numbers(5, 10)", expected: "[1, 2, 5, 7, 10]" }
        ]
    },

    // CAPSTONE (11-12): Complex simulations
    {
        id: "083",
        number: 11,
        title: "Dice Statistics",
        description: "Write a function called `dice_frequency` that rolls two 6-sided dice n times and returns a dictionary with the frequency of each possible sum (2-12).",
        hint: "Roll two dice, add results, count frequency of each sum",
        starterCode: `import random

def dice_frequency(n: int) -> dict:
    # Your code here
    pass`,
        solutionCode: `import random

def dice_frequency(n: int) -> dict:
    freq = {}
    for total in range(2, 13):
        freq[total] = 0
    
    for i in range(n):
        die1 = random.randint(1, 6)
        die2 = random.randint(1, 6)
        total = die1 + die2
        freq[total] += 1
    
    return freq`,
        testCases: [
            { input: "import random; random.seed(42); dice_frequency(100)[7]", expected: "19" },
            { input: "import random; random.seed(1); dice_frequency(1000)[7]", expected: "159" }
        ]
    },
    {
        id: "084",
        number: 12,
        title: "Birthday Problem",
        description: "Write a function called `birthday_collision` that simulates the birthday problem. Generate random 'birthdays' (1-365) for n people. Return True if any two share a birthday, False otherwise.",
        hint: "Generate n random numbers 1-365, check if any duplicates exist",
        starterCode: `import random

def birthday_collision(n: int) -> bool:
    # Your code here
    pass`,
        solutionCode: `import random

def birthday_collision(n: int) -> bool:
    birthdays = []
    for i in range(n):
        birthday = random.randint(1, 365)
        if birthday in birthdays:
            return True
        birthdays.append(birthday)
    return False`,
        testCases: [
            { input: "import random; random.seed(42); birthday_collision(23)", expected: "True" },
            { input: "import random; random.seed(1); birthday_collision(10)", expected: "False" },
            { input: "import random; random.seed(5); birthday_collision(50)", expected: "True" }
        ]
    }
];

// ============================================================
// EXAMPLE CONTENT
// ============================================================

export const randomExampleContent: ExampleContent = {
    intro: "The random module lets you generate random numbers and make random choices. Essential for games and simulations.",
    codeBlocks: [
        {
            code: `import random

num = random.randint(1, 10)
print(num)`,
            explanation: "randint(a, b) returns a random integer between a and b (inclusive). Both endpoints are possible."
        },
        {
            code: `import random

num = random.random()
print(num)`,
            explanation: "random() returns a random float between 0.0 and 1.0. Multiply to get larger ranges."
        },
        {
            code: `import random

colours = ["red", "green", "blue"]
pick = random.choice(colours)
print(pick)`,
            explanation: "choice() picks a random item from a list. Great for picking random options."
        },
        {
            code: `import random

cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)`,
            explanation: "shuffle() randomizes the order of a list in place. The original list is modified."
        },
        {
            code: `import random

random.seed(42)  # Set seed for reproducibility
print(random.randint(1, 100))  # Always 82 with seed 42`,
            explanation: "seed() sets the random number generator's starting state. Same seed = same sequence."
        }
    ],
    tips: [
        "Always import random at the top of your file",
        "randint includes both endpoints",
        "Use choice() for picking from a list, randint() for number ranges",
        "Use seed() for reproducible results in testing"
    ],
    runnable: `# Try it yourself!
import random

# Roll a dice
dice = random.randint(1, 6)
print(f"You rolled a {dice}")

# Pick a random colour
colours = ["red", "blue", "green", "yellow", "purple"]
colour = random.choice(colours)
print(f"Random colour: {colour}")

# Simulate 10 coin flips
heads = 0
tails = 0
for i in range(10):
    if random.randint(0, 1) == 0:
        heads += 1
    else:
        tails += 1
print(f"Heads: {heads}, Tails: {tails}")`
};

// ============================================================
// CHAPTER EXPORT
// ============================================================

export const chapter07_random: Chapter = {
    id: "07_random",
    title: "Random",
    description: "Random Numbers",
    explanation: "Generate random numbers and choices.",
    exampleCode: "import random\\nprint(random.randint(1, 10))",
    exampleContent: randomExampleContent,
    challenges: random_challenges,
    homework: homeworkByChapter["07_random"]
};
