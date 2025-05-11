
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import HeroImage from "@/restaurants/hero-image";
import DeepResearchLinks from "@/restaurants/deep-resarch-links";
import ReviewSummary from "@/restaurants/review-summary";
import ActionBar from "@/restaurants/action-bar";
import HashtagList from "@/components/common/hashtag-list";
import Header from "@/components/common/header";

// ---- mock fetch helper --------------------------------------
async function fetchRestaurant(id: string) {
  // Replace with real API fetch
  if (id !== "1") notFound();
  return {
    id,
    name: "イタリアン・トマト",
    budget: "¥¥",
    tags: ["イタリアン", "パスタ", "ピザ"],
    image: "https://source.unsplash.com/800x450?italian-pasta",
    deepLinks: [
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "Tabelog", href: "#", icon: "external-link" },
      { label: "Google Maps", href: "#", icon: "map" },
    ],
    review: {
      rating: 4.2,
      text: "本格的なイタリアン料理が楽しめる。特にトマトソースのパスタが絶品で、ワインとの相性も抜群。",
      total: 42,
    },
    isWannaGo: true,
  };
}

export default async function RestaurantDetail({ params }: { params: { id: string } }) {
  const restaurant = await fetchRestaurant(params.id);

  return (
    <>
      <Header />
      <div className="min-h-screen pb-32">
        {/* <HeroImage alt={restaurant.name} /> */}

        <main className="mx-auto w-full max-w-4xl px-4 space-y-6">
          {/* Back button & status chip */}
          <div className="mt-4 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
              <ArrowLeft className="size-4" /> 戻る
            </Link>
            <Button variant="outline" size="sm">
              {restaurant.isWannaGo ? "行きたい" : "行った"}
            </Button>
          </div>

          {/* Title ------------------------------------------------ */}
          <h1 className="text-2xl font-bold tracking-tight">{restaurant.name}</h1>
          <HashtagList tags={restaurant.tags} />
          <p className="text-sm text-muted-foreground">予算: {restaurant.budget}</p>

          {/* Deep research links ---------------------------------- */}
          <DeepResearchLinks links={restaurant.deepLinks} />

          {/* Review summary --------------------------------------- */}
          <ReviewSummary {...restaurant.review} />
        </main>

        {/* ACTION BAR (sticky bottom) --------------------------- */}
        <ActionBar id={restaurant.id} isWannaGo={restaurant.isWannaGo} />
      </div>
    </>
  );
}
