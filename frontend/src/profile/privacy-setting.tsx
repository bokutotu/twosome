"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function PrivacySettings() {
  const [publicPhotos, setPublicPhotos] = useState(false);
  const [publicReviews, setPublicReviews] = useState(true);

  return (
    <Card>
      <CardHeader>公開範囲設定</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span>写真を公開</span>
          <Switch checked={publicPhotos} onCheckedChange={setPublicPhotos} />
        </div>
        <div className="flex items-center justify-between">
          <span>レビューを公開</span>
          <Switch checked={publicReviews} onCheckedChange={setPublicReviews} />
        </div>
      </CardContent>
    </Card>
  );
}
