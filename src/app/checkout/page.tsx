
"use client";

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-12 bg-[#FFF8EF]" dir="rtl">
      <h1 className="text-3xl font-bold text-center text-[#7A4E3D] mb-8">تکمیل خرید</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#F8C4A4]/50">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#7A4E3D] mb-6 border-b pb-4 border-[#F8C4A4]/50">اطلاعات مشتری</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="نام" className="bg-white" />
                <Input type="text" placeholder="نام خانوادگی" className="bg-white" />
                <Input type="email" placeholder="ایمیل" className="bg-white" />
                <Input type="tel" placeholder="شماره تماس" className="bg-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#7A4E3D] mb-6 border-b pb-4 border-[#F8C4A4]/50">اطلاعات ارسال</h2>
              <div className="grid grid-cols-1 gap-4">
                <Input type="text" placeholder="آدرس" className="bg-white" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input type="text" placeholder="شهر" className="bg-white" />
                    <Input type="text" placeholder="استان" className="bg-white" />
                    <Input type="text" placeholder="کدپستی" className="bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#F8C4A4]/50 sticky top-28">
            <h2 className="text-2xl font-bold text-[#7A4E3D] mb-6 text-center">خلاصه سفارش</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-md" />
                    <div className="mr-3 text-right">
                      <p className="text-base font-semibold text-[#7A4E3D]">{item.name}</p>
                      <p className="text-sm text-[#7A4E3D]/70">{item.quantity} عدد</p>
                    </div>
                  </div>
                  <p className="text-base font-semibold text-[#7A4E3D]">{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#F8C4A4]/50 mt-6 pt-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                    <span className="text-[#7A4E3D]">مبلغ نهایی:</span>
                    <span className="text-[#D97B63]">{cartTotal.toLocaleString('fa-IR')} تومان</span>
                </div>
            </div>
            <Button className="w-full mt-6 rounded-full font-semibold h-12 text-lg transition-colors bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
              پرداخت و ثبت نهایی
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
