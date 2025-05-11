import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Props = { rating: number; text: string; total: number };
export default function ReviewSummary({ rating, text, total }: Props) {
  return (
    <section>
      <Card>
        <CardContent className="space-y-3 p-5">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">口コミサマリー</h2>
            <span className="flex items-center gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-yellow-400 stroke-yellow-400/80" />
              ))}
            </span>
            <span className="text-sm font-medium text-muted-foreground">({rating.toFixed(1)})</span>
          </div>
          <p className="text-sm leading-relaxed">{text}</p>
          <a href="#" className="text-sm font-medium text-primary underline">
            {total}件の口コミをすべて見る
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
