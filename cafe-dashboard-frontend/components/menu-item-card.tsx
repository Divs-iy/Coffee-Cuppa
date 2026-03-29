"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { MenuItem } from "@/lib/menu-data"

type MenuItemCardProps = {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <CardTitle className="font-serif text-2xl font-bold text-balance">{item.name}</CardTitle>
        <p className="text-muted-foreground text-pretty">{item.description}</p>
        <p className="text-primary font-semibold text-xl">
          {"₹"}
          {item.price}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gold text-espresso hover:bg-gold/90 transition-colors duration-300"
          onClick={() => onAddToCart(item)}
        >
          {"Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
