import Link   from "next/link"
import { Search, User } from "lucide-react"
import { Input }  from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn }     from "@/lib/utils"        // 既に入っていれば省略可


export default function Header() {
  return (
    <header
      /* 背景は半透明・ボーダーは薄い */
      className="sticky top-0 z-30 border-b border-border/60 bg-background backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-2">
        {/* --------------- Logo --------------- */}
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Home">
          <img src="/twosome_icon.svg" alt="twosome icon" className="w-13" />
          <img
            src="/twosome_wordmark.svg"
            alt="twosome wordmark"
            className="hidden h-7 sm:block"
          />
        </Link>

        {/* --------------- Search --------------- */}
        <form
          action="/search"
          method="GET"
          className="ml-auto flex w-full max-w-md items-center gap-2"
        >
          <Input
            name="q"
            id="q"
            placeholder="店名・URL を検索"
            className={cn(
              "flex-1",
              /* フォーカスリングを brand 色で統一 */
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
            )}
            required
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            aria-label="検索"
            className="text-muted-foreground hover:text-primary"
          >
            <Search className="size-5" />
          </Button>
        </form>

        {/* --------------- Profile --------------- */}
        <Link
          href="/profile"
          aria-label="プロフィール"
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted/40 text-muted-foreground transition-colors hover:bg-muted/60"
        >
          <User className="size-5" />
        </Link>
      </div>
    </header>
  )
}
