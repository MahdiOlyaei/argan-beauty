'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

/**
 * Hero Component
 * 
 * Implements Art Direction using three distinct assets:
 * - Mobile: /images/hero/argan-hero-mob.webp
 * - Tablet: /images/hero/argan-hero-tab.webp
 * - Desktop: /images/hero/argan-hero.webp
 * 
 * The layout remains a unified composition with text overlaying the image.
 * The text is positioned in a "Safe Zone" on the right (RTL) to avoid products on the left.
 */
export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#FFF8EF] rtl flex items-center"
      style={{ minHeight: 'clamp(620px, 80svh, 900px)' }}
    >
      {/* 
        Responsive Art Direction Layer 
        Using native <picture> for optimal asset selection based on viewport.
      */}
      <picture className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Mobile Asset: Up to 767px */}
        <source 
          media="(max-width: 767px)" 
          srcSet="/images/hero/argan-hero-mob.webp" 
        />
        {/* Tablet Asset: 768px to 1023px */}
        <source 
          media="(min-width: 768px) and (max-width: 1023px)" 
          srcSet="/images/hero/argan-hero-tab.webp" 
        />
        {/* Desktop Asset: 1024px and up */}
        <img
          src="/images/hero/argan-hero.webp"
          alt="محصولات آرایشی و بهداشتی آرگان"
          className="w-full h-full object-cover object-[20%_center] md:object-[30%_center] lg:object-center"
        />
      </picture>

      {/* Subtle overlay for visual depth */}
      <div className="absolute inset-0 z-[1] bg-black/5 pointer-events-none" />

      {/* Content Layer */}
      <div className="container relative z-10 px-6 lg:px-12 h-full flex items-center">
        {/* 
          Text Safe Zone:
          Positioned on the Right side (RTL start).
          max-width ensures it stays clear of the products/flower on the left side of the image.
        */}
        <div className="flex flex-col items-start text-right w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] space-y-6 lg:space-y-8 py-12">
          <div className="space-y-3 lg:space-y-5">
            <h1 
              className="text-[#7A4E3D] font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              زیبایی<br />در جزئیات
            </h1>
            
            <p 
              className="text-[#7A4E3D]/85 leading-relaxed font-medium w-[70%] sm:w-auto"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              مجموعه‌ای از محصولات مراقبت از پوست برای یک روتین ساده، شیک و درخشان با عصاره‌های طبیعی.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Primary CTA (Right side in RTL) */}
              <Button 
                className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl flex items-center gap-3 transition-all shadow-lg hover:shadow-xl group"
              >
                محصولات
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              </Button>

              {/* Secondary CTA (Left side in RTL) */}
              <Button
                variant="outline"
                className="border-2 border-[#D97B63] bg-transparent text-[#D97B63] hover:bg-[#D97B63] hover:text-white rounded-full px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl transition-colors shadow-lg hover:shadow-xl"
              >
                تخفیف‌ها
              </Button>
            </div>

            <div className="flex flex-col items-start gap-3 pt-6 opacity-80 mt-8 sm:mt-0">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <div className="w-16 md:w-24 h-[1px] bg-[#D97B63]" />
                <p className="text-[#7A4E3D] italic text-sm md:text-base font-light">
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
