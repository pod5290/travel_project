"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ✈️ 트래블샵
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/tours"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            여행상품
          </Link>
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{session.user?.name}님</span>
              <button
                onClick={() => signOut()}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
            >
              로그인
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
