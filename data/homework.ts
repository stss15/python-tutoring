import { Homework } from "../types";

export const homeworkByChapter: Record<string, Homework[]> = {
  first_functions: [
    {
      title: "Personal Introduction Generator",
      brief: "Build a program that creates personalized introduction cards using multiple functions that work together.",
      bullets: [
        "Create functions: `get_full_name(first, last)`, `calculate_birth_year(age)`, `format_introduction(name, age, hobby)`",
        "Each function must RETURN a value (no printing inside helper functions)",
        "Use f-strings to format all output strings",
        "Create a final `generate_card(first, last, age, hobby)` function that calls all other functions and returns a complete introduction",
        "Test your functions work independently before combining them"
      ],
    },
  ],
  working_with_numbers: [
    {
      title: "Restaurant Bill Calculator",
      brief: "Create a complete bill splitting application that handles tax, tips, and divides costs among friends.",
      bullets: [
        "Write `calculate_subtotal(items)` that sums a list of item prices",
        "Write `apply_tax(amount, tax_rate)` that adds tax (default 8.25%)",
        "Write `calculate_tip(amount, tip_percent)` for tip calculation",
        "Write `split_bill(total, num_people)` that divides evenly with proper rounding",
        "Create `generate_receipt(items, tax_rate, tip_percent, num_people)` that uses all functions",
        "All money values must be rounded to 2 decimal places",
        "Test with at least 3 different scenarios"
      ],
    },
  ],
  making_decisions: [
    {
      title: "Smart Ticket Pricing System",
      brief: "Design a movie theater ticket system that calculates prices based on multiple factors.",
      bullets: [
        "Base ticket price: $12.00",
        "Age pricing: free under 3, kids (3-12) get 40% off, seniors (65+) get 30% off",
        "Matinee shows (before 5pm) get additional 25% off",
        "Tuesday is discount day: additional $2 off final price",
        "Write functions: `get_age_discount(age)`, `is_matinee(hour)`, `calculate_final_price(age, hour, is_tuesday)`",
        "Use early returns and avoid deeply nested if statements",
        "Print clear receipts showing all discounts applied"
      ],
    },
  ],
  text_basics: [
    {
      title: "Username & Email Validator",
      brief: "Build a system that validates and cleans up user registration data.",
      bullets: [
        "Write `clean_username(raw_input)`: strip whitespace, lowercase, replace spaces with underscores",
        "Write `validate_email(email)`: must contain exactly one '@' with text before and after",
        "Write `extract_domain(email)`: return just the domain part (after @)",
        "Write `create_user_tag(full_name)`: create @username from name (e.g., 'John Smith' → '@johnsmith')",
        "Write `format_user_summary(name, email)`: return formatted string with all cleaned data",
        "Handle edge cases: empty strings, multiple spaces, weird capitalization",
        "Test with messy inputs like '  JOHN   SMITH  ' and 'WeirdEmail@DOMAIN.com'"
      ],
    },
  ],
  for_loops: [
    {
      title: "Math Quiz Generator",
      brief: "Create an interactive multiplication practice program that tracks performance.",
      bullets: [
        "Write `generate_problem(table_number, multiplier)`: returns a problem dict with 'question' and 'answer'",
        "Write `check_answer(user_answer, correct_answer)`: returns True/False",
        "Write `calculate_score(correct, total)`: returns percentage",
        "Write `generate_quiz(table_number, num_questions)`: generates all problems for a times table",
        "Write `grade_quiz(answers, correct_answers)`: returns list of which ones were wrong",
        "Write `generate_report(score, wrong_answers)`: creates a study summary",
        "Use loops to generate problems 1 through 12 for any given times table",
        "Track which problems were missed for review"
      ],
    },
  ],
  while_loops: [
    {
      title: "Number Guessing Game with Stats",
      brief: "Build a guess-the-number game with hint system, attempt tracking, and game history.",
      bullets: [
        "Write `get_hint(guess, target)`: return 'too high', 'too low', or 'correct!'",
        "Write `get_temperature(guess, target)`: return 'freezing', 'cold', 'warm', 'hot', 'on fire!' based on distance",
        "Write `play_round(target, max_attempts)`: run one game, return attempts used or -1 if failed",
        "Write `calculate_stats(game_history)`: return dict with wins, losses, average_attempts",
        "Use while loops for the guessing process with attempt limits",
        "Store results of multiple games and show running statistics",
        "Allow player to quit or play again after each round"
      ],
    },
  ],
  lists_basics: [
    {
      title: "Playlist Manager",
      brief: "Create a music playlist application with add, remove, and analysis features.",
      bullets: [
        "Write `add_song(playlist, song)`: add song if not duplicate, return success message",
        "Write `remove_song(playlist, song)`: remove song if exists, return appropriate message",
        "Write `find_longest_song(playlist)`: find song with longest title",
        "Write `get_playlist_stats(playlist)`: return dict with count, shortest, longest titles",
        "Write `search_songs(playlist, keyword)`: return all songs containing keyword",
        "Write `shuffle_playlist(playlist)`: return new randomized order (implement your own algorithm)",
        "Don't use built-in list methods like .index() - write your own search logic",
        "Handle edge cases: empty playlist, song not found, duplicate detection"
      ],
    },
  ],
  lists_transformation: [
    {
      title: "Grade Book Processor",
      brief: "Build a grade processing system that transforms raw scores into final grades.",
      bullets: [
        "Write `curve_scores(scores, curve_amount)`: add curve to all scores, cap at 100",
        "Write `drop_lowest(scores)`: return list with lowest score removed",
        "Write `calculate_letter_grades(scores)`: convert numbers to A/B/C/D/F",
        "Write `filter_passing(students)`: return only students with score >= 60 (students are dicts)",
        "Write `rank_students(students)`: return students sorted by score, highest first",
        "Write `grade_distribution(scores)`: return dict counting how many of each letter grade",
        "Use the filter and map patterns (not list comprehensions yet)",
        "Each function should create a NEW list, never modify the original"
      ],
    },
  ],
  dictionaries: [
    {
      title: "Word Frequency Analyzer",
      brief: "Create a text analysis tool that finds patterns in writing.",
      bullets: [
        "Write `count_words(text)`: return dict of word frequencies (case-insensitive)",
        "Write `get_top_words(word_counts, n)`: return n most common words as list of tuples",
        "Write `find_unique_words(text)`: return words that appear exactly once",
        "Write `calculate_avg_word_length(text)`: return average length of all words",
        "Write `compare_texts(text1, text2)`: return dict with 'common', 'only_in_first', 'only_in_second'",
        "Write `generate_report(text)`: use all functions to create comprehensive analysis",
        "Handle punctuation: strip periods, commas, etc. from words",
        "Test with at least 100 words of sample text"
      ],
    },
  ],
  string_mastery: [
    {
      title: "Text Transformation Toolkit",
      brief: "Build a collection of text processing utilities for cleaning and transforming strings.",
      bullets: [
        "Write `to_title_case(text)`: capitalize first letter of each word",
        "Write `to_snake_case(text)`: convert 'Hello World' to 'hello_world'",
        "Write `to_camel_case(text)`: convert 'hello world' to 'helloWorld'",
        "Write `reverse_words(text)`: reverse order of words, not characters",
        "Write `remove_extra_spaces(text)`: collapse multiple spaces into one",
        "Write `censor_word(text, word)`: replace all occurrences with asterisks",
        "Write `is_valid_identifier(text)`: check if valid Python variable name (letters, numbers, underscore, can't start with number)",
        "Handle edge cases: empty strings, single words, all spaces"
      ],
    },
  ],
  combining_structures: [
    {
      title: "Student Management System",
      brief: "Design a complete student record management application.",
      bullets: [
        "Store students as list of dicts: {'id', 'name', 'grades': [], 'courses': []}",
        "Write `add_student(students, name)`: create new student with unique ID",
        "Write `add_grade(students, student_id, course, grade)`: add grade to student",
        "Write `get_student_gpa(student)`: calculate GPA from all grades",
        "Write `get_honor_roll(students)`: return students with GPA >= 3.5",
        "Write `get_course_roster(students, course)`: all students in a course",
        "Write `get_class_statistics(students)`: return dict with highest GPA, lowest GPA, average GPA",
        "Write `generate_transcript(student)`: formatted string showing all courses and grades",
        "Generate unique IDs starting from 1001"
      ],
    },
  ],
  capstone: [
    {
      title: "Mini Shopping Cart System",
      brief: "Build a complete e-commerce shopping cart with inventory and checkout.",
      bullets: [
        "Create `inventory` dict with products: {'name', 'price', 'stock'}",
        "Write `add_to_cart(cart, inventory, product_name, quantity)`: check stock, add to cart",
        "Write `remove_from_cart(cart, product_name, quantity)`: update or remove item",
        "Write `calculate_cart_total(cart)`: sum all items × quantities",
        "Write `apply_coupon(total, coupon_code)`: apply discount (create 2-3 valid codes)",
        "Write `checkout(cart, inventory, coupon)`: process order, update inventory, return receipt",
        "Write `format_receipt(order_details)`: create formatted receipt string",
        "Handle all error cases: out of stock, invalid product, empty cart, invalid coupon",
        "Persist cart between operations (pass cart to functions, return modified cart)",
        "Create a main menu that lets users browse, add, remove, view cart, and checkout"
      ],
    },
  ],
};
