import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center">
      <Card className="max-w-xl w-full border-dashed bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary mb-2">سیستم رنگی پروژه آماده شد</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            تمامی متغیرهای رنگی بر اساس پالت ۵ تایی شما (Design Tokens) تنظیم شدند.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            هیچ دیزاین یا سکشن گرافیکی اضافی پیاده نشده است. آماده پیاده‌سازی اولین سکشن با دیزاین اختصاصی شما هستیم.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-background border shadow-sm"></div>
              <span className="text-[10px] font-mono">#FFF8EF</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-accent"></div>
              <span className="text-[10px] font-mono">#F8C4A4</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-secondary"></div>
              <span className="text-[10px] font-mono">#D97B63</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-destructive"></div>
              <span className="text-[10px] font-mono">#C7606D</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-primary"></div>
              <span className="text-[10px] font-mono">#7A4E3D</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
