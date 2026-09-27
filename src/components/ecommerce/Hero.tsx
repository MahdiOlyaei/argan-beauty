'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

/**
 * Hero Component with Responsive Art Direction using native <picture>
 */
export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#FFF8EF] rtl flex items-center"
      style={{ minHeight: 'clamp(580px, 76svh, 850px)' }}
    >
      {/* Responsive Art Direction Layer */}
      <picture className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        {/* Mobile Asset */}
        <source media="(max-width: 639px)" srcSet="/images/hero/argan-hero-mob.webp" />
        {/* Tablet Asset */}
        <source media="(min-width: 640px) and (max-width: 1023px)" srcSet="/images/hero/argan-hero-tab.webp" />
        {/* Desktop Asset */}
        <img
          src="/images/hero/argan-hero.webp"
          alt="محصولات آرایشی و بهداشتی"
          className="w-full h-full object-cover object-left sm:object-center"
        />
      </picture>

      {/* Content Layer with Text Safe Zone on the Right */}
      <div className="container relative z-10 px-6 sm:px-12 lg:px-20 h-full w-full flex items-center justify-start">
        <div className="flex flex-col items-start text-right w-full max-w-[290px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[520px] space-y-5 sm:space-y-7 py-10 mr-0 ml-auto">
          <div className="space-y-3 sm:space-y-4">
            <h1 
              className="text-[#7A4E3D] font-bold leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}
            >
              زیبایی<br />در جزئیات
            </h1>
            
            <p 
              className="text-[#7A4E3D]/90 leading-relaxed font-medium"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.2rem)' }}
            >
              مجموعه‌ای از محصولات مراقبت از پوست برای یک روتین ساده، شیک و درخشان با عصاره‌های طبیعی.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 w-full">
            {/* Primary CTA */}
            <Button 
              className="bg-[#D97B63] hover:bg-[#C7606D] text-[#FFF8EF] rounded-full px-8 md:px-12 py-5 md:py-7 text-base md:text-lg flex items-center gap-3 transition-colors shadow-md hover:shadow-lg group w-full sm:w-auto justify-center"
            >
              محصولات
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              className="border-2 border-[#D97B63] bg-transparent text-[#D97B63] hover:bg-[#D97B63] hover:text-[#FFF8EF] rounded-full px-8 md:px-12 py-5 md:py-7 text-base md:text-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
            >
              تخفیف‌ها
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
