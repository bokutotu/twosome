"use client";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

type Props = { id: string; isWannaGo: boolean };
export default function ActionBar({ id, isWannaGo }: Props) {
  const [liked, setLiked] = useState(isWannaGo);
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 border-t bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl gap-3 px-4 py-3">
        <Button
          variant={liked ? "destructive" : "secondary"}
          className="flex-1 gap-2"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={clsx("size-5", liked && "fill-current")} />
          {liked ? "行きたいに追加済み" : "行きたいに追加"}
        </Button>
        <Button className="flex-1 gap-2 bg-primary">
          <Share2 className="size-5" /> 友達に共有
        </Button>
      </div>
    </div>
  );
}
