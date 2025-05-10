import Link from 'next/link'
import { Search, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 border-b bg-background/75 px-4 py-2 backdrop-blur">
      {/* ロゴ：SVG2枚 */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/twosome_icon.svg"
          alt="twsome icon"
          className="h-6 w-6 shrink-0"
        />
        <img
          src="/twosome_wordmark.svg"
          alt="twsome wordmark"
          className="hidden h-7 sm:block"
        />
      </Link>

      {/* 検索フォーム */}
      <form action="/search" method="GET" className="ml-auto flex max-w-md flex-1 items-center gap-2">
        <Input name="q" id="q" placeholder="店名・URL を検索" className="flex-1" required />
        <Button type="submit" size="icon" variant="ghost" aria-label="検索">
          <Search className="size-5" />
        </Button>
      </form>

      {/* ユーザーアイコン（仮） */}
      <Link
        href="/profile"
        className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted/40"
        aria-label="プロフィール"
      >
        <User className="size-5 text-muted-foreground" />
      </Link> 
    </header>
  )
}
