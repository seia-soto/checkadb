import { Scenario } from "./types.js";

/**
 * Transforms testing page into programmable scenario
 * @param filename The html filename
 */
export function transformPageToProgrammableScenario(
  path: string,
  expects: Record<string, Record<string, boolean>>,
): Scenario {
  const filters = Object.keys(expects);

  return {
    path,
    filters,
    expects,
  };
}
