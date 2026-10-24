import { Hero as HeroSection } from "@/components/ecommerce/Hero";
import { CategorySection as Categories } from "@/components/ecommerce/CategorySection";
import { ProductSection } from "@/components/ecommerce/ProductSection";
import SpecialOfferSection from "@/components/ecommerce/SpecialOfferSection";
import WhyArganSection from "@/components/ecommerce/WhyArganSection";

export default function Home() {
  return (
    <main className="bg-[#FFF8EF]">
      <HeroSection />
      <Categories />
      <ProductSection />
      <SpecialOfferSection />
      <WhyArganSection />
    </main>
  );
}
