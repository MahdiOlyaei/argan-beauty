
import { construction } from "@/app/lib/placeholder-images";
import Image from 'next/image';

export default function WishlistPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center text-[#7A4E3D] mb-6">لیست علاقه‌مندی‌ها</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-lg text-gray-600">
          این صفحه در حال ساخت است. به زودی با امکانات جدید باز خواهیم گشت!
        </p>
        <Image src={construction.sm} alt="Under Construction" width={500} height={300} className="mt-8 mx-auto w-1/2" />
      </div>
    </div>
  );
}
