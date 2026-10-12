
import { construction } from "@/app/lib/placeholder-images.json";

export default function BlogPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center text-[#7A4E3D] mb-6">بلاگ</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-lg text-gray-600">
          این صفحه در حال ساخت است. به زودی با مطالب جدید باز خواهیم گشت!
        </p>
        <img src={construction.sm} alt="Under Construction" className="mt-8 mx-auto w-1/2" />
      </div>
    </div>
  );
}
