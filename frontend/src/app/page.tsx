import Header from "@/components/common/header"
import { Toaster } from "@/components/ui/sonner"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import RestaurantList from "@/home/restaurantList"
import { Suspense } from "react"

export default async function Home() {
  const wishlist = await fetchRestaurants("wishlist")
  const visited  = await fetchRestaurants("visited")

  return (
    <>
      {/* ★ コンテナの外に出した */}
      <Header />

      {/* ---------- メイン ---------- */}
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 pt-4">
        {/* 行きたい／行ったタブ */}
        <Tabs defaultValue="wishlist" className="w-full">
          <TabsList className="mb-4 flex w-full overflow-hidden rounded-lg bg-muted p-1">
            <TabsTrigger value="wishlist" className="flex-1">
              行きたい
            </TabsTrigger>
            <TabsTrigger value="visited" className="flex-1">
              行った
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wishlist">
            <Suspense fallback="loading...">
              <RestaurantList restaurants={wishlist} />
            </Suspense>
          </TabsContent>

          <TabsContent value="visited">
            <Suspense fallback="loading...">
              <RestaurantList restaurants={visited} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </main>

      {/* トースト */}
      <Toaster richColors closeButton />
    </>
  )
}

async function fetchRestaurants(tab: "wishlist" | "visited") {
  return [
    { id: "1", name: "イタリアン・トマト", tags: ["イタリアン", "ボリューム", "ピザ"], favorite: true },
    { id: "2", name: "カフェ モーニング", tags: ["カフェ", "朝食", "パンケーキ"] },
    { id: "3", name: "ラーメン一番",       tags: ["ラーメン", "中華麺", "餃子"] },
  ]
}
