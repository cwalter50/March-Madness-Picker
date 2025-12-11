"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-16">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">
        March Madness Picker
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-10">
        Build your bracket in a fun way — choose teams by their mascots, school
        colors, or vibes. No stats required. Just fun.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          href="/teams"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow transition"
        >
          Pick Teams by Mascot / Colors
        </Link>

        <Link
          href="/bracket"
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow transition"
        >
          Build Your Bracket
        </Link>

        <Link
          href="/auth"
          className="bg-gray-800 hover:bg-black text-white py-3 rounded-xl shadow transition"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}