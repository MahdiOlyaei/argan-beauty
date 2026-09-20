
export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-primary">جزئیات محصول</h1>
      <p className="mt-4 text-muted-foreground">شناسه محصول: {id}</p>
      <div className="mt-10 p-8 border-2 border-dashed border-muted rounded-lg">
        <p className="text-muted-foreground">محل قرارگیری گالری تصاویر، ویژگی‌ها و دکمه خرید در مراحل بعدی</p>
      </div>
    </div>
  );
}
