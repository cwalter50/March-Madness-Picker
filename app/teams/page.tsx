"use client";
import Matchup from "@/components/Matchup";
import { generateBracketPairs } from "@/lib/bracket";

export default function TeamsBracketPage() {
  const roundOf64 = generateBracketPairs();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        March Madness Bracket — Real Teams
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roundOf64.map((matchup, idx) => (
          <Matchup key={idx} teams={matchup} />
        ))}
      </div>
    </main>
  );
}
