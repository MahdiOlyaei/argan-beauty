import { products } from '@/lib/product-data';
import type { Product } from '@/lib/types';

export type CartItem = Product & {
  quantity: number;
};

type StorageRecord = Record<string, unknown>;

function isStorageRecord(value: unknown): value is StorageRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asPositiveInteger(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
    ? Math.floor(value)
    : fallback;
}

function asImage(record: StorageRecord, fallback?: string): string | undefined {
  if (typeof record.image === 'string' && record.image.length > 0) {
    return record.image;
  }

  if (Array.isArray(record.images) && typeof record.images[0] === 'string' && record.images[0].length > 0) {
    return record.images[0];
  }

  return fallback;
}

function normalizeCartItem(value: unknown): CartItem | undefined {
  if (!isStorageRecord(value)) {
    return undefined;
  }

  const id = asPositiveInteger(value.id, 0);
  if (id === 0) {
    return undefined;
  }

  const catalogueProduct = products.find((product) => product.id === id);
  const image = asImage(value, catalogueProduct?.image);
  const name = typeof value.name === 'string' && value.name.length > 0 ? value.name : catalogueProduct?.name;
  const price = typeof value.price === 'number' && Number.isFinite(value.price) && value.price >= 0
    ? value.price
    : catalogueProduct?.price;

  if (!image || !name || price === undefined) {
    return undefined;
  }

  return {
    id,
    name,
    price,
    image,
    category: typeof value.category === 'string' ? value.category : catalogueProduct?.category ?? 'دسته بندی عمومی',
    rating: typeof value.rating === 'number' && Number.isFinite(value.rating) ? value.rating : catalogueProduct?.rating ?? 0,
    reviewCount: asPositiveInteger(value.reviewCount, catalogueProduct?.reviewCount ?? 0),
    slug: typeof value.slug === 'string' && value.slug.length > 0 ? value.slug : catalogueProduct?.slug ?? `product-${id}`,
    quantity: asPositiveInteger(value.quantity, 1),
  };
}

export function readCart(serializedCart: string | null): CartItem[] {
  if (!serializedCart) {
    return [];
  }

  try {
    const parsedCart: unknown = JSON.parse(serializedCart);
    return Array.isArray(parsedCart)
      ? parsedCart.flatMap((item) => {
        const cartItem = normalizeCartItem(item);
        return cartItem ? [cartItem] : [];
      })
      : [];
  } catch {
    return [];
  }
}
