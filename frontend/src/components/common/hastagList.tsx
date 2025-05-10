import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface HashtagListProps {
  /**
   * 表示するタグ文字列配列。
   * 先頭の # は自動で付与されるので不要です。
   */
  tags: string[]
  /** レイアウト調整用の追加クラス名 (任意) */
  className?: string
}

/**
 * ハッシュタグを横並びでレンダリングするコンポーネント。
 *
 * ```tsx
 * <HashtagList tags={['イタリアン', 'ボリューム', 'ピザ']} />
 * ```
 */
export function HashtagList({ tags, className }: HashtagListProps) {
  if (!tags?.length) return null

  return (
    <ul className={cn("flex flex-wrap gap-1", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant="secondary" className="bg-secondary/30 text-foreground"
          >
            #{tag}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
