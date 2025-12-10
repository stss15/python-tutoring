// Central export file for all chapters
import { Chapter } from "../../types";

// Import all chapter modules
import { chapter01_basics } from "./chapter01_basics";
import { chapter02_if_statements } from "./chapter02_if_statements";
import { chapter03_strings } from "./chapter03_strings";
import { chapter04_maths } from "./chapter04_maths";
import { chapter05_for_loops } from "./chapter05_for_loops";
import { chapter06_while_loops } from "./chapter06_while_loops";
import { chapter07_random } from "./chapter07_random";
import { chapter08_lists_dicts } from "./chapter08_lists_dicts";
import { chapter09_more_strings } from "./chapter09_more_strings";
import { chapter10_arrays } from "./chapter10_arrays";
import { chapter11_2d_lists_dicts } from "./chapter11_2d_lists_dicts";
import { chapter12_subprograms } from "./chapter12_subprograms";

// Export the full chapters array
export const chapters: Chapter[] = [
    chapter01_basics,
    chapter02_if_statements,
    chapter03_strings,
    chapter04_maths,
    chapter05_for_loops,
    chapter06_while_loops,
    chapter07_random,
    chapter08_lists_dicts,
    chapter09_more_strings,
    chapter10_arrays,
    chapter11_2d_lists_dicts,
    chapter12_subprograms
];

// Re-export individual chapters for direct imports
export {
    chapter01_basics,
    chapter02_if_statements,
    chapter03_strings,
    chapter04_maths,
    chapter05_for_loops,
    chapter06_while_loops,
    chapter07_random,
    chapter08_lists_dicts,
    chapter09_more_strings,
    chapter10_arrays,
    chapter11_2d_lists_dicts,
    chapter12_subprograms
};
