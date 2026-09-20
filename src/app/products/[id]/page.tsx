export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-primary">جزئیات محصول</h1>
      <p className="mt-4 text-muted-foreground">شناسه محصول: {params.id}</p>
    </div>
  );
}
