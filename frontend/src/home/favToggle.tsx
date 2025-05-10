"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"          // shadcn/ui のユーティリティ

type Props = {
  id: string
  initial?: boolean
}

export default function FavoriteToggle({ id, initial = false }: Props) {
  const [fav, setFav] = useState(initial)

  const toggle = () => {
    setFav(!fav)
    toast(`${!fav ? "お気に入りに追加" : "お気に入りを解除"}しました`, {
      description: `restaurantId: ${id}`,
    })
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label="お気に入り"
      onClick={toggle}
    >
      <Heart
        /* ★ アクティブ時は text-accent で着色 */
        className={cn(
          "size-4 transition-colors",
          fav ? "text-accent" : "text-muted-foreground"
        )}
        /* ★ fill は currentColor に合わせる */
        fill={fav ? "currentColor" : "none"}
      />
    </Button>
  )
}
