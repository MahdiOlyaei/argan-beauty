
"use client";

import React from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CreditCard, Headset, Leaf, ShoppingCart, Star, Truck, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/product-data"; // Using the mock data

const features = [
    { title: "محصولات اورجینال", description: "با ضمانت اصالت کالا", icon: Leaf },
    { title: "ارسال سریع", description: "به سراسر کشور", icon: Truck },
    { title: "پرداخت امن", description: "با خیال راحت", icon: CreditCard },
    { title: "پشتیبانی حرفه‌ای", description: "همیشه در کنار شما", icon: Headset },
];

export function ProductSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const { addToCart } = useCart();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnHover: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full pt-8 pb-12 md:pt-12 md:pb-16 bg-[#FFF8EF]" dir="rtl">
      <div className="container mx-auto px-4">
        <Carousel 
            setApi={setApi}
            opts={{ align: "start", loop: true, direction: 'rtl' }}
            plugins={[plugin.current]}
            className="w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="text-right mb-6 md:mb-0 self-stretch md:self-auto">
              <div className="flex items-center justify-end">
                  <p className="text-xs font-semibold tracking-widest text-[#D97B63]">BEST SELLERS</p>
                  <div className="w-10 h-px mr-3 bg-[#F8C4A4]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#7A4E3D]">محبوب‌ترین محصولات</h2>
              <p className="text-base mt-3 text-[#7A4E3D]/70">انتخابی از محصولات پرفروش و مورد علاقه شما</p>
            </div>

            <div className="flex items-center self-stretch md:self-center">
              {/* Primary Action Button */}
              <Button className="whitespace-nowrap rounded-full px-6 h-11 text-sm font-semibold transition-colors shadow-sm bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
                  مشاهده همه محصولات
                  <ChevronLeft className="h-4 w-4 mr-2"/>
              </Button>
              <div className="flex items-center mr-3 self-stretch">
                 {/* Secondary Action Controls */}
                 <CarouselPrevious className="relative w-10 h-10 rounded-full border border-[#D97B63] bg-transparent text-[#D97B63] hover:bg-[#D97B63] hover:text-[#FFF8EF]" />
                 <CarouselNext className="relative w-10 h-10 rounded-full border border-[#D97B63] bg-transparent text-[#D97B63] hover:bg-[#D97B63] hover:text-[#FFF8EF] mr-2" />
              </div>
            </div>
          </div>

          <CarouselContent className="py-4 -mx-2" onMouseLeave={() => plugin.current.play()}>
            {products.map((product) => (
                <CarouselItem key={product.id} className="px-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5" onMouseEnter={() => plugin.current.stop()}>
                    <Card className="h-full rounded-2xl border border-[#F8C4A4]/30 overflow-hidden shadow-none hover:shadow-xl transition-shadow duration-300 bg-white/50">
                        <CardContent className="p-0 flex flex-col h-full">
                           <div className="aspect-square w-full relative group bg-[#F8C4A4]/20">
                             <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                             />
                             <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm rounded-full p-2 transition-all cursor-pointer hover:bg-white z-10">
                                 <Heart className="w-4 h-4 text-[#D97B63]" />
                             </div>
                           </div>
                           <div className="p-4 text-right flex flex-col flex-grow">
                                <h3 className="font-semibold text-base text-[#7A4E3D]">{product.name}</h3>
                                <div className="flex items-center justify-start mt-2 text-xs gap-1">
                                    <Star className="w-4 h-4 text-[#D97B63] fill-[#D97B63]"/>
                                    <span className="text-[#7A4E3D] font-bold text-sm">4.8</span>
                                    <span className="text-[#7A4E3D]/60 text-sm">(1245)</span>
                                </div>
                                <p className="text-lg font-bold mt-2 text-right text-[#7A4E3D]">{product.price.toLocaleString('fa-IR')} <span className="font-normal text-sm">تومان</span></p>
                               
                               <div className="mt-auto pt-4">
                                    {/* Primary Action Button */}
                                    <Button className="w-full rounded-full font-semibold h-11 text-base transition-colors bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]" onClick={() => addToCart(product)}>
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
        </Carousel>

        <div className="mt-16 md:mt-24">
            <div className="relative rounded-2xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/product-section/special-offer.webp')"}}>
                <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                <div className="container mx-auto px-4">
                    <div className="relative grid grid-cols-1 lg:grid-cols-10 gap-24 lg:gap-8 items-center py-12 px-4 sm:p-12 lg:p-16">
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-right gap-4">
                            <div className="flex items-center justify-end">
                                <p className="text-sm font-semibold tracking-widest text-[#D97B63]">SPECIAL OFFER</p>
                                <div className="w-12 h-px mr-3 bg-[#F8C4A4]"></div>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-[#7A4E3D]">درخشش طبیعی، هر روز</h3>
                            <p className="text-lg text-[#7A4E3D]/80 max-w-md">تا ۳۵٪ تخفیف روی محصولات مراقبت پوست</p>
                            <Button size="lg" className="rounded-full h-12 px-8 text-base bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
                                مشاهده محصولات با تخفیف
                                <ChevronLeft className="h-4 w-4 mr-2"/>
                            </Button>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-7 grid grid-cols-2 gap-px bg-white/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/30">
                            {features.map((feature) => (
                                <div key={feature.title} className="bg-white/10 p-4 sm:p-6">
                                    <div className="flex flex-col items-center gap-3 text-center">
                                        <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-white/20 border border-white/30">
                                            <feature.icon className="w-6 h-6 text-[#7A4E3D]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base text-[#7A4E3D]">{feature.title}</h4>
                                            <p className="text-sm text-[#7A4E3D]/80 mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
