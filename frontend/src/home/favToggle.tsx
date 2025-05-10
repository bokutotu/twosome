"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

type Props = {
  /** 店舗 ID。後で API に渡す用だがモックでは未使用 */
  id: string
  /** 初期のお気に入り状態 */
  initial?: boolean
}

/**
 * お気に入りトグル（モック版）
 * - クリックでローカル state を切り替え
 * - Sonner の toast() でフィードバック
 * - API 通信はまだ行わない
 */
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
        className="size-4 transition-colors"
        fill={fav ? "currentColor" : "none"}
      />
    </Button>
  )
}
