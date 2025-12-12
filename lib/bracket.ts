import { teams } from "@/data/teams";
import type { TeamData } from "@/data/teams";

export function generateBracketPairs(): TeamData[][] {
  // If you have more than 64, slice; if less, duplicate or randomize
  const selected = teams.slice(0, 64);

  const pairs: TeamData[][] = [];
  for (let i = 0; i < selected.length; i += 2) {
    pairs.push([selected[i], selected[i + 1]]);
  }
  return pairs;
}