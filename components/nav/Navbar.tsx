"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-700">
        🏀 Madness Picker
      </Link>

      <div className="flex gap-6 text-lg">
        <Link href="/teams" className="hover:text-blue-600">
          Teams
        </Link>
        <Link href="/bracket" className="hover:text-blue-600">
          Bracket
        </Link>
        <Link href="/auth" className="hover:text-blue-600">
          Sign In
        </Link>
      </div>
    </nav>
  );
}