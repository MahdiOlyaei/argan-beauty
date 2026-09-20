
import { Hero } from '@/components/ecommerce/Hero';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Temporary spacing to show main content area */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-primary">سایر بخش‌های صفحه اصلی</h2>
        <p className="mt-4 text-muted-foreground italic">به زودی سکشن‌های بعدی طبق طراحی شما اضافه خواهند شد.</p>
      </div>
    </div>
  );
}
