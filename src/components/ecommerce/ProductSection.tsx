
"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react";

// Static data to ensure consistency
const products = [
  { id: 1, name: "ماسک لب لانر", description: "لب آبرسان و ترمیم کننده", price: "۱,۴۹۰,۰۰۰", rating: 4.8, reviews: 1245 },
  { id: 2, name: "سرم نیاسینامید اوردینری", description: "مناسب انواع پوست", price: "۹۸۰,۰۰۰", rating: 4.7, reviews: 892 },
  { id: 3, name: "رژ لب مک", description: "رنگی ماندگار و لطیف", price: "۱,۲۹۰,۰۰۰", rating: 4.9, reviews: 2110 },
  { id: 4, name: "عطر میس دیور", description: "رایحه‌ای خاص و ماندگار", price: "۴,۸۵۰,۰۰۰", rating: 4.8, reviews: 755 },
  { id: 5, name: "کرم روشن‌کننده کدلی", description: "مناسب پوست‌های کدر", price: "۲,۳۵۰,۰۰۰", rating: 4.6, reviews: 421 },
  { id: 6, name: "کرم ضد آفتاب لاروش پوزای", description: "محافظت بالا در برابر آفتاب", price: "۱,۱۰۰,۰۰۰", rating: 4.9, reviews: 3120 },
  { id: 7, name: "ریمل حجم‌دهنده اسنس", description: "مژه‌هایی پرپشت و مشکی", price: "۴۵۰,۰۰۰", rating: 4.5, reviews: 5430 },
  { id: 8, name: "پالت سایه هدی بیوتی", description: "رنگ‌های جذاب و کاربردی", price: "۳,۲۰۰,۰۰۰", rating: 4.8, reviews: 1588 },
  { id: 9, name: "کرم پودر استی لادر", description: "پوشش بالا و ماندگاری طولانی", price: "۲,۹۰۰,۰۰۰", rating: 4.9, reviews: 4812 },
  { id: 10, name: "روغن آرگان خالص", description: "مناسب پوست و مو", price: "۸۹۰,۰۰۰", rating: 4.7, reviews: 934 },
];

const features = [
    { title: "محصولات اورجینال", description: "با ضمانت اصالت کالا" },
    { title: "ارسال سریع", description: "به سراسر کشور" },
    { title: "پرداخت امن", description: "با خیال راحت" },
    { title: "پشتیبانی حرفه‌ای", description: "همیشه در کنار شما" },
];

