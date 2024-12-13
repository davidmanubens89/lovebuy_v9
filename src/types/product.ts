export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  features: string[];
  image_url: string;
  match_score?: number;
} 