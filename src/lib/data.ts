import { prisma } from "@/lib/prisma";

export async function getAllTours() {
  return prisma.tour.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getTourById(id: string) {
  return prisma.tour.findUnique({ where: { id } });
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR") + "원";
}
