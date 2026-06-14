import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layout, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full bg-accent/30 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-accent/50 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            Now live: The ultimate minimal starter
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Build your next big idea <br />
            <span className="text-primary">with NextStartKit</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            A clean, minimal, and performant foundation for your web projects. 
            Built with Next.js 15, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" className="rounded-full px-8 gap-2">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-background transition-shadow hover:shadow-lg">
              <div className="p-3 rounded-lg bg-accent/20 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-xl font-bold">Fast Performance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Optimized for speed with Next.js App Router and server-side rendering.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-background transition-shadow hover:shadow-lg">
              <div className="p-3 rounded-lg bg-accent/20 text-primary">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-xl font-bold">TypeScript First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full type safety across your entire application for better developer experience.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border bg-background transition-shadow hover:shadow-lg">
              <div className="p-3 rounded-lg bg-accent/20 text-primary">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-xl font-bold">Utility-First UI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rapidly style your components using Tailwind CSS utility classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-xl">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
                Ready to transform your development?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 mx-auto max-w-lg">
                Download the starter kit today and start building the future of the web.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-10">
                Download Now
              </Button>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}