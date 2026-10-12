
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-right">
        <h3 className="text-lg font-semibold text-[#7A4E3D] truncate">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600 mr-1">({product.rating})</span>
          </div>
          <p className="text-base font-bold text-[#C7606D]">{product.price.toLocaleString('fa-IR')} تومان</p>
        </div>
      </div>
    </Link>
  );
}
