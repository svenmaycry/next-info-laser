export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  orderPrice: number;
  stockPrice: number;
  newPrice: number;
  inStock: boolean;
  isHit: boolean;
  categorySlug: string;
  categoryName: string;
  images?: ProductImage[];
  image?: ProductImage;
  className?: string;
  quantity?: number;
}

export interface ProductsGroupListProps {
  products: Product[];
  className?: string;
}

export interface ProductPageProps {
  params: { product: string };
}
