export interface Challenge {
  id: string;
  number: number;
  description: string;
  hint?: string;
  starterCode: string; // New field for LeetCode style function stubs
  solutionCode?: string;
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
