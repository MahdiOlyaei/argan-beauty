'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-products');

  if (!heroImage) return null;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] lg:h-screen flex items-center overflow-hidden rtl bg-[#FFF8EF]">
      {/* Full Background Image - Configured for Responsive Cropping */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover object-[35%_center] md:object-[left_center]"
          data-ai-hint={heroImage.imageHint}
        />
      </div>

      {/* Decorative Overlay for better text readability if needed (Subtle) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-transparent to-[#FFF8EF]/10" />

      <div className="container relative z-10 px-6 lg:px-12 h-full flex items-center">
        {/* 
          Text Container: 
          - In RTL, justify-start places content on the Right side.
          - max-w ensures text stays in the empty space of the image.
        */}
        <div className="flex flex-col items-start text-right w-full max-w-[90%] md:max-w-[50%] lg:max-w-[450px] space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
          <div className="space-y-3 lg:space-y-4">
            <h1 
              className="text-[#7A4E3D] font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              زیبایی<br />در جزئیات
            </h1>
            
            <p 
              className="text-[#7A4E3D]/80 leading-relaxed font-medium"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              مجموعه‌ای از محصولات آرایشی و بهداشتی برای یک روتین ساده، شیک و درخشان.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 w-full">
            <Button 
              className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-10 py-7 text-xl flex items-center gap-3 transition-all shadow-lg hover:shadow-xl group"
            >
              خرید کنید
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-col items-start gap-3 pt-4 opacity-70">
              <div className="flex items-center gap-3">
                <div className="w-16 h-[1px] bg-[#D97B63]" />
                <p className="text-[#7A4E3D] italic text-sm lg:text-base font-light">
                  زیبایی، یک حس خوب است
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}