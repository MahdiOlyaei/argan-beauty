import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center">
      <Card className="max-w-xl w-full border-dashed bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary mb-2">بیس اولیه سایت آماده پیاده‌سازی است</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            تنظیمات زبان فارسی، فونت مناسب و جهت‌گیری کاملاً راست‌چین (RTL) با موفقیت اعمال شدند.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            هیچ دیزاین یا سکشن گرافیکی اضافی پیاده نشده است. می‌توانید با فرستادن توضیحات و عکس‌ها، بخش به بخش طراحی‌های مد نظر خود را جلو ببرید.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <span className="px-3 py-1.5 rounded-full text-xs font-medium border bg-background" style={{ borderColor: '#FFF8EF' }}>#FFF8EF</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground bg-accent">#F8C4A4</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-secondary">#D97B63</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-destructive">#C7606D</span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-primary">#7A4E3D</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
