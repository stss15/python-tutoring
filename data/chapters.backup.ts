import { Chapter } from "../types";

export const chapters: Chapter[] = [
    {
        id: "first_functions",
        title: "Your First Functions",
        description: "Function Syntax, Parameters & Returns",
        explanation: `
      <p class="mb-4">Functions are reusable blocks of code. Every program you write should be organized into functions - this makes code easier to test, debug, and understand.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Defining Functions</h4>
      <p class="mb-2">Use <code>def</code> followed by the function name and parentheses. Parameters go inside the parentheses.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Type Hints</h4>
      <p class="mb-2">Type hints document what types your function expects: <code>def greet(name: str) -> str:</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Return vs Print</h4>
      <p class="mb-2"><code>return</code> sends a value back to the caller. <code>print</code> displays output but returns <code>None</code>.</p>
    `,
        exampleCode: `def add(a: int, b: int) -> int:
    """Add two numbers and return the result."""
    return a + b

def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"

# Calling functions
result = add(5, 3)      # result = 8
message = greet("Alex") # message = "Hello, Alex!"`,
        challenges: [
            {
                id: "001",
                number: 1,
                title: "🎮 Player Health Bar",
                description: "In a video game, players take damage! Create a function `calculate_health` that takes `current_health` and `damage` and returns the remaining health after taking damage.",
                hint: "Simply subtract the damage from the current health.",
                starterCode: `def calculate_health(current_health: int, damage: int) -> int:
    # A player with 100 health takes 25 damage -> 75 health remaining
    pass`,
                solutionCode: `def calculate_health(current_health: int, damage: int) -> int:
    """Calculate remaining health after taking damage."""
    return current_health - damage`,
                testCases: [
                    { input: "calculate_health(100, 25)", expected: "75" },
                    { input: "calculate_health(50, 50)", expected: "0" },
                    { input: "calculate_health(100, 0)", expected: "100" },
                    { input: "calculate_health(75, 30)", expected: "45" },
                    { input: "calculate_health(200, 150)", expected: "50" }
                ]
            },
            {
                id: "002",
                number: 2,
                title: "⭐ XP Multiplier",
                description: "Your game has a double XP weekend! Create a function `double_xp` that takes the base XP earned and returns double the amount.",
                hint: "Multiply the input by 2.",
                starterCode: `def double_xp(base_xp: int) -> int:
    # Earned 50 XP during double XP event -> 100 XP total!
    pass`,
                solutionCode: `def double_xp(base_xp: int) -> int:
    """Double the XP for special events."""
    return base_xp * 2`,
                testCases: [
                    { input: "double_xp(50)", expected: "100" },
                    { input: "double_xp(0)", expected: "0" },
                    { input: "double_xp(125)", expected: "250" },
                    { input: "double_xp(1)", expected: "2" },
                    { input: "double_xp(999)", expected: "1998" }
                ]
            },
            {
                id: "003",
                number: 3,
                title: "👋 Welcome Message",
                description: "Create a friendly chatbot! Write a function `welcome_user` that takes a username and returns `Welcome back, {username}!`",
                hint: "Use an f-string to insert the username into the message.",
                starterCode: `def welcome_user(username: str) -> str:
    # welcome_user("Sarah") -> "Welcome back, Sarah!"
    pass`,
                solutionCode: `def welcome_user(username: str) -> str:
    """Return a welcome message for the user."""
    return f"Welcome back, {username}!"`,
                testCases: [
                    { input: "welcome_user('Sarah')", expected: "'Welcome back, Sarah!'" },
                    { input: "welcome_user('Player1')", expected: "'Welcome back, Player1!'" },
                    { input: "welcome_user('Dr. Python')", expected: "'Welcome back, Dr. Python!'" },
                    { input: "welcome_user('Ada')", expected: "'Welcome back, Ada!'" },
                    { input: "welcome_user('NeuralNinja')", expected: "'Welcome back, NeuralNinja!'" }
                ]
            },
            {
                id: "004",
                number: 4,
                title: "🧪 Lab Experiment Score",
                description: "In a neuroscience lab, you run three trials and need the total score. Create `total_trials` that takes three trial scores and returns their sum.",
                hint: "Add all three parameters together.",
                starterCode: `def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    # Three trials scored 85, 90, 88 -> total is 263
    pass`,
                solutionCode: `def total_trials(trial1: int, trial2: int, trial3: int) -> int:
    """Sum up the scores from three experiment trials."""
    return trial1 + trial2 + trial3`,
                testCases: [
                    { input: "total_trials(85, 90, 88)", expected: "263" },
                    { input: "total_trials(100, 100, 100)", expected: "300" },
                    { input: "total_trials(0, 0, 0)", expected: "0" },
                    { input: "total_trials(50, 75, 25)", expected: "150" },
                    { input: "total_trials(33, 33, 34)", expected: "100" }
                ]
            },
            {
                id: "005",
                number: 5,
                title: "📊 Research Paper Citation",
                description: "Format an author citation! Create `format_author` that takes `first_name` and `last_name` and returns them as `Last, First` (like in academic papers).",
                hint: "Use an f-string with the format: {last_name}, {first_name}",
                starterCode: `def format_author(first_name: str, last_name: str) -> str:
    # format_author("Ada", "Lovelace") -> "Lovelace, Ada"
    pass`,
                solutionCode: `def format_author(first_name: str, last_name: str) -> str:
    """Format author name for academic citation."""
    return f"{last_name}, {first_name}"`,
                testCases: [
                    { input: "format_author('Ada', 'Lovelace')", expected: "'Lovelace, Ada'" },
                    { input: "format_author('Alan', 'Turing')", expected: "'Turing, Alan'" },
                    { input: "format_author('Marie', 'Curie')", expected: "'Curie, Marie'" },
                    { input: "format_author('Santiago', 'Cajal')", expected: "'Cajal, Santiago'" },
                    { input: "format_author('Rosalind', 'Franklin')", expected: "'Franklin, Rosalind'" }
                ]
            },
            {
                id: "006",
                number: 6,
                title: "🖼️ Image Resolution",
                description: "Calculate total pixels in an image! Create `total_pixels` that takes `width` and `height` in pixels and returns the total pixel count.",
                hint: "Total pixels = width × height",
                starterCode: `def total_pixels(width: int, height: int) -> int:
    # A 1920x1080 image has 2,073,600 pixels
    pass`,
                solutionCode: `def total_pixels(width: int, height: int) -> int:
    """Calculate total pixels in an image."""
    return width * height`,
                testCases: [
                    { input: "total_pixels(1920, 1080)", expected: "2073600" },
                    { input: "total_pixels(100, 100)", expected: "10000" },
                    { input: "total_pixels(640, 480)", expected: "307200" },
                    { input: "total_pixels(1, 1)", expected: "1" },
                    { input: "total_pixels(3840, 2160)", expected: "8294400" }
                ]
            },
            {
                id: "007",
                number: 7,
                title: "🎵 Song Duration Average",
                description: "Calculate the average length of two songs. Create `average_duration` that takes two song durations (in seconds) and returns the average.",
                hint: "Add both durations and divide by 2.",
                starterCode: `def average_duration(song1: int, song2: int) -> float:
    # Songs of 180 and 240 seconds have average of 210.0 seconds
    pass`,
                solutionCode: `def average_duration(song1: int, song2: int) -> float:
    """Calculate average duration of two songs."""
    return (song1 + song2) / 2`,
                testCases: [
                    { input: "average_duration(180, 240)", expected: "210.0" },
                    { input: "average_duration(200, 200)", expected: "200.0" },
                    { input: "average_duration(300, 100)", expected: "200.0" },
                    { input: "average_duration(0, 120)", expected: "60.0" },
                    { input: "average_duration(185, 215)", expected: "200.0" }
                ]
            },
            {
                id: "008",
                number: 8,
                title: "🧠 Neuron Connections",
                description: "A neuron can form connections cubed! If a neuron has `n` dendrites, it can potentially form n³ unique synaptic patterns. Create `synaptic_patterns` that calculates this.",
                hint: "Use the power operator: n ** 3",
                starterCode: `def synaptic_patterns(dendrites: int) -> int:
    # 4 dendrites = 64 possible patterns (4³)
    pass`,
                solutionCode: `def synaptic_patterns(dendrites: int) -> int:
    """Calculate possible synaptic patterns (n cubed)."""
    return dendrites ** 3`,
                testCases: [
                    { input: "synaptic_patterns(4)", expected: "64" },
                    { input: "synaptic_patterns(2)", expected: "8" },
                    { input: "synaptic_patterns(10)", expected: "1000" },
                    { input: "synaptic_patterns(1)", expected: "1" },
                    { input: "synaptic_patterns(5)", expected: "125" }
                ]
            },
            {
                id: "009",
                number: 9,
                title: "📋 Experiment Log Entry",
                description: "Create formatted lab entries! Write `log_entry` that takes a `researcher` name and `day` number, returning `Day {day}: Experiment conducted by {researcher}`",
                hint: "Use an f-string combining both parameters into the required format.",
                starterCode: `def log_entry(researcher: str, day: int) -> str:
    # log_entry("Dr. Chen", 5) -> "Day 5: Experiment conducted by Dr. Chen"
    pass`,
                solutionCode: `def log_entry(researcher: str, day: int) -> str:
    """Format a lab experiment log entry."""
    return f"Day {day}: Experiment conducted by {researcher}"`,
                testCases: [
                    { input: "log_entry('Dr. Chen', 5)", expected: "'Day 5: Experiment conducted by Dr. Chen'" },
                    { input: "log_entry('Sarah', 1)", expected: "'Day 1: Experiment conducted by Sarah'" },
                    { input: "log_entry('Lab Team', 100)", expected: "'Day 100: Experiment conducted by Lab Team'" },
                    { input: "log_entry('AI Assistant', 42)", expected: "'Day 42: Experiment conducted by AI Assistant'" },
                    { input: "log_entry('Prof. Neural', 365)", expected: "'Day 365: Experiment conducted by Prof. Neural'" }
                ]
            },
            {
                id: "010",
                number: 10,
                title: "📈 Data Accuracy Rate",
                description: "Calculate what percentage of data points were accurate. Create `accuracy_rate` that takes `correct` and `total` samples, returning the percentage.",
                hint: "Percentage = (correct / total) × 100",
                starterCode: `def accuracy_rate(correct: int, total: int) -> float:
    # 45 correct out of 50 total = 90.0% accuracy
    pass`,
                solutionCode: `def accuracy_rate(correct: int, total: int) -> float:
    """Calculate accuracy as a percentage."""
    return (correct / total) * 100`,
                testCases: [
                    { input: "accuracy_rate(45, 50)", expected: "90.0" },
                    { input: "accuracy_rate(100, 100)", expected: "100.0" },
                    { input: "accuracy_rate(75, 100)", expected: "75.0" },
                    { input: "accuracy_rate(1, 4)", expected: "25.0" },
                    { input: "accuracy_rate(88, 100)", expected: "88.0" }
                ]
            },
            {
                id: "011-assessment",
                number: 11,
                title: "🏆 Final Challenge: Brain Scan Analyzer",
                description: "Build a complete brain scan analysis system! Write THREE functions: 1) `average_activity(region1: float, region2: float, region3: float) -> float` returns the average neural activity across three brain regions. 2) `activity_level(average: float) -> str` returns 'High' for 75+, 'Normal' for 40-74, 'Low' for below 40. 3) `generate_scan_report(patient: str, r1: float, r2: float, r3: float) -> str` uses both functions to return: '{patient}: Average Activity {avg:.1f}, Level: {level}'",
                hint: "Build one function at a time! Test average_activity first, then activity_level, finally combine them in generate_scan_report.",
                starterCode: `def average_activity(region1: float, region2: float, region3: float) -> float:
    # Calculate average across three brain regions
    pass

def activity_level(average: float) -> str:
    # Return "High", "Normal", or "Low" based on thresholds
    pass

def generate_scan_report(patient: str, r1: float, r2: float, r3: float) -> str:
    # Combine functions to create full report
    pass

# Test your functions!
print(average_activity(80, 75, 85))  # Should print: 80.0
print(activity_level(80))             # Should print: High
print(generate_scan_report("Patient A", 80, 75, 85))`,
                solutionCode: `def average_activity(region1: float, region2: float, region3: float) -> float:
    """Calculate average neural activity across three brain regions."""
    return (region1 + region2 + region3) / 3

def activity_level(average: float) -> str:
    """Classify activity level based on average."""
    if average >= 75:
        return "High"
    if average >= 40:
        return "Normal"
    return "Low"

def generate_scan_report(patient: str, r1: float, r2: float, r3: float) -> str:
    """Generate a complete brain scan analysis report."""
    avg = average_activity(r1, r2, r3)
    level = activity_level(avg)
    return f"{patient}: Average Activity {avg:.1f}, Level: {level}"

# Test
print(average_activity(80, 75, 85))
print(activity_level(80))
print(generate_scan_report("Patient A", 80, 75, 85))`,
                testCases: [
                    { input: "average_activity(80, 75, 85)", expected: "80.0" },
                    { input: "average_activity(30, 30, 30)", expected: "30.0" },
                    { input: "activity_level(80)", expected: "'High'" },
                    { input: "activity_level(50)", expected: "'Normal'" },
                    { input: "activity_level(30)", expected: "'Low'" },
                    { input: "activity_level(75)", expected: "'High'" },
                    { input: "activity_level(40)", expected: "'Normal'" },
                    { input: "generate_scan_report('Patient A', 80, 75, 85)", expected: "'Patient A: Average Activity 80.0, Level: High'" },
                    { input: "generate_scan_report('Subject 1', 60, 50, 40)", expected: "'Subject 1: Average Activity 50.0, Level: Normal'" }
                ]
            },
        ],
    },
    {
        id: "working_with_numbers",
        title: "Working with Numbers",
        description: "Arithmetic, Math Operations & Rounding",
        explanation: `
      <p class="mb-4">Python handles both integers (whole numbers) and floats (decimals). Understanding arithmetic operations is fundamental.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic Operators</h4>
      <p class="mb-2"><code>+</code> add, <code>-</code> subtract, <code>*</code> multiply, <code>/</code> divide, <code>**</code> power</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Integer Division & Modulo</h4>
      <p class="mb-2"><code>//</code> divides and rounds down to nearest integer. <code>%</code> gives the remainder.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Rounding</h4>
      <p class="mb-2"><code>round(number, decimals)</code> rounds to specified decimal places.</p>
    `,
        exampleCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount for a restaurant bill."""
    tip = bill * (tip_percent / 100)
    return round(tip, 2)

def get_remainder(dividend: int, divisor: int) -> int:
    """Return the remainder when dividing two numbers."""
    return dividend % divisor

print(calculate_tip(85.50, 20))  # 17.1
print(get_remainder(17, 5))      # 2`,
        challenges: [
            {
                id: "011",
                number: 1,
                title: "🌡️ Lab Temperature Conversion",
                description: "In neuroscience labs, equipment uses different temperature scales! Create `celsius_to_fahrenheit` that converts Celsius to Fahrenheit using: (celsius × 9/5) + 32",
                hint: "Follow the formula exactly: multiply by 9, divide by 5, then add 32.",
                starterCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    # Brain tissue stored at -80°C = ? Fahrenheit
    pass`,
                solutionCode: `def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32`,
                testCases: [
                    { input: "celsius_to_fahrenheit(0)", expected: "32.0" },
                    { input: "celsius_to_fahrenheit(100)", expected: "212.0" },
                    { input: "celsius_to_fahrenheit(-40)", expected: "-40.0" },
                    { input: "celsius_to_fahrenheit(37)", expected: "98.6" },
                    { input: "celsius_to_fahrenheit(25)", expected: "77.0" }
                ]
            },
            {
                id: "012",
                number: 2,
                title: "🧊 Cryogenic Storage Check",
                description: "Convert temperatures back to Celsius for lab records! Create `fahrenheit_to_celsius` using: (fahrenheit - 32) × 5/9",
                hint: "Subtract 32 first, then multiply by 5/9.",
                starterCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    # Room temp 68°F = ? Celsius
    pass`,
                solutionCode: `def fahrenheit_to_celsius(fahrenheit: float) -> float:
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9`,
                testCases: [
                    { input: "fahrenheit_to_celsius(32)", expected: "0.0" },
                    { input: "fahrenheit_to_celsius(212)", expected: "100.0" },
                    { input: "fahrenheit_to_celsius(-40)", expected: "-40.0" },
                    { input: "fahrenheit_to_celsius(98.6)", expected: "37.0" },
                    { input: "fahrenheit_to_celsius(68)", expected: "20.0" }
                ]
            },
            {
                id: "013",
                number: 3,
                title: "🍕 Pizza Party Split",
                description: "Your lab is ordering pizza! Create `split_bill` that takes a total and number of people, returning each person's share rounded to 2 decimal places.",
                hint: "Divide total by number of people, then use round(result, 2).",
                starterCode: `def split_bill(total: float, num_people: int) -> float:
    # $47.50 split 4 ways = $11.88 each
    pass`,
                solutionCode: `def split_bill(total: float, num_people: int) -> float:
    """Split a bill evenly among people."""
    return round(total / num_people, 2)`,
                testCases: [
                    { input: "split_bill(100, 2)", expected: "50.0" },
                    { input: "split_bill(47.50, 4)", expected: "11.88" },
                    { input: "split_bill(10, 3)", expected: "3.33" },
                    { input: "split_bill(123.45, 5)", expected: "24.69" },
                    { input: "split_bill(75, 6)", expected: "12.5" }
                ]
            },
            {
                id: "014",
                number: 4,
                title: "🎁 Generosity Calculator",
                description: "Calculate gratuity for great service! Create `calculate_tip` that takes a bill amount and tip percentage, returning the tip amount rounded to 2 decimals.",
                hint: "Convert percentage to decimal (divide by 100), multiply by bill, round the result.",
                starterCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    # $85 bill with 20% tip = $17.00 tip
    pass`,
                solutionCode: `def calculate_tip(bill: float, tip_percent: int) -> float:
    """Calculate tip amount from bill and percentage."""
    return round(bill * (tip_percent / 100), 2)`,
                testCases: [
                    { input: "calculate_tip(100, 20)", expected: "20.0" },
                    { input: "calculate_tip(85.50, 20)", expected: "17.1" },
                    { input: "calculate_tip(50, 15)", expected: "7.5" },
                    { input: "calculate_tip(42.50, 18)", expected: "7.65" },
                    { input: "calculate_tip(100, 0)", expected: "0.0" }
                ]
            },
            {
                id: "015",
                number: 5,
                title: "🐁 Lab Mouse Weight Tracker",
                description: "Convert mouse weights for international collaborators! Create `grams_to_ounces` that converts grams to ounces (1 gram = 0.03527 ounces), rounded to 2 decimal places.",
                hint: "Multiply by the conversion factor, then round.",
                starterCode: `def grams_to_ounces(grams: float) -> float:
    # A 25g mouse = ? ounces
    pass`,
                solutionCode: `def grams_to_ounces(grams: float) -> float:
    """Convert grams to ounces."""
    return round(grams * 0.03527, 2)`,
                testCases: [
                    { input: "grams_to_ounces(25)", expected: "0.88" },
                    { input: "grams_to_ounces(100)", expected: "3.53" },
                    { input: "grams_to_ounces(0)", expected: "0.0" },
                    { input: "grams_to_ounces(500)", expected: "17.64" },
                    { input: "grams_to_ounces(28.35)", expected: "1.0" }
                ]
            },
            {
                id: "016",
                number: 6,
                title: "⏱️ Experiment Duration",
                description: "Convert experiment time for lab protocols! Create `minutes_to_seconds` that takes minutes and returns total seconds.",
                hint: "Multiply minutes by 60.",
                starterCode: `def minutes_to_seconds(minutes: int) -> int:
    # 90 minute experiment = ? seconds
    pass`,
                solutionCode: `def minutes_to_seconds(minutes: int) -> int:
    """Convert minutes to seconds."""
    return minutes * 60`,
                testCases: [
                    { input: "minutes_to_seconds(1)", expected: "60" },
                    { input: "minutes_to_seconds(90)", expected: "5400" },
                    { input: "minutes_to_seconds(0)", expected: "0" },
                    { input: "minutes_to_seconds(45)", expected: "2700" },
                    { input: "minutes_to_seconds(120)", expected: "7200" }
                ]
            },
            {
                id: "017",
                number: 7,
                title: "📦 Sample Distribution",
                description: "You have samples to distribute evenly across petri dishes, but need to know the leftovers! Create `remaining_samples` that returns how many samples are left over after equal distribution.",
                hint: "Use the modulo operator % to get the remainder.",
                starterCode: `def remaining_samples(total_samples: int, num_dishes: int) -> int:
    # 17 samples into 5 dishes = 2 left over
    pass`,
                solutionCode: `def remaining_samples(total_samples: int, num_dishes: int) -> int:
    """Return leftover samples after even distribution."""
    return total_samples % num_dishes`,
                testCases: [
                    { input: "remaining_samples(17, 5)", expected: "2" },
                    { input: "remaining_samples(20, 5)", expected: "0" },
                    { input: "remaining_samples(100, 7)", expected: "2" },
                    { input: "remaining_samples(7, 10)", expected: "7" },
                    { input: "remaining_samples(15, 15)", expected: "0" }
                ]
            },
            {
                id: "018",
                number: 8,
                title: "🧫 Samples Per Dish",
                description: "Calculate how many FULL samples go in each dish using integer division! Create `samples_per_dish` that returns whole samples per dish (ignoring remainder).",
                hint: "Use floor division // to get the integer result.",
                starterCode: `def samples_per_dish(total_samples: int, num_dishes: int) -> int:
    # 17 samples into 5 dishes = 3 per dish (with 2 left over)
    pass`,
                solutionCode: `def samples_per_dish(total_samples: int, num_dishes: int) -> int:
    """Return whole samples per dish using integer division."""
    return total_samples // num_dishes`,
                testCases: [
                    { input: "samples_per_dish(17, 5)", expected: "3" },
                    { input: "samples_per_dish(20, 5)", expected: "4" },
                    { input: "samples_per_dish(100, 7)", expected: "14" },
                    { input: "samples_per_dish(5, 10)", expected: "0" },
                    { input: "samples_per_dish(25, 5)", expected: "5" }
                ]
            },
            {
                id: "019",
                number: 9,
                title: "🔬 Coverage Area Calculator",
                description: "Calculate the area covered by a circular microscope objective! Create `circular_area` that takes radius (in mm) and returns the area. Use π = 3.14159, round to 2 decimals.",
                hint: "Area = π × radius². Use the ** operator for power.",
                starterCode: `def circular_area(radius: float) -> float:
    # A 5mm radius objective covers an area of 78.54 mm²
    pass`,
                solutionCode: `def circular_area(radius: float) -> float:
    """Calculate area of a circle."""
    pi = 3.14159
    return round(pi * radius ** 2, 2)`,
                testCases: [
                    { input: "circular_area(5)", expected: "78.54" },
                    { input: "circular_area(1)", expected: "3.14" },
                    { input: "circular_area(10)", expected: "314.16" },
                    { input: "circular_area(0)", expected: "0.0" },
                    { input: "circular_area(2.5)", expected: "19.63" }
                ]
            },
            {
                id: "020",
                number: 10,
                title: "🏆 Final Challenge: Grant Budget Growth",
                description: "Model how a research grant grows with compound interest! Create `grant_growth` that calculates the final amount after compound growth: principal × (1 + rate)^years, rounded to 2 decimals.",
                hint: "Use the ** operator for exponentiation: (1 + rate) ** years",
                starterCode: `def grant_growth(principal: float, rate: float, years: int) -> float:
    # $100,000 grant at 5% growth for 5 years = $127,628.16
    pass`,
                solutionCode: `def grant_growth(principal: float, rate: float, years: int) -> float:
    """Calculate compound growth of a grant."""
    return round(principal * (1 + rate) ** years, 2)`,
                testCases: [
                    { input: "grant_growth(100000, 0.05, 5)", expected: "127628.16" },
                    { input: "grant_growth(50000, 0.03, 10)", expected: "67195.82" },
                    { input: "grant_growth(10000, 0.1, 2)", expected: "12100.0" },
                    { input: "grant_growth(25000, 0, 5)", expected: "25000.0" },
                    { input: "grant_growth(10000, 0.07, 3)", expected: "12250.43" }
                ]
            },
        ],
    },
    {
        id: "making_decisions",
        title: "Making Decisions",
        description: "If, Elif, Else & Comparisons",
        explanation: `
      <p class="mb-4">Programs make decisions using conditional statements. These let your code take different paths based on conditions.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Comparison Operators</h4>
      <p class="mb-2"><code>==</code> equal, <code>!=</code> not equal, <code><</code> less than, <code>></code> greater than, <code><=</code> less or equal, <code>>=</code> greater or equal</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Logical Operators</h4>
      <p class="mb-2"><code>and</code> both must be true, <code>or</code> either can be true, <code>not</code> inverts</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Early Return Pattern</h4>
      <p class="mb-2">Return as soon as you have an answer - keeps code flat and readable.</p>
    `,
        exampleCode: `def get_grade(score: int) -> str:
    """Return letter grade for a numeric score."""
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"

def is_adult(age: int) -> bool:
    """Return True if age is 18 or older."""
    return age >= 18`,
        challenges: [
            {
                id: "021",
                number: 1,
                title: "🧠 Neural Signal Detector",
                description: "Detect if a neural signal is above the noise threshold! Create `signal_detected` that returns True if the signal strength is greater than 0.",
                hint: "Use the > comparison operator.",
                starterCode: `def signal_detected(strength: float) -> bool:
    # Positive signal = neuron firing, otherwise noise
    pass`,
                solutionCode: `def signal_detected(strength: float) -> bool:
    """Check if neural signal is above noise threshold."""
    return strength > 0`,
                testCases: [
                    { input: "signal_detected(0.5)", expected: "True" },
                    { input: "signal_detected(-0.3)", expected: "False" },
                    { input: "signal_detected(0)", expected: "False" },
                    { input: "signal_detected(100)", expected: "True" },
                    { input: "signal_detected(-50)", expected: "False" }
                ]
            },
            {
                id: "022",
                number: 2,
                title: "🎮 Even/Odd Level Selector",
                description: "In your game, even-numbered levels have bosses! Create `has_boss` that returns True if the level number is even.",
                hint: "Use the modulo operator: n % 2 == 0 means even.",
                starterCode: `def has_boss(level: int) -> bool:
    # Even levels (2, 4, 6...) have boss fights
    pass`,
                solutionCode: `def has_boss(level: int) -> bool:
    """Check if level has a boss (even levels)."""
    return level % 2 == 0`,
                testCases: [
                    { input: "has_boss(4)", expected: "True" },
                    { input: "has_boss(7)", expected: "False" },
                    { input: "has_boss(0)", expected: "True" },
                    { input: "has_boss(100)", expected: "True" },
                    { input: "has_boss(1)", expected: "False" }
                ]
            },
            {
                id: "023",
                number: 3,
                title: "📊 Data Magnitude",
                description: "In data analysis, we often need absolute values. Create `magnitude` that returns the absolute value of a number WITHOUT using the built-in abs() function.",
                hint: "If the number is negative, multiply by -1 to make it positive.",
                starterCode: `def magnitude(n: float) -> float:
    # Distance from zero (always positive)
    pass`,
                solutionCode: `def magnitude(n: float) -> float:
    """Return absolute value without using abs()."""
    if n < 0:
        return -n
    return n`,
                testCases: [
                    { input: "magnitude(-5)", expected: "5" },
                    { input: "magnitude(10)", expected: "10" },
                    { input: "magnitude(0)", expected: "0" },
                    { input: "magnitude(-100.5)", expected: "100.5" },
                    { input: "magnitude(42)", expected: "42" }
                ]
            },
            {
                id: "024",
                number: 4,
                title: "🏆 High Score Checker",
                description: "Compare two players' scores! Create `higher_score` that takes two scores and returns the higher one.",
                hint: "Use an if statement to compare, or realize the logic is simple!",
                starterCode: `def higher_score(score_a: int, score_b: int) -> int:
    # Who got the better score?
    pass`,
                solutionCode: `def higher_score(score_a: int, score_b: int) -> int:
    """Return the higher of two scores."""
    if score_a > score_b:
        return score_a
    return score_b`,
                testCases: [
                    { input: "higher_score(100, 50)", expected: "100" },
                    { input: "higher_score(25, 75)", expected: "75" },
                    { input: "higher_score(50, 50)", expected: "50" },
                    { input: "higher_score(0, 100)", expected: "100" },
                    { input: "higher_score(999, 1)", expected: "999" }
                ]
            },
            {
                id: "025",
                number: 5,
                title: "🧪 Best Trial Result",
                description: "Find the best result from three experiment trials! Create `best_of_three` that returns the highest value from three measurements.",
                hint: "Compare values step by step, or keep track of the current maximum.",
                starterCode: `def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    # Which trial had the best result?
    pass`,
                solutionCode: `def best_of_three(trial1: float, trial2: float, trial3: float) -> float:
    """Return the highest of three trial results."""
    best = trial1
    if trial2 > best:
        best = trial2
    if trial3 > best:
        best = trial3
    return best`,
                testCases: [
                    { input: "best_of_three(85, 90, 88)", expected: "90" },
                    { input: "best_of_three(100, 50, 75)", expected: "100" },
                    { input: "best_of_three(10, 20, 30)", expected: "30" },
                    { input: "best_of_three(50, 50, 50)", expected: "50" },
                    { input: "best_of_three(-5, -10, -1)", expected: "-1" }
                ]
            },
            {
                id: "026",
                number: 6,
                title: "🔬 Experiment Rating",
                description: "Rate experiment results! Create `result_rating` that takes a score (0-100) and returns: 'Excellent' for 90+, 'Good' for 75-89, 'Acceptable' for 60-74, 'Poor' for below 60.",
                hint: "Use the early return pattern - check from highest threshold first.",
                starterCode: `def result_rating(score: int) -> str:
    # Classify the experiment outcome
    pass`,
                solutionCode: `def result_rating(score: int) -> str:
    """Convert score to quality rating."""
    if score >= 90:
        return "Excellent"
    if score >= 75:
        return "Good"
    if score >= 60:
        return "Acceptable"
    return "Poor"`,
                testCases: [
                    { input: "result_rating(95)", expected: "'Excellent'" },
                    { input: "result_rating(82)", expected: "'Good'" },
                    { input: "result_rating(68)", expected: "'Acceptable'" },
                    { input: "result_rating(45)", expected: "'Poor'" },
                    { input: "result_rating(90)", expected: "'Excellent'" }
                ]
            },
            {
                id: "027",
                number: 7,
                title: "🎯 Lab Protocol Checker",
                description: "Check experiment validity! Create `protocol_status` that returns 'Valid' if sample_count is divisible by 3, 'Calibration Needed' if divisible by 5, 'Standard' otherwise. If divisible by BOTH, return 'Optimal'.",
                hint: "Check the 'both' case first (divisible by 3 AND 5).",
                starterCode: `def protocol_status(sample_count: int) -> str:
    # Check protocol standards based on sample count
    pass`,
                solutionCode: `def protocol_status(sample_count: int) -> str:
    """Determine lab protocol status based on sample count."""
    if sample_count % 3 == 0 and sample_count % 5 == 0:
        return "Optimal"
    if sample_count % 3 == 0:
        return "Valid"
    if sample_count % 5 == 0:
        return "Calibration Needed"
    return "Standard"`,
                testCases: [
                    { input: "protocol_status(15)", expected: "'Optimal'" },
                    { input: "protocol_status(9)", expected: "'Valid'" },
                    { input: "protocol_status(10)", expected: "'Calibration Needed'" },
                    { input: "protocol_status(7)", expected: "'Standard'" },
                    { input: "protocol_status(30)", expected: "'Optimal'" }
                ]
            },
            {
                id: "028",
                number: 8,
                title: "🎫 Conference Registration Fee",
                description: "Calculate conference fees by attendee type! Create `registration_fee` that takes `attendee_type`: 'student' = $50, 'academic' = $150, 'industry' = $300, anything else = $200.",
                hint: "Check each attendee type and return the appropriate fee.",
                starterCode: `def registration_fee(attendee_type: str) -> int:
    # Different fees for different attendees
    pass`,
                solutionCode: `def registration_fee(attendee_type: str) -> int:
    """Return conference registration fee based on attendee type."""
    if attendee_type == "student":
        return 50
    if attendee_type == "academic":
        return 150
    if attendee_type == "industry":
        return 300
    return 200`,
                testCases: [
                    { input: "registration_fee('student')", expected: "50" },
                    { input: "registration_fee('academic')", expected: "150" },
                    { input: "registration_fee('industry')", expected: "300" },
                    { input: "registration_fee('other')", expected: "200" },
                    { input: "registration_fee('guest')", expected: "200" }
                ]
            },
            {
                id: "029",
                number: 9,
                title: "📈 Normal Range Checker",
                description: "Check if a measurement is within the normal range! Create `is_normal` that returns True if the value is between the low and high bounds (inclusive).",
                hint: "Use chained comparison: low <= value <= high",
                starterCode: `def is_normal(value: float, low: float, high: float) -> bool:
    # Is the measurement within acceptable bounds?
    pass`,
                solutionCode: `def is_normal(value: float, low: float, high: float) -> bool:
    """Check if value is within the normal range (inclusive)."""
    return low <= value <= high`,
                testCases: [
                    { input: "is_normal(5, 1, 10)", expected: "True" },
                    { input: "is_normal(0, 1, 10)", expected: "False" },
                    { input: "is_normal(1, 1, 10)", expected: "True" },
                    { input: "is_normal(10, 1, 10)", expected: "True" },
                    { input: "is_normal(15, 1, 10)", expected: "False" }
                ]
            },
            {
                id: "030",
                number: 10,
                title: "🏆 Final Challenge: Smart Dosage Calculator",
                description: "Build a medication dosage system! Create `calculate_dosage` that takes weight_kg and age. Base dose is 5mg per kg. Reduce by 25% if under 12 or over 65. If weight < 10kg, return 'Consult specialist'. Round to 1 decimal.",
                hint: "First check special case (under 10kg). Then calculate base dose. Finally adjust for age if needed.",
                starterCode: `def calculate_dosage(weight_kg: float, age: int) -> str:
    # Smart dosage based on weight and age
    # Return either "Consult specialist" or the dose like "50.0mg"
    pass`,
                solutionCode: `def calculate_dosage(weight_kg: float, age: int) -> str:
    """Calculate medication dosage with age adjustment."""
    if weight_kg < 10:
        return "Consult specialist"
    
    base_dose = weight_kg * 5  # 5mg per kg
    
    if age < 12 or age > 65:
        base_dose = base_dose * 0.75  # 25% reduction
    
    return f"{round(base_dose, 1)}mg"`,
                testCases: [
                    { input: "calculate_dosage(70, 30)", expected: "'350.0mg'" },
                    { input: "calculate_dosage(70, 10)", expected: "'262.5mg'" },
                    { input: "calculate_dosage(70, 70)", expected: "'262.5mg'" },
                    { input: "calculate_dosage(8, 5)", expected: "'Consult specialist'" },
                    { input: "calculate_dosage(50, 40)", expected: "'250.0mg'" }
                ]
            },
        ],
    },

    {
        id: "text_basics",
        title: "Text Processing Basics",
        description: "String Methods & Formatting",
        explanation: `
      <p class="mb-4">Strings are sequences of characters. Python provides powerful built-in methods for working with text.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common String Methods</h4>
      <p class="mb-2"><code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace()</code>, <code>.split()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Properties</h4>
      <p class="mb-2"><code>len(s)</code> for length, <code>in</code> to check containment, indexing with <code>s[0]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">f-Strings</h4>
      <p class="mb-2">f-strings embed expressions: <code>f"Hello {name}, you are {age} years old"</code></p>
    `,
        exampleCode: `def shout(text: str) -> str:
    """Return text in uppercase with exclamation."""
    return f"{text.upper()}!"

def clean_input(text: str) -> str:
    """Remove whitespace and convert to lowercase."""
    return text.strip().lower()

def get_initials(full_name: str) -> str:
    """Return initials from a full name."""
    parts = full_name.split()
    initials = ""
    for part in parts:
        initials += part[0].upper()
    return initials`,
        challenges: [
            {
                id: "033",
                number: 1,
                title: "📢 Alert Message",
                description: "Create an alert system! Write `alert_message` that takes a message and returns it in ALL CAPS for urgency.",
                hint: "Use the .upper() method on strings.",
                starterCode: `def alert_message(message: str) -> str:
    # Make the message urgent!
    pass`,
                solutionCode: `def alert_message(message: str) -> str:
    """Convert message to uppercase for alerts."""
    return message.upper()`,
                testCases: [
                    { input: "alert_message('warning')", expected: "'WARNING'" },
                    { input: "alert_message('System Error')", expected: "'SYSTEM ERROR'" },
                    { input: "alert_message('check results')", expected: "'CHECK RESULTS'" },
                    { input: "alert_message('a')", expected: "'A'" },
                    { input: "alert_message('')", expected: "''" }
                ]
            },
            {
                id: "034",
                number: 2,
                title: "🔐 Normalize Username",
                description: "Usernames should be lowercase! Create `normalize_username` that converts any username to lowercase.",
                hint: "Use the .lower() method.",
                starterCode: `def normalize_username(username: str) -> str:
    # Standardize username to lowercase
    pass`,
                solutionCode: `def normalize_username(username: str) -> str:
    """Convert username to lowercase."""
    return username.lower()`,
                testCases: [
                    { input: "normalize_username('DrNeural')", expected: "'drneural'" },
                    { input: "normalize_username('ADMIN')", expected: "'admin'" },
                    { input: "normalize_username('User123')", expected: "'user123'" },
                    { input: "normalize_username('test')", expected: "'test'" },
                    { input: "normalize_username('ABC')", expected: "'abc'" }
                ]
            },
            {
                id: "035",
                number: 3,
                title: "📏 Password Length Checker",
                description: "Check if passwords meet length requirements! Create `password_length` that returns the length of a password string.",
                hint: "Use the len() function.",
                starterCode: `def password_length(password: str) -> int:
    # How many characters in this password?
    pass`,
                solutionCode: `def password_length(password: str) -> int:
    """Return the length of a password."""
    return len(password)`,
                testCases: [
                    { input: "password_length('secret123')", expected: "9" },
                    { input: "password_length('')", expected: "0" },
                    { input: "password_length('a')", expected: "1" },
                    { input: "password_length('MySecureP@ss!')", expected: "13" },
                    { input: "password_length('12345678')", expected: "8" }
                ]
            },
            {
                id: "036",
                number: 4,
                title: "🔑 Get First Initial",
                description: "Extract someone's first initial for ID badges! Create `first_initial` that returns the first character of a name.",
                hint: "Use index [0] to access the first character.",
                starterCode: `def first_initial(name: str) -> str:
    # Get the first letter of the name
    pass`,
                solutionCode: `def first_initial(name: str) -> str:
    """Return the first character of a name."""
    return name[0]`,
                testCases: [
                    { input: "first_initial('Alice')", expected: "'A'" },
                    { input: "first_initial('bob')", expected: "'b'" },
                    { input: "first_initial('Neuroscience')", expected: "'N'" },
                    { input: "first_initial('123')", expected: "'1'" },
                    { input: "first_initial('X')", expected: "'X'" }
                ]
            },
            {
                id: "037",
                number: 5,
                title: "🏷️ File Extension Checker",
                description: "Get the last character to help identify file types! Create `last_character` that returns the last character of a filename.",
                hint: "Use index [-1] for the last character.",
                starterCode: `def last_character(text: str) -> str:
    # Get the final character
    pass`,
                solutionCode: `def last_character(text: str) -> str:
    """Return the last character of text."""
    return text[-1]`,
                testCases: [
                    { input: "last_character('data.csv')", expected: "'v'" },
                    { input: "last_character('report')", expected: "'t'" },
                    { input: "last_character('x')", expected: "'x'" },
                    { input: "last_character('test123')", expected: "'3'" },
                    { input: "last_character('Hello!')", expected: "'!'" }
                ]
            },
            {
                id: "038",
                number: 6,
                title: "🔍 Keyword Search",
                description: "Search for keywords in research abstracts! Create `contains_keyword` that returns True if a keyword exists in the text.",
                hint: "Use the 'in' operator: keyword in text",
                starterCode: `def contains_keyword(text: str, keyword: str) -> bool:
    # Is the keyword in the text?
    pass`,
                solutionCode: `def contains_keyword(text: str, keyword: str) -> bool:
    """Check if keyword is in text."""
    return keyword in text`,
                testCases: [
                    { input: "contains_keyword('neural networks are powerful', 'neural')", expected: "True" },
                    { input: "contains_keyword('machine learning', 'deep')", expected: "False" },
                    { input: "contains_keyword('data science', 'data')", expected: "True" },
                    { input: "contains_keyword('Python programming', 'python')", expected: "False" },
                    { input: "contains_keyword('AI research', 'AI')", expected: "True" }
                ]
            },
            {
                id: "039",
                number: 7,
                title: "🧹 Clean User Input",
                description: "Sanitize form input! Create `clean_input` that removes leading/trailing whitespace and converts to lowercase.",
                hint: "Chain methods: text.strip().lower()",
                starterCode: `def clean_input(text: str) -> str:
    # Remove whitespace and normalize case
    pass`,
                solutionCode: `def clean_input(text: str) -> str:
    """Strip whitespace and convert to lowercase."""
    return text.strip().lower()`,
                testCases: [
                    { input: "clean_input('  Hello  ')", expected: "'hello'" },
                    { input: "clean_input('  EXPERIMENT  ')", expected: "'experiment'" },
                    { input: "clean_input('Data')", expected: "'data'" },
                    { input: "clean_input('   test   ')", expected: "'test'" },
                    { input: "clean_input('already clean')", expected: "'already clean'" }
                ]
            },
            {
                id: "040",
                number: 8,
                title: "🧬 DNA Sequence Repeater",
                description: "Amplify DNA sequences! Create `amplify_sequence` that repeats a sequence n times (like PCR!).",
                hint: "Use string multiplication: text * n",
                starterCode: `def amplify_sequence(sequence: str, cycles: int) -> str:
    # Repeat the sequence n times
    pass`,
                solutionCode: `def amplify_sequence(sequence: str, cycles: int) -> str:
    """Repeat a DNA sequence multiple times."""
    return sequence * cycles`,
                testCases: [
                    { input: "amplify_sequence('ATG', 3)", expected: "'ATGATGATG'" },
                    { input: "amplify_sequence('GC', 4)", expected: "'GCGCGCGC'" },
                    { input: "amplify_sequence('A', 5)", expected: "'AAAAA'" },
                    { input: "amplify_sequence('TATA', 0)", expected: "''" },
                    { input: "amplify_sequence('CAT', 2)", expected: "'CATCAT'" }
                ]
            },
            {
                id: "041",
                number: 9,
                title: "📁 Filename Sanitizer",
                description: "Make filenames safe! Create `sanitize_filename` that replaces all spaces with underscores.",
                hint: "Use .replace(' ', '_')",
                starterCode: `def sanitize_filename(filename: str) -> str:
    # Replace spaces with underscores
    pass`,
                solutionCode: `def sanitize_filename(filename: str) -> str:
    """Replace spaces with underscores in filenames."""
    return filename.replace(" ", "_")`,
                testCases: [
                    { input: "sanitize_filename('my file name')", expected: "'my_file_name'" },
                    { input: "sanitize_filename('brain scan 001')", expected: "'brain_scan_001'" },
                    { input: "sanitize_filename('noSpaces')", expected: "'noSpaces'" },
                    { input: "sanitize_filename('a b c d')", expected: "'a_b_c_d'" },
                    { input: "sanitize_filename(' leading')", expected: "'_leading'" }
                ]
            },
            {
                id: "042",
                number: 10,
                title: "🏆 Final Challenge: Lab Report Header",
                description: "Generate professional lab report headers! Create `report_header` that takes researcher name, experiment ID, and date, returning: 'EXPERIMENT {id} | Researcher: {name} | Date: {date}'",
                hint: "Use f-strings with .upper() on the experiment ID.",
                starterCode: `def report_header(researcher: str, exp_id: str, date: str) -> str:
    # Format: "EXPERIMENT {id} | Researcher: {name} | Date: {date}"
    pass`,
                solutionCode: `def report_header(researcher: str, exp_id: str, date: str) -> str:
    """Generate a formatted lab report header."""
    return f"EXPERIMENT {exp_id.upper()} | Researcher: {researcher} | Date: {date}"`,
                testCases: [
                    { input: "report_header('Dr. Chen', 'exp001', '2024-01-15')", expected: "'EXPERIMENT EXP001 | Researcher: Dr. Chen | Date: 2024-01-15'" },
                    { input: "report_header('Sarah', 'neural42', '2024-03-20')", expected: "'EXPERIMENT NEURAL42 | Researcher: Sarah | Date: 2024-03-20'" },
                    { input: "report_header('Lab Team', 'test1', '2024-12-01')", expected: "'EXPERIMENT TEST1 | Researcher: Lab Team | Date: 2024-12-01'" },
                    { input: "report_header('Alice', 'abc', '2025-01-01')", expected: "'EXPERIMENT ABC | Researcher: Alice | Date: 2025-01-01'" },
                    { input: "report_header('Bob', 'xyz99', '2024-06-15')", expected: "'EXPERIMENT XYZ99 | Researcher: Bob | Date: 2024-06-15'" }
                ]
            },
        ],
    },
    {
        id: "for_loops",
        title: "For Loops",
        description: "Iterating with Range and Sequences",
        explanation: `
      <p class="mb-4">For loops repeat code a specific number of times or iterate through items in a sequence.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">range() Function</h4>
      <p class="mb-2"><code>range(stop)</code> - 0 to stop-1<br><code>range(start, stop)</code> - start to stop-1<br><code>range(start, stop, step)</code> - with custom step</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating Strings</h4>
      <p class="mb-2"><code>for char in text:</code> loops through each character</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accumulator Pattern</h4>
      <p class="mb-2">Start with initial value, update in each iteration, return final result.</p>
    `,
        exampleCode: `def sum_to_n(n: int) -> int:
    """Return sum of numbers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

def count_char(text: str, target: str) -> int:
    """Count occurrences of target character in text."""
    count = 0
    for char in text:
        if char == target:
            count += 1
    return count`,
        challenges: [
            {
                id: "043",
                number: 1,
                title: "📊 Cumulative Score",
                description: "Calculate total points from daily scores! Create `total_score` that takes n and returns the sum of all integers from 1 to n (inclusive).",
                hint: "Use an accumulator pattern: start with 0, add each number in range.",
                starterCode: `def total_score(n: int) -> int:
    # Sum all numbers from 1 to n
    pass`,
                solutionCode: `def total_score(n: int) -> int:
    """Sum all integers from 1 to n."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total`,
                testCases: [
                    { input: "total_score(5)", expected: "15" },
                    { input: "total_score(1)", expected: "1" },
                    { input: "total_score(10)", expected: "55" },
                    { input: "total_score(100)", expected: "5050" },
                    { input: "total_score(3)", expected: "6" }
                ]
            },
            {
                id: "044",
                number: 2,
                title: "🧮 Permutation Calculator",
                description: "Calculate possible arrangements! Create `factorial` that returns n! (n × (n-1) × ... × 1). Remember: 0! = 1.",
                hint: "Start result at 1, multiply by each number from 1 to n.",
                starterCode: `def factorial(n: int) -> int:
    # Calculate n factorial
    pass`,
                solutionCode: `def factorial(n: int) -> int:
    """Calculate n factorial."""
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result`,
                testCases: [
                    { input: "factorial(5)", expected: "120" },
                    { input: "factorial(3)", expected: "6" },
                    { input: "factorial(0)", expected: "1" },
                    { input: "factorial(1)", expected: "1" },
                    { input: "factorial(7)", expected: "5040" }
                ]
            },
            {
                id: "045",
                number: 3,
                title: "🧬 Base Pair Counter",
                description: "Count specific nucleotides in DNA! Create `count_base` that counts how many times a specific base appears in a sequence.",
                hint: "Loop through each character and count matches.",
                starterCode: `def count_base(sequence: str, base: str) -> int:
    # Count occurrences of base in sequence
    pass`,
                solutionCode: `def count_base(sequence: str, base: str) -> int:
    """Count occurrences of base in DNA sequence."""
    count = 0
    for nucleotide in sequence:
        if nucleotide == base:
            count += 1
    return count`,
                testCases: [
                    { input: "count_base('ATGCATGC', 'A')", expected: "2" },
                    { input: "count_base('GGGGGG', 'G')", expected: "6" },
                    { input: "count_base('ATCG', 'T')", expected: "1" },
                    { input: "count_base('CCCC', 'A')", expected: "0" },
                    { input: "count_base('AAAAAA', 'A')", expected: "6" }
                ]
            },
            {
                id: "046",
                number: 4,
                title: "📝 Vowel Frequency",
                description: "Analyze text patterns! Create `count_vowels` that counts all vowels (a, e, i, o, u) in text. Case insensitive.",
                hint: "Check if each character is in 'aeiouAEIOU'.",
                starterCode: `def count_vowels(text: str) -> int:
    # Count all vowels (case insensitive)
    pass`,
                solutionCode: `def count_vowels(text: str) -> int:
    """Count vowels in text (case insensitive)."""
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count`,
                testCases: [
                    { input: "count_vowels('neuroscience')", expected: "6" },
                    { input: "count_vowels('AEIOU')", expected: "5" },
                    { input: "count_vowels('xyz')", expected: "0" },
                    { input: "count_vowels('Python')", expected: "1" },
                    { input: "count_vowels('')", expected: "0" }
                ]
            },
            {
                id: "047",
                number: 5,
                title: "📈 Exponential Growth",
                description: "Model growth without ** operator! Create `exponential` that calculates base^exponent using only multiplication in a loop.",
                hint: "Start with 1, multiply by base 'exponent' times.",
                starterCode: `def exponential(base: int, exponent: int) -> int:
    # Calculate base to the power of exponent (no ** allowed!)
    pass`,
                solutionCode: `def exponential(base: int, exponent: int) -> int:
    """Calculate base to the power of exponent using a loop."""
    result = 1
    for _ in range(exponent):
        result *= base
    return result`,
                testCases: [
                    { input: "exponential(2, 10)", expected: "1024" },
                    { input: "exponential(3, 4)", expected: "81" },
                    { input: "exponential(5, 0)", expected: "1" },
                    { input: "exponential(10, 3)", expected: "1000" },
                    { input: "exponential(2, 8)", expected: "256" }
                ]
            },
            {
                id: "048",
                number: 6,
                title: "🔄 Sequence Reverser",
                description: "Reverse data sequences! Create `reverse_sequence` that reverses a string WITHOUT using [::-1] slicing.",
                hint: "Build new string by adding each char to the front.",
                starterCode: `def reverse_sequence(text: str) -> str:
    # Reverse without using slicing
    pass`,
                solutionCode: `def reverse_sequence(text: str) -> str:
    """Reverse a string using a loop."""
    result = ""
    for char in text:
        result = char + result
    return result`,
                testCases: [
                    { input: "reverse_sequence('ATGC')", expected: "'CGTA'" },
                    { input: "reverse_sequence('neural')", expected: "'laruen'" },
                    { input: "reverse_sequence('a')", expected: "'a'" },
                    { input: "reverse_sequence('12345')", expected: "'54321'" },
                    { input: "reverse_sequence('')", expected: "''" }
                ]
            },
            {
                id: "049",
                number: 7,
                title: "📉 Even Sample Sum",
                description: "Sum only even-numbered samples! Create `sum_even_samples` that returns the sum of all even numbers from 2 to n (inclusive).",
                hint: "Use range with step of 2: range(2, n+1, 2)",
                starterCode: `def sum_even_samples(n: int) -> int:
    # Sum all even numbers from 2 to n
    pass`,
                solutionCode: `def sum_even_samples(n: int) -> int:
    """Sum all even numbers from 2 to n."""
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total`,
                testCases: [
                    { input: "sum_even_samples(10)", expected: "30" },
                    { input: "sum_even_samples(6)", expected: "12" },
                    { input: "sum_even_samples(2)", expected: "2" },
                    { input: "sum_even_samples(100)", expected: "2550" },
                    { input: "sum_even_samples(1)", expected: "0" }
                ]
            },
            {
                id: "050",
                number: 8,
                title: "🔢 Digit Product",
                description: "Multiply all digits in a measurement reading! Create `digit_product` that multiplies all digits of a positive integer.",
                hint: "Convert to string, loop through digits, multiply.",
                starterCode: `def digit_product(n: int) -> int:
    # Multiply all digits together
    pass`,
                solutionCode: `def digit_product(n: int) -> int:
    """Multiply all digits of a number."""
    result = 1
    for digit in str(n):
        result *= int(digit)
    return result`,
                testCases: [
                    { input: "digit_product(234)", expected: "24" },
                    { input: "digit_product(111)", expected: "1" },
                    { input: "digit_product(502)", expected: "0" },
                    { input: "digit_product(99)", expected: "81" },
                    { input: "digit_product(5)", expected: "5" }
                ]
            },
            {
                id: "051",
                number: 9,
                title: "📑 Word Counter",
                description: "Analyze text documents! Create `word_count` that counts words in a sentence (separated by spaces).",
                hint: "Use .split() to break into words, then count.",
                starterCode: `def word_count(sentence: str) -> int:
    # Count words in the sentence
    pass`,
                solutionCode: `def word_count(sentence: str) -> int:
    """Count words in a sentence."""
    if not sentence.strip():
        return 0
    return len(sentence.split())`,
                testCases: [
                    { input: "word_count('neural network analysis')", expected: "3" },
                    { input: "word_count('hello')", expected: "1" },
                    { input: "word_count('')", expected: "0" },
                    { input: "word_count('one two three four five')", expected: "5" },
                    { input: "word_count('   ')", expected: "0" }
                ]
            },
            {
                id: "052",
                number: 10,
                title: "🏆 Final Challenge: Trial Summary Generator",
                description: "Generate formatted trial summaries! Create `trial_summary` that takes n trials and returns each trial number with its status: 'Trial 1: Complete\\nTrial 2: Complete\\n...' up to Trial n.",
                hint: "Build a list of formatted strings, then join with newlines.",
                starterCode: `def trial_summary(n: int) -> str:
    # Generate "Trial 1: Complete\\nTrial 2: Complete\\n..." for n trials
    pass`,
                solutionCode: `def trial_summary(n: int) -> str:
    """Generate trial completion summary."""
    lines = []
    for i in range(1, n + 1):
        lines.append(f"Trial {i}: Complete")
    return "\\n".join(lines)`,
                testCases: [
                    { input: "trial_summary(3)", expected: "'Trial 1: Complete\\nTrial 2: Complete\\nTrial 3: Complete'" },
                    { input: "trial_summary(1)", expected: "'Trial 1: Complete'" },
                    { input: "trial_summary(2)", expected: "'Trial 1: Complete\\nTrial 2: Complete'" },
                    { input: "trial_summary(5)", expected: "'Trial 1: Complete\\nTrial 2: Complete\\nTrial 3: Complete\\nTrial 4: Complete\\nTrial 5: Complete'" }
                ]
            },
        ],
    },
    {
        id: "while_loops",
        title: "While Loops & Validation",
        description: "Condition-Based Iteration",
        explanation: `
      <p class="mb-4">While loops continue until a condition becomes False. They're useful when you don't know exactly how many iterations you need.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Basic While Loop</h4>
      <p class="mb-2"><code>while condition:</code> - continues as long as condition is True</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Avoid Infinite Loops</h4>
      <p class="mb-2">Always ensure the condition will eventually become False!</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Patterns</h4>
      <p class="mb-2">Counting down, processing until a condition is met, number manipulation.</p>
    `,
        exampleCode: `def count_digits(n: int) -> int:
    """Count how many digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count

def collatz_steps(n: int) -> int:
    """Count steps until n reaches 1 using Collatz sequence."""
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        steps += 1
    return steps`,
        challenges: [
            {
                id: "053",
                number: 1,
                title: "📏 Sample ID Length",
                description: "Count digits in sample IDs! Create `digit_count` that returns how many digits are in a positive integer.",
                hint: "Divide by 10 repeatedly until 0, counting each time.",
                starterCode: `def digit_count(n: int) -> int:
    # How many digits in this number?
    pass`,
                solutionCode: `def digit_count(n: int) -> int:
    """Count digits in a number."""
    if n == 0:
        return 1
    count = 0
    n = abs(n)
    while n > 0:
        count += 1
        n //= 10
    return count`,
                testCases: [
                    { input: "digit_count(12345)", expected: "5" },
                    { input: "digit_count(7)", expected: "1" },
                    { input: "digit_count(0)", expected: "1" },
                    { input: "digit_count(1000)", expected: "4" },
                    { input: "digit_count(99)", expected: "2" }
                ]
            },
            {
                id: "054",
                number: 2,
                title: "🧮 Checksum Calculator",
                description: "Calculate validation checksums! Create `digit_sum` that adds all digits of a positive integer together.",
                hint: "Use n % 10 to get last digit, n //= 10 to remove it.",
                starterCode: `def digit_sum(n: int) -> int:
    # Sum all digits
    pass`,
                solutionCode: `def digit_sum(n: int) -> int:
    """Sum all digits of a number."""
    total = 0
    n = abs(n)
    while n > 0:
        total += n % 10
        n //= 10
    return total`,
                testCases: [
                    { input: "digit_sum(123)", expected: "6" },
                    { input: "digit_sum(9999)", expected: "36" },
                    { input: "digit_sum(101)", expected: "2" },
                    { input: "digit_sum(5)", expected: "5" },
                    { input: "digit_sum(0)", expected: "0" }
                ]
            },
            {
                id: "055",
                number: 3,
                title: "🔄 Data Reversal",
                description: "Reverse numerical data! Create `reverse_number` that reverses digits of a positive integer. E.g., 1234 → 4321.",
                hint: "Build reversed number: result = result * 10 + (n % 10)",
                starterCode: `def reverse_number(n: int) -> int:
    # Reverse the digits
    pass`,
                solutionCode: `def reverse_number(n: int) -> int:
    """Reverse the digits of a number."""
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return reversed_n`,
                testCases: [
                    { input: "reverse_number(1234)", expected: "4321" },
                    { input: "reverse_number(100)", expected: "1" },
                    { input: "reverse_number(5)", expected: "5" },
                    { input: "reverse_number(9876)", expected: "6789" },
                    { input: "reverse_number(12)", expected: "21" }
                ]
            },
            {
                id: "056",
                number: 4,
                title: "🧬 Palindrome Detector",
                description: "Detect palindromic patterns in data! Create `is_palindrome` that returns True if a number reads the same forwards and backwards.",
                hint: "Compare original with reversed version.",
                starterCode: `def is_palindrome(n: int) -> bool:
    # Does it read the same both ways?
    pass`,
                solutionCode: `def is_palindrome(n: int) -> bool:
    """Check if number is a palindrome."""
    original = n
    reversed_n = 0
    while n > 0:
        reversed_n = reversed_n * 10 + (n % 10)
        n //= 10
    return original == reversed_n`,
                testCases: [
                    { input: "is_palindrome(12321)", expected: "True" },
                    { input: "is_palindrome(12345)", expected: "False" },
                    { input: "is_palindrome(7)", expected: "True" },
                    { input: "is_palindrome(11)", expected: "True" },
                    { input: "is_palindrome(10)", expected: "False" }
                ]
            },
            {
                id: "057",
                number: 5,
                title: "🔬 Common Divisor Finder",
                description: "Find shared factors for experiment grouping! Create `find_gcd` that returns the Greatest Common Divisor of two positive integers using Euclid's algorithm.",
                hint: "While b != 0: a, b = b, a % b. Return a.",
                starterCode: `def find_gcd(a: int, b: int) -> int:
    # Find the greatest common divisor
    pass`,
                solutionCode: `def find_gcd(a: int, b: int) -> int:
    """Find GCD using Euclid's algorithm."""
    while b != 0:
        a, b = b, a % b
    return a`,
                testCases: [
                    { input: "find_gcd(48, 18)", expected: "6" },
                    { input: "find_gcd(100, 25)", expected: "25" },
                    { input: "find_gcd(17, 13)", expected: "1" },
                    { input: "find_gcd(24, 36)", expected: "12" },
                    { input: "find_gcd(7, 7)", expected: "7" }
                ]
            },
            {
                id: "058",
                number: 6,
                title: "🌀 Collatz Convergence",
                description: "Simulate the famous Collatz conjecture! Create `collatz_steps` that counts steps to reach 1. If n is even, halve it. If odd, triple and add 1.",
                hint: "While n != 1: apply the rule and count steps.",
                starterCode: `def collatz_steps(n: int) -> int:
    # Count steps until n reaches 1
    pass`,
                solutionCode: `def collatz_steps(n: int) -> int:
    """Count Collatz sequence steps to reach 1."""
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
                    { input: "collatz_steps(10)", expected: "6" },
                    { input: "collatz_steps(27)", expected: "111" },
                    { input: "collatz_steps(6)", expected: "8" }
                ]
            },
            {
                id: "059",
                number: 7,
                title: "🔢 Prime Validator",
                description: "Check if sample sizes are prime! Create `is_prime` that returns True if a number is prime (> 1, only divisible by 1 and itself).",
                hint: "Check divisibility up to √n. Return False if any divides evenly.",
                starterCode: `def is_prime(n: int) -> bool:
    # Is this number prime?
    pass`,
                solutionCode: `def is_prime(n: int) -> bool:
    """Check if number is prime."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True`,
                testCases: [
                    { input: "is_prime(17)", expected: "True" },
                    { input: "is_prime(4)", expected: "False" },
                    { input: "is_prime(2)", expected: "True" },
                    { input: "is_prime(1)", expected: "False" },
                    { input: "is_prime(97)", expected: "True" }
                ]
            },
            {
                id: "060",
                number: 8,
                title: "📈 Next Prime Finder",
                description: "Find optimal sample sizes! Create `next_prime` that returns the next prime number after n.",
                hint: "Start at n+1, check each number until finding a prime.",
                starterCode: `def next_prime(n: int) -> int:
    # Find the next prime after n
    pass`,
                solutionCode: `def next_prime(n: int) -> int:
    """Find the next prime number after n."""
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True
    
    candidate = n + 1
    while not is_prime(candidate):
        candidate += 1
    return candidate`,
                testCases: [
                    { input: "next_prime(10)", expected: "11" },
                    { input: "next_prime(2)", expected: "3" },
                    { input: "next_prime(13)", expected: "17" },
                    { input: "next_prime(100)", expected: "101" },
                    { input: "next_prime(0)", expected: "2" }
                ]
            },
            {
                id: "061",
                number: 9,
                title: "🎯 Digital Root Reducer",
                description: "Reduce measurements! Create `digital_root` that keeps summing digits until a single digit remains. E.g., 9875 → 29 → 11 → 2.",
                hint: "While n >= 10: sum its digits and repeat.",
                starterCode: `def digital_root(n: int) -> int:
    # Keep summing digits until one remains
    pass`,
                solutionCode: `def digital_root(n: int) -> int:
    """Keep summing digits until single digit remains."""
    while n >= 10:
        total = 0
        while n > 0:
            total += n % 10
            n //= 10
        n = total
    return n`,
                testCases: [
                    { input: "digital_root(9875)", expected: "2" },
                    { input: "digital_root(16)", expected: "7" },
                    { input: "digital_root(9)", expected: "9" },
                    { input: "digital_root(12345)", expected: "6" },
                    { input: "digital_root(999)", expected: "9" }
                ]
            },
            {
                id: "062",
                number: 10,
                title: "🏆 Final Challenge: Binary Decoder",
                description: "Decode binary sensor data! Create `binary_to_decimal` that converts a binary string (e.g., '1011') to its decimal value (11).",
                hint: "Process from right to left, add powers of 2 for each '1'.",
                starterCode: `def binary_to_decimal(binary: str) -> int:
    # Convert binary string to decimal integer
    pass`,
                solutionCode: `def binary_to_decimal(binary: str) -> int:
    """Convert binary string to decimal integer."""
    result = 0
    power = 0
    for digit in reversed(binary):
        if digit == '1':
            result += 2 ** power
        power += 1
    return result`,
                testCases: [
                    { input: "binary_to_decimal('1011')", expected: "11" },
                    { input: "binary_to_decimal('1111')", expected: "15" },
                    { input: "binary_to_decimal('10000')", expected: "16" },
                    { input: "binary_to_decimal('0')", expected: "0" },
                    { input: "binary_to_decimal('11111111')", expected: "255" }
                ]
            },
        ],
    },
    {
        id: "lists_basics",
        title: "Lists: The Basics",
        description: "Creating and Accessing Lists",
        explanation: `
      <p class="mb-4">Lists store ordered collections of items. They're one of Python's most versatile data structures.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Lists</h4>
      <p class="mb-2"><code>nums = [1, 2, 3]</code> or <code>empty = []</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Elements</h4>
      <p class="mb-2"><code>nums[0]</code> first element, <code>nums[-1]</code> last element</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Common Operations</h4>
      <p class="mb-2"><code>len()</code>, <code>in</code>, <code>.append()</code>, <code>.pop()</code></p>
    `,
        exampleCode: `def sum_list(numbers: list) -> int:
    """Return the sum of all numbers in the list."""
    total = 0
    for num in numbers:
        total += num
    return total

def find_max(numbers: list) -> int:
    """Find the largest number in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`,
        challenges: [
            {
                id: "063",
                number: 1,
                description: "Create a function `sum_list` that takes a list of numbers and returns their sum. Don't use the built-in `sum()` function.",
                starterCode: `def sum_list(numbers: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def sum_list(numbers: list) -> float:
    """Sum all numbers in a list."""
    total = 0
    for num in numbers:
        total += num
    return total`,
                testCases: [
                    { input: "sum_list([1, 2, 3])", expected: "6" },
                    { input: "sum_list([10, 20])", expected: "30" },
                    { input: "sum_list([])", expected: "0" }
                ]
            },
            {
                id: "064",
                number: 2,
                description: "Create a function `average` that takes a list of numbers and returns their average. Return 0 for an empty list.",
                starterCode: `def average(numbers: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def average(numbers: list) -> float:
    """Calculate average of numbers in a list."""
    if not numbers:
        return 0
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)`,
                testCases: [
                    { input: "average([1, 2, 3])", expected: "2.0" },
                    { input: "average([10, 20])", expected: "15.0" },
                    { input: "average([])", expected: "0" }
                ]
            },
            {
                id: "065",
                number: 3,
                description: "Create a function `find_max` that takes a list of numbers and returns the largest. Don't use the built-in `max()` function.",
                starterCode: `def find_max(numbers: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def find_max(numbers: list) -> float:
    """Find the maximum value in a list."""
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest`,
                testCases: [
                    { input: "find_max([1, 5, 3])", expected: "5" },
                    { input: "find_max([10, 2, 8])", expected: "10" },
                    { input: "find_max([-5, -1, -10])", expected: "-1" }
                ]
            },
            {
                id: "066",
                number: 4,
                description: "Create a function `find_min` that takes a list of numbers and returns the smallest. Don't use the built-in `min()` function.",
                starterCode: `def find_min(numbers: list) -> float:
    # Your code here
    pass`,
                solutionCode: `def find_min(numbers: list) -> float:
    """Find the minimum value in a list."""
    if not numbers:
        return None
    smallest = numbers[0]
    for num in numbers:
        if num < smallest:
            smallest = num
    return smallest`,
                testCases: [
                    { input: "find_min([1, 5, 3])", expected: "1" },
                    { input: "find_min([10, 2, 8])", expected: "2" },
                    { input: "find_min([-5, -1, -10])", expected: "-10" }
                ]
            },
            {
                id: "067",
                number: 5,
                description: "Create a function `count_item` that takes a list and an item, returns how many times that item appears in the list.",
                starterCode: `def count_item(items: list, target) -> int:
    # Your code here
    pass`,
                solutionCode: `def count_item(items: list, target) -> int:
    """Count occurrences of target in list."""
    count = 0
    for item in items:
        if item == target:
            count += 1
    return count`,
                testCases: [
                    { input: "count_item([1, 2, 2, 3], 2)", expected: "2" },
                    { input: "count_item(['a', 'b', 'a'], 'a')", expected: "2" },
                    { input: "count_item([1, 2, 3], 4)", expected: "0" }
                ]
            },
            {
                id: "068",
                number: 6,
                description: "Create a function `first_and_last` that takes a list and returns a new list containing only the first and last elements.",
                starterCode: `def first_and_last(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def first_and_last(items: list) -> list:
    """Return first and last elements of a list."""
    if len(items) < 2:
        return items.copy()
    return [items[0], items[-1]]`,
                testCases: [
                    { input: "first_and_last([1, 2, 3, 4])", expected: "[1, 4]" },
                    { input: "first_and_last([1])", expected: "[1]" },
                    { input: "first_and_last(['a', 'b'])", expected: "['a', 'b']" }
                ]
            },
            {
                id: "069",
                number: 7,
                description: "Create a function `reverse_list` that takes a list and returns it reversed. Don't use `.reverse()` or `[::-1]`.",
                starterCode: `def reverse_list(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def reverse_list(items: list) -> list:
    """Reverse a list without built-in methods."""
    result = []
    for i in range(len(items) - 1, -1, -1):
        result.append(items[i])
    return result`,
                testCases: [
                    { input: "reverse_list([1, 2, 3])", expected: "[3, 2, 1]" },
                    { input: "reverse_list(['a', 'b'])", expected: "['b', 'a']" },
                    { input: "reverse_list([])", expected: "[]" }
                ]
            },
            {
                id: "070",
                number: 8,
                description: "Create a function `contains` that takes a list and an item, returns `True` if the item is in the list. Don't use the `in` operator.",
                starterCode: `def contains(items: list, target) -> bool:
    # Your code here
    pass`,
                solutionCode: `def contains(items: list, target) -> bool:
    """Check if target is in list without using 'in'."""
    for item in items:
        if item == target:
            return True
    return False`,
                testCases: [
                    { input: "contains([1, 2, 3], 2)", expected: "True" },
                    { input: "contains(['a', 'b'], 'z')", expected: "False" },
                    { input: "contains([], 1)", expected: "False" }
                ]
            },
            {
                id: "071",
                number: 9,
                description: "Create a function `find_index` that takes a list and a target value. Return the index of the first occurrence, or -1 if not found.",
                starterCode: `def find_index(items: list, target) -> int:
    # Your code here
    pass`,
                solutionCode: `def find_index(items: list, target) -> int:
    """Find index of first occurrence of target."""
    for i in range(len(items)):
        if items[i] == target:
            return i
    return -1`,
                testCases: [
                    { input: "find_index([10, 20, 30], 20)", expected: "1" },
                    { input: "find_index(['a', 'b', 'c'], 'c')", expected: "2" },
                    { input: "find_index([1, 2], 3)", expected: "-1" }
                ]
            },
            {
                id: "072",
                number: 10,
                description: "Create a function `all_positive` that takes a list of numbers and returns `True` if ALL numbers are positive.",
                starterCode: `def all_positive(numbers: list) -> bool:
    # Your code here
    pass`,
                solutionCode: `def all_positive(numbers: list) -> bool:
    """Check if all numbers are positive."""
    for num in numbers:
        if num <= 0:
            return False
    return True`,
                testCases: [
                    { input: "all_positive([1, 2, 3])", expected: "True" },
                    { input: "all_positive([1, -2, 3])", expected: "False" },
                    { input: "all_positive([])", expected: "True" }
                ]
            },
        ],
    },
    {
        id: "lists_transformation",
        title: "Transforming Lists",
        description: "Filtering, Mapping & Building New Lists",
        explanation: `
      <p class="mb-4">Often we need to create new lists based on existing ones - filtering items, transforming values, or combining data.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Filter Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add items that meet condition.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Map Pattern</h4>
      <p class="mb-2">Create empty list, loop through original, add transformed version of each item.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>items[start:end]</code> - elements from start to end-1</p>
    `,
        exampleCode: `def filter_positive(numbers: list) -> list:
    """Return only positive numbers from the list."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result

def double_all(numbers: list) -> list:
    """Return a new list with all numbers doubled."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,
        challenges: [
            {
                id: "073",
                number: 1,
                description: "Create a function `filter_positive` that takes a list of numbers and returns a new list containing only the positive numbers.",
                starterCode: `def filter_positive(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_positive(numbers: list) -> list:
    """Filter to only positive numbers."""
    result = []
    for num in numbers:
        if num > 0:
            result.append(num)
    return result`,
                testCases: [
                    { input: "filter_positive([1, -1, 2, -2])", expected: "[1, 2]" },
                    { input: "filter_positive([-1, -2, -3])", expected: "[]" },
                    { input: "filter_positive([])", expected: "[]" }
                ]
            },
            {
                id: "074",
                number: 2,
                description: "Create a function `filter_even` that takes a list of integers and returns a new list containing only the even numbers.",
                starterCode: `def filter_even(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_even(numbers: list) -> list:
    """Filter to only even numbers."""
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result`,
                testCases: [
                    { input: "filter_even([1, 2, 3, 4])", expected: "[2, 4]" },
                    { input: "filter_even([1, 3, 5])", expected: "[]" },
                    { input: "filter_even([])", expected: "[]" }
                ]
            },
            {
                id: "075",
                number: 3,
                description: "Create a function `double_all` that takes a list of numbers and returns a new list with each number doubled.",
                starterCode: `def double_all(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def double_all(numbers: list) -> list:
    """Double each number in the list."""
    result = []
    for num in numbers:
        result.append(num * 2)
    return result`,
                testCases: [
                    { input: "double_all([1, 2, 3])", expected: "[2, 4, 6]" },
                    { input: "double_all([0, -1])", expected: "[0, -2]" },
                    { input: "double_all([])", expected: "[]" }
                ]
            },
            {
                id: "076",
                number: 4,
                description: "Create a function `square_all` that takes a list of numbers and returns a new list with each number squared.",
                starterCode: `def square_all(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def square_all(numbers: list) -> list:
    """Square each number in the list."""
    result = []
    for num in numbers:
        result.append(num ** 2)
    return result`,
                testCases: [
                    { input: "square_all([2, 3, 4])", expected: "[4, 9, 16]" },
                    { input: "square_all([-2, 0])", expected: "[4, 0]" },
                    { input: "square_all([])", expected: "[]" }
                ]
            },
            {
                id: "077",
                number: 5,
                description: "Create a function `filter_long_words` that takes a list of strings and a minimum length, returns only strings at least that long.",
                starterCode: `def filter_long_words(words: list, min_length: int) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_long_words(words: list, min_length: int) -> list:
    """Filter words by minimum length."""
    result = []
    for word in words:
        if len(word) >= min_length:
            result.append(word)
    return result`,
                testCases: [
                    { input: "filter_long_words(['a', 'big', 'word'], 3)", expected: "['big', 'word']" },
                    { input: "filter_long_words(['hi', 'no'], 3)", expected: "[]" },
                    { input: "filter_long_words([], 1)", expected: "[]" }
                ]
            },
            {
                id: "078",
                number: 6,
                description: "Create a function `remove_duplicates` that takes a list and returns a new list with duplicates removed, preserving order.",
                starterCode: `def remove_duplicates(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def remove_duplicates(items: list) -> list:
    """Remove duplicates while preserving order."""
    seen = []
    result = []
    for item in items:
        if item not in seen:
            seen.append(item)
            result.append(item)
    return result`,
                testCases: [
                    { input: "remove_duplicates([1, 2, 2, 3, 1])", expected: "[1, 2, 3]" },
                    { input: "remove_duplicates(['a', 'a', 'b'])", expected: "['a', 'b']" },
                    { input: "remove_duplicates([])", expected: "[]" }
                ]
            },
            {
                id: "079",
                number: 7,
                description: "Create a function `uppercase_all` that takes a list of strings and returns a new list with all strings in uppercase.",
                starterCode: `def uppercase_all(words: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def uppercase_all(words: list) -> list:
    """Convert all strings to uppercase."""
    result = []
    for word in words:
        result.append(word.upper())
    return result`,
                testCases: [
                    { input: "uppercase_all(['hello', 'world'])", expected: "['HELLO', 'WORLD']" },
                    { input: "uppercase_all(['a', 'B'])", expected: "['A', 'B']" },
                    { input: "uppercase_all([])", expected: "[]" }
                ]
            },
            {
                id: "080",
                number: 8,
                description: "Create a function `get_lengths` that takes a list of strings and returns a list of their lengths.",
                starterCode: `def get_lengths(words: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def get_lengths(words: list) -> list:
    """Get length of each string in list."""
    result = []
    for word in words:
        result.append(len(word))
    return result`,
                testCases: [
                    { input: "get_lengths(['a', 'bb', 'ccc'])", expected: "[1, 2, 3]" },
                    { input: "get_lengths([])", expected: "[]" },
                    { input: "get_lengths([''])", expected: "[0]" }
                ]
            },
            {
                id: "081",
                number: 9,
                description: "Create a function `filter_by_index` that takes a list and returns only elements at even indices (0, 2, 4, ...).",
                starterCode: `def filter_by_index(items: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_by_index(items: list) -> list:
    """Return elements at even indices."""
    result = []
    for i in range(0, len(items), 2):
        result.append(items[i])
    return result`,
                testCases: [
                    { input: "filter_by_index([0, 1, 2, 3, 4])", expected: "[0, 2, 4]" },
                    { input: "filter_by_index(['a', 'b'])", expected: "['a']" },
                    { input: "filter_by_index([])", expected: "[]" }
                ]
            },
            {
                id: "082",
                number: 10,
                description: "Create a function `running_sum` that takes a list of numbers and returns a new list where each element is the sum of all elements up to that point. [1,2,3] → [1,3,6]",
                starterCode: `def running_sum(numbers: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def running_sum(numbers: list) -> list:
    """Calculate running sum of list."""
    result = []
    total = 0
    for num in numbers:
        total += num
        result.append(total)
    return result`,
                testCases: [
                    { input: "running_sum([1, 2, 3])", expected: "[1, 3, 6]" },
                    { input: "running_sum([1, -1, 1])", expected: "[1, 0, 1]" },
                    { input: "running_sum([])", expected: "[]" }
                ]
            },
        ],
    },
    {
        id: "dictionaries",
        title: "Dictionaries",
        description: "Key-Value Data Structures",
        explanation: `
      <p class="mb-4">Dictionaries store data as key-value pairs, allowing fast lookup by key.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Creating Dictionaries</h4>
      <p class="mb-2"><code>person = {"name": "Alice", "age": 30}</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Accessing Values</h4>
      <p class="mb-2"><code>d[key]</code> raises error if missing, <code>d.get(key, default)</code> returns default if missing</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Iterating</h4>
      <p class="mb-2"><code>for key in d:</code> or <code>for key, value in d.items():</code></p>
    `,
        exampleCode: `def count_chars(text: str) -> dict:
    """Count occurrences of each character."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts

def get_values(data: dict, keys: list) -> list:
    """Return list of values for given keys."""
    result = []
    for key in keys:
        if key in data:
            result.append(data[key])
    return result`,
        challenges: [
            {
                id: "083",
                number: 1,
                description: "Create a function `count_chars` that takes a string and returns a dictionary with each character as a key and its count as the value.",
                starterCode: `def count_chars(text: str) -> dict:
    # Your code here
    pass`,
                solutionCode: `def count_chars(text: str) -> dict:
    """Count character frequencies."""
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts`,
                testCases: [
                    { input: "count_chars('hello')", expected: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}" },
                    { input: "count_chars('aa a')", expected: "{'a': 3, ' ': 1}" },
                    { input: "count_chars('')", expected: "{}" }
                ]
            },
            {
                id: "084",
                number: 2,
                description: "Create a function `count_words` that takes a sentence and returns a dictionary counting each word. Convert to lowercase first.",
                starterCode: `def count_words(sentence: str) -> dict:
    # Your code here
    pass`,
                solutionCode: `def count_words(sentence: str) -> dict:
    """Count word frequencies in a sentence."""
    counts = {}
    words = sentence.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts`,
                testCases: [
                    { input: "count_words('Hello world hello')", expected: "{'hello': 2, 'world': 1}" },
                    { input: "count_words('a a a')", expected: "{'a': 3}" },
                    { input: "count_words('')", expected: "{}" }
                ]
            },
            {
                id: "085",
                number: 3,
                description: "Create a function `invert_dict` that takes a dictionary and returns a new dictionary with keys and values swapped.",
                starterCode: `def invert_dict(d: dict) -> dict:
    # Your code here
    pass`,
                solutionCode: `def invert_dict(d: dict) -> dict:
    """Swap keys and values in dictionary."""
    result = {}
    for key, value in d.items():
        result[value] = key
    return result`,
                testCases: [
                    { input: "invert_dict({'a': 1, 'b': 2})", expected: "{1: 'a', 2: 'b'}" },
                    { input: "invert_dict({})", expected: "{}" },
                    { input: "invert_dict({'k': 'v'})", expected: "{'v': 'k'}" }
                ]
            },
            {
                id: "086",
                number: 4,
                description: "Create a function `merge_dicts` that takes two dictionaries and returns a new one containing all key-value pairs. If a key exists in both, use the value from the second dictionary.",
                starterCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    # Your code here
    pass`,
                solutionCode: `def merge_dicts(d1: dict, d2: dict) -> dict:
    """Merge two dictionaries, second takes precedence."""
    result = {}
    for key, value in d1.items():
        result[key] = value
    for key, value in d2.items():
        result[key] = value
    return result`,
                testCases: [
                    { input: "merge_dicts({'a': 1}, {'b': 2})", expected: "{'a': 1, 'b': 2}" },
                    { input: "merge_dicts({'a': 1}, {'a': 2})", expected: "{'a': 2}" },
                    { input: "merge_dicts({}, {'a': 1})", expected: "{'a': 1}" }
                ]
            },
            {
                id: "087",
                number: 5,
                description: "Create a function `dict_from_lists` that takes a list of keys and a list of values and returns a dictionary pairing them up.",
                starterCode: `def dict_from_lists(keys: list, values: list) -> dict:
    # Your code here
    pass`,
                solutionCode: `def dict_from_lists(keys: list, values: list) -> dict:
    """Create dictionary from parallel lists."""
    result = {}
    for i in range(len(keys)):
        result[keys[i]] = values[i]
    return result`,
                testCases: [
                    { input: "dict_from_lists(['a', 'b'], [1, 2])", expected: "{'a': 1, 'b': 2}" },
                    { input: "dict_from_lists([], [])", expected: "{}" }
                ]
            },
            {
                id: "088",
                number: 6,
                description: "Create a function `filter_dict` that takes a dictionary and a minimum value, returns a new dictionary with only entries where value >= minimum.",
                starterCode: `def filter_dict(d: dict, min_value: float) -> dict:
    # Your code here
    pass`,
                solutionCode: `def filter_dict(d: dict, min_value: float) -> dict:
    """Filter dictionary by minimum value."""
    result = {}
    for key, value in d.items():
        if value >= min_value:
            result[key] = value
    return result`,
                testCases: [
                    { input: "filter_dict({'a': 1, 'b': 2, 'c': 3}, 2)", expected: "{'b': 2, 'c': 3}" },
                    { input: "filter_dict({'a': 1}, 5)", expected: "{}" },
                    { input: "filter_dict({}, 0)", expected: "{}" }
                ]
            },
            {
                id: "089",
                number: 7,
                description: "Create a function `get_value_safely` that takes a dictionary, a key, and a default. Return the value for the key if it exists, otherwise return the default.",
                starterCode: `def get_value_safely(d: dict, key: str, default):
    # Your code here
    pass`,
                solutionCode: `def get_value_safely(d: dict, key: str, default):
    """Get value with fallback default."""
    if key in d:
        return d[key]
    return default`,
                testCases: [
                    { input: "get_value_safely({'a': 1}, 'a', 0)", expected: "1" },
                    { input: "get_value_safely({'a': 1}, 'b', 0)", expected: "0" },
                    { input: "get_value_safely({}, 'x', 'none')", expected: "'none'" }
                ]
            },
            {
                id: "090",
                number: 8,
                description: "Create a function `group_by_length` that takes a list of strings and returns a dictionary where keys are lengths and values are lists of strings with that length.",
                starterCode: `def group_by_length(words: list) -> dict:
    # Your code here
    pass`,
                solutionCode: `def group_by_length(words: list) -> dict:
    """Group words by their length."""
    result = {}
    for word in words:
        length = len(word)
        if length not in result:
            result[length] = []
        result[length].append(word)
    return result`,
                testCases: [
                    { input: "group_by_length(['a', 'bb', 'c'])", expected: "{1: ['a', 'c'], 2: ['bb']}" },
                    { input: "group_by_length(['hi', 'no'])", expected: "{2: ['hi', 'no']}" },
                    { input: "group_by_length([])", expected: "{}" }
                ]
            },
            {
                id: "091",
                number: 9,
                description: "Create a function `most_common` that takes a string and returns the most frequently occurring character.",
                starterCode: `def most_common(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def most_common(text: str) -> str:
        if count > max_count:
            max_char = char
            max_count = count
    return max_char`,
                testCases: [
                    { input: "most_common('banana')", expected: "'a'" },
                    { input: "most_common('aaabb')", expected: "'a'" },
                    { input: "most_common('x')", expected: "'x'" }
                ]
            },
            {
                id: "092",
                number: 10,
                description: "Create a function `sum_values` that takes a dictionary with numeric values and returns the sum of all values.",
                starterCode: `def sum_values(d: dict) -> float:
    # Your code here
    pass`,
                solutionCode: `def sum_values(d: dict) -> float:
    """Sum all values in a dictionary."""
    total = 0
    for value in d.values():
        total += value
    return total`,
                testCases: [
                    { input: "sum_values({'a': 10, 'b': 20})", expected: "30" },
                    { input: "sum_values({'a': -5, 'b': 5})", expected: "0" },
                    { input: "sum_values({})", expected: "0" }
                ]
            },
        ],
    },
    {
        id: "string_mastery",
        title: "String Mastery",
        description: "Advanced String Operations",
        explanation: `
      <p class="mb-4">Mastering strings means combining multiple operations and handling edge cases.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Slicing</h4>
      <p class="mb-2"><code>s[start:end]</code>, <code>s[:end]</code>, <code>s[start:]</code>, <code>s[::-1]</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">String Methods</h4>
      <p class="mb-2"><code>.startswith()</code>, <code>.endswith()</code>, <code>.isalpha()</code>, <code>.isdigit()</code>, <code>.join()</code></p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Building Strings</h4>
      <p class="mb-2">Concatenate with <code>+</code> or join a list of strings.</p>
    `,
        exampleCode: `def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome (ignoring case and spaces)."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

def extract_numbers(text: str) -> str:
    """Extract only the digits from a string."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,
        challenges: [
            {
                id: "093",
                number: 1,
                description: "Create a function `is_palindrome` that returns `True` if a string is a palindrome. Ignore case and spaces.",
                starterCode: `def is_palindrome(text: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_palindrome(text: str) -> bool:
    """Check if text is a palindrome."""
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]`,
                testCases: [
                    { input: "is_palindrome('Racecar')", expected: "True" },
                    { input: "is_palindrome('Hello')", expected: "False" },
                    { input: "is_palindrome('A man a plan a canal Panama')", expected: "True" }
                ]
            },
            {
                id: "094",
                number: 2,
                description: "Create a function `remove_vowels` that takes a string and returns it with all vowels removed.",
                starterCode: `def remove_vowels(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def remove_vowels(text: str) -> str:
    """Remove all vowels from text."""
    vowels = "aeiouAEIOU"
    result = ""
    for char in text:
        if char not in vowels:
            result += char
    return result`,
                testCases: [
                    { input: "remove_vowels('Hello')", expected: "'Hll'" },
                    { input: "remove_vowels('AEIOU')", expected: "''" },
                    { input: "remove_vowels('BCDFGH')", expected: "'BCDFGH'" }
                ]
            },
            {
                id: "095",
                number: 3,
                description: "Create a function `capitalize_words` that takes a sentence and returns it with each word capitalized.",
                starterCode: `def capitalize_words(sentence: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def capitalize_words(sentence: str) -> str:
    """Capitalize first letter of each word."""
    words = sentence.split()
    result = []
    for word in words:
        result.append(word.capitalize())
    return " ".join(result)`,
                testCases: [
                    { input: "capitalize_words('hello world')", expected: "'Hello World'" },
                    { input: "capitalize_words('this is python')", expected: "'This Is Python'" }
                ]
            },
            {
                id: "096",
                number: 4,
                description: "Create a function `extract_digits` that takes a string and returns a string containing only the digit characters.",
                starterCode: `def extract_digits(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def extract_digits(text: str) -> str:
    """Extract only digits from text."""
    result = ""
    for char in text:
        if char.isdigit():
            result += char
    return result`,
                testCases: [
                    { input: "extract_digits('abc123def456')", expected: "'123456'" },
                    { input: "extract_digits('Price: $19.99')", expected: "'1999'" },
                    { input: "extract_digits('No digits')", expected: "''" }
                ]
            },
            {
                id: "097",
                number: 5,
                description: "Create a function `mask_string` that takes a string and returns it with all but the last 4 characters replaced with '*'. If 4 or fewer chars, return all '*'.",
                starterCode: `def mask_string(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def mask_string(text: str) -> str:
    """Mask all but last 4 characters."""
    if len(text) <= 4:
        return "*" * len(text)
    return "*" * (len(text) - 4) + text[-4:]`,
                testCases: [
                    { input: "mask_string('1234567890')", expected: "'******7890'" },
                    { input: "mask_string('123')", expected: "'***'" },
                    { input: "mask_string('1234')", expected: "'****'" }
                ]
            },
            {
                id: "098",
                number: 6,
                description: "Create a function `is_anagram` that takes two strings and returns `True` if they are anagrams (contain same letters in different order). Ignore case and spaces.",
                starterCode: `def is_anagram(s1: str, s2: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def is_anagram(s1: str, s2: str) -> bool:
    """Check if two strings are anagrams."""
    clean1 = s1.lower().replace(" ", "")
    clean2 = s2.lower().replace(" ", "")
    return sorted(clean1) == sorted(clean2)`,
                testCases: [
                    { input: "is_anagram('Listen', 'Silent')", expected: "True" },
                    { input: "is_anagram('hello', 'world')", expected: "False" },
                    { input: "is_anagram('rail safety', 'fairy tales')", expected: "True" }
                ]
            },
            {
                id: "099",
                number: 7,
                description: "Create a function `longest_word` that takes a sentence and returns the longest word. If there's a tie, return the first one.",
                starterCode: `def longest_word(sentence: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def longest_word(sentence: str) -> str:
    """Find the longest word in a sentence."""
    words = sentence.split()
    if not words:
        return ""
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest`,
                testCases: [
                    { input: "longest_word('This is a test')", expected: "'test'" },
                    { input: "longest_word('Python is amazing')", expected: "'amazing'" },
                    { input: "longest_word('')", expected: "''" }
                ]
            },
            {
                id: "100",
                number: 8,
                description: "Create a function `compress_string` that takes a string and returns a compressed version. 'aabbbcccc' → 'a2b3c4'. If compression isn't shorter, return original.",
                starterCode: `def compress_string(text: str) -> str:
    # Your code here
    pass`,
                solutionCode: `def compress_string(text: str) -> str:
    """Compress string using run-length encoding."""
    if not text:
        return text
    
    result = ""
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
    
    if len(result) < len(text):
        return result
    return text`,
                testCases: [
                    { input: "compress_string('aabcccccaaa')", expected: "'a2b1c5a3'" },
                    { input: "compress_string('abcdef')", expected: "'abcdef'" }
                ]
            },
        ],
    },
    {
        id: "combining_structures",
        title: "Combining Data Structures",
        description: "Lists of Dicts, Nested Data",
        explanation: `
      <p class="mb-4">Real-world data often involves nested structures - lists containing dictionaries, dictionaries containing lists, etc.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">List of Dictionaries</h4>
      <p class="mb-2">Common pattern for tabular data like records or rows.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Nested Access</h4>
      <p class="mb-2"><code>data[0]["name"]</code> - first item's name field</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Processing Nested Data</h4>
      <p class="mb-2">Often requires nested loops or multiple steps.</p>
    `,
        exampleCode: `def get_names(people: list) -> list:
    """Extract all names from list of person dictionaries."""
    names = []
    for person in people:
        names.append(person["name"])
    return names

def total_price(cart: list) -> float:
    """Calculate total from shopping cart items."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,
        challenges: [
            {
                id: "101",
                number: 1,
                description: "Create a function `get_names` that takes a list of dictionaries (each with a 'name' key) and returns a list of all names.",
                starterCode: `def get_names(people: list) -> list:
    # Example: [{'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}]
    # Your code here
    pass`,
                solutionCode: `def get_names(people: list) -> list:
    """Extract names from list of person dicts."""
    names = []
    for person in people:
        names.append(person["name"])
    return names`,
                testCases: [
                    { input: "get_names([{'name': 'Alice'}, {'name': 'Bob'}])", expected: "['Alice', 'Bob']" },
                    { input: "get_names([])", expected: "[]" }
                ]
            },
            {
                id: "102",
                number: 2,
                description: "Create a function `filter_by_key` that takes a list of dicts, a key, and a value. Return only dicts where that key equals that value.",
                starterCode: `def filter_by_key(items: list, key: str, value) -> list:
    # Your code here
    pass`,
                solutionCode: `def filter_by_key(items: list, key: str, value) -> list:
    """Filter list of dicts by key-value match."""
    result = []
    for item in items:
        if item.get(key) == value:
            result.append(item)
    return result`,
                testCases: [
                    { input: "filter_by_key([{'id': 1, 'type': 'A'}, {'id': 2, 'type': 'B'}, {'id': 3, 'type': 'A'}], 'type', 'A')", expected: "[{'id': 1, 'type': 'A'}, {'id': 3, 'type': 'A'}]" },
                    { input: "filter_by_key([], 'type', 'A')", expected: "[]" }
                ]
            },
            {
                id: "103",
                number: 3,
                description: "Create a function `cart_total` that takes a list of items with 'price' and 'quantity' keys. Return the total cost.",
                starterCode: `def cart_total(cart: list) -> float:
    # Example: [{'name': 'Apple', 'price': 1.50, 'quantity': 3}]
    # Your code here
    pass`,
                solutionCode: `def cart_total(cart: list) -> float:
    """Calculate total cost of shopping cart."""
    total = 0
    for item in cart:
        total += item["price"] * item["quantity"]
    return total`,
                testCases: [
                    { input: "cart_total([{'price': 10, 'quantity': 2}, {'price': 5, 'quantity': 1}])", expected: "25" },
                    { input: "cart_total([])", expected: "0" }
                ]
            },
            {
                id: "104",
                number: 4,
                description: "Create a function `average_by_key` that takes a list of dicts and a key. Return the average of all values for that key.",
                starterCode: `def average_by_key(items: list, key: str) -> float:
    # Your code here
    pass`,
                solutionCode: `def average_by_key(items: list, key: str) -> float:
    """Calculate average of a specific key across dicts."""
    if not items:
        return 0
    total = 0
    for item in items:
        total += item[key]
    return total / len(items)`,
                testCases: [
                    { input: "average_by_key([{'score': 10}, {'score': 20}], 'score')", expected: "15.0" },
                    { input: "average_by_key([], 'score')", expected: "0" }
                ]
            },
            {
                id: "105",
                number: 5,
                description: "Create a function `find_by_id` that takes a list of dicts (each with an 'id' key) and an id value. Return the matching dict or None.",
                starterCode: `def find_by_id(items: list, target_id: int) -> dict:
    # Your code here
    pass`,
                solutionCode: `def find_by_id(items: list, target_id: int) -> dict:
    """Find dict by id value."""
    for item in items:
        if item.get("id") == target_id:
            return item
    return None`,
                testCases: [
                    { input: "find_by_id([{'id': 1, 'name': 'A'}, {'id': 2, 'name': 'B'}], 2)", expected: "{'id': 2, 'name': 'B'}" },
                    { input: "find_by_id([{'id': 1}], 3)", expected: "None" }
                ]
            },
            {
                id: "106",
                number: 6,
                description: "Create a function `group_by_key` that takes a list of dicts and a key name. Return a dict grouping items by their value for that key.",
                starterCode: `def group_by_key(items: list, key: str) -> dict:
    # Your code here
    pass`,
                solutionCode: `def group_by_key(items: list, key: str) -> dict:
    """Group items by the value of a specific key."""
    result = {}
    for item in items:
        value = item.get(key)
        if value not in result:
            result[value] = []
        result[value].append(item)
    return result`,
                testCases: [
                    { input: "group_by_key([{'type': 'A', 'val': 1}, {'type': 'B', 'val': 2}, {'type': 'A', 'val': 3}], 'type')", expected: "{'A': [{'type': 'A', 'val': 1}, {'type': 'A', 'val': 3}], 'B': [{'type': 'B', 'val': 2}]}" },
                    { input: "group_by_key([], 'type')", expected: "{}" }
                ]
            },
            {
                id: "107",
                number: 7,
                description: "Create a function `flatten` that takes a list of lists and returns a single flat list containing all elements.",
                starterCode: `def flatten(nested: list) -> list:
    # Example: [[1, 2], [3, 4, 5]] -> [1, 2, 3, 4, 5]
    # Your code here
    pass`,
                solutionCode: `def flatten(nested: list) -> list:
    """Flatten a list of lists."""
    result = []
    for sublist in nested:
        for item in sublist:
            result.append(item)
    return result`,
                testCases: [
                    { input: "flatten([[1, 2], [3, 4]])", expected: "[1, 2, 3, 4]" },
                    { input: "flatten([[], [1]])", expected: "[1]" },
                    { input: "flatten([])", expected: "[]" }
                ]
            },
            {
                id: "108",
                number: 8,
                description: "Create a function `sort_by_key` that takes a list of dicts and a key name. Return the list sorted by that key's value.",
                starterCode: `def sort_by_key(items: list, key: str) -> list:
    # Your code here
    pass`,
                solutionCode: `def sort_by_key(items: list, key: str) -> list:
    """Sort list of dicts by a specific key."""
    # Simple bubble sort implementation
    result = items.copy()
    n = len(result)
    for i in range(n):
        for j in range(0, n - i - 1):
            if result[j][key] > result[j + 1][key]:
                result[j], result[j + 1] = result[j + 1], result[j]
    return result`,
                testCases: [
                    { input: "sort_by_key([{'val': 3}, {'val': 1}, {'val': 2}], 'val')", expected: "[{'val': 1}, {'val': 2}, {'val': 3}]" },
                    { input: "sort_by_key([], 'val')", expected: "[]" }
                ]
            },
        ],
    },
    {
        id: "capstone",
        title: "Capstone Challenges",
        description: "Put Everything Together",
        explanation: `
      <p class="mb-4">These challenges combine everything you've learned. They require functions, loops, conditionals, lists, dictionaries, and string manipulation.</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Problem-Solving Approach</h4>
      <p class="mb-2">1. Understand the problem fully<br>2. Work through examples by hand<br>3. Plan your approach<br>4. Code it step by step<br>5. Test with edge cases</p>
      
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Tips</h4>
      <p class="mb-2">Break complex problems into smaller functions. Test each piece before combining.</p>
    `,
        exampleCode: `def validate_password(password: str) -> dict:
    """Check password strength and return validation results."""
    results = {
        "valid": True,
        "errors": []
    }
    
    if len(password) < 8:
        results["errors"].append("Must be at least 8 characters")
        results["valid"] = False
    
    has_upper = False
    for char in password:
        if char.isupper():
            has_upper = True
            break
    
    if not has_upper:
        results["errors"].append("Must contain uppercase letter")
        results["valid"] = False
    
    return results`,
        challenges: [
            {
                id: "109",
                number: 1,
                description: "Create a function `validate_password` that takes a password string. Return a dict with 'valid' (bool) and 'errors' (list). Check: min 8 chars, has uppercase, has lowercase, has digit.",
                starterCode: `def validate_password(password: str) -> dict:
    # Your code here
    pass`,
                solutionCode: `def validate_password(password: str) -> dict:
    """Validate password strength."""
    errors = []
    
    if len(password) < 8:
        errors.append("Must be at least 8 characters")
    
    has_upper = False
    has_lower = False
    has_digit = False
    
    for char in password:
        if char.isupper():
            has_upper = True
        if char.islower():
            has_lower = True
        if char.isdigit():
            has_digit = True
    
    if not has_upper:
        errors.append("Must contain uppercase letter")
    if not has_lower:
        errors.append("Must contain lowercase letter")
    if not has_digit:
        errors.append("Must contain a digit")
    
    return {"valid": len(errors) == 0, "errors": errors}`,
                testCases: [
                    { input: "validate_password('ValidPass1')", expected: "{'valid': True, 'errors': []}" },
                    { input: "validate_password('short')", expected: "{'valid': False, 'errors': ['Must be at least 8 characters', 'Must contain uppercase letter', 'Must contain a digit']}" },
                    { input: "validate_password('alllowercase1')", expected: "{'valid': False, 'errors': ['Must contain uppercase letter']}" }
                ]
            },
            {
                id: "110",
                number: 2,
                description: "Create a function `format_duration` that takes seconds and returns a human-readable string like '2 hours, 3 minutes, 45 seconds'. Omit zero values.",
                starterCode: `def format_duration(seconds: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def format_duration(seconds: int) -> str:
    """Format seconds as human-readable duration."""
    if seconds == 0:
        return "0 seconds"
    
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    
    parts = []
    if hours > 0:
        parts.append(f"{hours} hour" + ("s" if hours > 1 else ""))
    if minutes > 0:
        parts.append(f"{minutes} minute" + ("s" if minutes > 1 else ""))
    if secs > 0:
        parts.append(f"{secs} second" + ("s" if secs > 1 else ""))
    
    return ", ".join(parts)`,
                testCases: [
                    { input: "format_duration(3665)", expected: "'1 hour, 1 minute, 5 seconds'" },
                    { input: "format_duration(62)", expected: "'1 minute, 2 seconds'" },
                    { input: "format_duration(0)", expected: "'0 seconds'" }
                ]
            },
            {
                id: "111",
                number: 3,
                description: "Create a function `calculate_grade_stats` that takes a list of student dicts with 'name' and 'score'. Return a dict with 'average', 'highest', 'lowest', 'passing' (score >= 60 count).",
                starterCode: `def calculate_grade_stats(students: list) -> dict:
    # Your code here
    pass`,
                solutionCode: `def calculate_grade_stats(students: list) -> dict:
    """Calculate statistics from student grades."""
    if not students:
        return {"average": 0, "highest": 0, "lowest": 0, "passing": 0}
    
    scores = [s["score"] for s in students]
    
    total = 0
    highest = scores[0]
    lowest = scores[0]
    passing = 0
    
    for score in scores:
        total += score
        if score > highest:
            highest = score
        if score < lowest:
            lowest = score
        if score >= 60:
            passing += 1
    
    return {
        "average": total / len(scores),
        "highest": highest,
        "lowest": lowest,
        "passing": passing
    }`,
                testCases: [
                    { input: "calculate_grade_stats([{'name': 'A', 'score': 80}, {'name': 'B', 'score': 60}, {'name': 'C', 'score': 40}])", expected: "{'average': 60.0, 'highest': 80, 'lowest': 40, 'passing': 2}" },
                    { input: "calculate_grade_stats([])", expected: "{'average': 0, 'highest': 0, 'lowest': 0, 'passing': 0}" }
                ]
            },
            {
                id: "112",
                number: 4,
                description: "Create a function `word_frequency` that takes a text string and returns the top 5 most common words (lowercase) as a list of tuples (word, count).",
                starterCode: `def word_frequency(text: str) -> list:
    # Your code here
    pass`,
                solutionCode: `def word_frequency(text: str) -> list:
    """Find top 5 most common words."""
    # Count words
    counts = {}
    words = text.lower().split()
    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    
    # Convert to list of tuples and sort
    items = list(counts.items())
    
    # Simple bubble sort by count (descending)
    n = len(items)
    for i in range(n):
        for j in range(0, n - i - 1):
            if items[j][1] < items[j + 1][1]:
                items[j], items[j + 1] = items[j + 1], items[j]
    
    return items[:5]`,
                testCases: [
                    { input: "word_frequency('a b a c b a')", expected: "[['a', 3], ['b', 2], ['c', 1]]" },
                    { input: "word_frequency('')", expected: "[]" },
                    { input: "word_frequency('one one two')", expected: "[['one', 2], ['two', 1]]" }
                ]
            },
            {
                id: "113",
                number: 5,
                description: "Create a function `valid_brackets` that takes a string containing only '()[]{}' and returns True if all brackets are properly matched and nested.",
                starterCode: `def valid_brackets(s: str) -> bool:
    # Your code here
    pass`,
                solutionCode: `def valid_brackets(s: str) -> bool:
    """Check if brackets are properly matched."""
    stack = []
    pairs = {")": "(", "}": "{", "]": "["}
    
    for char in s:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack:
                return False
            if stack[-1] != pairs[char]:
                return False
            stack.pop()
    
    return len(stack) == 0`,
                testCases: [
                    { input: "valid_brackets('()[]{}')", expected: "True" },
                    { input: "valid_brackets('([)]')", expected: "False" },
                    { input: "valid_brackets('[')", expected: "False" }
                ]
            },
            {
                id: "114",
                number: 6,
                description: "Create a function `merge_sorted` that takes two sorted lists and returns a single sorted list containing all elements.",
                starterCode: `def merge_sorted(list1: list, list2: list) -> list:
    # Your code here
    pass`,
                solutionCode: `def merge_sorted(list1: list, list2: list) -> list:
    """Merge two sorted lists into one sorted list."""
    result = []
    i = 0
    j = 0
    
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    
    # Add remaining elements
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1
    
    return result`,
                testCases: [
                    { input: "merge_sorted([1, 3, 5], [2, 4, 6])", expected: "[1, 2, 3, 4, 5, 6]" },
                    { input: "merge_sorted([1, 2], [])", expected: "[1, 2]" },
                    { input: "merge_sorted([], [])", expected: "[]" }
                ]
            },
            {
                id: "115",
                number: 7,
                description: "Create a function `caesar_cipher` that takes a string and a shift amount. Shift each letter by that amount in the alphabet. Wrap around (z + 1 = a). Keep non-letters unchanged.",
                starterCode: `def caesar_cipher(text: str, shift: int) -> str:
    # Your code here
    pass`,
                solutionCode: `def caesar_cipher(text: str, shift: int) -> str:
    """Apply Caesar cipher to text."""
    result = ""
    for char in text:
        if char.isalpha():
            # Determine base (a or A)
            base = ord('a') if char.islower() else ord('A')
            # Shift and wrap around
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result`,
                testCases: [
                    { input: "caesar_cipher('abc', 1)", expected: "'bcd'" },
                    { input: "caesar_cipher('xyz', 1)", expected: "'yza'" },
                    { input: "caesar_cipher('Hello, World!', 1)", expected: "'Ifmmp, Xpsme!'" }
                ]
            },
            {
                id: "116",
                number: 8,
                description: "Create a function `calculate_invoice` that takes a list of line items with 'quantity', 'unit_price', and optional 'discount' (percentage). Return subtotal, total_discount, and grand_total.",
                starterCode: `def calculate_invoice(items: list) -> dict:
    # Your code here
    pass`,
                solutionCode: `def calculate_invoice(items: list) -> dict:
    """Calculate invoice totals with discounts."""
    subtotal = 0
    total_discount = 0
    
    for item in items:
        line_total = item["quantity"] * item["unit_price"]
        subtotal += line_total
        
        if "discount" in item:
            discount = line_total * (item["discount"] / 100)
            total_discount += discount
    
    grand_total = subtotal - total_discount
    
    return {
        "subtotal": round(subtotal, 2),
        "total_discount": round(total_discount, 2),
        "grand_total": round(grand_total, 2)
    }`,
                testCases: [
                    { input: "calculate_invoice([{'quantity': 2, 'unit_price': 10}, {'quantity': 1, 'unit_price': 20, 'discount': 10}])", expected: "{'subtotal': 40.0, 'total_discount': 2.0, 'grand_total': 38.0}" },
                    { input: "calculate_invoice([])", expected: "{'subtotal': 0, 'total_discount': 0, 'grand_total': 0}" }
                ]
            },
        ],
    },
];
