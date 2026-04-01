import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/generated/prisma/client";
import { formatPrice } from "@/lib/data";

export default function TourCard({ tour }: { tour: Tour }) {
  const hasDiscount = tour.discountPrice && tour.discountPrice < tour.price;

  return (
    <Link
      href={`/tours/${tour.id}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600">
            {tour.destination}
          </span>
          <span className="text-xs text-gray-400">{tour.duration}</span>
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {tour.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {tour.description}
        </p>
        <div className="mt-3 flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{tour.rating}</span>
          <span className="text-gray-400">({tour.reviewCount})</span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(tour.price)}
            </span>
          )}
          <span className="text-lg font-bold text-blue-600">
            {formatPrice(hasDiscount ? tour.discountPrice! : tour.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
