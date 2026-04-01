import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTourById, formatPrice } from "@/lib/data";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const tour = await getTourById(id);
  if (!tour) return { title: "상품을 찾을 수 없습니다" };
  return { title: `${tour.title} - 트래블샵` };
}

export default async function TourDetailPage({ params }: Props) {
  const { id } = await params;
  const tour = await getTourById(id);

  if (!tour) notFound();

  const hasDiscount = tour.discountPrice && tour.discountPrice < tour.price;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/tours"
        className="text-sm text-blue-600 hover:underline"
      >
        ← 목록으로
      </Link>

      {/* Hero image */}
      <div className="relative mt-4 aspect-[2/1] overflow-hidden rounded-2xl">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {tour.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-bold text-gray-900">{tour.title}</h1>

      <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
        <span>{tour.destination}</span>
        <span>·</span>
        <span>{tour.duration}</span>
        <span>·</span>
        <span className="text-yellow-500">★ {tour.rating}</span>
        <span className="text-gray-400">({tour.reviewCount}개 리뷰)</span>
      </div>

      <p className="mt-4 text-gray-600 leading-relaxed">{tour.description}</p>

      {/* Price & CTA */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-end gap-3">
          {hasDiscount && (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(tour.price)}
            </span>
          )}
          <span className="text-3xl font-bold text-blue-600">
            {formatPrice(hasDiscount ? tour.discountPrice! : tour.price)}
          </span>
          <span className="text-sm text-gray-500">/ 1인</span>
        </div>
        <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
          예약하기
        </button>
      </div>

      {/* Highlights */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">여행 하이라이트</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {tour.highlights.map((item: string) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-500 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Included / Not Included */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <section>
          <h2 className="text-xl font-bold text-gray-900">포함 사항</h2>
          <ul className="mt-3 space-y-2">
            {tour.included.map((item: string) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">●</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-gray-900">불포함 사항</h2>
          <ul className="mt-3 space-y-2">
            {tour.notIncluded.map((item: string) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <span className="text-red-400">●</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
