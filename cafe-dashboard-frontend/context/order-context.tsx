"use client"

import { createContext, useState, useContext, type ReactNode } from "react"
import type { MenuItem } from "@/lib/menu-data"

type CartItem = MenuItem & {
  quantity: number
}

type Order = {
  id: string
  name: string
  phone: string
  address: string
  items: CartItem[]
  total: number
  status: "Pending" | "Completed"
}

type OrderContextType = {
  orders: Order[]
  addOrder: (order: Omit<Order, "id" | "status">) => void
  markOrderAsCompleted: (id: string) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])

  const addOrder = (newOrder: Omit<Order, "id" | "status">) => {
    setOrders((prevOrders) => [...prevOrders, { ...newOrder, id: Date.now().toString(), status: "Pending" }])
  }

  const markOrderAsCompleted = (id: string) => {
    setOrders((prevOrders) => prevOrders.map((order) => (order.id === id ? { ...order, status: "Completed" } : order)))
  }

  return <OrderContext.Provider value={{ orders, addOrder, markOrderAsCompleted }}>{children}</OrderContext.Provider>
}

export function useOrders() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrderProvider")
  }
  return context
}
