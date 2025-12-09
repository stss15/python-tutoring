export interface TestCase {
  input: string;
  expected: string;
}

export interface Challenge {
  id: string;
  number: number;
  title?: string;
  description: string;
  hint?: string;
  starterCode: string;
  solutionCode?: string;
  testCases?: TestCase[];
}

export interface Homework {
  title: string;
  brief: string;
  bullets?: string[];
}

export interface ExampleCodeBlock {
  code: string;
  explanation: string;
}

export interface ExampleContent {
  intro: string;
  codeBlocks: ExampleCodeBlock[];
  tips?: string[];
  runnable: string; // Code to put in the editor for students to run
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  explanation: string;
  exampleCode: string;
  exampleContent?: ExampleContent;
  challenges: Challenge[];
  requiresLocalEnv?: boolean;
  homework?: Homework[];
}
