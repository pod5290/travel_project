import TourCard from "@/components/TourCard";
import { getAllTours } from "@/lib/data";
import type { Tour } from "@/generated/prisma/client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "여행상품 목록 - 트래블샵",
};

export default async function ToursPage() {
  const tours = await getAllTours();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">여행상품</h1>
      <p className="mt-2 text-gray-500">
        총 {tours.length}개의 여행상품이 있습니다
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour: Tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
