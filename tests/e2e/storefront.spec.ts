import { expect, test } from '@playwright/test';

test('preserves a cart item across reload and shows it at checkout in RTL', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('img', { name: 'سرم آبرسان هیالورونیک اسید اوردینری' })).toBeVisible();

  await page.getByRole('button', { name: /افزودن به سبد خرید/ }).first().click();
  await page.reload();
  await page.goto('/checkout');

  const checkout = page.getByRole('main');
  await expect(checkout.getByText('سرم آبرسان هیالورونیک اسید اوردینری')).toBeVisible();
  await expect(checkout.locator('p', { hasText: '۳۸۰٬۰۰۰ تومان' })).toBeVisible();
});

test('search reaches the real product detail route', async ({ page }) => {
  await page.goto('/');

  const search = page.locator('input[placeholder="جستجو در میان محصولات..."]:visible');
  await search.fill('سرم');
  await search.press('Enter');

  await expect(page).toHaveURL(/\/search\?q=/);
  await expect(page.getByRole('heading', { name: 'نتایج جستجو برای «سرم»' })).toBeVisible();
  await page.getByRole('link', { name: /سرم آبرسان هیالورونیک اسید اوردینری/ }).click();
  await expect(page).toHaveURL('/products/1');
  await expect(page.getByText('شناسه محصول: 1')).toBeVisible();
});

test('mobile viewport keeps the RTL storefront usable', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'This assertion covers the mobile project only.');

  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('button', { name: /افزودن به سبد خرید/ }).first()).toBeVisible();
});