export function ProductSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleUpdate = () => {
        const slidesInView = api.slidesInView(true).length;
        const totalSlides = api.scrollSnapList().length;

        if (slidesInView > 0) {
            const pageCount = Math.ceil(totalSlides / slidesInView);
            const selectedPage = Math.floor(api.selectedScrollSnap() / slidesInView);
            setCount(pageCount);
            setCurrent(selectedPage);
        } else {
            setCount(0);
            setCurrent(0);
        }
    };

    handleUpdate();
    api.on("select", handleUpdate);
    api.on("reInit", handleUpdate);

  }, [api]);

  return (
    <section className="w-full pt-8 pb-12 md:pt-12 md:pb-16 bg-[#FFF8EF]" dir="rtl">
      <div className="container mx-auto px-4">
        <Carousel 
            setApi={setApi}
            opts={{ align: "start", loop: true, direction: 'rtl' }}
            className="w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="text-right mb-6 md:mb-0">
              <div className="flex items-center justify-end">
                  <p className="text-xs font-semibold tracking-widest text-[#D97B63]">BEST SELLERS</p>
                  <div className="w-10 h-px ml-3 bg-[#F8C4A4]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#7A4E3D]">محبوب‌ترین محصولات</h2>
              <p className="text-base mt-3 text-[#7A4E3D]/70">انتخابی از محصولات پرفروش و مورد علاقه شما</p>
            </div>

            <div className="flex items-center self-end md:self-center">
              <Button className="whitespace-nowrap rounded-full px-6 h-11 text-sm font-semibold transition-colors shadow-sm bg-[#D97B63] text-white hover:bg-[#C7606D]">
                  مشاهده همه محصولات
                  <ChevronLeft className="h-4 w-4 mr-2"/>
              </Button>
              <div className="flex items-center mr-3">
                 <CarouselPrevious className="relative w-10 h-10 rounded-full border border-[#F8C4A4]/50 bg-[#FFF8EF] text-[#D97B63] hover:bg-[#F8C4A4]/40" />
                 <CarouselNext className="relative w-10 h-10 rounded-full border border-[#F8C4A4]/50 bg-[#FFF8EF] text-[#D97B63] hover:bg-[#F8C4A4]/40 mr-2" />
              </div>
            </div>
          </div>

          <CarouselContent className="py-4 -mx-2">
            {products.map((product) => (
                <CarouselItem key={product.id} className="px-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <Card className="h-full rounded-2xl border border-[#F8C4A4]/30 overflow-hidden shadow-none hover:shadow-xl transition-shadow duration-300 bg-white/50">
                        <CardContent className="p-0 flex flex-col h-full">
                           <div className="aspect-square w-full relative group bg-[#F8C4A4]/20">
                             <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm rounded-full p-2 transition-all cursor-pointer hover:bg-white">
                                 <Heart className="w-4 h-4 text-[#D97B63]" />
                             </div>
                           </div>
                           <div className="p-4 text-right flex flex-col flex-grow">
                                <h3 className="font-semibold text-base text-[#7A4E3D]">{product.name}</h3>
                                <p className="text-sm mt-1 text-[#7A4E3D]/70">{product.description}</p>
                                <div className="flex items-center justify-start mt-2 text-xs gap-1">
                                    <Star className="w-4 h-4 text-[#D97B63] fill-[#D97B63]"/>
                                    <span className="text-[#7A4E3D] font-bold text-sm">{product.rating}</span>
                                    <span className="text-[#7A4E3D]/60 text-sm">({product.reviews})</span>
                                </div>
                                <p className="text-lg font-bold mt-2 text-right text-[#7A4E3D]">{product.price} <span className="font-normal text-sm">تومان</span></p>
                               
                               <div className="mt-auto pt-4">
                                    <Button className="w-full rounded-full font-semibold h-11 text-base transition-colors bg-[#D97B63] text-white hover:bg-[#C7606D]">
                                       <ShoppingCart className="w-5 h-5 ml-2"/>
                                       افزودن به سبد خرید
                                    </Button>
                               </div>
                           </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
          </CarouselContent>
        
          <div className="flex justify-center items-center gap-2 mt-6">
            {count > 0 && Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        const slidesInView = api?.slidesInView(true).length;
                        if (slidesInView) {
                            api?.scrollTo(index * slidesInView);
                        }
                    }}
                    className={'w-2 h-2 rounded-full transition-all duration-300 ' + (current === index ? 'w-4 bg-[#D97B63]' : 'bg-[#F8C4A4]')}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
          </div>
        </Carousel>

        <div className="mt-16 md:mt-24">
          <div className="hidden md:grid grid-cols-3 items-center gap-8 p-8 rounded-2xl bg-white/40 border border-[#F8C4A4]/30">
            <div className="text-right">
                <p className="text-sm font-medium text-[#D97B63]">SPECIAL OFFER</p>
                <h3 className="text-3xl font-bold mt-2 text-[#7A4E3D]">درخشش طبیعی، هر روز</h3>
                <p className="text-base mt-3 text-[#7A4E3D]/70">تا ۳۰٪ تخفیف روی محصولات مراقبت پوست</p>
                <Button size="lg" className="mt-6 rounded-full h-12 px-8 text-base bg-[#D97B63] text-white hover:bg-[#C7606D]">مشاهده محصولات با تخفیف</Button>
            </div>
            <div className="relative h-full w-full rounded-xl min-h-[20rem] bg-[#F8C4A4]/40"></div>
            <div className="flex flex-col justify-center gap-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-[#F8C4A4]/40"></div>
                      <div className="text-right">
                          <h4 className="font-bold text-base text-[#7A4E3D]">{feature.title}</h4>
                          <p className="text-sm text-[#7A4E3D]/70">{feature.description}</p>
                      </div>
                  </div>
                ))}\
            </div>
          </div>
          <div className="md:hidden">
              <div className="rounded-2xl overflow-hidden bg-white/40 border border-[#F8C4A4]/30">
                  <div className="grid grid-cols-2 items-center">
                      <div className="p-6 text-right">
                          <p className="text-xs font-medium text-[#D97B63]">SPECIAL OFFER</p>
                          <h3 className="text-2xl font-bold mt-1 text-[#7A4E3D]">درخشش طبیعی، هر روز</h3>
                          <p className="text-sm mt-2 text-[#7A4E3D]/70">تا ۳۰٪ تخفیف روی محصولات مراقبت پوست</p>
                          <Button size="sm" className="mt-4 rounded-full h-10 bg-[#D97B63] text-white hover:bg-[#C7606D]">مشاهده محصولات</Button>
                      </div>
                      <div className="relative h-56 bg-[#F8C4A4]/40"></div>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="p-4 rounded-xl text-center bg-white/40 border border-[#F8C4A4]/30">
                      <div className="w-8 h-8 rounded-full mx-auto mb-2 bg-[#F8C4A4]/40"></div>
                      <h4 className="font-semibold text-sm text-[#7A4E3D]">{feature.title}</h4>
                      <p className="text-xs text-[#7A4E3D]/70">{feature.description}</p>
                    </div>
                  ))}
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}
