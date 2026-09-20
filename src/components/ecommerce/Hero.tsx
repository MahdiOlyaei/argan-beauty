
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-products');

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col bg-background overflow-hidden pt-12 pb-8 px-6 rtl">
      {/* Text Content - Positioned top right in Mobile */}
      <div className="z-20 flex flex-col items-start text-right space-y-4 mb-8">
        <h1 
          className="text-[#7A4E3D] font-bold leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}
        >
          زیبایی<br />در جزئیات
        </h1>
        
        <p 
          className="text-[#7A4E3D]/80 max-w-[280px] leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}
        >
          مجموعه‌ای از محصولات آرایشی و بهداشتی برای یک روتین ساده، شیک و درخشان.
        </p>

        <Button 
          className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all shadow-md"
        >
          خرید کنید
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Main Imagery Area */}
      <div className="relative flex-1 w-full min-h-[400px]">
        {/* The Product/Environment Image */}
        {heroImage && (
          <div className="relative w-full h-full">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-contain object-bottom select-none pointer-events-none"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        )}
      </div>

      {/* Bottom Footer Text & Indicators */}
      <div className="z-20 mt-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[1px] bg-[#D97B63]/40" />
          <p className="text-[#7A4E3D]/60 italic text-sm font-light">
            زیبایی، یک حس خوب است
          </p>
        </div>

        {/* Carousel Dots */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]/30" />
        </div>
      </div>

      {/* Subtle Background Elements (Decorative) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Soft light effects or subtle shadows could go here to match the image's airy feel */}
      </div>
    </section>
  );
}
