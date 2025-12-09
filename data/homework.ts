import { Homework } from "../types";

export const homeworkByChapter: Record<string, Homework[]> = {
  "01_basics": [
    {
      title: "Personal Introduction Generator",
      brief: "Create a program to generate personalized introduction cards using helper functions.",
      bullets: [
        "Implement `get_full_name(first, last)` to return 'Last, First'.",
        "Implement `calculate_birth_year(age)` to return the estimated birth year.",
        "Implement `format_introduction(name, age, hobby)` to return a summary string.",
        "Implement `generate_card(first, last, age, hobby)` that calls all helpers to return the final card."
      ],
    },
  ],
  "02_if_statements": [
    {
      title: "Smart Ticket Pricing System",
      brief: "Design a movie ticket pricing system with age and time-based discounts.",
      bullets: [
        "Implement `get_age_discount(age)` to apply discounts for kids/seniors.",
        "Implement `is_matinee(hour)` to check if the showtime qualifies for a discount.",
        "Implement `calculate_final_price(age, hour, is_tuesday)` to compute total cost.",
        "Ensure Tuesday discounts are applied after other reductions."
      ],
    },
  ],
  "03_strings": [
    {
      title: "Username & Email Validator",
      brief: "Build a system to validate and format user registration data.",
      bullets: [
        "Implement `clean_username(raw_input)` to strip whitespace and lowercase.",
        "Implement `validate_email(email)` to check for a single '@' symbol.",
        "Implement `extract_domain(email)` to return the domain part.",
        "Implement `create_user_tag(full_name)` to generate a handle like '@johnsmith'.",
        "Implement `format_user_summary(name, email)` to return a cleaned data summary."
      ],
    },
  ],
  "04_maths": [
    {
      title: "Restaurant Bill Calculator",
      brief: "Create a bill splitting system with tax and tip calculations.",
      bullets: [
        "Implement `calculate_subtotal(items)` to sum a list of prices.",
        "Implement `apply_tax(amount, tax_rate)` to add tax (default 8.25%).",
        "Implement `calculate_tip(amount, tip_percent)` to calculate the tip amount.",
        "Implement `split_bill(total, num_people)` to divide the total evenly.",
        "Implement `generate_receipt(items, tax_rate, tip_percent, num_people)` to return the final breakdown."
      ],
    },
  ],
  "05_for_loops": [
    {
      title: "Math Quiz Generator",
      brief: "Create a multiplication practice program that tracks user performance.",
      bullets: [
        "Implement `generate_problem(table, multiplier)` to return a question/answer pair.",
        "Implement `check_answer(user_ans, correct_ans)` to return True/False.",
        "Implement `calculate_score(correct, total)` to return a percentage.",
        "Implement `generate_quiz(table, questions)` to create a list of problems.",
        "Implement `grade_quiz(answers, solutions)` to identify incorrect responses."
      ],
    },
  ],
  "06_while_loops": [
    {
      title: "Number Guessing Game",
      brief: "Build a guessing game with hints and attempt tracking.",
      bullets: [
        "Implement `get_hint(guess, target)` to return 'too high' or 'too low'.",
        "Implement `get_temperature(guess, target)` to return proximity (e.g., 'hot', 'cold').",
        "Implement `play_round(target, max_attempts)` to run a single game loop.",
        "Implement `calculate_stats(history)` to summarize wins and losses."
      ],
    },
  ],
  "07_random": [
    {
      title: "Dice Roller Simulator",
      brief: "Create a dice rolling tool for board games.",
      bullets: [
        "Implement `roll_die(sides)` to return a random number 1-sides.",
        "Implement `roll_multiple(num_dice, sides)` to return a list of rolls.",
        "Implement `get_roll_stats(rolls)` to return sum and average.",
        "Implement `check_critical_success(roll, sides)` to return True if max value rolled."
      ],
    },
  ],
  "08_lists_dicts": [
    {
      title: "Playlist Manager",
      brief: "Create a music playlist manager with search and analysis features.",
      bullets: [
        "Implement `add_song(playlist, song)` to add unique songs.",
        "Implement `remove_song(playlist, song)` to delete a song if it exists.",
        "Implement `find_longest_song(playlist)` to return the title with the most characters.",
        "Implement `get_playlist_stats(playlist)` to return count and length stats.",
        "Implement `search_songs(playlist, keyword)` to find matches."
      ],
    },
    {
      title: "Word Frequency Analyzer",
      brief: "Create a tool to analyze word patterns in text.",
      bullets: [
        "Implement `count_words(text)` to return frequencies (case-insensitive).",
        "Implement `get_top_words(counts, n)` to return the most common words.",
        "Implement `find_unique_words(text)` to find words appearing exactly once.",
        "Implement `compare_texts(text1, text2)` to find common and unique vocabulary.",
        "Implement `generate_report(text)` to produce a full analysis."
      ],
    },
  ],
  "09_more_strings": [
    {
      title: "Text Transformation Toolkit",
      brief: "Build a collection of utilities for cleaning and formatting text.",
      bullets: [
        "Implement `to_title_case(text)` to capitalize words.",
        "Implement `to_snake_case(text)` to convert to 'hello_world' format.",
        "Implement `reverse_words(text)` to reverse word order.",
        "Implement `remove_extra_spaces(text)` to collapse multiple spaces.",
        "Implement `is_valid_identifier(text)` to check for valid variable names."
      ],
    },
  ],
  "10_arrays": [
    {
      title: "Grade Book Processor",
      brief: "Build a system to transform and analyze student grades.",
      bullets: [
        "Implement `curve_scores(scores, amount)` to adjust grades (capped at 100).",
        "Implement `drop_lowest(scores)` to remove the minimum value.",
        "Implement `calculate_letter_grades(scores)` to convert numbers to letters.",
        "Implement `filter_passing(students)` to return students with scores >= 60.",
        "Implement `grade_distribution(scores)` to count each letter grade."
      ],
    },
  ],
  "11_2d_lists_dicts": [
    {
      title: "Student Management System",
      brief: "Design a system to manage student records, grades, and rosters.",
      bullets: [
        "Implement `add_student(students, name)` to create a new record.",
        "Implement `add_grade(students, id, course, grade)` to record a score.",
        "Implement `get_student_gpa(student)` to calculate the average.",
        "Implement `get_honor_roll(students)` to find high achievers.",
        "Implement `get_class_statistics(students)` to return GPA metrics."
      ],
    },
  ],
  "12_subprograms": [
    {
      title: "Mini Shopping Cart",
      brief: "Build an e-commerce cart system with inventory and discounts.",
      bullets: [
        "Implement `add_to_cart(cart, inventory, item, qty)` to update the cart.",
        "Implement `remove_from_cart(cart, item, qty)` to reduce or remove items.",
        "Implement `calculate_cart_total(cart)` to sum the cost.",
        "Implement `apply_coupon(total, code)` to handle discounts.",
        "Implement `checkout(cart, inventory, coupon)` to finalize the order."
      ],
    },
  ],
};
