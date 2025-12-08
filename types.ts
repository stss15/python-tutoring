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

export interface Chapter {
  id: string;
  title: string;
  description: string;
  explanation: string;
  exampleCode: string;
  challenges: Challenge[];
  requiresLocalEnv?: boolean;
  homework?: Homework[];
}
