"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';

type SpecialOfferSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  discountPercent: number;
  endsAt: string;
  backgroundImageDesktop: string;
  backgroundImageMobile: string;
  ctaLabel: string;
  ctaHref: string;
  active?: boolean;
};

const mockOffer: SpecialOfferSectionData = {
  eyebrow: "SPECIAL OFFER",
  title: "پیشنهاد ویژه\nاین هفته",
  description: "محصولات منتخب با تخفیف تا {discountPercent}% فقط برای مدت محدود.",
  discountPercent: 40,
  endsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  backgroundImageDesktop: "/images/specialOffer/offerdesktop.webp",
  backgroundImageMobile: "/images/specialOffer/offermobile.webp",
  ctaLabel: "مشاهده همه پیشنهادها",
  ctaHref: "/discounts",
  active: true,
};

const calculateTimeLeft = (endDate: string) => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
};

const CountdownTimer = ({ endsAt }: { endsAt: string }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        setTimeLeft(calculateTimeLeft(endsAt));
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft(endsAt)), 1000);
        return () => clearInterval(timer);
    }, [endsAt]);

    const timerComponents = [
        { label: "روز", value: timeLeft.days },
        { label: "ساعت", value: timeLeft.hours },
        { label: "دقیقه", value: timeLeft.minutes },
        { label: "ثانیه", value: timeLeft.seconds },
    ];

    return (
        <div className="flex justify-center md:justify-start gap-x-1 sm:gap-x-2 text-[#7A4E3D]" dir="ltr">
            {timerComponents.slice().reverse().map((component, index) => (
                <div key={index} className="text-center bg-[#FEE8D8]/60 rounded-md p-1.5 w-14 sm:w-[70px] flex-shrink-0">
                    <div className="text-xl sm:text-3xl font-bold tracking-wider">{String(component.value).padStart(2, '0')}</div>
                    <div className="text-[10px] sm:text-xs opacity-75">{component.label}</div>
                </div>
            ))}
        </div>
    );
};

const SpecialOfferSection = () => {
  const data = mockOffer;

  if (!data.active) {
    return null;
  }

  const formattedDescription = data.description.replace("{discountPercent}", data.discountPercent.toString());

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <section 
        className="relative overflow-hidden bg-[#FFF8EF] rounded-2xl min-h-[667px] md:min-h-[480px] lg:min-h-[500px]"
      >
        {/* --- BACKGROUNDS (Unchanged) --- */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{ 
            backgroundImage: data.backgroundImageMobile ? `url("${data.backgroundImageMobile}")` : "none",
            backgroundPosition: "left center"
          }}
        />
        <div 
          className="absolute inset-0 hidden bg-cover bg-no-repeat md:block"
          style={{ 
            backgroundImage: data.backgroundImageDesktop ? `url("${data.backgroundImageDesktop}")` : "none",
            backgroundPosition: "left center" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFF8EF]/50 to-transparent md:hidden" />
        
        {/* --- FLOATING BADGE (Unchanged) --- */}
        <div className="absolute top-[20%] left-[5%] w-28 h-28 md:top-[15%] md:left-[8%] lg:left-[10%] lg:w-32 lg:h-32 z-20 animate-float">
          <div 
            className="relative w-full h-full flex items-center justify-center rounded-full text-[#7A4E3D] shadow-xl border border-white/30"
            style={{
              background: 'rgba(254, 232, 216, 0.65)',
              backdropFilter: 'blur(8px) saturate(120%)',
              WebkitBackdropFilter: 'blur(8px) saturate(120%)'
            }}
          >
            <div className="text-center font-bold">
              <p className="text-xs tracking-wider">UP TO</p>
              <p className="text-4xl lg:text-5xl font-black tracking-tighter leading-none my-1">{data.discountPercent}%</p>
              <p className="text-xs tracking-wider">OFF</p>
            </div>
          </div>
        </div>

        {/* --- MOBILE CONTENT (POSITIONING FIXED) --- */}
        <div className="relative z-10 h-full md:hidden" dir="rtl">
            <div className="absolute right-0 w-[52%] sm:w-[55%] pr-4 pt-28 flex flex-col text-right items-start">
                <p className="font-semibold text-xs tracking-[0.15em] uppercase text-[#C7606D]">
                {data.eyebrow}
                </p>
                <h2 className="text-4xl font-bold text-[#7A4E3D] whitespace-pre-line leading-tight mt-3">
                {data.title}
                </h2>
                <p className="text-sm text-[#7A4E3D]/80 leading-relaxed mt-3">
                {formattedDescription}
                </p>
                <div className="mt-5 flex flex-col items-start gap-y-5">
                <Button asChild size="default" className="rounded-full px-6 text-sm font-semibold bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D] shadow-lg transition-colors">
                    <Link href={data.ctaHref}>
                    {data.ctaLabel}
                    <ChevronLeft className="h-4 w-4 mr-1.5"/>
                    </Link>
                </Button>
                <CountdownTimer endsAt={data.endsAt} />
                </div>
            </div>
        </div>

        {/* --- DESKTOP CONTENT (UNCHANGED) --- */}
        <div className="hidden md:block absolute z-10 top-1/2 -translate-y-1/2 right-[7%] w-[40%] lg:w-[38%]" dir="rtl">
          <div className="flex flex-col text-right items-start">
            <p className="font-semibold text-xs tracking-[0.2em] uppercase text-[#C7606D] flex items-center gap-x-3">
              <span className="w-8 h-px bg-[#C7606D]/50"></span>
              {data.eyebrow}
              <span className="w-8 h-px bg-[#C7606D]/50"></span>
            </p>
            <h2 className="text-5xl lg:text-[54px] font-bold text-[#7A4E3D] whitespace-pre-line leading-tight mt-4">
              {data.title}
            </h2>
            <p className="text-base text-[#7A4E3D]/80 leading-relaxed max-w-none mt-4">
              {formattedDescription}
            </p>
            <div className="mt-6 flex flex-col items-start gap-y-5">
              <Button asChild size="lg" className="rounded-full h-12 px-8 sm:h-14 sm:px-10 text-base sm:text-lg font-semibold bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D] shadow-lg transition-colors">
                <Link href={data.ctaHref}>
                  {data.ctaLabel}
                  <ChevronLeft className="h-5 w-5 mr-2"/>
                </Link>
              </Button>
              <CountdownTimer endsAt={data.endsAt} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOfferSection;
