"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, restaurant: "イタリアン・トマト", rating: 4, excerpt: "本格的なトマトソースが絶品…", date: "3日前" },
  { id: 2, restaurant: "カフェ モーニング", rating: 5, excerpt: "ふわふわパンケーキが最高！", date: "1週間前" },
];

export default function ReviewHistory() {
  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <Card key={r.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">{r.restaurant}</CardTitle>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-yellow-500" : "stroke-muted-foreground"}`} />
              ))}
              <span className="text-muted-foreground text-xs">{r.date}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed line-clamp-3">{r.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
