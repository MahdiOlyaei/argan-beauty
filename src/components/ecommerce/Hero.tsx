'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[560px] max-h-[900px] flex items-center overflow-hidden rtl bg-[#FFF8EF]">
      {/* Background Image - Precisely positioned and scaled reactively */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero/argan-hero.webp"
          alt="محصولات آرایشی و بهداشتی آرگان"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center] md:object-left transition-all duration-300"
        />
      </div>

      {/* Subtle overlay for better text contrast without affecting the composition */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-transparent to-[#FFF8EF]/20 pointer-events-none" />

      <div className="container relative z-10 px-6 lg:px-12 h-full flex items-center">
        {/* 
          Text Container:
          - In RTL (dir="rtl"), items-start aligns content to the Right side of the screen.
          - The max-w ensures text stays in the empty (right) space of the image.
          - Products/Flower remain visible on the Left.
        */}
        <div className="flex flex-col items-start text-right w-full max-w-[85%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[450px] space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
          <div className="space-y-3 lg:space-y-4">
            <h1 
              className="text-[#7A4E3D] font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
            >
              زیبایی<br />در جزئیات
            </h1>
            
            <p 
              className="text-[#7A4E3D]/80 leading-relaxed font-medium"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)' }}
            >
              مجموعه‌ای از محصولات مراقبت از پوست برای یک روتین ساده، شیک و درخشان با عصاره‌های طبیعی.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 w-full">
            <Button 
              className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl flex items-center gap-3 transition-all shadow-lg hover:shadow-xl group"
            >
              خرید کنید
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-col items-start gap-3 pt-2 md:pt-4 opacity-70">
              <div className="flex items-center gap-3">
                <div className="w-12 md:w-16 h-[1px] bg-[#D97B63]" />
                <p className="text-[#7A4E3D] italic text-xs md:text-base font-light">
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
