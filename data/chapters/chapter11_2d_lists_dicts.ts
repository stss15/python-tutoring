import { Chapter, Challenge, ExampleContent } from "../../types";
import { homeworkByChapter } from "../homework";

// ============================================================
// CHAPTER 11: 2D LISTS AND NESTED DICTIONARIES
// ============================================================

export const dict_2d_challenges: Challenge[] = [
    {
        id: "121",
        number: 1,
        title: "Grid Access",
        description: "Write a function called `get_cell` that takes a 2D grid, row, and column. Return the value at that position, or None if out of bounds.",
        starterCode: `def get_cell(grid: list, row: int, col: int):
    # Your code here
    pass`,
        solutionCode: `def get_cell(grid: list, row: int, col: int):
    if row < 0 or row >= len(grid):
        return None
    if col < 0 or col >= len(grid[row]):
        return None
    return grid[row][col]`,
        testCases: [
            { input: "get_cell([[1, 2], [3, 4]], 0, 1)", expected: "2" },
            { input: "get_cell([[1, 2], [3, 4]], 5, 0)", expected: "None" },
            { input: "get_cell([[1]], 0, 0)", expected: "1" }
        ]
    },
    {
        id: "122",
        number: 2,
        title: "Grid Sum",
        description: "Write a function called `grid_sum` that returns the sum of all numbers in a 2D grid.",
        starterCode: `def grid_sum(grid: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def grid_sum(grid: list) -> int:
    total = 0
    for row in grid:
        for cell in row:
            total += cell
    return total`,
        testCases: [
            { input: "grid_sum([[1, 2], [3, 4]])", expected: "10" },
            { input: "grid_sum([[5]])", expected: "5" },
            { input: "grid_sum([])", expected: "0" }
        ]
    },
    {
        id: "123",
        number: 3,
        title: "Row Sum",
        description: "Write a function called `row_sums` that returns a list where each element is the sum of that row.",
        starterCode: `def row_sums(grid: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def row_sums(grid: list) -> list:
    result = []
    for row in grid:
        total = 0
        for cell in row:
            total += cell
        result.append(total)
    return result`,
        testCases: [
            { input: "row_sums([[1, 2], [3, 4], [5, 6]])", expected: "[3, 7, 11]" },
            { input: "row_sums([[10]])", expected: "[10]" },
            { input: "row_sums([])", expected: "[]" }
        ]
    },
    {
        id: "124",
        number: 4,
        title: "Column Sum",
        description: "Write a function called `col_sums` that returns a list where each element is the sum of that column. Assume rectangular grid.",
        starterCode: `def col_sums(grid: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def col_sums(grid: list) -> list:
    if len(grid) == 0:
        return []
    num_cols = len(grid[0])
    result = []
    for col in range(num_cols):
        total = 0
        for row in grid:
            total += row[col]
        result.append(total)
    return result`,
        testCases: [
            { input: "col_sums([[1, 2], [3, 4]])", expected: "[4, 6]" },
            { input: "col_sums([[1, 2, 3]])", expected: "[1, 2, 3]" },
            { input: "col_sums([])", expected: "[]" }
        ]
    },
    {
        id: "125",
        number: 5,
        title: "Nested Dict Access",
        description: "Write a function called `get_nested` that takes a nested dict, a list of keys, and returns the value at that path. Return None if any key not found.",
        starterCode: `def get_nested(data: dict, keys: list):
    # Your code here
    pass`,
        solutionCode: `def get_nested(data: dict, keys: list):
    current = data
    for key in keys:
        if isinstance(current, dict) and key in current:
            current = current[key]
        else:
            return None
    return current`,
        testCases: [
            { input: "get_nested({'a': {'b': {'c': 1}}}, ['a', 'b', 'c'])", expected: "1" },
            { input: "get_nested({'x': 5}, ['x'])", expected: "5" },
            { input: "get_nested({'a': 1}, ['b'])", expected: "None" }
        ]
    },
    {
        id: "126",
        number: 6,
        title: "Transpose Grid",
        description: "Write a function called `transpose` that transposes a 2D grid (rows become columns).",
        starterCode: `def transpose(grid: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def transpose(grid: list) -> list:
    if len(grid) == 0:
        return []
    rows = len(grid)
    cols = len(grid[0])
    result = []
    for c in range(cols):
        new_row = []
        for r in range(rows):
            new_row.append(grid[r][c])
        result.append(new_row)
    return result`,
        testCases: [
            { input: "transpose([[1, 2], [3, 4]])", expected: "[[1, 3], [2, 4]]" },
            { input: "transpose([[1, 2, 3]])", expected: "[[1], [2], [3]]" },
            { input: "transpose([])", expected: "[]" }
        ]
    },
    {
        id: "127",
        number: 7,
        title: "Flatten Grid",
        description: "Write a function called `flatten` that converts a 2D grid to a 1D list.",
        starterCode: `def flatten(grid: list) -> list:
    # Your code here
    pass`,
        solutionCode: `def flatten(grid: list) -> list:
    result = []
    for row in grid:
        for cell in row:
            result.append(cell)
    return result`,
        testCases: [
            { input: "flatten([[1, 2], [3, 4]])", expected: "[1, 2, 3, 4]" },
            { input: "flatten([[1], [2], [3]])", expected: "[1, 2, 3]" },
            { input: "flatten([])", expected: "[]" }
        ]
    },
    {
        id: "128",
        number: 8,
        title: "Diagonal Sum",
        description: "Write a function called `diagonal_sum` that returns the sum of the main diagonal (top-left to bottom-right) of a square grid.",
        starterCode: `def diagonal_sum(grid: list) -> int:
    # Your code here
    pass`,
        solutionCode: `def diagonal_sum(grid: list) -> int:
    total = 0
    for i in range(len(grid)):
        total += grid[i][i]
    return total`,
        testCases: [
            { input: "diagonal_sum([[1, 2], [3, 4]])", expected: "5" },
            { input: "diagonal_sum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", expected: "15" },
            { input: "diagonal_sum([[5]])", expected: "5" }
        ]
    },
    {
        id: "129",
        number: 9,
        title: "Student Records",
        description: "Write a function called `get_top_student` that takes a list of student dicts (with 'name' and 'score') and returns the name of the student with the highest score.",
        starterCode: `def get_top_student(students: list) -> str:
    # Your code here
    pass`,
        solutionCode: `def get_top_student(students: list) -> str:
    if len(students) == 0:
        return ''
    top = students[0]
    for student in students:
        if student['score'] > top['score']:
            top = student
    return top['name']`,
        testCases: [
            { input: "get_top_student([{'name': 'Alice', 'score': 90}, {'name': 'Bob', 'score': 95}])", expected: "'Bob'" },
            { input: "get_top_student([{'name': 'X', 'score': 50}])", expected: "'X'" },
            { input: "get_top_student([])", expected: "''" }
        ]
    },
    {
        id: "130",
        number: 10,
        title: "Matrix Multiply",
        description: "Write a function called `matrix_multiply` that multiplies a matrix by a scalar and returns the result.",
        starterCode: `def matrix_multiply(matrix: list, scalar: int) -> list:
    # Your code here
    pass`,
        solutionCode: `def matrix_multiply(matrix: list, scalar: int) -> list:
    result = []
    for row in matrix:
        new_row = []
        for cell in row:
            new_row.append(cell * scalar)
        result.append(new_row)
    return result`,
        testCases: [
            { input: "matrix_multiply([[1, 2], [3, 4]], 2)", expected: "[[2, 4], [6, 8]]" },
            { input: "matrix_multiply([[5]], 3)", expected: "[[15]]" },
            { input: "matrix_multiply([], 5)", expected: "[]" }
        ]
    },
    {
        id: "131",
        number: 11,
        title: "Tic-Tac-Toe Winner",
        description: "Write a function called `check_winner` that takes a 3x3 tic-tac-toe grid ('X', 'O', or ''). Return 'X' if X wins, 'O' if O wins, or '' if no winner.",
        starterCode: `def check_winner(grid: list) -> str:
    # Your code here
    pass`,
        solutionCode: `def check_winner(grid: list) -> str:
    # Check rows
    for row in grid:
        if row[0] == row[1] == row[2] != '':
            return row[0]
    # Check columns
    for col in range(3):
        if grid[0][col] == grid[1][col] == grid[2][col] != '':
            return grid[0][col]
    # Check diagonals
    if grid[0][0] == grid[1][1] == grid[2][2] != '':
        return grid[0][0]
    if grid[0][2] == grid[1][1] == grid[2][0] != '':
        return grid[0][2]
    return ''`,
        testCases: [
            { input: "check_winner([['X', 'X', 'X'], ['O', 'O', ''], ['', '', '']])", expected: "'X'" },
            { input: "check_winner([['O', 'X', 'X'], ['O', 'O', ''], ['O', '', '']])", expected: "'O'" },
            { input: "check_winner([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']])", expected: "''" }
        ]
    },
    {
        id: "132",
        number: 12,
        title: "Path Finder",
        description: "Write a function called `count_paths` that counts the number of paths from top-left to bottom-right in an m×n grid (can only move right or down). Use the formula: (m+n-2)! / ((m-1)! × (n-1)!).",
        starterCode: `def count_paths(m: int, n: int) -> int:
    # Your code here
    pass`,
        solutionCode: `def count_paths(m: int, n: int) -> int:
    def factorial(x):
        result = 1
        for i in range(1, x + 1):
            result *= i
        return result
    
    return factorial(m + n - 2) // (factorial(m - 1) * factorial(n - 1))`,
        testCases: [
            { input: "count_paths(3, 3)", expected: "6" },
            { input: "count_paths(2, 2)", expected: "2" },
            { input: "count_paths(3, 7)", expected: "28" }
        ]
    }
];

export const dict2DExampleContent: ExampleContent = {
    intro: "2D lists (grids) and nested dictionaries for complex data structures.",
    codeBlocks: [
        {
            code: `grid = [[1, 2], [3, 4]]
print(grid[0][1])  # 2`,
            explanation: "Access 2D list with [row][col]"
        }
    ],
    tips: ["First index is row, second is column", "Nested loops for full traversal"],
    runnable: `grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in grid:
    print(row)`
};

export const chapter11_2d_lists_dicts: Chapter = {
    id: "11_2d_lists_dicts",
    title: "2D Lists and Dictionaries",
    description: "Complex Data Structures",
    explanation: "Working with 2D lists and nested dictionaries.",
    exampleCode: "x = [[1, 2], [3, 4]]",
    exampleContent: dict2DExampleContent,
    challenges: dict_2d_challenges,
    homework: homeworkByChapter["11_2d_lists_dicts"]
};
