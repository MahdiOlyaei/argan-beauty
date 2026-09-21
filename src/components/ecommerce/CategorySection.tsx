
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { id: '1', title: 'مراقبت از پوست', count: '+250', imageKey: 'cat-skin' },
  { id: '2', title: 'مراقبت از مو', count: '+180', imageKey: 'cat-hair' },
  { id: '3', title: 'آرایشی', count: '+320', imageKey: 'cat-makeup' },
  { id: '4', title: 'مراقبت از بدن', count: '+140', imageKey: 'cat-body' },
  { id: '5', title: 'عطر و خوشبوکننده', count: '+120', imageKey: 'cat-perfume' },
  { id: '6', title: 'ست‌های هدیه', count: '+80', imageKey: 'cat-gifts' },
];

export function CategorySection() {
  const bannerImage = PlaceHolderImages.find((img) => img.id === 'banner-beauty');

  return (
    <section className="w-full bg-[#FFF8EF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rtl">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#7A4E3D]/10 flex items-center justify-center hover:bg-[#F8C4A4]/20 transition-all">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A4E3D]" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#7A4E3D]/10 flex items-center justify-center hover:bg-[#F8C4A4]/20 transition-all">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A4E3D]" />
              </button>
            </div>
            {/* View All Link */}
            <a href="/categories" className="text-[#7A4E3D]/60 text-sm sm:text-base font-bold underline underline-offset-8 hover:text-[#D97B63] transition-colors">
              مشاهده همه دسته‌ها
            </a>
          </div>

          <div className="space-y-2 text-right">
            <span className="text-[#7A4E3D]/40 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold block">SHOP BY CATEGORY</span>
            <h2 className="text-[#7A4E3D] text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              دسته‌بندی محصولات
            </h2>
            <p className="text-[#7A4E3D]/60 text-sm sm:text-lg font-medium">
              هر آنچه برای زیبایی و مراقبت از خود نیاز دارید
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Decorative Wide Banner */}
        <div className="relative w-full rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FDF6F0] overflow-hidden min-h-[250px] sm:min-h-[350px] flex items-center">
          {/* Banner Text Content */}
          <div className="relative z-10 w-full lg:w-3/5 p-8 sm:p-16 flex flex-col items-start text-right space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-[#7A4E3D]/40 text-[10px] sm:text-xs tracking-[0.2em] font-bold block">BEAUTY FOR A BETTER YOU</span>
              <h3 className="text-[#7A4E3D] text-2xl sm:text-4xl lg:text-5xl font-black leading-tight max-w-[20ch]">
                زیبایی یک انتخاب روزانه است
              </h3>
              <p className="text-[#7A4E3D]/60 text-sm sm:text-xl font-medium">
                با محصولات اصل و باکیفیت، بهترین نسخه‌ی خودت باش.
              </p>
            </div>
            
            <Button className="bg-[#D97B63] hover:bg-[#D97B63]/90 text-white rounded-full px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg flex items-center gap-3 group">
              شروع خرید
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Banner Image Content */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-100 pointer-events-none">
            {bannerImage && (
              <Image
                src={bannerImage.imageUrl}
                alt="Beauty Banner"
                fill
                className="object-cover object-right"
                data-ai-hint={bannerImage.imageHint}
              />
            )}
          </div>
          
          {/* Decorative Text in Banner Right Side */}
          <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-end gap-1 text-[#7A4E3D]/30 font-black text-[10px] tracking-widest uppercase writing-vertical-rl">
            <div className="w-[1px] h-12 bg-[#7A4E3D]/10 mb-2" />
            <span>Natural</span>
            <span>Beauty</span>
            <span>Everyday</span>
          </div>
        </div>

      </div>
    </section>
  );
}
