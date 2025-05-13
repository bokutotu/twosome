"use client";
import { Button } from "@/components/ui/button";
import { UserPlus, Share2 } from "lucide-react";

export default function FriendActions() {
  return (
    <div className="flex gap-3">
      <Button>
        <UserPlus className="mr-2 h-4 w-4" /> 友達を追加
      </Button>
      <Button variant="secondary">
        <Share2 className="mr-2 h-4 w-4" /> 行きたい店を共有
      </Button>
    </div>
  );
}

