export type MenuItem = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Latte",
    price: 275,
    description: "A classic espresso drink with steamed milk and a thin layer of foam.",
    image: "/latte-art.png",
    category: "Coffee",
  },
  {
    id: "2",
    name: "Cappuccino",
    price: 250,
    description: "Equal parts espresso, steamed milk, and frothed milk.",
    image: "/frothy-cappuccino.png",
    category: "Coffee",
  },
  {
    id: "3",
    name: "Espresso",
    price: 200,
    description: "A concentrated coffee beverage brewed by forcing hot water through finely ground coffee beans.",
    image: "/espresso-shot.png",
    category: "Coffee",
  },
  {
    id: "4",
    name: "Croissant",
    price: 150,
    description: "A buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl.",
    image: "/golden-croissant.png",
    category: "Snacks",
  },
  {
    id: "5",
    name: "Muffin",
    price: 120,
    description: "A small, individual-sized, baked product. It can be sweet or savory.",
    image: "/blueberry-muffin.png",
    category: "Snacks",
  },
]
