
'use client';

import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CategoryCardProps {
  id: string;
  title: string;
  count: string;
  imageKey: string;
}

export function CategoryCard({ title, count, imageKey }: CategoryCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageKey);

  return (
    <div className="group relative bg-[#FDF6F0] rounded-[2.5rem] p-6 sm:p-8 flex items-center justify-between overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 min-h-[180px] sm:min-h-[220px]">
      {/* Content Area (Left side in LTR, but visually left in the reference image) */}
      <div className="relative z-10 flex flex-col items-start space-y-2 sm:space-y-4 w-1/2">
        <div className="space-y-1">
          <h3 className="text-[#7A4E3D] text-lg sm:text-2xl font-bold leading-tight">
            {title}
          </h3>
          <p className="text-[#7A4E3D]/60 text-xs sm:text-sm font-medium">
            {count} محصول
          </p>
        </div>
        
        <button className="flex items-center gap-1 sm:gap-2 text-[#7A4E3D]/70 hover:text-[#D97B63] transition-colors group/btn">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F8C4A4]/30 flex items-center justify-center group-hover/btn:bg-[#D97B63] group-hover/btn:text-white transition-all">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold tracking-tight">مشاهده محصولات</span>
        </button>
      </div>

      {/* Image Area (Right side) */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none">
        {image && (
          <Image
            src={image.imageUrl}
            alt={title}
            fill
            className="object-contain object-right-bottom p-2 sm:p-4 transform transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        )}
      </div>
    </div>
  );
}
