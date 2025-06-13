export type Scenario = {
  path: string;
  filters: string[];
  expects: Record<string, Record<string, boolean>>;
};
