
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, cartItemCount, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center bg-[#FFF8EF]" dir="rtl">
        <h1 className="text-4xl font-bold text-[#7A4E3D] mb-4">سبد خرید شما خالی است.</h1>
        <Link href="/products" passHref>
          <Button className="rounded-full font-semibold h-12 px-8 text-lg transition-colors bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
            مشاهده محصولات
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#FFF8EF]" dir="rtl">
      <h1 className="text-3xl font-bold text-center text-[#7A4E3D] mb-8">سبد خرید شما</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#F8C4A4]/50">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-[#F8C4A4]/50 last:border-b-0">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                  <div className="mr-4 text-right">
                    <p className="text-lg font-semibold text-[#7A4E3D]">{item.name}</p>
                    <p className="text-sm text-[#7A4E3D]/70">{item.price.toLocaleString('fa-IR')} تومان</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center border border-[#F8C4A4]/50 rounded-full p-1">
                    <Button size="icon" variant="ghost" className="rounded-full" onClick={() => increaseQuantity(item.id)}><Plus className="h-4 w-4 text-[#7A4E3D]" /></Button>
                    <span className="mx-4 font-bold text-[#7A4E3D]">{item.quantity}</span>
                    <Button size="icon" variant="ghost" className="rounded-full" onClick={() => decreaseQuantity(item.id)}><Minus className="h-4 w-4 text-[#7A4E3D]" /></Button>
                  </div>
                  <p className="w-24 text-center font-semibold text-base text-[#7A4E3D] mx-4">{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</p>
                  <Button size="icon" variant="ghost" className="rounded-full text-[#7A4E3D] hover:bg-[#F8C4A4]/50" onClick={() => removeFromCart(item.id)}><Trash2 className="h-5 w-5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 border border-[#F8C4A4]/50">
            <h2 className="text-2xl font-bold text-[#7A4E3D] mb-6 text-center">خلاصه سفارش</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-base">
                <span className="font-medium text-[#7A4E3D]">جمع کل ({cartItemCount} کالا):</span>
                <span className="font-semibold text-[#7A4E3D]">{cartTotal.toLocaleString('fa-IR')} تومان</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-[#F8C4A4]/50 pt-4">
                <span className="text-[#7A4E3D]">مبلغ قابل پرداخت:</span>
                <span className="text-[#D97B63]">{cartTotal.toLocaleString('fa-IR')} تومان</span>
              </div>
            </div>
            <Link href="/checkout" passHref>
              <Button className="w-full mt-6 rounded-full font-semibold h-12 text-lg transition-colors bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
                ادامه فرایند خرید
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
