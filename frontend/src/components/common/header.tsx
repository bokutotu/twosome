import Link from "next/link"
import { Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/**
 * ページ最上部のヘッダー。
 * 背景は画面幅いっぱいに伸ばしつつ、
 * 内側のコンテンツは max-w-4xl に収めて中央寄せ。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/75 backdrop-blur">
      {/* ★ここをコンテナにする */}
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-2">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/twosome_icon.svg" alt="twosome icon" className="h-6 w-6" />
          <img
            src="/twosome_wordmark.svg"
            alt="twosome wordmark"
            className="hidden h-7 sm:block"
          />
        </Link>

        {/* 検索フォーム */}
        <form
          action="/search"
          method="GET"
          className="ml-auto flex w-full max-w-md items-center gap-2"
        >
          <Input
            name="q"
            id="q"
            placeholder="店名・URL を検索"
            className="flex-1"
            required
          />
          <Button type="submit" size="icon" variant="ghost" aria-label="検索">
            <Search className="size-5" />
          </Button>
        </form>

        {/* ユーザーアイコン（モック） */}
        <Link
          href="/profile"
          className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted/40"
          aria-label="プロフィール"
        >
          <User className="size-5 text-muted-foreground" />
        </Link>
      </div>
    </header>
  )
}
