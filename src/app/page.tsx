import Link from "next/link";
import TourCard from "@/components/TourCard";
import { getAllTours } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const tours = await getAllTours();
  const featured = tours.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            특별한 여행을 합리적인 가격에
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            엄선된 여행 상품으로 잊지 못할 추억을 만들어보세요
          </p>
          <Link
            href="/tours"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            여행상품 둘러보기
          </Link>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">인기 여행상품</h2>
          <Link
            href="/tours"
            className="text-sm text-blue-600 hover:underline"
          >
            전체보기 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
}
