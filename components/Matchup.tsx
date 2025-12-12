"use client";
import { TeamData } from "@/data/teams";

type Props = {
  teams: TeamData[];
};

export default function Matchup({ teams }: Props) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg p-2 bg-white shadow-md">
      {teams.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 transition"
        >
          {/* Logo */}
          <img
            src={t.logoUrl}
            alt={`${t.name} logo`}
            className="w-12 h-12 object-contain"
          />

          {/* Team Info */}
          <div className="flex flex-col">
            <span className="font-semibold">{t.name}</span>
            <span className="text-sm text-gray-500">{t.mascot}</span>
            <div className="flex gap-1 mt-1">
              {t.colors.map((color) => (
                <span
                  key={color}
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
