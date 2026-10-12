
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';
import searchData from '@/lib/search-data.json';

interface SearchProps {
  className?: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
}

interface Category {
  name: string;
  slug: string;
}

interface Brand {
  name: string;
  slug: string;
}

export default function Search({ className }: SearchProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ brands: Brand[]; categories: Category[]; products: Product[] }>({ brands: [], categories: [], products: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const lowerCaseQuery = query.toLowerCase();
        const filteredBrands = searchData.brands.filter(brand => brand.name.toLowerCase().includes(lowerCaseQuery));
        const filteredCategories = searchData.categories.filter(category => category.name.toLowerCase().includes(lowerCaseQuery));
        const filteredProducts = searchData.products.filter(product => product.name.toLowerCase().includes(lowerCaseQuery));
        
        setSuggestions({ brands: filteredBrands, categories: filteredCategories, products: filteredProducts });
        setIsOpen(true);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const totalSuggestions = suggestions.brands.length + suggestions.categories.length + suggestions.products.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev < totalSuggestions - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allSuggestions = [...suggestions.brands, ...suggestions.categories, ...suggestions.products];

    if (highlightedIndex >= 0 && allSuggestions[highlightedIndex]) {
      const selected = allSuggestions[highlightedIndex];
      if ('slug' in selected) {
          if (suggestions.brands.includes(selected as Brand)) {
              router.push(`/brands/${selected.slug}`);
          } else if (suggestions.categories.includes(selected as Category)) {
              router.push(`/categories/${selected.slug}`);
          }
      } else {
          router.push(`/products/${(selected as Product).id}`);
      }
      setIsOpen(false);
      return;
    }

    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };
  
  const getSuggestionLink = (item: Brand | Category | Product, index: number) => {
    if ('slug' in item) {
      if (suggestions.brands.includes(item as Brand)) {
        return `/brands/${item.slug}`;
      }
      if (suggestions.categories.includes(item as Category)) {
        return `/categories/${item.slug}`;
      }
    }
    return `/products/${(item as Product).id}`;
  };

  return (
    <div className={`relative ${className}`} ref={searchContainerRef}>
      <form onSubmit={handleSubmit} className="relative h-full w-full">
        <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#7A4E3D] pointer-events-none z-10" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (query.trim().length > 0) setIsOpen(true); }}
          onKeyDown={handleKeyDown}
          placeholder="جستجو در میان محصولات..."
          className="w-full h-full bg-[#FEE8D8] border border-transparent focus:outline-none focus:ring-0 focus:border-[#C7606D] rounded-full py-3 pr-12 pl-10 text-base text-[#7A4E3D] placeholder-[#7A4E3D]/60 transition-colors duration-200"
        />
        {(query.length > 0 || isLoading) && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-full flex items-center">
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-[#C7606D] animate-spin" />
            ) : (
              <button type="button" onClick={handleClear} className="text-[#C7606D] flex items-center">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </form>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-[#FFF8EF] rounded-lg shadow-lg border border-[#F8C4A4] z-20 overflow-hidden">
          {(suggestions.brands.length === 0 && suggestions.categories.length === 0 && suggestions.products.length === 0) ? (
            <div className="text-center py-4 text-[#7A4E3D]">موردی یافت نشد</div>
          ) : (
            <ul>
              {suggestions.brands.length > 0 && (
                <li className="px-4 pt-3 pb-2 text-sm font-semibold text-[#C7606D]">برندها</li>
              )}
              {suggestions.brands.map((brand, index) => (
                <li key={`brand-${brand.slug}`} onMouseEnter={() => setHighlightedIndex(index)}>
                   <Link href={getSuggestionLink(brand, index)} className={`flex items-center gap-x-4 p-3 text-right transition-colors duration-150 ease-out ${highlightedIndex === index ? 'bg-[#FEE8D8] text-[#C7606D]' : 'text-[#7A4E3D] hover:bg-[#FEE8D8]/60'}`}>
                    <p className="font-semibold">{brand.name}</p>
                  </Link>
                </li>
              ))}
              {suggestions.categories.length > 0 && (
                <li className="px-4 pt-3 pb-2 text-sm font-semibold text-[#C7606D]">دسته‌بندی‌ها</li>
              )}
              {suggestions.categories.map((category, index) => (
                <li key={`category-${category.slug}`} onMouseEnter={() => setHighlightedIndex(suggestions.brands.length + index)}>
                  <Link href={getSuggestionLink(category, suggestions.brands.length + index)} className={`flex items-center gap-x-4 p-3 text-right transition-colors duration-150 ease-out ${highlightedIndex === suggestions.brands.length + index ? 'bg-[#FEE8D8] text-[#C7606D]' : 'text-[#7A4E3D] hover:bg-[#FEE8D8]/60'}`}>
                    <p className="font-semibold">{category.name}</p>
                  </Link>
                </li>
              ))}
              {suggestions.products.length > 0 && (
                <li className="px-4 pt-3 pb-2 text-sm font-semibold text-[#C7606D]">محصولات</li>
              )}
              {suggestions.products.map((product, index) => (
                <li key={`product-${product.id}`} onMouseEnter={() => setHighlightedIndex(suggestions.brands.length + suggestions.categories.length + index)}>
                  <Link href={getSuggestionLink(product, suggestions.brands.length + suggestions.categories.length + index)} className={`flex items-center gap-x-4 p-3 text-right transition-colors duration-150 ease-out ${highlightedIndex === suggestions.brands.length + suggestions.categories.length + index ? 'bg-[#FEE8D8] text-[#C7606D]' : 'text-[#7A4E3D] hover:bg-[#FEE8D8]/60'}`}>
                    <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-md object-cover" />
                    <div className="flex-1">
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-[#C7606D]">{product.category}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
