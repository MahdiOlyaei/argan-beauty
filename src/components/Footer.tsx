import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-headline text-lg font-semibold text-primary">NextStartKit</span>
            <p className="text-sm text-muted-foreground">
              A minimalist foundation for modern web applications.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NextStartKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}