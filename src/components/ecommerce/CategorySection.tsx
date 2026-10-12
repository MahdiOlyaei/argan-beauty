'use client';

import { ChevronLeft } from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import { Button } from '@/components/ui/button';

const categories = [
  { id: '1', title: 'مراقبت از پوست', count: '+250', imageKey: 'cat-skin', backgroundImage: '/images/categories/medicube.webp' },
  { id: '2', title: 'مراقبت از مو', count: '+180', imageKey: 'cat-hair', backgroundImage: '/images/categories/argan-midas.webp' },
  { id: '3', title: 'آرایشی', count: '+320', imageKey: 'cat-makeup', backgroundImage: '/images/categories/dior-lipglass.webp' },
  { id: '4', title: 'مراقبت از بدن', count: '+140', imageKey: 'cat-body', backgroundImage: '/images/categories/bodycare-clinique.webp' },
  { id: '5', title: 'عطر و خوشبوکننده', count: '+120', imageKey: 'cat-perfume', backgroundImage: '/images/categories/perfume.webp' },
  { id: '6', title: 'رنگ مو', count: '+80', imageKey: 'cat-gifts', backgroundImage: '/images/categories/haircolor-enzo.webp' },
];

export function CategorySection() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rtl">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="space-y-2 text-right">
            <span className="text-[#7A4E3D]/40 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold block">SHOP BY CATEGORY</span>
            <h2 className="text-[#7A4E3D] text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              دسته‌بندی محصولات
            </h2>
            <p className="text-[#7A4E3D]/60 text-sm sm:text-lg font-medium">
              هر آنچه برای زیبایی و مراقبت از خود نیاز دارید
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="/categories" className="text-[#7A4E3D]/60 text-sm sm:text-base font-bold underline underline-offset-8 hover:text-[#C7606D] transition-colors">
              مشاهده همه دسته‌ها
            </a>
          </div>
        </div>

        {/* Categories Grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Decorative Wide Banner */}
        <div 
          className="relative w-full rounded-[2.5rem] sm:rounded-[3.5rem] bg-cover bg-no-repeat bg-[#FDF6F0] overflow-hidden min-h-[250px] sm:min-h-[350px] flex items-center max-lg:bg-[position:-8rem_center] lg:bg-left-center"
          style={{ backgroundImage: 'url("/images/categories/NATURAL-beauty-evryday.webp")' }}
        >
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
            
            {/* Primary Action Button */}
            <Button className="bg-[#D97B63] hover:bg-[#C7606D] text-[#FFF8EF] rounded-full px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg flex items-center gap-3 group transition-colors">
              شروع خرید
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div dir="ltr" className="hidden lg:flex absolute left-12 bottom-16 flex-col items-start gap-1 text-white font-black text-[10px] tracking-widest uppercase text-left">
            <span>Natural</span>
            <span>Beauty</span>
            <span>Everyday</span>
            <div className="w-12 h-[1px] bg-white mt-2 self-end" />
          </div>
        </div>

      </div>
    </section>
  );
}
