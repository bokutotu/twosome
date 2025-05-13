"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blocked = [
  { id: "user123", nickname: "Troll" },
];

export default function BlockMuteManager() {
  return (
    <Card>
      <CardHeader>ブロック / ミュート管理</CardHeader>
      <CardContent className="space-y-2">
        {blocked.length === 0 && <p className="text-sm text-muted-foreground">現在ブロックしているユーザーはいません。</p>}
        {blocked.map((u) => (
          <div key={u.id} className="flex items-center justify-between text-sm">
            <span>{u.nickname} (@{u.id})</span>
            <Button size="sm" variant="destructive">
              解除
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
