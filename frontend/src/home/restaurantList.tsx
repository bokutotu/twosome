import RestaurantCard, { Restaurant } from "./restaurantCard"

export default function RestaurantList({ restaurants }: { restaurants: Restaurant[] }) {
  if (!restaurants.length)
    return <p className="rounded-md bg-muted/30 p-8 text-center text-muted-foreground">お店がありません</p>

  return (
    <ul className="flex flex-col gap-3">
      {restaurants.map((r) => (
        <li key={r.id}>
          <RestaurantCard {...r} />
        </li>
      ))}
    </ul>
  )
}
