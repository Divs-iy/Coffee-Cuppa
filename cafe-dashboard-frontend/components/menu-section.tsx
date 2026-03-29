import { MenuItemCard } from "@/components/menu-item-card"
import { type MenuItem } from "@/lib/menu-data"

type MenuSectionProps = {
  items: MenuItem[]
  onAddToCart: (item: MenuItem) => void
}

export function MenuSection({ items, onAddToCart }: MenuSectionProps) {
  const coffeeItems = items.filter((item) => item.category === "Coffee")
  const snackItems = items.filter((item) => item.category === "Snacks")
  return (
    <section id="menu" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-balance">{"Our Menu"}</h2>

        <div className="mb-12">
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-balance">{"Coffee"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-3xl font-bold mb-8 text-center text-balance">{"Snacks"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {snackItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
