// Main chapters export - imports from modular chapter files
// This file re-exports the chapters array for backward compatibility

export { chapters } from "./chapters/index";

// Re-export individual chapters if needed elsewhere
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
} from "./chapters/index";
