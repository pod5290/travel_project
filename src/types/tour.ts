export interface Tour {
  id: string;
  title: string;
  description: string;
  destination: string;
  price: number;
  discountPrice?: number;
  duration: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
}
