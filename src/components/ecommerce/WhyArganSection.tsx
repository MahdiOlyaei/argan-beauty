"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  FlaskConical, 
  Sparkles, 
  Heart, 
  Quote, 
  Star,
  ChevronLeft,
  ChevronRight,
  MoveRight
} from 'lucide-react';

// --- DATA STRUCTURES & MOCK DATA ---

const whyArganData = {
  features: {
    eyebrow: "WHY ARGAN",
    title: "چرا آرگان بیوتی؟",
    subtitle: "زیبایی آگاهانه، با انتخابی مطمئن",
    items: [
      {
        icon: Leaf,
        title: "محصولات اورجینال",
        description: "با ضمانت اصالت کالا",
      },
      {
        icon: FlaskConical,
        title: "ترکیبات ایمن",
        description: "مناسب انواع پوست و مو",
      },
      {
        icon: Sparkles,
        title: "انتخاب تخصصی",
        description: "با مشاوره متخصصان زیبایی",
      },
      {
        icon: Heart,
        title: "تجربه‌ای مطمئن",
        description: "رضایت هزاران مشتری",
      },
    ],
  },
  routine: {
    eyebrow: "BEAUTY ROUTINE",
    title: "زیبایی در\nدست‌های شما",
    description: "با محصولات مراقبت از پوست،\nدرخشندگی طبیعی‌تان را حفظ کنید.",
    cta: {
      label: "مشاهده مجموعه",
      href: "/products",
    },
    images: {
      desktop: "/images/whyArgan/beautyRoutineDesktop.webp",
      mobile: "/images/whyArgan/beautyRoutineMobile.webp",
    }
  },
  testimonials: {
    eyebrow: "CUSTOMER LOVE",
    title: "اعتماد شما،\nبزرگ‌ترین انگیزه ماست",
    viewAll: {
        label: "مشاهده همه نظرات",
        href: "/reviews"
    },
    items: [
      {
        id: 1,
        name: "سارا محمدی",
        role: "مشتری عزیز",
        text: "کیفیت محصولات عالیه و ارسال خیلی سریع بود. قطعاً دوباره خرید می‌کنم.",
        rating: 5,
        avatar: "/images/avatars/avatar3.webp",
      },
      {
        id: 2,
        name: "نازنین رضایی",
        role: "مشتری عزیز",
        text: "بسته‌بندی فوق‌العاده و محصولات کاملاً اصل. از خریدم خیلی راضی‌ام.",
        rating: 5,
        avatar: "/images/avatars/avatar2.webp",
      },
      {
        id: 3,
        name: "مریم حسینی",
        role: "مشتری عزیز",
        text: "مشاوره قبل از خرید خیلی کمکم کرد. همه چیز عالی بود.",
        rating: 4,
        avatar: "/images/avatars/avatar1.webp",
      },
      {
        id: 4,
        name: "فاطمه اکبری",
        role: "مشتری عزیز",
        text: "این بهترین ضدآفتابی بود که تا حالا استفاده کردم. خیلی سبک و بی‌رنگه.",
        rating: 5,
        avatar: "/images/avatars/avatar4.webp",
      }
    ],
  }
};

type Feature = (typeof whyArganData.features.items)[0];
type Testimonial = (typeof whyArganData.testimonials.items)[0];

// --- SUB-COMPONENTS ---

const FeatureCard = ({ item }: { item: Feature }) => (
  <div className="text-center flex flex-col items-center px-2" dir="rtl">
    <div className="w-14 h-14 rounded-full bg-[#FFF8EF] flex items-center justify-center mb-4">
      <item.icon className="w-7 h-7 text-[#C7606D]" strokeWidth={1.5}/>
    </div>
    <h3 className="font-semibold text-base text-[#7A4E3D] mb-1.5">{item.title}</h3>
    <p className="text-sm text-[#7A4E3D]/70 px-1">{item.description}</p>
  </div>
);

const TestimonialCard = ({ item }: { item: Testimonial }) => (
    <div className="bg-[#FFF8EF] rounded-3xl p-6 sm:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'fill-[#F8C4A4] text-[#F8C4A4]' : 'fill-gray-200 text-gray-200'}`} />
                ))}
            </div>
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#FEE8D8] flex-shrink-0" fill="#FEE8D8" />
        </div>
        <p className="text-[#7A4E3D]/80 text-base leading-relaxed flex-grow mb-6">{item.text}</p>
        <div className="flex items-center mt-auto" dir="rtl">
            <Image src={item.avatar} alt={item.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover ml-4" />
            <div>
                <h4 className="font-semibold text-[#7A4E3D]">{item.name}</h4>
                <p className="text-sm text-[#7A4E3D]/70">{item.role}</p>
            </div>
        </div>
    </div>
);

