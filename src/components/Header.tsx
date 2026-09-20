import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag, User, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-reverse space-x-2">
            <span className="font-headline text-xl font-bold tracking-tight text-primary">
              فروشگاه آنلاین
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              محصولات
            </Link>
            <Link href="/categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              دسته‌بندی‌ها
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              درباره ما
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">۰</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span>ورود / ثبت‌نام</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
