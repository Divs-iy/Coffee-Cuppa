"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { CartSidebar } from "@/components/cart-sidebar"
import { useEffect, useState } from "react"
import type { MenuItem } from "@/lib/menu-data"
import { useOrders } from "@/context/order-context" // Import useOrders hook

type CartItem = MenuItem & {//
  quantity: number
}

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const { addOrder } = useOrders() // Use addOrder from OrderContext
  useEffect(() => {
    fetch("http://localhost:3001/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Error fetching menu:", err))
  }, [])

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)).filter((item) => item.quantity > 0),
    )
  }

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handlePlaceOrder = async (order: {
  name: string
  phone: string
  address: string
  items: CartItem[]
  total: number
}) => {
  try {
    const res = await fetch("http://localhost:3001/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const data = await res.json();
    console.log("Response: ", data);

    addOrder(order);
    setCartItems([]);
    alert("Order placed successfully!");
  } catch (err) {
    console.error("Order failed:", err);
  }
};

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuSection 
  items={menuItems} 
  onAddToCart={handleAddToCart} 
/>
      <CartSidebar
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onPlaceOrder={handlePlaceOrder}
      />
    </main>
  );
}

