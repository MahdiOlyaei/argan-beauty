
export default async function BrandDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-primary">محصولات برند: {slug}</h1>
      <p className="mt-4 text-muted-foreground italic">این یک صفحه پویا برای نمایش محصولات یک برند خاص است.</p>
    </div>
  );
}
