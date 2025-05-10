import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HashtagList } from "@/components/common/hastagList"
import FavoriteToggle from "./favToggle"

export type Restaurant = {
  id: string
  name: string
  tags: string[]
  thumbnail?: string
  favorite?: boolean
}

export default function RestaurantCard({ id, name, tags, thumbnail, favorite }: Restaurant) {
  return (
    <Card className="border bg-background border-primary/20 transition-shadow hover:shadow-md">
      <CardContent className="flex items-start gap-4 p-4">
        {/* サムネイル */}
        <Link href={`/restaurants/${id}`} className="block h-14 w-14 shrink-0 overflow-hidden rounded-md bg-muted">
          {thumbnail && (
            <Image src={thumbnail} alt={name} width={56} height={56} className="h-full w-full object-cover" />
          )}
        </Link>

        {/* 本文 */}
        <div className="flex flex-1 flex-col gap-1">
          <Link href={`/restaurants/${id}`} className="line-clamp-1 text-sm font-semibold">
            {name}
          </Link>
          <HashtagList tags={tags} />
        </div>

        {/* いいね */}
        <FavoriteToggle id={id} initial={!!favorite} />
      </CardContent>
    </Card>
  )
}
