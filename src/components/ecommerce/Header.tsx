
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname, useSearchParams } from 'next/navigation';
import { Heart, ShoppingCart, User, Menu, X, ChevronDown, CircleUserRound, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCart } from "@/context/CartContext";
import MiniCart from "@/components/ecommerce/MiniCart";

const Search = dynamic(() => import('@/components/ecommerce/Search'), { ssr: false });

const navLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/products", label: "محصولات" },
  { href: "/discounts", label: "تخفیف‌ها" },
  { href: "/brands", label: "برندها" },
  { href: "/blog", label: "بلاگ" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/about", label: "درباره ما" },
];

const productCategories = [
  { href: "/categories/skin-care", label: "مراقبت از پوست" },
  { href: "/categories/hair-care", label: "مراقبت از مو" },
  { href: "/categories/makeup", label: "آرایشی" },
  { href: "/categories/body-care", label: "مراقبت از بدن" },
  { href: "/categories/perfume", label: "عطر و خوشبوکننده" },
  { href: "/categories/hair-color", label: "رنگ مو" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const miniCartTimer = useRef<NodeJS.Timeout | null>(null);
  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const mobileCartRef = useRef<HTMLDivElement>(null);
  const scrollCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { cartItemCount } = useCart();

  const handleProductsEnter = () => {
    if (productsTimer.current) clearTimeout(productsTimer.current);
    setIsProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimer.current = setTimeout(() => setIsProductsDropdownOpen(false), 180);
  };

  const handleMiniCartEnter = () => {
    if (miniCartTimer.current) clearTimeout(miniCartTimer.current);
    setIsMiniCartOpen(true);
  };

  const handleMiniCartLeave = () => {
    miniCartTimer.current = setTimeout(() => setIsMiniCartOpen(false), 180);
  };
  
  const toggleMiniCart = () => {
    if (isMiniCartOpen && scrollCloseTimerRef.current) {
      clearTimeout(scrollCloseTimerRef.current);
      scrollCloseTimerRef.current = null;
    }
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileCartRef.current && !mobileCartRef.current.contains(event.target as Node)) {
        setIsMiniCartOpen(false);
      }
    };

    const handleScroll = () => {
      if (!scrollCloseTimerRef.current) {
        scrollCloseTimerRef.current = setTimeout(() => {
          setIsMiniCartOpen(false);
        }, 2000);
      }
    };

    const addMobileListeners = () => {
      if (window.innerWidth < 1024 && isMiniCartOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);
      }
    };

    const removeMobileListeners = () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };

    const handleResize = () => {
      removeMobileListeners();
      addMobileListeners();
    };

    addMobileListeners();
    window.addEventListener('resize', handleResize);

    return () => {
      removeMobileListeners();
      window.removeEventListener('resize', handleResize);
      if (scrollCloseTimerRef.current) {
        clearTimeout(scrollCloseTimerRef.current);
        scrollCloseTimerRef.current = null;
      }
    };
  }, [isMiniCartOpen]);

  useEffect(() => {
    const mockAuth = searchParams.get('mockAuth');
    if (process.env.NODE_ENV === 'development') {
      if (mockAuth === 'authenticated') setIsAuthenticated(true);
      else if (mockAuth === 'guest') setIsAuthenticated(false);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const IconWrapper = ({ children, badgeCount, href, onMouseEnter, onMouseLeave, className, isMobile, onClick }: { children: React.ReactNode; badgeCount?: number; href?: string; onMouseEnter?: () => void; onMouseLeave?: () => void; className?: string; isMobile?: boolean; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; }) => {
    const isButtonClick = !!(isMobile && onClick);
    const WrapperComponent: any = isButtonClick ? 'button' : Link;
    const props = isButtonClick ? { onClick } : { href: href || '#' };

    return (
      <Button asChild size="icon" variant="ghost" className={`rounded-full text-[#7A4E3D] hover:bg-[#F8C4A4]/50 [&_svg]:h-6 [&_svg]:w-6 ${className || ''}`}>
        <WrapperComponent {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative">
          {children}
          {badgeCount !== undefined && badgeCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D97B63] text-xs font-bold text-white ring-2 ring-[#FFF8EF]">
              {badgeCount}
            </span>
          )}
        </WrapperComponent>
      </Button>
    );
  };

  const productsDropdownClasses = `
    absolute top-full right-0 mt-2 w-64 bg-[#FFF8EF] rounded-xl shadow-lg shadow-[#7A4E3D]/10 border border-[#F8C4A4]/50 z-10 origin-top
    transition-all
    ${
      isProductsDropdownOpen
        ? 'duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-100 visible translate-y-0'
        : 'duration-160 ease-in opacity-0 invisible -translate-y-[8px]'
    }
    ${isProductsDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'}
  `;

  return (
    <header 
      className={`sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg shadow-[#7A4E3D]/5' : 'shadow-none'} bg-[#FFF8EF]`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="hidden lg:flex items-center justify-between h-24">
          <nav className="flex items-center gap-x-8">
            {navLinks.filter(link => link.label !== 'تماس با ما').map((link) => (
              link.href === "/products" ? (
                <div 
                  key={link.href} 
                  className="relative" 
                  onMouseEnter={handleProductsEnter} 
                  onMouseLeave={handleProductsLeave}
                >
                  <Link href={link.href}
                    className={`relative text-base font-medium transition-colors flex items-center gap-x-1 ${ 
                      pathname.startsWith(link.href)
                        ? 'text-[#D97B63]'
                        : 'text-[#7A4E3D] hover:text-[#D97B63]'
                    }`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <div className={productsDropdownClasses}>
                    <div className="p-3">
                      <div className="font-bold text-base text-[#7A4E3D] text-right mb-2 px-2">دسته‌بندی محصولات</div>
                      <div className="grid grid-cols-1 gap-1">
                        {productCategories.map((category) => (
                          <Link key={category.href} href={category.href}
                            className={`group flex items-center justify-between px-3 py-2.5 text-right text-base font-medium transition-colors rounded-lg ${ 
                              pathname === category.href
                                ? 'text-[#D97B63] bg-[#F8C4A4]/50'
                                : 'text-[#7A4E3D] hover:text-[#D97B63] hover:bg-[#F8C4A4]/40'
                            }`}>
                              <span>{category.label}</span>
                              <ChevronLeft className="w-5 h-5 text-[#C7606D]/50 transition-transform duration-150 ease-out group-hover:-translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-[#F8C4A4]/50 p-2">
                        <Link href="/products" className="block text-center text-base font-semibold text-[#7A4E3D] hover:text-[#D97B63] transition-colors py-1.5 rounded-lg hover:bg-[#F8C4A4]/40">
                          همه محصولات
                        </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className={`relative text-base font-medium transition-colors ${ 
                    pathname === link.href
                      ? 'text-[#D97B63]'
                      : 'text-[#7A4E3D] hover:text-[#D97B63]'
                  }`}>
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D97B63] rounded-full"></span>
                  )}
                </Link>
              )
            ))}
          </nav>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" aria-label="Argan Beauty Home">
              <Image src="/images/logo/argan-beauty-logo.png" alt="Argan Beauty Logo" width={180} height={51} priority />
            </Link>
          </div>

          <div className="flex items-center gap-x-3">
            <Search className="w-64 h-11" />
            <div className="flex items-center gap-x-0.5">
              <IconWrapper href="/wishlist"><Heart /></IconWrapper>
              <div className="relative" onMouseEnter={handleMiniCartEnter} onMouseLeave={handleMiniCartLeave}>
                <IconWrapper href="/cart" badgeCount={cartItemCount}>
                  <ShoppingCart />
                </IconWrapper>
                <MiniCart open={isMiniCartOpen} />
              </div>
              <IconWrapper href="/account">
                {isAuthenticated ? (
                  <CircleUserRound />
                ) : (
                  <User />
                )}
              </IconWrapper>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col">
          <div className="flex items-center justify-between h-20">
            <IconWrapper onClick={() => setIsMenuOpen(true)} isMobile>
                <Menu />
            </IconWrapper>
            
            <Link href="/" aria-label="Argan Beauty Home">
              <Image src="/images/logo/argan-beauty-logo.png" alt="Argan Beauty Logo" width={175} height={50} priority />
            </Link>

            <div className="flex items-center">
                <IconWrapper href="/wishlist" isMobile><Heart /></IconWrapper>
                <div className="relative" ref={mobileCartRef}>
                    <IconWrapper onClick={toggleMiniCart} badgeCount={cartItemCount} isMobile>
                        <ShoppingCart />
                    </IconWrapper>
                    <MiniCart open={isMiniCartOpen} />
                </div>
            </div>
          </div>

          <div className="relative pb-4">
            <Search className="w-full h-11" />
          </div>
        </div>
      </div>
      
      <div className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#FFF8EF] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-[#F8C4A4]/50">
            <Link href="/" aria-label="Argan Beauty Home" onClick={() => setIsMenuOpen(false)}>
              <Image src="/images/logo/argan-beauty-logo.png" alt="Argan Beauty Logo" width={175} height={50} />
            </Link>
            <Button size="icon" variant="ghost" className="rounded-full text-[#7A4E3D]" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-grow p-4">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.href === "/products" ? (
                    <AccordionItem value="products" className="border-none">
                      <AccordionTrigger
                        className={`w-full flex items-center justify-between text-lg font-semibold transition-colors rounded-lg px-4 py-3 [&[data-state=open]>svg]:rotate-180 ${pathname.startsWith(link.href) ? 'bg-[#F8C4A4]/50 text-[#D97B63]' : 'text-[#7A4E3D] hover:bg-[#F8C4A4]/40'}`}>
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-1 pr-4">
                        <div className="flex flex-col gap-y-1 mt-2 border-r-2 border-[#F8C4A4]">
                          {productCategories.map((category) => (
                            <Link
                              key={category.href}
                              href={category.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block rounded-r-lg text-base font-medium transition-colors pr-4 py-2.5 ${pathname === category.href ? 'text-[#D97B63]' : 'text-[#7A4E3D] hover:text-[#D97B63] hover:bg-[#F8C4A4]/30'}`}>
                              {category.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-lg font-semibold transition-colors rounded-lg px-4 py-3 ${pathname === link.href ? 'bg-[#F8C4A4]/50 text-[#D97B63]' : 'text-[#7A4E3D] hover:bg-[#F8C4A4]/40'}`}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </Accordion>
          </nav>
          <div className="p-4 border-t border-[#F8C4A4]/50">
            <Link href="/account">
              <Button variant="outline" className="w-full border-2 border-[#D97B63] text-[#D97B63] hover:bg-[#D97B63] hover:text-white rounded-full p-6 text-lg">
                {isAuthenticated ? (
                  <>
                    <CircleUserRound className="ml-2 h-6 w-6" />
                    حساب کاربری
                  </>
                ) : (
                  <>
                    <User className="ml-2 h-6 w-6" />
                    ورود / ثبت نام
                  </>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
