import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, test } from 'vitest';
import { ProductCard } from '@/components/ecommerce/ProductCard';
import { ProductGrid } from '@/components/ecommerce/ProductGrid';
import { products } from '@/lib/product-data';

describe('product catalogue routes', () => {
  test('uses the five unique real product assets in the catalogue', () => {
    expect(products.map((product) => product.image)).toEqual([
      '/images/product-section/ordinary.webp',
      '/images/product-section/dior-perfume.webp',
      '/images/product-section/CAUDALIE.webp',
      '/images/product-section/lip-mask.webp',
      '/images/product-section/lipstick.webp',
    ]);
  });

  test('renders a product card that links to its existing ID route', () => {
    const html = renderToStaticMarkup(<ProductCard product={products[0]} />);

    expect(html).toContain('href="/products/1"');
  });

  test('renders exactly four data-backed product cards', () => {
    const html = renderToStaticMarkup(<ProductGrid />);

    expect(html.match(/href="\/products\//g)).toHaveLength(4);
  });
});
