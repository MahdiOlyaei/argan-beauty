
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/lib/product-data';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ecommerce/ProductCard';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'نتایج جستجو',
};

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams;

  if (!query) {
    return <SearchError message="لطفا یک عبارت برای جستجو وارد کنید." />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Suspense fallback={<SearchResultsSkeleton query={query} />}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}

async function SearchResults({ query }: { query: string }) {
  const allProducts: Product[] = products;

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <SearchError message={`نتیجه‌ای برای «${query}» پیدا نشد.`} showAllProductsLink />;
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-right text-[#7A4E3D] mb-6 md:mb-8">
        نتایج جستجو برای «{query}»
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function SearchError({ message, showAllProductsLink = false }: { message: string, showAllProductsLink?: boolean }) {
  return (
    <div className="text-center py-16">
      <p className="text-xl text-gray-600 mb-6">{message}</p>
      {showAllProductsLink && (
        <Button asChild variant="secondary" className="bg-[#F8C4A4] text-[#7A4E3D] hover:bg-[#F8C4A4]/80 rounded-full px-8 py-6 text-base">
          <Link href="/products">مشاهده همه محصولات</Link>
        </Button>
      )}
    </div>
  );
}

function SearchResultsSkeleton({ query }: { query: string }) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-right text-[#7A4E3D] mb-6 md:mb-8">
        نتایج جستجو برای «{query}»
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
