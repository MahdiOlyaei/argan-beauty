import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, test } from 'vitest';
import SearchPage from '@/app/(main)/search/page';

describe('search page', () => {
  test('awaits Next 15 searchParams before filtering products', async () => {
    const page = await SearchPage({
      searchParams: Promise.resolve({ q: 'سرم' }),
    });

    expect(renderToStaticMarkup(page)).toContain('نتایج جستجو برای «سرم»');
  });
});
