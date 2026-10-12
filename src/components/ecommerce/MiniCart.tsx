"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CartItem, useCart } from '@/context/CartContext';
import { X } from 'lucide-react';

interface MiniCartProps {
  open: boolean;
}

const MiniCart: React.FC<MiniCartProps> = ({ open }) => {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  const baseClasses = "absolute top-full left-0 mt-2 w-80 bg-[#FFF8EF] rounded-md shadow-lg border border-[#F8C4A4]/50 z-20 origin-top";
  
  const transitionClasses = `
    transition-all
    ${open
      ? 'duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]'
      : 'duration-160 ease-in'
    }
  `;

  const stateClasses = open
    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
    : 'opacity-0 invisible -translate-y-[8px] pointer-events-none';

  const handleRemoveClick = (e: React.MouseEvent, itemId: number) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(itemId);
  }

  const content = cartItems.length === 0 ? (
    <div className="p-4">
      <p className="text-center text-base font-medium text-[#7A4E3D]">سبد خرید شما خالی است.</p>
    </div>
  ) : (
    <>
      <div className="p-4 max-h-60 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-[#F8C4A4]/50 last:border-b-0">
            <div className="flex items-center">
              <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md" />
              <div className="mr-3 text-right">
                <p className="text-sm font-semibold text-[#7A4E3D]">{item.name}</p>
                <p className="text-xs text-[#7A4E3D]/70">{item.quantity} x {item.price.toLocaleString('fa-IR')} تومان</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-7 w-7 text-[#7A4E3D]/60 hover:text-[#D97B63] hover:bg-[#F8C4A4]/30"
              onClick={(e) => handleRemoveClick(e, item.id)}
              aria-label={`حذف ${item.name}`}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-[#F8C4A4]/50">
        <div className="flex justify-between items-center mb-4">
          <span className="text-base font-bold text-[#7A4E3D]">جمع سبد خرید:</span>
          <span className="text-lg font-bold text-[#7A4E3D]">{cartTotal.toLocaleString('fa-IR')} تومان</span>
        </div>
        <div className="flex flex-col gap-2">
            <Link href="/checkout" passHref>
                <Button className="w-full rounded-full font-semibold h-11 text-base transition-colors bg-[#D97B63] text-[#FFF8EF] hover:bg-[#C7606D]">
                    تسویه حساب
                </Button>
            </Link>
            <Link href="/cart" passHref>
                <Button variant="outline" className="w-full rounded-full font-semibold h-11 text-base border-2 border-[#D97B63] text-[#D97B63] hover:bg-[#D97B63] hover:text-white">
                    مشاهده سبد خرید
                </Button>
            </Link>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`${baseClasses} ${transitionClasses} ${stateClasses}`}
    >
      {content}
    </div>
  );
};

export default MiniCart;
