
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-products');

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[90vh] flex items-center bg-[#FFF8EF] overflow-hidden rtl py-12 lg:py-0">
      {/* Decorative Background Shadows (Simulated) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#7A4E3D] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-[#D97B63] blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area - Right side in RTL Desktop */}
          <div className="flex flex-col items-start text-right space-y-6 lg:space-y-8 order-1 lg:order-1">
            <div className="space-y-2 lg:space-y-4">
              <h1 
                className="text-[#7A4E3D] font-bold leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                زیبایی<br />در جزئیات
              </h1>
              
              <p 
                className="text-[#7A4E3D]/80 max-w-[450px] leading-relaxed"
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

              {/* Bottom Slogan & Decorative Line - Desktop Focused but adapted */}
              <div className="flex flex-col items-start gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-[1px] bg-[#D97B63]/40" />
                  <p className="text-[#7A4E3D]/60 italic text-sm lg:text-base font-light">
                    زیبایی، یک حس خوب است
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Imagery Area - Left side in RTL Desktop */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[80vh] order-2 lg:order-2">
            {heroImage && (
              <div className="relative w-full h-full transform lg:scale-110 lg:translate-x-[-10%]">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-contain lg:object-right select-none pointer-events-none"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
            
            {/* Subtle floating indicators/dots for Mobile feel consistency */}
            <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 flex lg:hidden gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#D97B63]/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
