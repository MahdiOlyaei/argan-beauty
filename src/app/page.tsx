
import { Hero } from '@/components/ecommerce/Hero';
import { CategorySection } from '@/components/ecommerce/CategorySection';
import { ProductSection } from '@/components/ecommerce/ProductSection';
import SpecialOfferSection from '@/components/ecommerce/SpecialOfferSection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      
      <CategorySection />
      
      <ProductSection />

      <SpecialOfferSection />
    </div>
  );
}
