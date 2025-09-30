// API response interface - matches the backend response
export interface ApiProduct {
  id: string;
  name: string;
  subtitle: string | null;
  price: string;
  original_price: string | null;
  category: string;
  image: string;
  rating: string;
  review_count: number;
  description: string;
  short_description: string;
  key_actives: string[];
  free_from: string[];
  benefits: string[];
  serving_size: string | null;
  servings_per_bottle: string | null;
  faqs: Array<{ question: string; answer: string }>;
  usage: string;
  created_at: string;
  updated_at: string;
}

// Internal product interface - transformed for app use
export interface Product {
  id: number | string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  benefits: string[];
  keyActives: string[];
  freeFrom: string[];
  servingSize: string | null;
  servingsPerBottle: number | null;
  usage: string;
  isPopular?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  isSpecialized?: boolean;
  inStock: boolean;
  faqs: Array<{ question: string; answer: string }>;
  createdAt: string;
  updatedAt: string;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  ProductDetail: { productId: string };
};

export type BottomTabParamList = {
  Shop: undefined;
  Favorites: undefined;
  Cart: undefined;
  Profile: undefined;
};

// Collection/Filter types
export interface Collection {
  name: string;
  slug: string;
  count: number;
}

export type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating';

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  details?: any;
}