const WhyArganSection = () => {
  const { features, routine, testimonials } = whyArganData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const numTestimonials = testimonials.items.length;

  useEffect(() => {
    const getVisibleSlidesCount = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    const updateVisibleSlides = () => {
        setVisibleSlides(getVisibleSlidesCount());
    };
    
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const maxIndex = numTestimonials > visibleSlides ? numTestimonials - visibleSlides : 0;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FEE8D8]/50">
      <div className="container mx-auto px-4">
        
        {/* PART 1: WHY ARGAN FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-8 lg:gap-16 items-center mb-16 md:mb-24" dir="ltr">
          <div className="flex flex-col text-right items-end md:col-span-2 lg:col-span-2 md:order-2" dir="rtl">
              <p className="font-semibold text-sm tracking-[0.2em] uppercase text-[#C7606D] mb-4 flex items-center justify-end gap-x-3">
                {features.eyebrow}
                <span className="w-10 h-px bg-[#C7606D]/50"></span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A4E3D] mb-4">{features.title}</h2>
              <p className="text-base md:text-lg text-[#7A4E3D]/70 max-w-sm md:max-w-none">{features.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:col-span-3 lg:col-span-3 md:order-1 md:divide-x md:divide-[#FEE8D8]">
            {features.items.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* PART 2: BEAUTY ROUTINE BANNER */}
        <div className="relative overflow-hidden rounded-3xl min-h-[520px] sm:min-h-[560px] md:min-h-[450px] mb-16 md:mb-24 flex items-center justify-center md:justify-end" dir="rtl">
            <div 
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url('${routine.images.mobile}')` }}
            />
            <div 
              className="absolute inset-0 hidden md:block bg-cover bg-left-center"
              style={{ backgroundImage: `url('${routine.images.desktop}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8EF] via-80% to-transparent md:bg-gradient-to-l md:from-[#FFF8EF] md:via-transparent"></div>
            <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center md:text-right md:w-1/2 lg:w-2/5 md:mr-auto">
                <p className="font-semibold text-sm tracking-[0.2em] uppercase text-[#C7606D] mb-4 flex items-center justify-center md:justify-end gap-x-3">
                  {routine.eyebrow}
                  <span className="w-10 h-px bg-[#C7606D]/50"></span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A4E3D] whitespace-pre-line leading-tight mb-4">{routine.title}</h2>
                <p className="text-base text-[#7A4E3D]/80 mb-8 whitespace-pre-line">{routine.description}</p>
                <Button asChild size="lg" className="rounded-full h-12 px-8 text-base font-semibold bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D] shadow-lg transition-all duration-300 group">
                    <Link href={routine.cta.href} className="flex items-center">
                        {routine.cta.label}
                        <ChevronLeft className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"/>
                    </Link>
                </Button>
            </div>
        </div>

        {/* PART 3: CUSTOMER LOVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center" dir="rtl">
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
                <p className="font-semibold text-sm tracking-[0.2em] uppercase text-[#C7606D] mb-4 flex items-center justify-center md:justify-end gap-x-3">
                    {testimonials.eyebrow}
                    <span className="w-10 h-px bg-[#C7606D]/50"></span>
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A4E3D] mb-6 whitespace-pre-line">{testimonials.title}</h2>
                <div className="flex flex-col-reverse items-center md:flex-row md:items-center justify-end gap-6 w-full">
                    <Link href={testimonials.viewAll.href} className="text-[#7A4E3D] font-semibold hover:text-[#C7606D] transition-colors flex items-center gap-2 mt-4 md:mt-0">
                        {testimonials.viewAll.label}
                        <MoveRight className="w-5 h-5"/>
                    </Link>
                    <div className="flex gap-3">
                        <button onClick={handlePrev} className="w-11 h-11 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-[#7A4E3D] transition-colors shadow-sm">
                            <ChevronRight />
                        </button>
                        <button onClick={handleNext} className="w-11 h-11 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-[#7A4E3D] transition-colors shadow-sm">
                            <ChevronLeft />
                        </button>
                    </div>
                </div>
            </div>
            
            <div ref={carouselRef} className="overflow-hidden w-full -mx-2">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(${currentIndex * 100 / visibleSlides}%)) `}}
                >
                    {testimonials.items.map(item => (
                        <div key={item.id} className="px-2" style={{ flex: `0 0 ${100 / visibleSlides}%`}}>
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyArganSection;
