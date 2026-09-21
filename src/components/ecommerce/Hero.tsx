'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden rtl bg-[#FFF8EF]"
      style={{ minHeight: 'clamp(620px, 78svh, 820px)' }}
    >
      {/* 
        Background Image Layer:
        - Desktop: Covers the full area with focal point on products (left-biased).
        - Mobile: Positioned as a controlled layer (145vw wide) anchored to the left, 
          letting the Hero background color fill the right side safe-zone.
      */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Mobile View Image (Hidden on MD+) */}
        <div className="md:hidden absolute left-0 bottom-0 w-[145vw] h-auto">
          <img
            src="/images/hero/argan-hero.webp"
            alt=""
            className="w-full h-auto object-contain object-left-bottom"
          />
        </div>

        {/* Desktop View Image (Hidden on Mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero/argan-hero.webp"
            alt="محصولات آرایشی و بهداشتی آرگان"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[30%_center]"
          />
        </div>
      </div>

      {/* Subtle overlay for visual depth if needed (minimal) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-transparent to-[#FFF8EF]/10 pointer-events-none md:hidden" />

      <div className="container relative z-10 px-6 lg:px-12 h-full min-h-[inherit] flex items-center">
        {/* 
          Text Container:
          - In RTL, items-start aligns to the RIGHT.
          - Mobile: Limited width to stay in the clean right-side zone (max-w-[48%]).
          - Desktop: Adjusted width to balance the composition.
        */}
        <div className="flex flex-col items-start text-right w-full max-w-[48%] sm:max-w-[45%] md:max-w-[450px] space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
          <div className="space-y-3 lg:space-y-4">
            <h1 
              className="text-[#7A4E3D] font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.25rem)' }}
            >
              زیبایی<br />در جزئیات
            </h1>
            
            <p 
              className="text-[#7A4E3D]/80 leading-relaxed font-medium"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.25rem)' }}
            >
              مجموعه‌ای از محصولات مراقبت از پوست برای یک روتین ساده، شیک و درخشان با عصاره‌های طبیعی.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 w-full">
            <Button 
              className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-6 md:px-10 py-5 md:py-7 text-base md:text-xl flex items-center gap-2 md:gap-3 transition-all shadow-lg hover:shadow-xl group"
            >
              خرید کنید
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-col items-start gap-3 pt-2 md:pt-4 opacity-70 hidden xs:flex">
              <div className="flex items-center gap-3">
                <div className="w-10 md:w-16 h-[1px] bg-[#D97B63]" />
                <p className="text-[#7A4E3D] italic text-[10px] md:text-base font-light">
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
