import { prisma } from "@/lib/prisma";

const tours = [
  {
    title: "제주도 3일 힐링 여행",
    description: "에메랄드빛 바다와 한라산의 절경을 만끽하는 제주도 힐링 패키지. 올레길 트레킹과 현지 맛집 투어가 포함되어 있습니다.",
    destination: "제주도",
    price: 450000,
    discountPrice: 389000,
    duration: "2박 3일",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    rating: 4.8,
    reviewCount: 324,
    tags: ["힐링", "자연", "맛집"],
    highlights: ["성산일출봉 일출 감상", "올레길 7코스 트레킹", "흑돼지 거리 맛집 투어", "카페거리 자유시간"],
    included: ["왕복 항공권", "숙박 2박", "조식 2회", "관광지 입장료"],
    notIncluded: ["개인 경비", "여행자 보험", "중식/석식"],
  },
  {
    title: "오사카 4일 미식 여행",
    description: "일본 미식의 수도 오사카에서 즐기는 먹방 투어. 도톤보리, 신세카이 등 현지인 맛집을 탐방합니다.",
    destination: "오사카",
    price: 890000,
    discountPrice: 749000,
    duration: "3박 4일",
    imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    tags: ["미식", "문화", "쇼핑"],
    highlights: ["도톤보리 먹방 투어", "오사카성 관람", "교토 당일치기", "신세카이 야경"],
    included: ["왕복 항공권", "숙박 3박", "조식 3회", "교토 교통비"],
    notIncluded: ["개인 경비", "여행자 보험", "중식/석식"],
  },
  {
    title: "다낭 5일 리조트 휴양",
    description: "베트남 다낭의 프리미엄 리조트에서 즐기는 완벽한 휴양. 호이안 올드타운과 바나힐도 방문합니다.",
    destination: "다낭",
    price: 1200000,
    discountPrice: 990000,
    duration: "4박 5일",
    imageUrl: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    rating: 4.9,
    reviewCount: 156,
    tags: ["휴양", "리조트", "가족"],
    highlights: ["5성급 리조트 숙박", "호이안 올드타운 투어", "바나힐 테마파크", "미케비치 자유시간"],
    included: ["왕복 항공권", "리조트 4박", "조식 4회", "공항 픽업", "바나힐 입장권"],
    notIncluded: ["개인 경비", "여행자 보험"],
  },
  {
    title: "파리 6일 로맨틱 투어",
    description: "에펠탑, 루브르, 몽마르뜨까지. 파리의 낭만을 온전히 느끼는 프리미엄 패키지입니다.",
    destination: "파리",
    price: 2500000,
    discountPrice: 2190000,
    duration: "5박 6일",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    rating: 4.7,
    reviewCount: 89,
    tags: ["로맨틱", "문화", "예술"],
    highlights: ["에펠탑 야경 디너", "루브르 박물관 가이드 투어", "몽마르뜨 언덕 산책", "세느강 크루즈"],
    included: ["왕복 항공권", "호텔 5박", "조식 5회", "루브르 입장권", "크루즈"],
    notIncluded: ["개인 경비", "여행자 보험", "중식/석식"],
  },
  {
    title: "방콕 3일 알짜 투어",
    description: "왕궁, 왓포, 카오산로드까지 방콕의 핵심만 모은 가성비 패키지.",
    destination: "방콕",
    price: 550000,
    discountPrice: 429000,
    duration: "2박 3일",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    rating: 4.5,
    reviewCount: 412,
    tags: ["가성비", "문화", "맛집"],
    highlights: ["왕궁 & 왓포 투어", "짜뚜짝 주말시장", "카오산로드 야시장", "태국 마사지 체험"],
    included: ["왕복 항공권", "숙박 2박", "조식 2회", "왕궁 입장료"],
    notIncluded: ["개인 경비", "여행자 보험", "중식/석식"],
  },
];

export async function POST() {
  await prisma.tour.deleteMany();
  for (const tour of tours) {
    await prisma.tour.create({ data: tour });
  }
  return Response.json({ message: `✅ ${tours.length}개 여행상품 시드 완료` });
}
