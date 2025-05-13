"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Dummy data
const activities = [
  {
    id: 1,
    text: "🍜 ラーメン一番 をクリップしました",
    date: "2時間前",
  },
  {
    id: 2,
    text: "📸 写真を3枚追加しました",
    date: "1日前",
  },
  {
    id: 3,
    text: "⭐️ イタリアン・トマト にレビューを投稿しました (4★)",
    date: "3日前",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <CardContent>
        <ScrollArea className="h-48 pr-4">
          <ul className="space-y-2 text-sm">
            {activities.map((a) => (
              <li key={a.id} className="flex justify-between">
                <span>{a.text}</span>
                <span className="text-muted-foreground">{a.date}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
