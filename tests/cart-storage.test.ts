import { describe, expect, test } from 'vitest';
import { readCart } from '@/lib/cart-storage';

describe('cart storage migration', () => {
  test('preserves IDs, prices, quantities, and legacy images while migrating to image', () => {
    const cart = readCart(JSON.stringify([
      {
        id: 5,
        name: 'رژ لب مات مخملی',
        price: 250000,
        images: ['/images/product-section/lipstick.webp'],
        quantity: 3,
      },
    ]));

    expect(cart).toEqual([
      expect.objectContaining({
        id: 5,
        image: '/images/product-section/lipstick.webp',
        price: 250000,
        quantity: 3,
      }),
    ]);
  });

  test('keeps current image records and ignores malformed persisted data', () => {
    expect(readCart('{not json')).toEqual([]);

    expect(readCart(JSON.stringify([
      {
        id: 1,
        name: 'سرم آبرسان هیالورونیک اسید اوردینری',
        price: 380000,
        image: '/images/product-section/ordinary.webp',
        quantity: 2,
      },
    ]))).toEqual([
      expect.objectContaining({
        id: 1,
        image: '/images/product-section/ordinary.webp',
        price: 380000,
        quantity: 2,
      }),
    ]);
  });
});
