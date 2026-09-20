export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-10 text-center">
      <div className="container mx-auto px-4">
        <span className="text-sm font-medium text-muted-foreground">بخش فوتر (آماده طراحی اختصاصی شما)</span>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
